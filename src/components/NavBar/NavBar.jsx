import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div id='navBar'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Viuché ST</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"     data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                <Link className="nav-link" to="/">Inicio<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                <Link className="nav-link" to="/categorias">Categorias</Link>
                            </li>
                        <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                        </ul>
            <span className="navbar-icon"><CartWidget/></span>
            
    </div>
  </nav></div>
  )
}
