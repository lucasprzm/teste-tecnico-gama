var express = require("express");
var router = express.Router();
const produtoController = require("../controllers/produtoController");

/* GET users listing. */
router.get("/", produtoController.listarProdutos);
router.post("/novo", produtoController.cadastrarProduto);
router.put("/:idProdutos", produtoController.atualizarProduto);

module.exports = router;
