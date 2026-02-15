const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const productRouter = require("./routes/productRoutes")

const PORT = 8000
dotenv.config()

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("DB Connected Sucessfully");
})
.catch((error) => {
    console.log(error.message);
})

app.use("/api", productRouter)

