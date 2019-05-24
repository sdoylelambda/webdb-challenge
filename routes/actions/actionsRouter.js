const router = require("express").Router();

const Actions = require("./actionsModel");

router.get("/", (req, res) => {
  Actions.find()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: "actionsRouter error"});
    });
});

router.post("/", (req, res) => {
  Actions.add(req.body)
    .then(added => {
      res.status(200).json(added);
    })
    .catch(err => {
      res.status(500).json({ error: "actionsRouter error"});
    });
});

module.exports = router;