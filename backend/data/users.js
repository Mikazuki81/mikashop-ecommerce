import bcrypt from "bcryptjs"

const users = [
  {
    name: "mikazuki",
    email: "m@mikazuki.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "john1",
    email: "john@mikazuki.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "bravo",
    email: "bravo@mikazuki.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
