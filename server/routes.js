const router = require("express").Router();
const home = require("./controller/home");
const adopt_giveup = require("./controller/adopt_giveup");
const missing = require("./controller/missing");
const messages = require("./controller/messages");
const user_registration = require("./controller/user_registration");

router.use("/home", home);
router.use("/adopt_giveup", adopt_giveup);
router.use("/missing", missing);
router.use("/messages", messages);
router.use("/user_registration", user_registration);


module.exports = router;