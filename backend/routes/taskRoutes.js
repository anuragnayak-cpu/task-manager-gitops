const express = require('express');
const router = express.Router();

let tasks = [];
let idCounter = 1;

router.get('/', (req, res) => res.json(tasks));

router.post('/', (req, res) => {
  const task = { id: idCounter++, title: req.body.title, completed: false };
  tasks.push(task);
  res.json(task);
});

router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.sendStatus(404);

  task.completed = req.body.completed;
  res.json(task);
});

router.delete('/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;