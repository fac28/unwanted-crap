"use client"

import { BasketContext } from '@/context/basket.context';
import { useContext } from 'react';

export default function Basket() {
  const { state } = useContext(BasketContext);
  return (
    <div className="basket">
      <h2>Your Basket</h2>
      <ul>
        {state.articles.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      {/* <ul>
                {basket.map((item, index) => (
                <li key={index}>{item.name}</li>
                ))}
            </ul> */}
    </div>
  );
}
