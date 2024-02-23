import { Router } from "express";
import { allSolicitacoes, create } from "../controllers/solicitacaoController.mjs";
import { validateSolicitacao } from "../middlewares/solicitacaoMiddleware.mjs";


const solicitacaoRouter = Router();

solicitacaoRouter.get('/solicitacoes', validateSolicitacao, allSolicitacoes);
solicitacaoRouter.post('/solicitacao', create);

export default solicitacaoRouter;