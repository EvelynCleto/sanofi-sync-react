const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Dados em memória para exemplo
let availableCourses = [];
let completedCourses = [];
let pontos = [];
let contatos = [];

// Middleware
app.use(cors());
app.use(express.json());

// Rota para obter cursos disponíveis e cursos concluídos
app.get('/api/courses', (req, res) => {
  res.json({ availableCourses, completedCourses });
});

// Rota para adicionar um novo curso
app.post('/api/courses', (req, res) => {
  const { curso } = req.body;
  if (!curso) {
    return res.status(400).json({ error: 'Nome do curso é obrigatório' });
  }
  availableCourses.push(curso);
  res.json({ message: 'Curso adicionado com sucesso!', availableCourses });
});

// Rota para concluir um curso
app.post('/api/concluirCurso', (req, res) => {
  const { curso } = req.body;
  if (!curso || !availableCourses.includes(curso)) {
    return res.status(400).json({ error: 'Curso inválido ou não encontrado' });
  }

  // Remove o curso dos disponíveis e adiciona aos concluídos
  availableCourses = availableCourses.filter(c => c !== curso);
  completedCourses.push(curso);
  res.json({ message: 'Curso concluído com sucesso!', completedCourses });
});

// Rota para registrar ponto
app.post('/api/pontos', (req, res) => {
  const { date, time } = req.body;
  if (!date || !time) {
    return res.status(400).json({ error: 'Data e hora são obrigatórios para registrar o ponto' });
  }
  pontos.push({ date, time });
  res.json({ message: 'Ponto registrado com sucesso!', pontos });
});

// Rota para listar todos os pontos registrados
app.get('/api/pontos', (req, res) => {
  res.json({ pontos });
});

// Rota para enviar mensagem de contato
app.post('/api/contato', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nome, email e mensagem são obrigatórios' });
  }
  contatos.push({ name, email, message });
  res.json({ message: 'Mensagem de contato enviada com sucesso!', contatos });
});

// Rota para listar todas as mensagens de contato
app.get('/api/contato', (req, res) => {
  res.json({ contatos });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
