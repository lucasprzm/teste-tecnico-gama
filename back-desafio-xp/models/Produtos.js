const db = require("../database");
const { DataTypes } = require("sequelize");

const Produtos = db.define(
  "Produtos",
  {
    idProdutos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    preco: {
      type: DataTypes.DECIMAL(6, 2),
    },
    estoque: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "produtos",
    timestamps: false,
  }
);

module.exports = Produtos;
