var express = require("express");
var router = express.Router();
const usuariosController = require("../controllers/usuariosController");

router.get("/", usuariosController.listarUsuarios);
router.post("/novo", usuariosController.cadastrarUsuario);
router.put("/:idUsuarios", usuariosController.atualizarUsuario);
router.delete("/apagar/:idUsuarios", usuariosController.deletarUsuario);

module.exports = router;
