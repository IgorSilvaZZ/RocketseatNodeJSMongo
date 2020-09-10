const  express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');



const app = express();

app.use(cors());

//Enviar dados para nossa aplicação via JSON
app.use(express.json());

//Inciando o Banco
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true});

requireDir('./src/models');

/* const Product = mongoose.model('Product'); */

//Rotas
app.use('/api', require('./src/routes'));


app.listen(3001)
