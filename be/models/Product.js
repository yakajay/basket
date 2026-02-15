const mongoose = require("mongoose")

const unit_Enms = [
    "500g", "1kg", "2kg", "5kg"
]

const category_Enms = [
    "vegetables", "food-grains", "fruits"
]

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    units: {
        type: String,
        values: unit_Enms
    },
    category: {
        type: String,
        values: category_Enms
    },
    isActive: {
        type: Boolean
    }
}, { timestamps: true })


module.exports = mongoose.model("product", productSchema)