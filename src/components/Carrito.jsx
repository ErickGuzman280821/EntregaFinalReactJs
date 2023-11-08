import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext) || {};

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className='container'>
        <h1 className='carrito-title'>Carrito</h1>

        {
            carrito.map((item) => (
                <div key={item.id}>
                <h3>{item.title}</h3>
                <p>Precio unidad: ${item.price}</p>
                <p>Precio total: ${item.price * item.cantidad}</p>
                <p>Cantidad: {item.cantidad}</p>
                </div>
            ))
        }

        { 
            carrito.length > 0 ?
                <>
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>Vaciar</button>
                </> :
                <h2>El carrito esta vacio:( </h2>
        }

    </div>
  )
}

export default Carrito