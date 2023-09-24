import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import Ofertas from './pages/Ofertas'
import Catalogo from './pages/Catalogo'

function App() {

  return (
    <>
      <div className="navBar">
        <NavBar />
        <ItemListContainer greetings={"Bienvenido a Viuchek ST"}/>
      </div>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/catalogo' element={<Catalogo />}/>
        <Route path='/ofertas' element={<Ofertas />}/>
      </Routes>
    </>
  )
}

export default App
