'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { BasketContext } from '@/context/basket.context';
import Link from 'next/link';
//Generating unique keys
const { v4: uuidv4 } = require('uuid');

export const Display_products = ({ productsInfo }) => {
  const { dispatch } = useContext(BasketContext);

  const addToBasket = (product) => {
    dispatch({ type: 'ADD', article: product });
  };
  return (
    <div className="card">
      {productsInfo.map((product, index) => (
        <Link key={uuidv4()} href={`/products/${index + 1}`}>
          <div className="card-product">
            <Image
              priority
              src={product.image}
              width={100}
              height={100}
              alt={product.name}
            />
            <div className="card-product-infos">
              <h2>{product.name}</h2>
              <p>£{product.price}</p>
              <button onClick={() => addToBasket(product)}>
                Buy
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
