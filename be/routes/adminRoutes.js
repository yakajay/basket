const adminController = require("../controllers/adminController")
const express = require("express")
const router = express.Router()

router.post("/admin-register", adminController.adminRegister)
router.post("/login-record", adminController.adminLogin)

module.exports = router