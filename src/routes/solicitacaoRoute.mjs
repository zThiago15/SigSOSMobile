import { Router } from "express";
import { allSolicitacoes, create, modify, cancel } from "../controllers/solicitacaoController.mjs";
import { validateSolicitacao } from "../middlewares/solicitacaoMiddleware.mjs";


const solicitacaoRouter = Router();

solicitacaoRouter.get('/solicitacoes', allSolicitacoes);
solicitacaoRouter.post('/solicitacao', validateSolicitacao, create);

solicitacaoRouter.put('/solicitacao', modify);
solicitacaoRouter.put('/atender', modify);
solicitacaoRouter.put('/encerrar', modify);
solicitacaoRouter.delete('/cancelar', cancel)

export default solicitacaoRouter;