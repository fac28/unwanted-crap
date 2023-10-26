import React from 'react';

const { v4: uuidv4 } = require('uuid');

const Basket = ({ basket }) => {
  return (
    <div className="basket">
      <h2>Your Basket</h2>
      <ul>
        {basket.map((item) => (
          <li key={uuidv4()}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Basket;
