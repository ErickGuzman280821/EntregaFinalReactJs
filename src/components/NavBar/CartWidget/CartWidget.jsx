import React from 'react'
import { PiShoppingCartBold } from "react-icons/pi"
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className='cart-container'>
        <PiShoppingCartBold className='cart-icon'/>
        <div className="cartwidget-number">
            0
        </div>
    </div>

  )
}

export default CartWidget