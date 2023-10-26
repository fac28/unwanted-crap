'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

//Generating unique keys
const { v4: uuidv4 } = require('uuid');

export const Display_products = ({ productsInfo }) => {

  const [searchText, setSearchText] = useState('');


  const filteredProducts = productsInfo.filter((product) => {
    const regex = new RegExp(searchText, 'i'); // 'i' makes the search case-insensitive
    return regex.test(product.name);
  });

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="🔎         Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="card">
        {filteredProducts.map((product, index) => (
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
