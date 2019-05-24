const router = require("express").Router();

const Projects = require("./projectModel");
const Actions = require("../actions/actionsModel");

router.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error retrieving the project." });
    });
});

router.get("/:id", (req, res) => {
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
        .status(500).json({ message: "There was an error retrieving the project." });
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
        .status(400).json({ message: "Error creating the project." });
    }
  } else {
    res
      .status(500).json({ message: "Please provide name." });
  }
});

router.delete('/:id', (req, res) => {
  db('projects')
  .where({ id:req.params.id })
  .del()
  .then(count=> {
      if (count > 0) {
         res.status(200).json({ message: "The Project was deleted"}) 
      } else { 
         res.status(404).json({ message:"Not found, not able to delete."})
      }
        })
  .catch(err => {res.status(500).json(err)})
})

module.exports = router;