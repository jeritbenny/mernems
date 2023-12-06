import React from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function Admin() {

const[allemployees,setAllEmployees]=useState([])

const fetchData = async()=>{
  const result = await axios.get('http://localhost:8000/get-all-employees')
  // console.log(result.data.employees);
  setAllEmployees(result.data.employees)
}
console.log(allemployees);

useEffect(()=>{
  fetchData()
},[])

const handleDelete=async(id)=>{
  const result = axios.delete('http://localhost:8000/delete-employee/'+id)
  alert((await result).data.message)
  fetchData()
  }

  return (
    <div>
        <Link to='/add'>
        <a className='btn btn-success ms-5'><i class="fa-solid fa-user-plus"></i>Add User</a></Link>
   <div className='contaier mt-5 table '>
   <Table striped bordered hover variant="dark" className='contaier'>
      <thead>
        <tr>
          <th>#</th>
          <th> id</th>
          <th> Name</th>
          <th>Age</th>
          <th>Desigation</th>
          <th> Salary</th>
          <th>Action</th>
        
        </tr>
      </thead>
      <tbody>
        {  

allemployees?.map((item,index)=>(
  <tr>
  <td>{index+1}</td>
  <td>{item.id}</td>
  <td>{item.name}</td>
  <td>{item.age}</td>
  <td>{item.desg}</td>
  <td>{item.salary}</td>
  <td>
    <Link to={'edit/'+item.id}>
    <button className='btn btn-warning me-4 ms-5'><i class="fa-solid fa-pen-to-square"></i>
    </button></Link>
    <button onClick={(e)=>handleDelete(item.id)} className='btn btn-danger ms-5'><i class="fa-solid fa-trash"></i></button>
  </td>


</tr>
))

        
}
       
      </tbody>
    </Table>
   </div>

    </div>
  )
}

export default Admin