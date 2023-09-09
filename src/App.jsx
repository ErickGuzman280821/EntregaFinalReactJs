import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {

  return (
    <>
      <div className="navBar">
        <NavBar />
        <ItemListContainer greetings={"Bienvenido a Viuchek ST"}/>
      </div>

    </>
  )
}

export default App
