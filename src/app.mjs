import express from 'express';
import dotenv from 'dotenv';
import solicitacaoRouter from './routes/solicitacaoController.mjs';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors);
app.use(solicitacaoRouter)

app.get('/', (req, res) => {
    return res.status(200).send("Test route");
});

export default app;