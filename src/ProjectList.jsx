import { useState, useEffect } from 'react';
import Card from './Card';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch(() => {
        setError('Eroare la incarcarea datelor');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Se incarca...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Proiecte</h3>
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
            <Card key={project.id} title={project.title} description={project.tech} />
          ))}
      </div>
    </div>
  );
}

export default ProjectList;