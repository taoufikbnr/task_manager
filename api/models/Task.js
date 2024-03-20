const mongoose = require("mongoose");

const TaskScheme = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please add a task"]
        },
        completed:{
            type:Boolean,
            required:true,
            default:false
        }
    },
    {timestamps:true}
)

module.exports = mongoose.model("Task",TaskScheme);