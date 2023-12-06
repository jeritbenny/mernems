import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import {Link,useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios';
function Add() {

const[id,setId]=useState('')
const[name,setName]=useState('')
const[age,setAge]=useState('')
const[desg,setDesg]=useState('')
const[salary,setSalary]=useState('')

const location=useNavigate()

useEffect(()=>{
  setId(uuid().slice(0,3));
},[])

const handleAdd= async(e)=>{
  e.preventDefault()
  setId(uuid().slice(0,3));

//creating body to share with backend
const body={
  id,
  name,
  age,
  desg,
  salary
}
console.log(body);


//api call
const result = await axios.post('http://localhost:8000/add-employee',body)
alert(result.data.message);
location('/')
}



  return (
    <div>
      <h1 className='text-white'>Add new employee</h1>

      <div>
      <Form>
      <Form.Group className="container mb-3" controlId="formName">
        
        <Form.Control type="text" placeholder="Enter employee name" 
        onChange={(e)=>setName(e.target.value)}/>
    
      </Form.Group>

      <Form.Group className="container mb-3" controlId="formAge">
        
        <Form.Control type="text" placeholder="Enter employee age" 
        onChange={(e)=>setAge(e.target.value)}/>
    
      </Form.Group>
      <Form.Group className="container mb-3" controlId="formDesignation">
        
        <Form.Control type="text" placeholder="Enter employee designation"
        onChange={(e)=>setDesg(e.target.value)} />
    
      </Form.Group>

      <Form.Group className="container mb-3" controlId="formSalary">
        
        <Form.Control type="text" placeholder="Enter Salary" 
        onChange={(e)=>setSalary(e.target.value)}/>
    
      </Form.Group>
      
      <Button onClick={(e)=>handleAdd(e)} className='btn' variant="success" type="submit" style={{marginLeft:"200px"}}>
        Add
      </Button >
      <Link to='/'><Button  className='btn' variant="danger" type="submit" style={{marginLeft:"850px"}}>
        Close
      </Button></Link>
    </Form>
      </div>
    </div>
  )
}

export default Add