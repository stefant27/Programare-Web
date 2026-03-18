import Card from './Card';

function App() {
  const projects = [
    { title: "Proiect 1", description: "Pagina personala" },
    { title: "Proiect 2", description: "Calculator buget" },
    { title: "Proiect 3", description: "Dashboard React" },
    { title: "Proiect 4", description: "Aplicatie optimizare" },
    { title: "Proiect 5", description: "Magazin online" }
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Trimbitas Stefan Ioan</p>
      
      <h2>Facultatea de inginerie electrica si stiinta calculatoarelor</h2>
      <p>Student la UNITBV</p>
      
      <h3>Despre mine</h3>
      <p>Salut! Sunt un student pasionat de tehnologie web și programare.</p>
      <p><strong>Hobby-uri:</strong> tehnologie, muzica, ciclism.</p>
      
      {projects.map(function(item, index) {
        return <Card key={index} title={item.title} description={item.description} />;
      })}
    </div>
  );
}

export default App;