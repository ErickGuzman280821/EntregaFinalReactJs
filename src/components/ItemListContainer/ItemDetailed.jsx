import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount'
import { CartContext } from '../../context/CartContext';



const ItemDetailed = ({ item }) => {

          const {carrito, agregarAlCarrito} = useContext(CartContext);
          console.log(carrito);

          const [cantidad, setCantidad] = useState(1);

          const handleRestar = () => {
              cantidad > 1 && setCantidad(cantidad - 1)
          }

          const handleSumar = () => {
            if (cantidad < 10) {
              setCantidad(cantidad + 1);
            }
          }


  return (

    <div>
        
        <h2>{item.title}</h2>

        <img src={item.image}/>

        <h3>Precio : {item.price}</h3>

        <p>Descipcion: {item.description}</p>

        <p>Categoria: {item.category}</p>

        <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => { agregarAlCarrito (item, cantidad) }}
        />

    </div>
  )
}

export default ItemDetailed