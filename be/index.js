const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const productRouter = require("./routes/productRoutes")
const cors = require("cors")

const PORT = process.env.PORT || 8000
dotenv.config()

app.use(express.json())
app.use(cors())

app.use("/api", productRouter)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("DB Connected Sucessfully");
})
.catch((error) => {
    console.log(error.message);
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})
