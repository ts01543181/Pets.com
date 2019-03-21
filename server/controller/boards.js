const router = require("express").Router();
const Board = require("../database/models/Board");

router.post("/add", (req, res) => {
    const board = new Board({
        title: req.body.title,
        team: req.body.team,
        private: req.body.private,
        theme: req.body.theme,
        creator: req.body.creator
    });
    board.save()
    .then(board => {
        res.json(board)
    })
    .catch(e => {
        res.status(400).json({
            data: "server failure"
        });
    })
});

router.get("/get_boards/:creator", (req, res) => {
    Board.find({creator: req.params.creator}, (e, data) => {
        res.json(Array.from(data));
    })
    .catch(e => {
        res.status(400).json({
            data: "server failure"
        });
    })
})

module.exports = router;