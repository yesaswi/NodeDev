// Imports
const express = require('express')
const dotenv = require("dotenv")

// Express JS
const app = express()

// Routes
const authRoute = require("./routes/auth")

// Dotenv Activate
dotenv.config()

// Database Connection

// Body Parser
app.use(express.json())

// const port = 3000

app.use("/api/user", authRoute);


app.listen(process.env.PORT || 8080, () => {
  console.log(`App is running on http://localhost:${port}`)
})
