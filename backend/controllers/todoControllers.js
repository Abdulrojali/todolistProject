const todolist = require('../models/todo')


const getTodo=async(req,res)=>{
    try{
        const getTodo = await todolist.find({})
        if(getTodo){
            res.status(200).send(getTodo)
        }
        else{
            res.status(500).send('error not get todo')
        }
    }
    catch(err){
        throw new Error(err)
    }
}
const getTodoById=async(req,res)=>{
    try{
        const {id} = req.params
        const getTodoBYid=await todolist.findById(id)
        if(getTodoBYid){
            res.status(200).send(getTodoBYid)
        }
        else{
            res.status(500).send('not found id')
        }
    }
    catch(err){
    throw new Error(err)
    }
}
const deleteTodoById=async(req,res)=>{
    try{
        const {id} = req.params
        const deleteTodo=await todolist.findByIdAndDelete(id)
        res.status(200).send(deleteTodo)
    }
    catch(err){
        throw new Error(err)
    }
}

const updateTodoById=async(req,res)=>{
    try{
        const {id}=req.params
        const updateData=await todolist.findByIdAndUpdate(id,req.body,{run:true})
        res.status(200).send(updateData)
    }
    catch(err){
        throw new Error(err)
    }
}
const newTodo=async(req,res)=>{
    try{
        const newTodo=await new todolist(req.body)
        if(newTodo){
            newTodo.save()
            res.status(200).send('sukses to add new todo')
        }
        else{
            res.status(500).send('failed to add new todo')
        }
    }
    catch(err){
        res.status(404)
        throw new Error(err)
    }
}
module.exports={
    getTodo,
    getTodoById,
    deleteTodoById,
    updateTodoById,
    newTodo
}