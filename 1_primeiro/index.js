const express = require('express')
require('dotenv').config();

const app = express()
const port = process.env.PORT || 40000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/status', (req, res) => {
    res.send({
        appName: process.env.APP_NAME,
        port: process.env.PORT
    })
})

app.listen(port, () => {
    console.log("Executando a aplicação:" , process.env.APP_NAME);
    console.log(`Example app listening at http://localhost:${port}`)
})