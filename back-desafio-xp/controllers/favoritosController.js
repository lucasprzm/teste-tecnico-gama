const { Favoritos, Usuarios, Produtos } = require("../models");

const favoritosController = {
  listarFavoritos: async (req, res) => {
    const listaDeFavoritos = await Favoritos.findAll();
    res.json(listaDeFavoritos);
  },
  // cadastrarFavorito: async (req, res) => {
  //   const { Usuarios_idUsuarios, Produtos_idProdutos } = req.body;
  //   const novoFavorito = await Favoritos.create({
  //     Usuarios_idUsuarios,
  //     Produtos_idProdutos,
  //   });
  //   res.status(201).json(novoFavorito);
  // },
  // atualizarFavorito: async (req, res) => {
  //   try {
  //     const { idFavoritos } = req.params;
  //     const { Usuarios_idUsuarios, Produtos_idProdutos } = req.body;
  //     if (!idFavoritos) return res.status(400).json("ID não enviado!");

  //     const favoritoAtualizado = await Favoritos.update(
  //       {
  //         Usuarios_idUsuarios,
  //         Produtos_idProdutos,
  //       },
  //       {
  //         where: {
  //           idFavoritos,
  //         },
  //       }
  //     );
  //     res.json("Favorito Atualizado!");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // deletarFavorito: async (req, res) => {
  //   const { idFavoritos } = req.params;
  //   if (!idFavoritos) return res.status(400).json("Favorito não encontrado ou id não fornecido.");
  //   const favoritoApagado = await Favoritos.destroy({ where: { idFavoritos } });
  //   res.json(`Favorito de id ${idFavoritos} apagado!`);
  // },
};

module.exports = favoritosController;
