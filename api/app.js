require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const connectDB = require("./config/connectDB");
const { default: mongoose } = require("mongoose");
const Router = express.Router();

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("home");
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