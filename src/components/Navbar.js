import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const navbarStyle = {
    backgroundColor: 'green',
    color: 'blue',
    padding: '6px',
  };

  return (
    <nav style={navbarStyle} className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">OnlySneakers</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to='/'>Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Más
              </Link>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <Link className="nav-link" to='/category/1'>life style</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/category/2'>casuales</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/category/3'>deportivas</Link>
                </li>
                <li><Link to="/carrito">Carrito</Link></li>
                <li><Link className="dropdown-item" to='/Contacto'>Contacto</Link></li>
                <li><Link className="dropdown-item" to='/Informacion'>Información</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <span className="cart-icon">
          <img src="/carrito.png" alt="Carrito" />
          <span>{cartCount}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
