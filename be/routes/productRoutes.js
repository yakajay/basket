const productController = require("../controllers/productSchema")
const express = require("express")
const router = express.Router()

router.post("/add-product", productController.createProduct)

module.exports = router