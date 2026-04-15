import { useState, useEffect } from 'react';
import Card from './Card';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data.projects);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Se incarca...</p>;
  }

  return (
    <div>
      <h3>Proiecte</h3>
      <div className="card-container">
        {projects.map(project => (
          <Card key={project.id} title={project.title} description={project.tech} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;