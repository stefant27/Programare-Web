/* eslint-env node */
const express = require('express');
const app = express();
const PORT = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dashboard')
  .then(function() {
    console.log('Conectat la MongoDB!');
  })
  .catch(function(err) {
    console.error('Eroare conectare MongoDB:', err);
  });

app.use(express.json());

app.get('/', function(req, res) {
  res.json({ message: 'Serverul functioneaza!' });
});

const projects = [
  { id: 1, title: "Pagina Personala", tech: "HTML, CSS", done: true },
  { id: 2, title: "Calculator Buget", tech: "JS", done: true },
  { id: 3, title: "Dashboard React", tech: "React", done: false },
  { id: 4, title: "API Meteo", tech: "React, API", done: false },
];

app.get('/api/projects', function(req, res) {
  res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: 'Not found' });
  res.json(project);
});

app.post('/api/projects', function(req, res) {
  const newProject = {
    id: projects.length + 1,
    title: req.body.title,
    tech: req.body.tech,
    done: req.body.done || false,
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.put('/api/projects/:id', function(req, res) {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: 'Not found' });

  if (req.body.title !== undefined) project.title = req.body.title;
  if (req.body.tech !== undefined) project.tech = req.body.tech;
  if (req.body.done !== undefined) project.done = req.body.done;

  res.json(project);
});

app.delete('/api/projects/:id', function(req, res) {
  const id = parseInt(req.params.id);
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  projects.splice(index, 1);
  res.json({ message: 'Deleted' });
});

app.get('/api/stats', (req, res) => {
  res.json({
    total: projects.length,
    finalizate: projects.filter(p => p.done).length,
    inLucru: projects.filter(p => !p.done).length
  });
});

app.listen(PORT, function() {
  console.log('Server pornit pe http://localhost:' + PORT);
});