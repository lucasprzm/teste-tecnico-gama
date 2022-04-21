const { Usuarios, Produtos } = require("../models");

const usuariosController = {
  listarUsuarios: async (req, res) => {
    const listaDeUsuarios = await Usuarios.findAll({
      include: [{ model: Produtos, attributes: ["nome", "preco"] }],
    });
    res.json(listaDeUsuarios);
  },
  cadastrarUsuario: async (req, res) => {
    const { nome, email, telefone } = req.body;
    const novoUsuario = await Usuarios.create({
      nome,
      email,
      telefone,
    });
    res.status(201).json(novoUsuario);
  },
  atualizarUsuario: async (req, res) => {
    try {
      const { idUsuarios } = req.params;
      const { nome, email, telefone } = req.body;
      if (!idUsuarios) return res.status(400).json("ID não enviado!");

      const usuarioAtualizado = await Usuarios.update(
        {
          nome,
          email,
          telefone,
        },
        {
          where: {
            idUsuarios,
          },
        }
      );
      res.json("Usuario Atualizado!");
    } catch (error) {
      console.log(error);
    }
  },
  deletarUsuario: async (req, res) => {
    const { idUsuarios } = req.params;
    if (!idUsuarios) return res.status(400).json("Usuario não encontrado ou id não fornecido.");
    const usuarioApagado = await Usuarios.destroy({ where: { idUsuarios } });
    res.json(`Usuario de id ${idUsuarios} apagado!`);
  },
};

module.exports = usuariosController;
