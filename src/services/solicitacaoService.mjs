import { Prisma, PrismaClient } from "@prisma/client";
import data from '../data/solicitacoes.json' assert { type: "json" };
import { json } from "express";

const solicitacoesData = data.solicitacoes.data;
const prisma = new PrismaClient();

const allSolicitacoesService = async () => {
    let solicitacoes;
    try {
        solicitacoes = await prisma.solicitacao.findMany();
    } catch(err) {
        console.log(err);
    }

    return solicitacoes || solicitacoesData;
}

const createService = async (data) => {
    
    // database
    try {
        await prisma.solicitacao.create({ data });
    } catch (err) {
        console.log(err);
    }
    
    // local memory
    solicitacoesData.push(data);

    return solicitacoesData;
}

const modifyService = async (data) => {
    
    // database
    try {
        await prisma.solicitacao.update({
            data,
            where: { 
                cadastrante: data.cadastrante,
                equipamento: data.equipamento,
                problema: data.problema
            }
        })
    } catch(err) {
        console.error(err);
    }

    // local memory
    solicitacoesData.forEach((item, index) => {
        if (item.problema == data.problema) {
            solicitacoesData[index] = data;
        }
    });

    return
}

const cancelService = async (data) => {
   
    try {
        await prisma.solicitacao.delete({
            where: {
                ...data
            }
        });

    } catch(err) {
        console.error(err);
    }

    // local memory
    solicitacoesData.forEach((item, index) => {
        if (item.problema == data.problema) {
            solicitacoesData.splice(index, 1); // indice do item a ser removido e a quantidade a partir dele.
        }
    });

    return
}

/*
const atender = (req, res) => {
    const data = req.body;

    return;
}

const encerrar = (req, res) => {
    const data = req.body;

    return;
}

*/

export { allSolicitacoesService, createService, modifyService, cancelService };