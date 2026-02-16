const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()

exports.adminMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({MSG: "Token Required / Wrong Token"})
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.adminId = decoded.adminId
            next()
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } catch (error) {
            return res.status(500).json(error.message)
    }
}