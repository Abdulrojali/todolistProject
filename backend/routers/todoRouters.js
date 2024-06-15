const express = require('express')
const router= express.Router()

const {
    getTodo,
    getTodoById,
    deleteTodoById,
    updateTodoById,
    newTodo
}=require('../controllers/todoControllers')


router.get('/',getTodo)
router.post('/',newTodo)
router.get('/:id',getTodoById)
router.delete('/:id',deleteTodoById)
router.put('/:id',updateTodoById)



module.exports=router