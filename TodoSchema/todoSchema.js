// const mongoose= require("mongoose")
import mongoose from "mongoose"
import dateFormat from "dateformat";
const now = new Date();
 let data=dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

const {Schema,model}=mongoose

const todoSchema= Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    isCompleted:{
        type:Boolean,
        required:true,
        default:false
    },
    date:{
        type:Date,
        default:data
    }
})

const TodoModel= model("CodeCoastTodos",todoSchema)

export default TodoModel