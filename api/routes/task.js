const express = require("express");
const { getTasks, createTask, getTask, deleteTask, updateTask } = require("../controllers/taskController");

const Router = express.Router();

Router.post("/tasks",createTask);

Router.get("/tasks",getTasks);

Router.get("/task/:id",getTask);

Router.delete("/task/:id",deleteTask);

Router.put("/task/:id",updateTask);



module.exports = Router;