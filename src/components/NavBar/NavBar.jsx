import React from 'react'
import CartWidget from './CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <div id='navBar'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Viuché ST</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"     data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                <a className="nav-link" href="#">Catalogo</a>
                            </li>
                        <li className="nav-item">
                <a className="nav-link" href="#">Ofertas</a>
                        </li>
                        </ul>
            <span className="navbar-icon"><CartWidget/></span>
            
    </div>
  </nav></div>
  )
}
