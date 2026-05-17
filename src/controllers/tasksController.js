let tasks = [
  {
    id: 1,
    title: "Hacer actividad",
    description: "CRUD con Express",
    done: false,
    priority: "alta"
  }
];

const getTasks = (req, res) => {
  res.status(200).json({
    ok: true,
    data: tasks
  });
};

const getTaskById = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

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

const createTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    ...req.body
  };

  tasks.push(newTask);

  res.status(201).json({
    ok: true,
    data: newTask
  });
};

const updateTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({
      ok: false,
      error: "Tarea no encontrada"
    });
  }

  Object.assign(task, req.body);

  res.json({
    ok: true,
    data: task
  });
};

const deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      ok: false,
      error: "Tarea no encontrada"
    });
  }

  tasks.splice(index, 1);

  res.status(204).send();
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};