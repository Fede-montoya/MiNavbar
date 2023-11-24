import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';
import ItemCart from '../CartContext/CartContext';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
 
  if (cart.length === 0) {
    return (
      <>
  <p style={{ fontSize: '26px' }}>No hay elementos en el carrito</p>
  <Link to="/" style={{ fontSize: '22px', textDecoration: 'underline ' }}>
    Comprar + Zapas
  </Link>
</>

    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: $ {totalPrice()}</p>
   
      <Link to="/checkout">
        {' '}
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </>
  );
};

export default Cart;