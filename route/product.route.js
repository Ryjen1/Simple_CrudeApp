const express = require("express");
const router = express.Router();
const {
  getAllProdect,
  createProduct,
  getById,
  updateById,
  deleteByid,
} = require("../controller/product.controller");

router.get("/all", getAllProdect);
router.post("/post", createProduct);
router.get("/get/:id", getById);
router.put("/update/:id", updateById);
router.delete("/delete/:id", deleteByid);

module.exports = router;
