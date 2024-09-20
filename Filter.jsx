import React, { useState } from 'react';
import './CSS/Everything.css';

const Filter = ({price, onPriceChange}) => {
 
  const handlePriceChange = (e) => {
    onPriceChange(e.target.value);
  };

  return (
    <div className="filter">
      <h3>Filter by price</h3>
      <input
        type="range"
        min="10"
        max="40"
        value={price}
        onChange={handlePriceChange}
        className="price-slider"
      />
      <div className="price-labels">
        <span>£10</span>
        <span>£{price}</span>
      </div>
    </div>
  );
};

export default Filter;
