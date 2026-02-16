const productController = require("../controllers/productSchema")
const express = require("express")
const router = express.Router()

router.post("/add-product", productController.createProduct)
router.get("/get-products", productController.getProducts)

module.exports = router