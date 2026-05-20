// src/Card.jsx
function Card(props) {
  return (
    <div className="card-content">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;