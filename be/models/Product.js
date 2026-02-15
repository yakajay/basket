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
    unit: {
        type: String,
        enum: unit_Enms
    },
    category: {
        type: String,
        enum: category_Enms
    },
    isActive: {
        type: Boolean
    }
}, { timestamps: true })


module.exports = mongoose.model("product", productSchema)