const productController = require("../controllers/productSchema")
const express = require("express")
const router = express.Router()
const upload = require("../middlewares/imageMiddleware")
const protected = require("../middlewares/adminMiddleware")

router.post("/add-product", protected.adminMiddleware ,upload.single("image"), productController.createProduct)
router.get("/get-products", productController.getProducts)

module.exports = router