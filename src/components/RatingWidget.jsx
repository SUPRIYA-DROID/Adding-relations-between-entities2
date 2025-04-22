// src/components/RatingWidget.jsx
import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
    } else {
      alert("Please select a rating between 1 and 5.");
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            cursor: 'pointer',
            color: (hoveredRating || rating) >= star ? 'gold' : 'gray',
            fontSize: '1.5rem',
          }}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
      <br />
      <button onClick={handleSubmit} style={{ marginTop: '0.5rem' }}>Submit Rating</button>
    </div>
  );
};

export default RatingWidget;