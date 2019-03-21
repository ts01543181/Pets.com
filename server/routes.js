const router = require("express").Router();
const user_auth = require("./controller/user_auth");
const boards = require("./controller/boards");
const teams = require("./controller/teams");


router.use("/user_auth", user_auth);
router.use("/boards", boards);
router.use("/teams", teams)

module.exports = router;