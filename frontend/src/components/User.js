import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function User({name,address,phone,_id}) {
  const navigate = useNavigate();
  const openUser = async()=>{
    try{
      let res = await fetch(`https://billing-app-iota.vercel.app/setuser/${_id}`);
      let res2 = await fetch(`https://billing-app-iota.vercel.app/settodaysbill/${_id}`)
      res2 = await res2.json();
      console.log(res2);
      navigate('/customerpage');
    }catch(e){
      console.log(e.message);
    }
  }
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '200px' }}>
      <h2>Name: {name}</h2>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
      <button onClick={openUser}>Go to Dashboard</button>
    </div>
  )
}
