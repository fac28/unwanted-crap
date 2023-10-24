'use client';

import Image from 'next/image';
import { useContext } from 'react';

import { BasketContext } from '@/context/basket.context';

export const Display_products = ({ productsInfo }) => {
  const { dispatch } = useContext(BasketContext);

  const addToBasket = (product) => {
    dispatch({ type: 'ADD', article: product });
    console.log(`add product to basket`);
    console.log(product);
  };
  return (
    <div className="card">
      {productsInfo.map((product) => (
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
          <button onClick={() => addToBasket(product)}>Buy</button>
        </div>
      ))}
    </div>
  );
};
