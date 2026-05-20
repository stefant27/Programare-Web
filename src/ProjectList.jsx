import { useState, useEffect } from 'react';
import Card from './Card';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const [title, setTitle] = useState('');
  const [tech, setTech] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editTech, setEditTech] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Eroare la incarcarea datelor');
        setLoading(false);
      });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, tech: tech })
      });
      const newProject = await response.json();
      setProjects([...projects, newProject]);
      setTitle('');
      setTech('');
    } catch (err) {
      console.error('Eroare:', err);
    }
  }

  async function handleDelete(id) {
    try {
      await fetch('http://localhost:3000/api/projects/' + id, {
        method: 'DELETE'
      });
      setProjects(projects.filter(p => p._id !== id));
    } catch (err) {
      console.error('Eroare:', err);
    }
  }

  async function handleToggle(id, currentDone) {
    try {
      const response = await fetch('http://localhost:3000/api/projects/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: !currentDone })
      });
      const updatedProject = await response.json();
      setProjects(projects.map(p => p._id === id ? updatedProject : p));
    } catch (err) {
      console.error('Eroare:', err);
    }
  }

  async function handleSaveEdit(id) {
    try {
      const response = await fetch('http://localhost:3000/api/projects/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editTitle, tech: editTech })
      });
      const updatedProject = await response.json();
      setProjects(projects.map(p => p._id === id ? updatedProject : p));
      setEditingId(null);
    } catch (err) {
      console.error('Eroare:', err);
    }
  }

  if (loading) return <p>Se incarca...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Proiecte</h3>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Titlu proiect" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Tehnologii" 
          value={tech} 
          onChange={(e) => setTech(e.target.value)} 
        />
        <button type="submit">Adauga</button>
      </form>

      <input 
        type="text" 
        placeholder="Cauta dupa titlu..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <div className="card-container">
        {projects
          .filter(project => project.title.toLowerCase().includes(search.toLowerCase()))
          .map(project => (
            <div key={project._id}>
              {editingId === project._id ? (
                <div>
                  <input 
                    type="text" 
                    value={editTitle} 
                    onChange={(e) => setEditTitle(e.target.value)} 
                  />
                  <input 
                    type="text" 
                    value={editTech} 
                    onChange={(e) => setEditTech(e.target.value)} 
                  />
                  <button onClick={() => handleSaveEdit(project._id)}>Salveaza</button>
                  <button onClick={() => setEditingId(null)}>Anuleaza</button>
                </div>
              ) : (
                <div>
                  <Card title={project.title} description={project.tech} />
                  <p>Status: {project.done ? 'Finalizat' : 'In lucru'}</p>
                  <button onClick={() => {
                    setEditingId(project._id);
                    setEditTitle(project.title);
                    setEditTech(project.tech);
                  }}>Editeaza</button>
                  <button onClick={() => handleToggle(project._id, project.done)}>
                    Schimba Status
                  </button>
                  <button onClick={() => handleDelete(project._id)}>Sterge</button>
                </div>
              )}
            </div>
          ))}
      </div>
      <div>
        <p>Total proiecte: {projects.length}</p>
        <p>Finalizate: {projects.filter(p => p.done).length}</p>
        <p>In lucru: {projects.filter(p => !p.done).length}</p>
      </div>
    </div>
  );
}

export default ProjectList;