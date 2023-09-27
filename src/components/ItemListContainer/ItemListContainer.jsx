import React, {useState, useEffect} from 'react'
import ItemListMap from '../ItemListMap';
import fetchApi from '../../hooks/fetchApi';
import { Container, Row } from 'react-bootstrap';


const ItemListContainer = () => {

  const [items] = fetchApi('https://fakestoreapi.com/products');

  return (
    <Container>
        <Row>
              {items !== null && <ItemListMap items={items}/>}
        </Row>
    </Container>
  )
}

export default ItemListContainer