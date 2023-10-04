import React, { useState, useEffect } from 'react'
import ItemListMap from '../ItemListMap';
import { Container } from 'react-bootstrap' 
import { Row } from 'react-bootstrap';
import useFetchApi from '../../hooks/useFetchApi';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const category = useParams().categoryId

  const [items] = useFetchApi(category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products')

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