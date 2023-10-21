import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'
import Categorias from './pages/Categorias'
import VerDetalles from './pages/VerDetalles'
import { useState } from 'react'
import { CartContext } from './context/CartContext'

function App () {

  const [carrito, setCarrito] = useState([]);

  return (
    <div>
      <NavBar />
      <CartContext.Provider value={ {carrito, setCarrito} }>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/category/:categoryId' element={<Categorias />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path="/detalle/:id" element={<VerDetalles />}/>
      </Routes>
      </CartContext.Provider>

    </div>
    
  )
}

export default App
