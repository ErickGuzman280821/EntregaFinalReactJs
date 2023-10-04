import React, { useEffect } from 'react'


const ItemDetailed = ({ item }) => {

  return (

    <div>
        
        <h2>{item.title}</h2>

        <img src={item.image}/>

        <h3>Precio : {item.price}</h3>

        <p>Descipcion: {item.description}</p>

        <p>Categoria: {item.category}</p>

    </div>
  )
}

export default ItemDetailed