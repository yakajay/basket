const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    otp: {
        type: String,
        otpExpires: Date
    }
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema)