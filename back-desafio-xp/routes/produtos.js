var express = require("express");
var router = express.Router();
const produtoController = require("../controllers/produtoController");

/* GET users listing. */
router.get("/", produtoController.listarProdutos);

module.exports = router;
