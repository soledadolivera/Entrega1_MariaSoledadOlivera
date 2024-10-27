// ItemListContainer.jsx
function ItemListContainer({ text, products }) { // Aceptando props para productos
  return (
    <div>
      <h2>{text}</h2> {/* Renderiza el texto pasado como props */}
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>Precio: ${product.price}</p>
            <button>Agregar al carrito</button> {/* Botón para agregar al carrito */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
