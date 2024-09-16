const express = require("express");
const router = require("./routes/routes");

const app = express();
const port = 4000;
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});