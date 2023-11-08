import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'
import Categorias from './pages/Categorias'
import VerDetalles from './pages/VerDetalles'
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito'

function App () {

  return (
    <div>
      <NavBar />
      <CartProvider>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/category/:categoryId' element={<Categorias />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path="/detalle/:id" element={<VerDetalles />}/>
        <Route path="/carrito" element={<Carrito />}/>
      </Routes>
      </CartProvider>
    </div>
  )
}

export default App
