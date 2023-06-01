const express = require("express");
const router = express.Router();
const projectData = require("../data/projectData.json");
const crypto = require("crypto");

// Get projects
router.get("/", (req, res) => {
  const projects = projectData.map((project) => {
    return { id: project.id, title: project.title };
  });
  res.json(projects);
});

// Get a  project
router.get("/:id", (req, res) => {
  const specificProject = projectData.find((project) => {
    return project.id === req.params.id;
  });
  if (!specificProject) {
    res.status(404).send("Video is not found");
  }

  res.json(specificProject);
});

// Post a new project requirement
router.post("/:id/requirement", (req, res) => {
  const specificProject = projectData.find((project) => {
    return project.id === req.params.id;
  });
  const { item } = req.body;
  if (!item) {
    res.status(400).send("Please fill in all fields");
  }
  const newRequirement = {
    id: crypto.randomUUID(),
    item: item,
  };
  specificProject.Requirements.push(newRequirement);
  res.json(newRequirement);
});

// Post a new todo item
router.post("/:id/todos", (req, res) => {
  const specificProject = projectData.find((project) => {
    return project.id === req.params.id;
  });
  const { item } = req.body;
  if (!item) {
    res.status(400).send("Please fill in all fields");
  }
  const newToDo = {
    id: crypto.randomUUID(),
    item: item,
  };
  specificProject.Todos.push(newToDo);
  res.json(newToDo);
});

// Post a new test
router.post("/:id/tests", (req, res) => {
  const specificProject = projectData.find((project) => {
    return project.id === req.params.id;
  });
  const { item } = req.body;
  if (!item) {
    res.status(400).send("Please fill in all fields");
  }
  const newTest = {
    id: crypto.randomUUID(),
    item: item,
  };
  specificProject.Tests.push(newTest);
  res.json(newTest);
});

// Post a new exploration
router.post("/:id/explorations", (req, res) => {
  const specificProject = projectData.find((project) => {
    return project.id === req.params.id;
  });
  const { item } = req.body;
  if (!item) {
    res.status(400).send("Please fill in all fields");
  }
  const newExploration = {
    id: crypto.randomUUID(),
    item: item,
  };
  specificProject.Exploration.push(newExploration);
  res.json(newExploration);
});

module.exports = router;
