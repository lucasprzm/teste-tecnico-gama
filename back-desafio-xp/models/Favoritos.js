const db = require("../database");
const { DataTypes } = require("sequelize");
const Usuarios = require("./usuarios");
const Produtos = require("./Produtos");

const Favoritos = db.define(
  "Favoritos",
  {
    Usuarios_idUsuarios: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuarios,
        key: "idUsuarios",
      },
    },
    Produtos_idProdutos: {
      type: DataTypes.INTEGER,
      references: {
        model: Produtos,
        key: "idProdutos",
      },
    },
  },
  {
    tableName: "favoritos",
    timestamps: false,
  }
);

module.exports = Favoritos;
