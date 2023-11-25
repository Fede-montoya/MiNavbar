import React from 'react'

import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({item}) => {
  return (
    <div className='row'>
      <div className='col-md4 offset-md4'>
      <img src={item.image_url} className='card-fluid' alt={item.name}/>
      <h2>{item.name}</h2>
      <p>${item.price}</p>
      <p>{item.description}</p>
      <p>{item.category}</p>
      </div>
        
    </div>
  )
}

export default ItemDetail