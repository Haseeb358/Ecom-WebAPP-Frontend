import React, { useState } from "react";

import { products } from "../Data/Data";
import ProductCard from "./ProductCard";
export default function BestSeller() {
  // console.log(products);

  let BestSellerprd = products.filter((item) => item.bestseller === true);

  return (
    <div className=" p-2">
      <div className="flex items-center justify-center">
        <h1 className="border-2 p-1 text-2xl m-2">BEST SELLERS</h1>
      </div>
      <div className="grid grid-cols-1 place-items-center p-3 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {BestSellerprd.map((prd) => (
          <ProductCard prd={prd} key={prd.id} />
        ))}
      </div>
    </div>
  );
}
