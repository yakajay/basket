const productController = require("../controllers/productSchema")
const express = require("express")
const router = express.Router()
const upload = require("../middlewares/imageMiddleware")

router.post("/add-product", upload.single("image"), productController.createProduct)
router.get("/get-products", productController.getProducts)

module.exports = router