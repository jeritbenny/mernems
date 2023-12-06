const express= require('express')
const server= express()
const logic = require('./services/logic')
const cors= require('cors')
server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000,()=>{
    console.log('Ems server started at port 8000');
})


//get all api

server.get('/get-all-employees',(req,res)=>{
    logic.allEmployee()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//add emplyee from frontend
server.post('/add-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age ,req.body.desg,req.body.salary)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//delete an employee from api
server.delete('/delete-employee/:id',(req,res)=>{
    logic.removeEmp(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//get api
server.get('/getEmp/:id',(req,res)=>{
    logic.getEmp(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//update emplyee from frontend
server.post('/update-employee',(req,res)=>{
    logic.update(req.body.id,req.body.name,req.body.age ,req.body.desg,req.body.salary)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

