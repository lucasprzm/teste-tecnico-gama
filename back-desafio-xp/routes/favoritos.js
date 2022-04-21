var express = require("express");
const favoritosController = require("../controllers/favoritosController");
var router = express.Router();

router.get("/", favoritosController.listarFavoritos);

module.exports = router;
