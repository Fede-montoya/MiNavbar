import { useState } from 'react';
import { useCartContext } from '../CartContext/CartContext';
import './CheckOut.css'
import { createOrder } from '../Firebase/firebaseServices';
import React from 'react';


export const Checkout = () => {
  const [user, setUser] = useState({});
  const [orderNumber, setOrderNumber] = useState(null);
  const { cart } = useCartContext()
  const formRef = React.createRef(); 
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInput = ({target}) =>{
    setUser(currentValue =>{
      currentValue[target.name] = target.value
      return currentValue
    })
  }

  const handleSubmit = async (event) =>{
    event.preventDefault()
    
    const buy = (cart, user)
    const order = await createOrder(buy);
    setOrderNumber(order);
    //resetear form
    formRef.current.reset();
    setUser({});
    setFormSubmitted(true);
  }
return(
    <div>
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <label> EMAIL: </label>
        <br />
        <input type="email" name="email" placeholder="pepito10@gmail.com" value={user.email} onChange={handleInput} />
        <br />
        <label>NOMBRE Y APELLIDO:</label>
        <br /> 
        <input type="text" name="username" placeholder="Pepito Fernandez" value={user.username} onChange={handleInput} />
        <br />
        <label>TELEFONO:</label>
        <br />
        <input type="number" name="tel" placeholder="11 2401-9274" value={user.tel} onChange={handleInput} />
        <br />
        <button type="submit" className="buttonConfirm" onSubmit={handleSubmit}>Confirmar compra</button>
      </form>
      {/* Mostrar el número de orden si está disponible */}
      {formSubmitted && orderNumber && (
        // Mostrar el número de orden si está disponible
        <div className="orderNumber">
          <p>Número de orden: {orderNumber}</p>
        </div>
      )}
     
    </div>
   
)
      };