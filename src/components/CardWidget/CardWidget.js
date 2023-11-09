import React from 'react';
import { Link } from 'react-router-dom';

const CardWidget = ({ cartCount }) => {
  return (
    <div className="card-widget">
      <Link to="/cart">
        <img src="../carrito.png" alt="Carrito" />
        <span className="item-count">{cartCount}</span>
      </Link>
    </div>
  );
};

export default CardWidget;
 