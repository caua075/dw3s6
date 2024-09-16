const express = require('express');
const router = require('./routes/routes');

const app = express();
const port = 5000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware para as rotas
app.use(router);



// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});