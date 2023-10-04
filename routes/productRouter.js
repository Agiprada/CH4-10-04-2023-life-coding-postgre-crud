const router = require("express").Router();

const Product = require("../controllers/productController");

router.post("/", Product.createProduct);
router.get("/", Product.findProducts);
router.get("/", Product.findProductById);
router.patch("/", Product.updateProduct);
router.delete("/", Product.deleteProduct);

module.exports = router;
