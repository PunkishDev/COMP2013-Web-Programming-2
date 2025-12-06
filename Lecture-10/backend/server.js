//Initialize server
const express = require("express");
const server = express();
const port = 3000;

const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

//Cookies & Signatures
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

//Database imports
const mongoose = require("mongoose");
const User = require("./models/user");
const { DB_URI } = process.env;

//Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Connections
mongoose
  .connect(DB_URI)
  .then(() => {
    server.listen(port, () => {
      console.log(`Connected to DB\nServer is listening on port ${port}`);
    });
  })
  .catch((error) => console.log(error));

//Routes
server.get("/", (request, response) => {
  response.send("Server is live!");
});

server.post("/register", async (request, response) => {
  const { username, password } = request.body;

  try {
    //Hashing a password need bcrypt and salt rounds as an int
    //Salt is the amount of random characters added into the hash
    const hashedPassword = await bcrypt.hash(password, 10); //Number is the "salt"
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    response.send({ message: "User Created" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//Login existing user route
server.post("/login", async (request, response) => {
  const { username, password } = request.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return response.status(404).send({ message: "User does not exist" });
    }

    const match = bcrypt.compare(password, user.password);

    if (!match) {
      return response
        .status(403)
        .send({ message: "Username or password are incorrect" });
    }

    const oatmealRaisin = jwt.sign({ id: user._id, username }, SECRET_KEY); //Cookie token
    return response
      .status(201)
      .send({ message: "User Authenticated", token: oatmealRaisin });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});
