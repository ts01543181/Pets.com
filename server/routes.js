const router = require("express").Router();

router.get("/test", (req, res) => {
    console.log(1234);
    res.send(123);
})



module.exports = router;