import { useState, useEffect } from 'react';

function Home() {
  const [stats, setStats] = useState({ total: 0, done: 0, inProgress: 0 });

  useEffect(() => {
    fetch('http://localhost:3000/api/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-header">
      <h1>Trimbitas Stefan Ioan</h1>
      <div>
        <p>Total proiecte: {stats.total}</p>
        <p>Finalizate: {stats.done}</p>
        <p>In lucru: {stats.inProgress}</p>
      </div>
    </div>
  );
}

export default Home;