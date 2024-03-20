const express = require("express");
const Task = require("../models/Task");

const Router = express.Router();


Router.post("/tasks", async (req,res)=>{
    try {
       const task = await Task.create(req.body);
       res.status(200).json({msg:"task was added",task});
    } catch (error) {
     res.status(500).json({msg:error.message});
    }
   })

Router.get("/tasks",async(req,res)=>{
        try {
           const tasks = await Task.find();
           res.status(200).json({msg:"Tasks fetched",tasks});
      
        } catch (error) {
         res.status(500).json({msg:error.message});
        }         
})


module.exports = Router;