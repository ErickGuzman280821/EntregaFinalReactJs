import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'
import Categorias from './pages/Categorias'

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/categorias' element={<Categorias />}/>
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>

    </>
    
  )
}

export default App
