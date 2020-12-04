import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import colors from "colors"

import productRoutes from "./routes/productRoutes.js"

dotenv.config()

connectDB()

const app = express()

// Root
app.get("/", (req, res) => {
  res.send("API running ... ")
})

app.use("/api/products", productRoutes)

const PORT = process.env.PORT || 5000

// Listen in PORT 5000
app.listen(
  PORT,
  console.log(
    `Running in ${process.env.NODE_ENV} on http://localhost:${PORT}`.green.bold
  )
)
