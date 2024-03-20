const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log(`Data base connected successfully`);
  } catch (error) {
    console.log(error);
    console.log(`Data base connection failed`);
  }
};
module.exports = connectDB;
