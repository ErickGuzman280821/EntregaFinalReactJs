import { createContext, useState } from "react";


export const CartContext = createContext() || {};

export const CartProvider = ({children}) => {

    const agregarAlCarrito = (item, cantidad) => {
        const agregado = {...item, cantidad};
    
        const carritoNuevo = [...carrito];
        const estaAgregado = carrito.find((producto) => producto.id === agregado.id);
    
        if (estaAgregado) {
          estaAgregado.cantidad += cantidad;
        } else {
          carritoNuevo.push(agregado);
        };
        
        setCarrito(carritoNuevo);
    
      }
    
      const [carrito, setCarrito] = useState([]);
    
    
      const numeroDelCarrito = () => {
        return carrito.reduce((acc, item) => acc + item.cantidad, 0);
      }
    
      const precioTotal = () => {
        return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
      }
    
      const vaciarCarrito = () => {
        setCarrito([]);
      }

      return (
      <CartContext.Provider value={ {carrito, agregarAlCarrito, numeroDelCarrito, precioTotal, vaciarCarrito} }>
            {children}
      </CartContext.Provider>
      )
}