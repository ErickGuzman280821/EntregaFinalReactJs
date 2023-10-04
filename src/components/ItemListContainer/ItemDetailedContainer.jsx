import React, { useState, useEffect } from 'react'
import ItemDetailed from './ItemDetailed'
import useFetchApi from '../../hooks/useFetchApi'

const ItemDetailedContainer = ( { id } ) => {
  
  const [item] = useFetchApi(`https://fakestoreapi.com/products/${id}`)
  
    return (
      <>
          {
            item != null && <ItemDetailed item={item}/>
          }
      </>
    )
  }

export default ItemDetailedContainer