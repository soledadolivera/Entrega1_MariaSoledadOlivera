import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const brandName = "Venta de Libros"; // Nombre de la tienda
  const categories = ["Romance", "Ficción", "Autoayuda"]; // Ejemplo de categorías
  const products = [ // Ejemplo de productos
    { id: 1, title: "Libro A", price: 20 },
    { id: 2, title: "Libro B", price: 25 },
    { id: 3, title: "Libro C", price: 30 },
  ];

  return (
    <div>
      <NavBar brandName={brandName} categories={categories} /> {/* Pasando props a NavBar */}
      <ItemListContainer text="Bienvenido a nuestra tienda" products={products} /> {/* Pasando props a ItemListContainer */}
    </div>
  );
}

export default App;
