import solicitacoes from '../data/solicitacoes.json' with { type: 'json' };
import { allSolicitacoesService, createService, modifyService, cancelService } from '../services/solicitacaoService.mjs'



const allSolicitacoes = async (req, res) => {
    const data = await allSolicitacoesService();

    res.status(200).json({ data });
}

const create = async (req, res) => {

    await createService();

    res.status(201).send("Solicitação criada com sucesso!");
}

const modify = (req, res) => {
    const data = req.body;

    res.status(200).send("Solicitação editada com sucesso!")
}

const atender = (req, res) => {
    const data = req.body;

    res.status(201).send("Solicitação atendida")
}

const encerrar = (req, res) => {
    const data = req.body;

    res.status(201).send("Solicitação atendida")
}

const cancel = async (req, res) => {
    const data = req.body;
    await cancelService(data);
    
    res.status(204);
}


export { allSolicitacoes, create, atender, modify, cancel };