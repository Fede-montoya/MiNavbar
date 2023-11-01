import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './Paginas/Inicio';
import Destacados from './Paginas/Destacados';
import Contacto from './Paginas/Contacto';
import Info from './Paginas/Info';
import ProductCard from './components/ProductCard';
import Carrito from './components/carrito';
import CategoryList from './components/CategoryList';
import productsData from './products.json';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [carritoItems, setCarritoItems] = useState([]);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const addToCarrito = (product) => {
    setCarritoItems([...carritoItems, product]);
  };

  
  const categories = [
    { id: 1, name: 'life style' },
    { id: 2, name: 'casuales' },
    { id: 3, name: 'deportivas' },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Destacados' element={<Destacados />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Info' element={<Info />} />
          <Route path="/carrito" element={<Carrito carritoItems={carritoItems} />} />
        </Routes>
      </BrowserRouter>

      <h1>Tienda de Zapatillas</h1>

      {/* Pasa el arreglo de categorías al componente CategoryList */}
      <CategoryList categories={categories} />

      <div className="product-container">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToCarrito={addToCarrito}
          />
        ))}
      </div>

      <div className="cart">
        <p>Carrito: {cartCount} productos</p>
      </div>
    </div>
  );
}

export default App;
