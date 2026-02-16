const productController = require("../controllers/productSchema")
const express = require("express")
const router = express.Router()
const upload = require("../middleware/imageMiddleWare")

router.post("/add-product", upload.single("image"), productController.createProduct)
router.get("/get-products", productController.getProducts)

module.exports = router