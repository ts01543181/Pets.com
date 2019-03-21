const router = require("express").Router();
const Team = require("../database/models/Team");

router.post("/create", (req, res) => {
    const newTeam = new Team({
        title: req.body.title,
        description: req.body.description,
        private: req.body.private,
        creator: req.body.creator,
        admin: req.body.admin,
        members: req.body.members
    });
    console.log(req.body)
    newTeam.save()
    .then(team => {
        res.json(team);
    })
    .catch(e => {
        console.log(e)
        res.status(400).json("server failure")
    });
});

router.get("/get/:currentUser", (req, res) => {

})




module.exports = router;