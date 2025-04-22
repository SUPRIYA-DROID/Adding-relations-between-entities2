// src/components/ProductCard.jsx
import React from 'react';
import RatingWidget from './RatingWidget';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="card" style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
      <img src={product.image} alt={product.name} width="300" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>⭐ {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;