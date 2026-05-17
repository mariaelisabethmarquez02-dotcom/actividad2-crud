const express = require("express");

const router = express.Router();

const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/tasksController");

const { validateTask } = require("../middlewares/validateTask");

router.get("/", getTasks);

router.get("/:id", getTaskById);

router.post("/", validateTask, createTask);

router.put("/:id", validateTask, updateTask);

router.delete("/:id", deleteTask);

module.exports = router;