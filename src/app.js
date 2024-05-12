const express = require('express')

const app = express()

const port = 3000

// criar rota padrão ou raiz

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

// escutar a porta 3000

app.listen(port, () => {
    console.log(`Servidor rodando com sucesso no endereço http://localhost:${port}`)
})