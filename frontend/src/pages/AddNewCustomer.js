import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './addcustomer.css'
export default function AddNewCustomer({setCurrentUser}) {
  const [data,setData] = useState({name:"",address:"",phone:""});
  const navigate = useNavigate();
  const inputHandler = (e)=>{
    const {name,value} = e.target;
    setData({
      ...data,
      [name]:value
    })
  }
  const submitHandler = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post('https://billing-app-iota.vercel.app/addcustomer', data, {
       headers: {
      'Content-Type': 'application/json'
      }
      });
      res = await res.json();
      if(res.success==true){
        setData({name:"",address:"",phone:""});
        await fetch(`https://billing-app-iota.vercel.app/setuser/${res.response._id}`);
        alert("Customer added!!");
      }else{

      }
    }catch(e){
      alert(e);
    }
  }
  return (
    <div class="container">
    <h2>ADD NEW CUSTOMER</h2>
    <form id="myForm" onSubmit={submitHandler}>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" value={data.name} required onChange={inputHandler}/>
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" id="address" name="address" required value={data.address} onChange={inputHandler}/>
      </div>
      <div class="form-group">
        <label for="phone">Phone No</label>
        <input type="text" id="phone" name="phone" required value={data.phone} onChange={inputHandler}/>
      </div>
      <div class="form-group">
        <input type="submit" value="Submit"/>
      </div>
    </form>
  </div>
  )
}
