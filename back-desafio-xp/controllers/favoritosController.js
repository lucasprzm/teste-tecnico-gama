const { Favoritos } = require("../models");

const favoritosController = {
  cadastrarFavorito: async (req, res) => {
    const { Usuarios_idUsuarios, Produtos_idProdutos } = req.body;
    const novoFavorito = await Favoritos.create({
      Usuarios_idUsuarios,
      Produtos_idProdutos,
    });
    res.status(201).json(novoFavorito);
  },
  deletarFavorito: async (req, res) => {
    const { Produtos_idProdutos } = req.params;
    if (!Produtos_idProdutos)
      return res.status(400).json("Favorito não encontrado ou id não fornecido.");
    const favoritoApagado = await Favoritos.destroy({ where: { Produtos_idProdutos } });
    res.json(`Favorito do produto de id ${Produtos_idProdutos} apagado!`);
  },
};

module.exports = favoritosController;
