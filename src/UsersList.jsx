import { useState, useEffect } from 'react';
import Card from './Card';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
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
      <h3>Lista Utilizatori API</h3>
      <div className="card-container">
        {users.map(user => (
          <Card key={user.id} title={user.name} description={user.email} />
        ))}
      </div>
    </div>
  );
}

export default UsersList;