import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({greetings}) => {
  return (
    <div className='greetings-container'>
        <h2>{greetings}</h2>
    </div>
  )
}

export default ItemListContainer