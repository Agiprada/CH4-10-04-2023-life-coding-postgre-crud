const { Product } = require("../models");

const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      price,
      stock,
    });
    res.status(200).json({
      status: "succes",
      data: {
        newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const findProducts = async (req, res) => {
  try {
    const product = await product.findAll();
    res.status(200).json({
      status: "succes",
      data: {
        newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const findProductById = async (req, res) => {
  try {
    const product = await product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: "succes",
      data: {
        newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await id.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "succes",
      data: {
        Product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndRemove(id);
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  createProduct,
  findProducts,
  findProductById,
  updateProduct,
  deleteProduct,
};
