const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/restapi')
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


const todolistSchema = new Schema({
    nameTodo:{
        type:String,
        required:true
    },
    dateTodo:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
})

const todolist= mongoose.model('todolist',todolistSchema)
// todolist.insertMany([
//     {nameTodo:'makan siang',dateTodo:'10-febuari-2023',status:true},
//     {nameTodo:'olahraga',dateTodo:'11-febuari-2023',status:true},
//     {nameTodo:'makan malam',dateTodo:'10-febuari-2023',status:true},
// ])
module.exports=todolist