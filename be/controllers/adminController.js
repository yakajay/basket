const Admin = require("../models/Admin")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

exports.adminRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body
        
        const adminRecord = await Admin.findOne({email})
        if (adminRecord) {
            res.status(400).json({MSG: "Email already Exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const admin = await Admin.create({
            name, email, password: hashedPassword
        })
        return res.status(200).json({MSG: "Admin Registered"})
    } catch (error) {
        return res.status(500).json({MSG: error.message})
    }
}

exports.adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        const loginRecord = await Admin.findOne({email})
        if (!loginRecord) {
            return res.status(401).json({MSG: "Email Not Found"})
        }
        const loginPassword = await bcrypt.compare(password, loginRecord.password)
        if (!loginPassword) {
            return res.status(401).json({MSG: "Password Incorrect"})
        }
        const token = jwt.sign(
            {adminId: loginRecord._id}, process.env.JWT_SECRET, {expiresIn: "1d"}
        )
        return res.status(200).json({MSG: "Record Found Sucessfully", token})
    } catch (error) {
        return res.status(500).json({MSG: error.message})
    }
}