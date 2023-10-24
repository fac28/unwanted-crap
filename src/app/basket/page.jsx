'use client';
import Image from 'next/image';

import { BasketContext } from '@/context/basket.context';
import { useContext } from 'react';

export default function Basket() {
  const { state, dispatch } = useContext(BasketContext);

  return (
    <div className="basket">
      <h2>Your Basket</h2>
      <div className="card">
        {state.articles.map((product) => (
          <div key={product.id}>
            <Image
              priority
              src={product.image}
              width={100}
              height={100}
              alt={product.name}
            />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button
              onClick={() =>
                dispatch({
                  type: 'REMOVE',
                  articleName: product.name,
                })
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
              onClick={() =>
                dispatch({
                  type: 'RESET',
                })
              }
            >
              Reset
            </button>
    </div>
  );
}