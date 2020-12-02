const express = require("express")
const products = require("./data/products")

const app = express()

const PORT = process.env.PORT || 5000

// Root
app.get("/", (req, res) => {
  res.send("API running ... ")
})

// GET all products
app.get("/api/products", (req, res) => {
  res.json(products)
})

// GET Product by ID
app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

// Listen in PORT 5000
app.listen(PORT, console.log("Running on http://localhost:5000"))
