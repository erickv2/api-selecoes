import express from "express";

const app = express();

//indicar para o express ler body com o json
app.use(express.json())

//mock de seleções
const selecoes = [
  {
    id: 1,
    selecao: "Brasil",
    grupo: "G",
  },
  {
    id: 2,
    selecao: "Suíça",
    grupo: "G"
  },
  {
    id: 3,
    selecao: "Sérvia",
    grupo: "G"
  }, 
  {
    id: 4,
    selecao: "Camarões",
    grupo: "G"
  }
];

//buscar seleção por ID

function buscarSelecaoPorId(id) {
    return selecoes.filter( selecao => selecao.id == id )
}


//pegar a posição ou index

function buscarIndexSelecao(id) {
    return selecoes.findIndex( selecao => selecao.id == id )
}

// criar rota padrão ou raiz

app.get('/', (req, res) => {
  res.send("Olá mundo!");
});

// rotas de leitura

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes);
});

app.get('/selecoes/:id', (req, res) => {
    let index = req.params.id
    res.json(buscarSelecaoPorId(index))
})

//rota de criação

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send("Seleção cadastrada com sucesso!")
})

//rota de atualização
app.put('/selecoes/:id', (req, res) => {
    let id = req.params.id
    let index = buscarIndexSelecao(id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})

//rota de deleção

app.delete('/selecoes/:id', (req, res) => {
    let id = req.params.id
    let index = buscarIndexSelecao(id)
    selecoes.splice(index, 1)
    res.send(`Seleção com id ${id} removida com sucesso!`)
})

export default app;
