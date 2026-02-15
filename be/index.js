const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

console.log(`Server running @ ${PORT}`);

const app = express()

const PORT = 8000;

app.listen(PORT, () => {
    console.log("procession", process.env.MONGO_URI);
})

