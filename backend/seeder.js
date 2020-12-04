import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"
import products from "./data/products.js"
import users from "./data/users.js"
import User from "./models/usersModel.js"
import Product from "./models/productModel.js"
import Order from "./models/orderModel.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

// function to import data
const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createUsers = await User.inserMany(users)

    // selected admin from users
    const adminUser = createUsers[0]._id

    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)
    console.log("Data imported!".green.inverse)
    process.exit()
  } catch (err) {
    console.error(`${err}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log("Data destroyed!".red.inverse)
    process.exit()
  } catch (err) {
    console.error(`${err}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
