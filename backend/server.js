const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json()); 

mongoose.connect('mongodb+srv://oea:1csFkn5qUsl1rqTu@cameras.1t4bhkb.mongodb.net/?retryWrites=true&w=majority&appName=cameras', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão no MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB com sucesso');
});

const visitanteSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  nome: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
  telefone: { type: String, required: true },
  dataHora: { type: String },
});

const Visitante = mongoose.model('Visitante', visitanteSchema);

const getNextId = async () => {
  const lastVisitor = await Visitante.findOne().sort({ id: -1 });
  return lastVisitor ? lastVisitor.id + 1 : 1;
};

// Endpoint para cadastro de visitantes
app.post('/cadastro', async (req, res) => {
  try {
    const { nome, dataNascimento, telefone } = req.body;

    const id = await getNextId();
    const dataHora = new Date().toLocaleString(); 
    const novoVisitante = new Visitante({ id, nome, dataNascimento, telefone, dataHora });

    await novoVisitante.save();
    res.status(200).json({ message: 'Cadastro salvo com sucesso!', visitante: novoVisitante });
  } catch (error) {
    console.error('Erro ao salvar o cadastro:', error);
    res.status(500).json({ message: 'Erro ao salvar o cadastro.' });
  }
});

// Endpoint para ver visitantes
app.get('/ver-visitantes', async (req, res) => {
  try {
    const visitantes = await Visitante.find(); 
    if (!visitantes.length) {
      return res.status(404).json({ message: 'Nenhum visitante encontrado.' });
    }

    const visitantesComDataFormatada = visitantes.map(visitante => {
      return {
        ...visitante._doc,
        dataNascimento: new Date(visitante.dataNascimento).toLocaleDateString(), 
      };
    });

    res.json(visitantesComDataFormatada); 
  } catch (error) {
    console.error('Erro ao buscar os visitantes:', error);
    res.status(500).json({ message: 'Erro ao buscar os visitantes.' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
