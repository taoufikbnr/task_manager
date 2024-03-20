require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/Task");
const Router = express.Router();

const app = express();
app.use(express.json());

app.post("/api/tasks", async (req,res)=>{
 try {
    const task = await Task.create(req.body);
    res.status(200).json({msg:"task was added",task});
 } catch (error) {
  res.status(400).json({msg:error.message});
 }
})
app.get("/api/getTasks", async (req,res)=>{
  try {
     const tasks = await Task.find();
     res.status(200).json({msg:"Tasks fetched",tasks});

  } catch (error) {
   res.status(400).json({msg:error.message});
  }
 })
   
  const startServer = async()=>{
    try {
      await connectDB();
      app.listen(process.env.PORT, (err) => {
        err
          ? console.log(`Server connection failed`)
          : console.log(`Server running on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.log(error); 
    }
  }
  startServer();