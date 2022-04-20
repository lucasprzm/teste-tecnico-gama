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
};

module.exports = produtoController;
