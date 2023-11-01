function ProductCard({ product, addToCart, addToCarrito }) {
  const handleAddToCart = () => {
    addToCart(product);
    addToCarrito(product);
  };

  return (
    <div className="card">
      <img
        src={product.image_url}
        alt={product.name}
        style={{ maxWidth: '500px', maxHeight: '500px' }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button
        onClick={handleAddToCart}
        style={{ fontSize: '16px', padding: '10px 20px' }} 
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default ProductCard;
