import React, { useState, useEffect } from 'react'
import ItemListMap from '../ItemListMap';
import { Container } from 'react-bootstrap' 
import { Row } from 'react-bootstrap';
import useFetchApi from '../../hooks/useFetchApi';


const ItemListContainer = () => {

  const [items] = useFetchApi('https://fakestoreapi.com/products')

  return (
    <Container>
        <Row>
              {
                items !== null && 
                <ItemListMap items={items}/>
              }
        </Row>
    </Container>
  )
}

export default ItemListContainer