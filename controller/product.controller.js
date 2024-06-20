const { model } = require("mongoose");
const Productmodel = require("../model/product.model");
const productModel = require("../model/product.model");

const getAllProdect = async (req, res) => {
  try {
    const product = await Productmodel.find({});
    if (!product) {
      return res.status(404).send("Product Not Found");
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Productmodel.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.status(200).send("Product Updated succesfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteByid = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).send("Can't be deleted: No product found");
    }
    res.status(200).json("Product deleted successfully");
  } catch (error) {}
};

module.exports = {
  getAllProdect,
  createProduct,
  getById,
  updateById,
  deleteByid,
};
