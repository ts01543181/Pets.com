const router = require("express").Router();

router.get("/", (req, res) => {
    console.log(123);
    res.send(123);
});

module.exports = router;