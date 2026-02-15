const product = require("../models/Product")

exports.createProduct = async (req, res) => {
    try {
        const {name, desc, category, price, unit} = req.body
        const products = await product.create({
            name, desc, category, price, unit
        })
        return res.status(200).json({MSG: "Product Added Sucessfuly", products})
    } catch (error) {
        console.log(error.message);
    }
}