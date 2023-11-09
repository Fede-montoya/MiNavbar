import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const navbarStyle = {
    backgroundColor: 'black',
    color: 'blue',
    padding: '20px',
  };

  return (
    <nav style={navbarStyle} className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
       <li><Link to="/">OnlySneakers</Link>
       </li>
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

            
                
              <li><Link className="dropdown-item" to='/category/Life-Style'>Life-Style</Link></li>


              <li><Link className="dropdown-item" to='/category/Casuales'>Casuales</Link></li>
              
              
              <li><Link className="dropdown-item" to='/category/Deportivas'>Deportivas</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <span className="cart-icon">
         <img src="../carrito.png" alt="Carrito" style={{ width: '32px', height: '32px' }} />
          <span>{cartCount}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
