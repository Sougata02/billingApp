import React from 'react'

export default function Item({productName,productQuantity,productPrice}) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '200px' }}>
      <h2>Name: {productName}</h2>
      <p>Quantity: {productQuantity}</p>
      <p>Price: {productPrice}</p>
    </div>
  )
}
