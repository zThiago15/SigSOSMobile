const errorMiddleware = (err, req, res, next) => {
    console.log("Erro");
    res.status(500).send({"message": "Erro no servidor!"});
}

export default errorMiddleware;