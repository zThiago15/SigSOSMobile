import { Router } from "express";


const solicitacaoRouter = Router();

solicitacaoRouter.get('/test', (req, res) => {
    return res.status(201).send('solicitacao route')
})

export default solicitacaoRouter;