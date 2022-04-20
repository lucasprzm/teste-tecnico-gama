var express = require("express");
var router = express.Router();
const produtoController = require("../controllers/produtoController");

router.get("/", produtoController.listarProdutos);
router.post("/novo", produtoController.cadastrarProduto);
router.put("/:idProdutos", produtoController.atualizarProduto);
router.delete("/apagar/:idProdutos", produtoController.deletarProduto);

module.exports = router;
