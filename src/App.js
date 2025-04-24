import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Link from './components/Link';
import Layout from './components/Layout';
import { products } from './components/menuData';
import Mac from './components/Mac';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/mac" element={<Mac />} />
        </Routes>
        <Card />
        <Link />
        <Mac />

        <div className="products-container">
          <h2>Products</h2>
          <div className="products-list">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <h3>{product.value.items[0].value.cardType.contentCard.contentStoreCard.headline}</h3>
                <img
                  src={product.value.items[0].value.cardType.contentCard.contentStoreCard.cardImage.srcSet.src}
                  alt={
                    product.value.items[0].value.cardType.contentCard.contentStoreCard.cardImage.alt ||
                    'Product Image'
                  }
                  width="200"
                  height="130"
                />
                <a
                  href={product.value.items[0].value.cardType.contentCard.contentStoreCard.textLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;