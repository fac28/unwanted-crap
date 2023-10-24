'use client'

import Basket from "@/app/basket/page";
import Image from "next/image"
import { useState, useEffect } from 'react';


export const Display_products = ({ productsInfo }) => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
      setBasket([...basket, product]);
    }
    console.log(basket)
  return (
    <div className="card">
      {productsInfo.map((product) => (
        <div key={product.id}>
          <Image priority src={product.image} width={100} height={100} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => addToBasket(product)}>Buy</button>
        </div>
      ))}
    </div>
  );
}
