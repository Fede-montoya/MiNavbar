import React from 'react';


function Carrito({ carritoItems }) {
  const totalPrice = carritoItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      <ul>
        {carritoItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
    </div>
  );
}

export default Carrito;