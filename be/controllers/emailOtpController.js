const User = require("../models/User")
const { generateOtp } = require("../email/generate-otp")
const { sendOtpEmail } = require("../email/send-otp")

exports.sendOtp = async (req, res) => {
    try {
        const { name, email } = req.body
        if (!email) {
            return res.status(400).json({ MSG: "Email Required" })
        }
        let user = await User.findOne({ email })
        if (!user) {
            userRecord = await User.create({ name, email })
        }
        const otp = generateOtp()
        user.otp = otp
        user.otpExpires = Date.now() + 5 * 60 * 100
        await user.save()

        await sendOtpEmail(email, otp)
        res.status(200).json({
            success: true,
            message: "OTP Sent to Email",
            name
        })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}