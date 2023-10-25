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
  console.log(productsInfo);
  return (
    <div className="card">
      {productsInfo.map((product, index) => (
        <div key={uuidv4()}>
          <Link href={`/products/${index + 1}`}>
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
          </Link>

        </div>
      ))}
    </div>
  );
};
