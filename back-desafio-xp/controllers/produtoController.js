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
    try {
      const { idProdutos } = req.params;
      const { nome, preco, estoque } = req.body;
      if (!idProdutos) return res.status(400).json("ID não enviado!");

      const produtoAtualizado = await Produtos.update(
        {
          nome,
          preco,
          estoque,
        },
        {
          where: {
            idProdutos,
          },
        }
      );
      res.json("Produto Atualizado!");
    } catch (error) {
      console.log(error);
    }
  },
  deletarProduto: async (req, res) => {
    const { idProdutos } = req.params;
    if (!idProdutos) return res.status(400).json("Produto não encontrado ou id não fornecido.");
    const produtoApagado = await Produtos.destroy({ where: { idProdutos } });
    res.json(`Produto de id ${idProdutos} apagado!`);
  },
};

module.exports = produtoController;
