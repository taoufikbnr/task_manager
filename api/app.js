require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const connectDB = require("./config/connectDB");
const taskRoute = require("./routes/task");

const app = express();
app.use(express.json());


app.use("/api/tasks",taskRoute)

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