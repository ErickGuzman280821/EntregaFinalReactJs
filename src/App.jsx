import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import Ofertas from './pages/Ofertas'
import Catalogo from './pages/Catalogo'
import ItemListContainer from './components/itemListContainer/itemListContainer'

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/catalogo' element={<Catalogo />}/>
        <Route path='/ofertas' element={<Ofertas />}/>
      </Routes>

      <ItemListContainer />
    </>

    
  )
}

export default App
