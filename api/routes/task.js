const express = require("express");
const { getTasks, createTask, getTask, deleteTask, updateTask } = require("../controllers/taskController");

const Router = express.Router();

//@desc : /api/tasks

Router.post("/",createTask);

Router.get("/",getTasks);

Router.get("/:id",getTask);

Router.delete("/:id",deleteTask);

Router.put("/:id",updateTask);



module.exports = Router;