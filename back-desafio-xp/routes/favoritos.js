var express = require("express");
const favoritosController = require("../controllers/favoritosController");
var router = express.Router();

router.post("/adicionar", favoritosController.cadastrarFavorito);

module.exports = router;
