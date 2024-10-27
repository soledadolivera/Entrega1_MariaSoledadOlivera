// NavBar.jsx
function NavBar({ brandName, categories }) { // Aceptando props
  function CartWidget() {
    const notificationCount = 3; // Número de productos en el carrito

    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <i className="fas fa-shopping-cart"></i>
        {notificationCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '0',
            right: '0',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '0.2em 0.5em',
            fontSize: '0.8em'
          }}>
            {notificationCount}
          </span>
        )}
      </div>
    );
  }

  return (
    <nav>
      <h1>{brandName}</h1> {/* Usar prop para el nombre de la tienda */}
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li> // Renderiza categorías desde props
        ))}
      </ul>
      <CartWidget /> {/* Renderizando el CartWidget */}
    </nav>
  );
}

export default NavBar;
