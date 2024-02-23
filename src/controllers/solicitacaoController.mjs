import solicitacoes from '../data/solicitacoes.json' with { type: 'json' };

const allSolicitacoes = (req, res) => {
    res.status(200).json(solicitacoes);
}

// data
const solicitacoesData = [];

const create = (req, res) => {
    solicitacoesData.push(req.body);

    res.status(201).send("Solicitação criada com sucesso!");
}

const atender = (req, res) => {
    
}

const encerrar = (req, res) => {
    
}

export { allSolicitacoes, create, atender };