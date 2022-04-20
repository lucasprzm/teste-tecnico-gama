const { Produtos } = require("../models");

const produtoController = {
  listarProdutos: async (req, res) => {
    const listaDeProdutos = Produtos.findAll();
    res.json(listaDeProdutos);
  },
};

module.exports = produtoController;
