require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const Router = express.Router();

const app = express();
app.use(express.json())


app.listen(process.env.PORT || process.env.port, (err) => {
    err
      ? console.log(`Server connection failed`)
      : console.log(`Server connected successfully on port ${process.env.PORT}`);
  });