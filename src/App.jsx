import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Project 2: Katalog E-Commerce</h1>
        <p>Data from fake api store</p>
      </header>

      {loading ? (
        <div className="loading">Memuat daftar produk...</div>
      ) : (
        <div className="card-grid">
          {products.map(product => (
            <div className="card" key={product.id}>
              {/* Menampilkan Gambar Produk */}
              <div className="image-container">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              
              <div className="card-info">
                
                <h2>{product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title}</h2>
                <p className="price">$ {product.price}</p>
                <span className="badge">{product.category}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;