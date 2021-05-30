const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { registerValidation, loginValidation } = require("../validation")

router.post("/register", async (req, res) => {
  //Validating the entered data
  try {
    const value = await registerValidation(req.body);
  } catch (err) {
    return res.status(400).send(err.details[0].message);
  }

  // Checking if user already exits
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists");

  //Hashing the passwords
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  //CREATING NEW USER
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Login

router.post("/login", async (req, res) => {
  //Validating the entered data
  try {
    const value = await loginValidation(req.body);
  } catch (err) {
    return res.status(400).send(err.details[0].message);
  }

  // Checking if user already exits
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exists");
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Incorrect Password");

  //Assigning a JWT
  const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
