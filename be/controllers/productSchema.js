const product = require("../models/Product")

exports.createProduct = async (req, res) => {
    try {
        const { name, desc, category, price, unit } = req.body

        const errors = []

        if (typeof name !== "string" || !name.trim()) {
            errors.push("Field 'name' is required and must be a non-empty string")
        }

        if (typeof desc !== "string" || !desc.trim()) {
            errors.push("Filed 'description' is required and must be a non-empty string")
        }

        if (price !== undefined) {
            const numbericPrice = Number(price)
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
            const allowedUnits = category.path.enmUnits || []
            if (allowedUnits.length > 0 && !allowedUnits.includes(unit)) {
                errors.push("Field 'units' muse be one of :" + allowedUnits.json(", " + "."))
            }
        }

        const products = await product.create({
            name, desc, category, price, unit
        })
        return res.status(200).json({ MSG: "Product Added Sucessfuly", products })
    } catch (error) {
        return res.status(500).json({ error: "Failed to create product" })
    }
}