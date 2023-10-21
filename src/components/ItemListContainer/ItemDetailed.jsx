import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount'
import { CartContext } from '../../context/CartContext';



const ItemDetailed = ({ item }) => {

          const {carrito, setCarrito} = useContext(CartContext);
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

          const handleAgregar = () => {
            const agregado = {...item, cantidad};

            const estaAgregado = carrito.find((producto) => producto.id === agregado.id);

            if (estaAgregado) {
              console.log("Esta en el carrito")
            } else {
              console.log("No esta en el carrito")
            };
            
            setCarrito( [...carrito, agregado] );
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
            handleAgregar={handleAgregar}
        />

    </div>
  )
}

export default ItemDetailed