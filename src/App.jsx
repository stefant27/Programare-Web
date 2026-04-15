import './App.css';
import { useState } from 'react';
import QuickNote from './QuickNote';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import Clock from './Clock';
import ProjectList from './ProjectList';
import UsersList from './UsersList';

function App() {
  const [count, setCount] = useState(0);

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
      
      <ProjectList />
      
      <UsersList />

      <QuickNote />
      <TodoList />
      <ContactForm />
    </div>
  );
}

export default App;