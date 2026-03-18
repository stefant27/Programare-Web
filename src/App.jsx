import Card from './Card';

function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Trimbitas Stefan Ioan</p>
      
      <h2>Facultatea de inginerie electrica si stiinta calculatoarelor</h2>
      <p>Student la UNITBV</p>
      
      <h3>Despre mine</h3>
      <p>Salut! Sunt un student pasionat de tehnologie web și programare.</p>
      <p><strong>Hobby-uri:</strong> tehnologie, muzica, ciclism.</p>
      
      <Card title="Proiect 1" description="Pagina personala cu HTML si CSS" />
      <Card title="Proiect 2" description="Pagina interactiva cu JavaScript" />
      <Card title="Proiect 3" description="Dashboard cu React" />
    </div>
  );
}

export default App;