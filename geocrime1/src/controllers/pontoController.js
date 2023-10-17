const { createPonto, getPontos } = require("../services/pontoService")

const store = async (req, res) => {
    const ponto = req.body
    const letPonto = await createPonto(ponto);
    return res.status(201).send(letPonto);
}

const index = async (req, res) => {
    const pontos = await getPontos();
    return res.send(pontos);
}

module.exports = {store, index}