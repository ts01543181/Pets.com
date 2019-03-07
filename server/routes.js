const router = require("express").Router();
const user_auth = require("./controller/user_auth");

router.use("/user_auth", user_auth);



module.exports = router;