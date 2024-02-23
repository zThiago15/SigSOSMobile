const validateSolicitacao = (req, res, next) => {
    const { tipoSolicitacao, local, solicitante, cadastrante, problema } = req.body;

    if (!tipoSolicitacao || !local || !solicitante || !cadastrante || !problema) {
        return res.status(404).json({ "message": "Dados obrigatórios não registrados!" })
    }

    next();
}


export { validateSolicitacao };