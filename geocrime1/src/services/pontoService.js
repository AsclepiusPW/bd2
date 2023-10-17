const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();

const createPonto = async (pointData) => {
    try {
        const novoPonto = await prisma.Ponto.create({
            data: {
                titulo: pointData.titulo,
                tipo: pointData.tipo,
                dataHora: pointData.dataHora,
                lat: pointData.lat,
                lng: pointData.lng
            }
    })
    if(!novoPonto) {
        return {message: "Erro ao criar o ponto"}
    }
    return novoPonto;
    } catch (error) {
        return {message: "Erro no servidor"}
    }
}

const getPontos = async () => {
    let ponto;
    try {
        ponto = await prisma.Ponto.findMany();
    } catch (error) {
        return{message: "Erro no servidor"}
    }
    
    if(!ponto) {
        return {message: "Erro ao buscar o ponto"}
    }
    return ponto;
}

module.exports = {
    createPonto,
    getPontos
}