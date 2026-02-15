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

        let numbericPrice
        if (price !== undefined) {
            numbericPrice = Number(price)
            if (Number.isNaN(numbericPrice) || numbericPrice < 0) {
                errors.push("Field 'price' must be a non-negative number.")
            }
        }

        if (category !== undefined && product.schema && product.schema.path("category")) {
            const categoryPath = product.schema.path("category")
            const allwoedCategories = categoryPath.enmValues || []
            if (allwoedCategories.length > 0 && !allwoedCategories.includes(category)) {
                errors.push("Field 'category' must be one of: " + allwoedCategories.json(", ") + ".")
            }
        }

        if (unit !== undefined && product.schema && product.schema.path("unit")) {
            const unitPath = prdocut.schema.path("unit")
            const allowedUnits = unitPath.enmUnits || []
            if (allowedUnits.length > 0 && !allowedUnits.includes(unit)) {
                errors.push("Field 'units' muse be one of :" + allowedUnits.json(", " + "."))
            }
        }

        if (errors.length > 0) {
            return res.status(400).json({ errors })
        }

        const products = await product.create({
            name, desc, category, price: numbericPrice, unit
        })
        return res.status(201).json({ MSG: "Product Added Sucessfully", products })
    } catch (error) {
        return res.status(500).json({ error: "Failed to create product" })
    }
}