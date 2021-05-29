const router = require("express").Router();

router.get("/", async(req, res) => {
    res.send("Hello")
})

router.get("/message", async(req, res) => {
    res.send("This is Yesawi")
})

router.post("/", async(req, res) => {
    try{
    const value = await req.body;
    res.status(200).send(value)
    }
    catch{
        res.status(400).send("No Data Sent")
    }
})

module.exports = router