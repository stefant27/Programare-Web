import { useState, useEffect } from 'react';
import Card from './Card';

const API = 'https://programare-web.onrender.com';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const [title, setTitle] = useState('');
  const [tech, setTech] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editTech, setEditTech] = useState('');

  useEffect(() => {
    fetch(API + '/api/projects')
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
      const response = await fetch(API + '/api/projects', {
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
    if (window.confirm('Sigur doriti sa stergeti acest proiect?')) {
      try {
        await fetch(API + '/api/projects/' + id, {
          method: 'DELETE'
        });
        setProjects(projects.filter(p => p._id !== id));
      } catch (err) {
        console.error('Eroare:', err);
      }
    }
  }

  async function handleToggle(id, currentDone) {
    try {
      const response = await fetch(API + '/api/projects/' + id, {
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
      const response = await fetch(API + '/api/projects/' + id, {
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

  const filteredAndSortedProjects = projects
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter(p => {
      if (statusFilter === 'done') return p.done;
      if (statusFilter === 'working') return !p.done;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return b._id.localeCompare(a._id);
    });

  return (
    <div className="project-list">
      <h3>Proiecte</h3>

      <form className="add-project-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Titlu proiect" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required
        />
        <input 
          type="text" 
          placeholder="Tehnologii" 
          value={tech} 
          onChange={(e) => setTech(e.target.value)} 
          required
        />
        <button type="submit" className="btn-add">Adauga Proiect</button>
      </form>

      <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem', marginBottom: '1rem' }}>
        <input 
          type="text" 
          placeholder="Cauta dupa titlu..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          style={{ margin: 0, flex: 1 }}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
          <option value="all">Toate</option>
          <option value="done">Finalizate</option>
          <option value="working">În lucru</option>
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
          <option value="date">Sortare după dată</option>
          <option value="title">Sortare după titlu</option>
        </select>
      </div>

      <div className="card-container">
        {filteredAndSortedProjects.map(project => (
          <div key={project._id} className={`project-card ${project.done ? 'status-done' : 'status-working'}`}>
            {editingId === project._id ? (
              <div className="edit-form">
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
                <div className="action-buttons">
                  <button className="btn-save" onClick={() => handleSaveEdit(project._id)}>Salveaza</button>
                  <button className="btn-cancel" onClick={() => setEditingId(null)}>Anuleaza</button>
                </div>
              </div>
            ) : (
              <>
                <Card title={project.title} description={project.tech} />
                <p className="status-text">
                  Status: <strong>{project.done ? 'Finalizat' : 'In lucru'}</strong>
                </p>
                <div className="action-buttons">
                  <button className="btn-edit" onClick={() => {
                    setEditingId(project._id);
                    setEditTitle(project.title);
                    setEditTech(project.tech);
                  }}>Editeaza</button>
                  <button className="btn-toggle" onClick={() => handleToggle(project._id, project.done)}>
                    {project.done ? 'Marcheaza In Lucru' : 'Finalizeaza'}
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(project._id)}>Sterge</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="stats-container">
        <p>Total proiecte: {projects.length}</p>
        <p>Finalizate: {projects.filter(p => p.done).length}</p>
        <p>In lucru: {projects.filter(p => !p.done).length}</p>
      </div>
    </div>
  );
}

export default ProjectList;