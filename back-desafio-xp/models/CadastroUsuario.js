const db = require("../database");
const { DataTypes } = require("sequelize");
const Usuarios = require("./usuarios");

const CadastroUsuario = db.define(
  "CadastroUsuario",
  {
    endereco: {
      type: DataTypes.STRING(100),
    },
    cpf: {
      type: DataTypes.STRING(11),
    },
    cidade: {
      type: DataTypes.STRING(45),
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuarios,
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
    tableName: "cadastrousuario",
  }
);

module.exports = CadastroUsuario;
