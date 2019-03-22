const router = require("express").Router();
const Team = require("../database/models/Team");
const User = require("../database/models/User");

router.post("/addBoard", (req, res) => {

});

router.post("/create", (req, res) => {
    const team = req.body.team;
    const creator = req.body.creator;

    User.findOne({ email: creator})
    .then(user => {
        const newTeam = new Team({
            title: team.title,
            description: team.description,
            private: team.private,
            creator: team.creator,
            admin: [user.email],
            members: [user.email],
            boards: []
        });
        user.teams.push(newTeam);
        user.save();
        newTeam.save()
        .then(team => {
            res.json(team);
        })
    })
    .catch(e => {
        res.status(400).json("server failure");
    });
});

router.get("/get/:email", (req, res) => {
    const email = req.params.email;
    
    User.findOne({email})
    .then(async (user) => {
        const ret = [];
        user.teams.forEach(team => {
            ret.push(Team.findOne({_id: team}));
        })
        const parsed = await Promise.all(ret);
        res.json(parsed);
    })
    .catch(e => {
        res.status(400).json("server failure");
    })
})




module.exports = router;