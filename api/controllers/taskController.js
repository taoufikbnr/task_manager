const Task = require("../models/Task");


exports.createTask = async (req,res)=>{
    try {
       const task = await Task.create(req.body);
       res.status(200).json({msg:"task was added",task});
    } catch (error) {
     res.status(500).json({msg:error.message});
    }
   }

exports.getTasks = async(req,res)=>{
    try {
       const tasks = await Task.find();
       res.status(200).json({msg:"Tasks fetched",tasks});
  
    } catch (error) {
     res.status(500).json({msg:error.message});
    }         
}

   
exports.getTask = async(req,res)=>{
    try {
       const task = await Task.findById(req.params.id);
       if(!task) return res.status(404).json("Task doesn't exist");
       res.status(200).json({msg:"Task fetched",task});
  
    } catch (error) {
     res.status(500).json({msg:error.message});
    }         
}

exports.deleteTask = async(req,res)=>{
    try {
       const task = await Task.findByIdAndDelete(req.params.id);
       if(!task) return res.status(404).json("Task doesn't exist");

       res.status(200).json({msg:"Task deleted successfully"});
  
    } catch (error) {
     res.status(500).json({msg:error.message});
    }         
}


exports.updateTask = async(req,res)=>{
    try {
       const task = await Task.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true,runValidators:true});
       if(!task) return res.status(404).json("Task doesn't exist");

       res.status(200).json({msg:"Task updated successfully",task});
  
    } catch (error) {
     res.status(500).json({msg:error.message});
    }         
}