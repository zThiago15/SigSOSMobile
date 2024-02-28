import express from 'express';
import dotenv from 'dotenv';
import solicitacaoRouter from '../routes/solicitacaoRoute.mjs';
import cors from 'cors';
import errorMiddleware from '../middlewares/errorMiddleware.mjs';
import 'express-async-errors';
import 'supertest';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(solicitacaoRouter)

app.use(errorMiddleware);

app.get('/', (req, res) => {
    return res.status(200).json({ "message": "test route" });
});

export default app;