import React from 'react'
import Tarjetas from './ItemListContainer/Tarjetas';
import { Col } from 'react-bootstrap';

const ItemListMap = ({ items }) => {
    return (
    <>
        {items.map((item) => (
          <Col md={4} lg={4} sm={12} key={item.id}>
            <Tarjetas item={item} />
          </Col>
        ))}
      </>
    );
  };

export default ItemListMap