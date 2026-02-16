const product = require("../models/Product")

exports.createProduct = async (req, res) => {
    try {
        const { name, desc, category, price, unit } = req.body

        const errors = []

        if (typeof name !== "string" || !name.trim()) {
            errors.push("Field 'name' is required and must be a non-empty string")
        }

        if (typeof desc !== "string" || !desc.trim()) {
            errors.push("Field 'desc' is required and must be a non-empty string")
        }

        if (errors.length > 0) {
            return res.status(400).json({ errors })
        }

        if (price !== undefined) {
            const numbericPrice = Number(price)
            if (Number.isNaN(numbericPrice) || numbericPrice < 0) {
                errors.push("Field 'price' must be a non-negative number.")
            }
        }

        if (category !== undefined && product.schema && product.schema.path("category")) {
            const categoryPath = product.schema.path("category")
            const allowedCategories = categoryPath.enumValues || []
            if (allowedCategories.length > 0 && !allowedCategories.includes(category)) {
                errors.push("Field 'category' must be one of: " + allowedCategories.join(", ") + ".")
            }
        }

        if (unit !== undefined && product.schema && product.schema.path("unit")) {
            const unitPath = product.schema.path("unit")
            const allowedUnits = unitPath.enumValues || []
            if (allowedUnits.length > 0 && !allowedUnits.includes(unit)) {
                errors.push("Field 'unit' must be one of: " + allowedUnits.join(", ") + ".")
            }
        }

        const products = await product.create({
            name, desc, category, price, unit
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