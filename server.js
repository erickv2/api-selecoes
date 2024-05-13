import app from './src/app.js'

//definir a porta
const port = 3000

// escutar a porta 3000

app.listen(port, () => {
    console.log(`Servidor rodando com sucesso no endereço http://localhost:${port}`)
})