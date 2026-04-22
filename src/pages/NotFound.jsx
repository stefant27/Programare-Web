import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="card">
      <h2>404 — Pagina nu există</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;