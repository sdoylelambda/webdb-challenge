const router = require("express").Router();

const Projects = require("./projectModel");
const Actions = require("./actionModel");

router.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500).json({ message: "Error retrieving the project." });
    });
});

router.get("/:id/", (req, res) => {
  Projects.findById(req.params.id)
    .then(projects => {
      Actions.find()
        .where({ project_id: req.params.id })
        .then(actions => {
          projects.actions = actions;
          return res.status(200).json(projects);
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error retrieving the project." });
    });
});

router.post("/", async (req, res) => {
  const project = req.body;
  if (project.name) {
    try {
      const inserted = await Projects.add(project);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500).json({ message: "Error creating the project." });
        }
    } else {
        res
        .status(400).json({ message: "Please provide the name ." });
    }
});

module.exports = router;