import React from "react";

import { MycartContext } from "../Context/CartContext";
import { useContext } from "react";

export default function AddcartBtn({ MyProduct, size }) {
  let { addtocart } = useContext(MycartContext);
  let CartAdd = () => {
    let [SelectedPrd] = MyProduct;

    let { id, name, price, image } = SelectedPrd;
    let UserSelectedPrd = {
      id,
      name,
      price,
      SelectedSize: size,
      image,
      Quantity: 1,
    };

    addtocart(UserSelectedPrd, size);
  };

  return (
    <>
      <button
        className="border border-black px-2 p-2 w-28 bg-gray-400 hover:bg-white font-semibold"
        onClick={() => CartAdd()}
      >
        Add to Cart
      </button>
    </>
  );
}
