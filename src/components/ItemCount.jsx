import React, { useState } from 'react'
import "./ItemListContainer/ItemListContainer.css"

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (

    <div>
        
        <div className="item-count">
            <button onClick={handleRestar}className='button-count'>-</button>
            <p className='button-count'>{cantidad}</p>
            <button onClick={handleSumar}className='button-count'>+</button>
            <button onClick={handleAgregar}className='Agregar-al-carrito'>Agregar al carrito</button>
        </div>
    </div>

  )
}

export default ItemCount