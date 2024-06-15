const express =require('express')
const cors= require('cors')
const morgan = require('morgan')
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extends:true}))

app.use('/todolist',require('./routers/todoRouters'))

app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})
