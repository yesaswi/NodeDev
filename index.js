// Imports
const express = require('express')
const dotenv = require("dotenv")
const mongoose = require("mongoose")

// Dotenv Activate
dotenv.config()

// Express JS
const app = express()

// Routes
const authRoute = require("./routes/auth")

// Database Connection

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Connected to DB!")
);

// Body Parser
app.use(express.json())

// Routes
app.use("/api/user", authRoute);

// Start the Application
app.listen(process.env.PORT || 8080, () => {
  console.log(`App is running on http://localhost:${process.env.PORT}`)
})
