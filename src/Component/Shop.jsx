import React from 'react';
import './Shop.css'; // Import the stylesheet

const products = [
  {
    id: 1,
    name: "Classic Rose Perfume",
    price: "$49.99",
    description: "A timeless fragrance that embodies the elegance of roses.",
    imageUrl: "https://images.pexels.com/photos/28448335/pexels-photo-28448335/free-photo-of-train-passing-through-narrow-street-in-hanoi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" // Replace with your image path
  },
  {
    id: 2,
    name: "Ocean Breeze Perfume",
    price: "$39.99",
    description: "A refreshing scent inspired by the sea.",
    imageUrl: "https://images.pexels.com/photos/19230245/pexels-photo-19230245/free-photo-of-children-having-fun-on-a-playground.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image path
  },
  {
    id: 3,
    name: "Vanilla Dream Perfume",
    price: "$44.99",
    description: "A warm and comforting fragrance with vanilla notes.",
    imageUrl: "https://images.pexels.com/photos/19224336/pexels-photo-19224336/free-photo-of-market-stalls-in-street-of-palermo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" // Replace with your image path
  },
  {
    id: 4,
    name: "Vanilla Dream Perfume",
    price: "$44.99",
    description: "A warm and comforting fragrance with vanilla notes.",
    imageUrl: "https://images.pexels.com/photos/16949266/pexels-photo-16949266/free-photo-of-little-sisters-holding-arms-around-each-other-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image path
  },
  {
    id: 5,
    name: "Vanilla Dream Perfume",
    price: "$44.99",
    description: "A warm and comforting fragrance with vanilla notes.",
    imageUrl: " https://images.pexels.com/photos/20453590/pexels-photo-20453590/free-photo-of-peruvian-girls-wearing-traditional-clothing-walking-under-festive-decoration.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image path
  },
  {
    id: 5,
    name: "Vanilla Dream Perfume",
    price: "$44.99",
    description: "A warm and comforting fragrance with vanilla notes.",
    imageUrl: " https://images.pexels.com/photos/15877016/pexels-photo-15877016/free-photo-of-young-girls-reading-a-book-in-darkness.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image path
  }, {
    id: 5,
    name: "Vanilla Dream Perfume",
    price: "$44.99",
    description: "A warm and comforting fragrance with vanilla notes.",
    imageUrl: " https://images.pexels.com/photos/19230071/pexels-photo-19230071/free-photo-of-kids-standing-with-balloons-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image path
  }
];

const Shop = () => {
  return (
    <div className="shop-container">
      <h1 className="shop-title">Shop Our Perfumes</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
