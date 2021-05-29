// Imports
const express = require('express')
const dotenv = require("dotenv")

// Dotenv Activate
dotenv.config()

// Express JS
const app = express()

// Routes
const helloRoute = require("./routes/hello")
const userRoute = require("./routes/user")
// Database Connection

// Body Parser
app.use(express.json())

// const port = 3000

app.use("/api/hello", helloRoute);


app.listen(process.env.PORT || 8080, () => {
  console.log(`App is running on http://localhost:${process.env.PORT}`)
})
