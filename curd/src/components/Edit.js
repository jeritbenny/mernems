import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import {Link,useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Edit() {

  const params =useParams()
 console.log(params.id);

 const location=useNavigate()

  const[id,setId]=useState('')
const[name,setName]=useState('')
const[age,setAge]=useState('')
const[desg,setDesg]=useState('')
const[salary,setSalary]=useState('')

 // api call to server to get data of emp
  const handleFetch=async()=>{
    const result= await axios.get('http://localhost:8000/getEmp/'+params.id)
    console.log(result.data.employee);

    setId(result.data.employee.id)
    setName(result.data.employee.name)
    setAge(result.data.employee.age)
    setDesg(result.data.employee.desg)
    setSalary(result.data.employee.salary)

   

 }
 console.log(id);
    console.log(name);
    console.log(age);
    console.log(desg);
    console.log(salary);


 const handleUpdate =async(e)=>{
e.preventDefault()
//create body to share with backend

const body={
  id,
  name,
  age,
  desg,
  salary
}

//api call post update
const result= await 
axios.post('http://localhost:8000/update-employee',body)
alert(result.data.message)
location('/')
  }

  useEffect(()=>{
    handleFetch();
  },[])
  return (
    <div>
      <h1 className='text-white'>Update Employee</h1>

      <div>
      <Form>
      <Form.Group className="container mb-3" controlId="formName">
        
        <Form.Control type="text" placeholder="Enter employee name" value={name}
          onChange={(e)=>setName(e.target.value)}/>
    
      </Form.Group>

      <Form.Group className="container mb-3" controlId="formAge">
        
        <Form.Control type="text" placeholder="Enter employee age" 
       value={age}  onChange={(e)=>setAge(e.target.value)}/>
    
      </Form.Group>
      <Form.Group className="container mb-3" controlId="formDesignation">
        
        <Form.Control type="text" placeholder="Enter employee designation"
      value={desg}    onChange={(e)=>setDesg(e.target.value)}/>
    
      </Form.Group>

      <Form.Group className="container mb-3" controlId="formSalary">
        
        <Form.Control type="text" placeholder="Enter Salary" 
       value={salary}  onChange={(e)=>setSalary(e.target.value)}/>
    
      </Form.Group>
      
      <Button onClick={(e)=>handleUpdate(e)} className='btn' variant="success" type="submit" style={{marginLeft:"200px"}}>
        Update
      </Button >
      <Link to='/'><Button  className='btn' variant="danger" type="submit" style={{marginLeft:"850px"}}>
        Close
      </Button></Link>
    </Form>
      </div>
    </div>
  )
}

export default Edit