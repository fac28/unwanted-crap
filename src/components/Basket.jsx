import React from 'react';

const Basket = ({ basket }) => {
  return (
    <div className="basket">
      <h2>Your Basket</h2>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Basket;
