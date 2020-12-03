import mongoose from "mongoose"
import colors from "colors"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`mongodb Connected : $${conn.connection.host}`.green.bold)
  } catch (err) {
    console.error(`Error : ${err.message}`.bgWhite.red)
    process.exit(1)
  }
}

export default connectDB
