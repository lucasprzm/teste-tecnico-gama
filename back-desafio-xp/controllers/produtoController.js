const { where } = require("sequelize/types");
const { Produtos } = require("../models");

const produtoController = {
  listarProdutos: async (req, res) => {
    const listaDeProdutos = await Produtos.findAll();
    res.json(listaDeProdutos);
  },
  cadastrarProduto: async (req, res) => {
    const { nome, preco, estoque } = req.body;
    const novoProduto = await Produtos.create({
      nome,
      preco,
      estoque,
    });
    res.status(201).json(novoProduto);
  },
  atualizarProduto: async (req, res) => {
    const { id } = req.params;
    const { nome, preco, estoque } = req.body;
    if (!id) return res.status(400).json("ID não enviado!");

    const produtoAtualizado = Produtos.update(
      {
        nome,
        preco,
        estoque,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json("Produto Atualizado!");
  },
};

module.exports = produtoController;
