import React from 'react'
import axios from 'axios';
import User from '../components/User';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
export default function AllCustomer() {
  const [find,setFind] = useState("all");
  const [hold,setHold] = useState(true);
  const [customer,setCustomer] = useState([]);
  useEffect(()=>{
    getCustomer(find);
  },[find])
  const inputHandler = (e)=>{
    setFind(e.target.value);
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    getCustomer(find);
  }
  const getCustomer = async(finder)=>{
    try{
      let res = await axios.get(`https://billing-app-iota.vercel.app/getcustomer/${finder}`);
      res = await res.json();
      setHold(false);
      setCustomer(res.response);
    }catch(e){
      
    }
  }
  return (
    <>
    <button onClick={()=>{
      setFind("");
      getCustomer('all');
    }}>Get All User</button><br/>
    <input value={find} onChange={inputHandler} name='find'/><button onClick={submitHandler}>Search</button>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap:'wrap'}}>
      {
        hold?<marquee>Please Wait</marquee>:<>
        {
        customer.map((item)=>{
          return <User {...item}/>
        })
        }
        </>
      }
    </div>
    </>
  )
}
