const router = require("express").Router();
const verify = require("./verifyToken");
const Recipe = require("../models/Recepie");

router.post("/", verify, async (req, res) => {
  //CREATING NEW RECIPE
  const recipe = new Recipe({
    title: req.body.title,
    ingridients: req.body.ingridients,
    description: req.body.description
  });

  try {
    const savedRecipe = await recipe.save();
    res.send({ Recipe: recipe._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", verify, async (req, res) => {
  try {
    const recipe = await Recipe.find({});
    res.send(recipe);
  } catch (err) {
    return res.status(400).send(err);
  }
});

// router.get("/:Recipeid", async (req, res) => {
//   try {
//     const student = await Student.findById(req.params.Recipeid);
//     if (student != null) res.send({ Students: student });
//     else res.status(404).send({ Error: err, Message: "Student ID not found" });
//   } catch (err) {
//     return res
//       .status(404)
//       .send({ Error: err, Message: "Student ID not found" });
//   }
// });

// router.patch("/update", async (req, res) => {
//   try {
//     const idExists = await Student.findByIdAndUpdate(
//       { _id: req.body._id },
//       { name: req.body.name }
//     );
//     return res.send({ Result: idExists._id });
//   } catch (err) {
//     return res.status(400).send(err);
//   }
// });

// router.delete("/delete", async (req, res) => {
//   try {
//     const idDelete = await Student.findByIdAndRemove({ _id: req.body._id });
//     return res.send({ Result: idDelete._id });
//   } catch (err) {
//     return res.status(404).send({ Result: "ID not found" });
//   }
// });

module.exports = router;
