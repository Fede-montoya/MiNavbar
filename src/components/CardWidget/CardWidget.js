import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";

const CardWidget = ({ cartCount }) => {
  return (
    <div className="card-widget">
      <Link to="/cart">
        <img
          src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png"
          alt="Carrito"
          style={{ width: '100px', height: '60px' }} 
        />
        <span className="item-count">{cartCount}</span>
      </Link>
    </div>
  );
};

export default CardWidget;
