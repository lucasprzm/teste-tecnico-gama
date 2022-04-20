const db = require("../database");
const { DataTypes } = require("sequelize");
const Usuarios = require("./usuarios");
const Produtos = require("./Produtos");

const Favoritos = db.define(
  "Favoritos",
  {
    usuario_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuarios,
        key: "id",
      },
    },
    produto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Produtos,
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "favoritos",
  }
);

module.exports = Favoritos;
