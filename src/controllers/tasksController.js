const Task = require("../models/task");

const getTasks = async (req, res) => {

  const tasks = await Task.findAll();

  res.status(200).json({
    ok: true,
    data: tasks
  });
};

const getTaskById = async (req, res) => {

  const task = await Task.findByPk(req.params.id);

  if (!task) {
    return res.status(404).json({
      ok: false,
      error: "Tarea no encontrada"
    });
  }

  res.json({
    ok: true,
    data: task
  });
};

const createTask = async (req, res) => {

  const task = await Task.create(req.body);

  res.status(201).json({
    ok: true,
    data: task
  });
};

const updateTask = async (req, res) => {

  const task = await Task.findByPk(req.params.id);

  if (!task) {
    return res.status(404).json({
      ok: false,
      error: "Tarea no encontrada"
    });
  }

  await task.update(req.body);

  res.json({
    ok: true,
    data: task
  });
};

const deleteTask = async (req, res) => {

  const task = await Task.findByPk(req.params.id);

  if (!task) {
    return res.status(404).json({
      ok: false,
      error: "Tarea no encontrada"
    });
  }

  await task.destroy();

  res.status(204).send();
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};