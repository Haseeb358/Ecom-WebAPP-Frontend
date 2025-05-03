import React, { createContext } from "react";

//import { products } from "../assets/assets";
import { products } from "../Data/Data";
export const productsContext = createContext();

export default function ProductsContext({ children }) {
  let data = {
    products,
  };

  return (
    <>
      <productsContext.Provider value={data}>
        {children}
      </productsContext.Provider>
    </>
  );
}
