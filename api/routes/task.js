const express = require("express");
const { getTasks, createTask } = require("../controllers/taskController");

const Router = express.Router();


Router.post("/tasks",createTask)

Router.get("/tasks",getTasks);


module.exports = Router;