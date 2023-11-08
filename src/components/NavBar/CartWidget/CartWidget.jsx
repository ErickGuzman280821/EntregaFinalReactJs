import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const CartWidget = () => {

  const { numeroDelCarrito } = useContext(CartContext)

  return (
    <div>
      <Link className="nav-link" to="/carrito">
        Carrito
        <span className='numero-de-carrito'> {numeroDelCarrito()} </span>
      </Link>
    </div>
  )
}

export default CartWidget