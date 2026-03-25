import './App.css';
import { useState } from 'react';
import Card from './Card';
import QuickNote from './QuickNote';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import Clock from './Clock';

function App() {
  const [count, setCount] = useState(0);

  const projects = [
    { title: "Proiect 1", description: "Pagina personala" },
    { title: "Proiect 2", description: "Calculator buget" },
    { title: "Proiect 3", description: "Dashboard React" },
    { title: "Proiect 4", description: "Aplicatie de To-Do" },
    { title: "Proiect 5", description: "Magazin online" }
  ];

  return (
    <div>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Trimbitas Stefan Ioan</p>
        
        <h2>Facultatea de inginerie electrica si stiinta calculatoarelor</h2>
        <p>Student la UNITBV</p>
        
        <h3>Despre mine</h3>
        <p>Salut! Sunt un student pasionat de tehnologie web și programare.</p>
        <p><strong>Hobby-uri:</strong> tehnologie, muzica, ciclism.</p>
        
        <p>Ai apasat de {count} ori</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <Clock />

      <h3>Proiecte</h3>
      <div className="card-container">
        {projects.map(function(item, index) {
          return <Card key={index} title={item.title} description={item.description} />;
        })}
      </div>

      <QuickNote />
      <TodoList />
      <ContactForm />
    </div>
  );
}

export default App;