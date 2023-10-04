const express = require("express");
const router = express.Router();
const Product = require("./productRouter");

router.route("/api/v1/product", Product);

module.exports = router;
