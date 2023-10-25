'use client'

import { BasketContext } from '@/context/basket.context';
import { useContext } from 'react';

const { v4: uuidv4 } = require('uuid');

export const Add_item_basket = ({product}) => {
    const { dispatch } = useContext(BasketContext);


    const addToBasket = (product) => {
        dispatch({ type: 'ADD', article: product });
      };

    return (
        <>
        <button key={uuidv4()} onClick={() => addToBasket(product)}>Add to basket</button>
        </>
    )
}