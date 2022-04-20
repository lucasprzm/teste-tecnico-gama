const CadastroUsuario = require("./CadastroUsuario");
const Favoritos = require("./Favoritos");
const Produtos = require("./Produtos");
const Usuarios = require("./Usuarios");

Usuarios.hasOne(CadastroUsuario, {
  foreignKey: "usuario_id",
});

Usuarios.hasMany(Favoritos, {
  foreignKey: "usuario_id",
});

Produtos.hasMany(Favoritos, {
  foreignKey: "produto_id",
});

module.exports = {
  CadastroUsuario,
  Favoritos,
  Produtos,
  Usuarios,
};
