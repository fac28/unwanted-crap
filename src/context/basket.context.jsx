"use client";

import { createContext, useReducer } from "react";

const initialBasket = {
  articles: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, articles: [...state.articles, action.article] };
    case "REMOVE":
      return { ...state, articles: state.articles.filter(article => article["name"] != action.articleName) };
    case "RESET":
      return {articles: [] };
    default:
      return state;
  }
};

export const BasketContext = createContext({ state: initialBasket, dispatch: () => null });

export const BasketContextProvider = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialBasket);

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};
