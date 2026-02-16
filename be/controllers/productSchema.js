const product = require("../models/Product")

exports.createProduct = async (req, res) => {
    try {
        const { name, desc, category, price, unit } = req.body

        const image = req.file? `/uploads/${req.file.filename}` : null

        const products = await product.create({
            name, desc, category, price, unit, image
        })
        return res.status(201).json({ MSG: "Product Added Sucessfully", products })
    } catch (error) {
        return res.status(500).json({ error: "Failed to create product" })
    }
}

exports.getProducts = async (req, res) => {
    try {
        const newProducts = await product.find()
        return res.status(201).json({MSG: "Products Fetched Successfully", newProducts})
    } catch (error) {
        return res.status(500).json({MSG: "Failed to fetch the products"})
    }
}