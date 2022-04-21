const CadastroUsuario = require("./CadastroUsuario");
const Favoritos = require("./Favoritos");
const Produtos = require("./Produtos");
const Usuarios = require("./Usuarios");

// Usuarios.hasOne(CadastroUsuario, {
//   foreignKey: "Usuarios_idUsuarios",
// });

Produtos.belongsToMany(Usuarios, {
  foreignKey: "Produtos_idProdutos",
  through: Favoritos,
});

Usuarios.belongsToMany(Produtos, {
  foreignKey: "Usuarios_idUsuarios",
  through: Favoritos,
});

module.exports = {
  CadastroUsuario,
  Favoritos,
  Produtos,
  Usuarios,
};
