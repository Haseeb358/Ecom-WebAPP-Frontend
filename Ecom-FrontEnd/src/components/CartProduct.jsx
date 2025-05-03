import React from "react";
import { MycartContext } from "../Context/CartContext";
import { useContext } from "react";
import bin_icon from "../assets/bin_icon.png";
export default function CartProduct({ item }) {
  let { addtocart, removeFromCart } = useContext(MycartContext);
  return (
    <>
      <div className="grid grid-cols-4 gap p-2 border" key={item.id}>
        <div className="col-span-2  flex justify-start">
          <div className="flex gap-3 items-start justify-center">
            <img src={item.image[0]} alt="" className="w-16" />
            <div className=" flex flex-col gap-3 justify-start items-center smd:items-start">
              <h1 className="text-sm smd:text-lg smd:font-bold">{item.name}</h1>
              <div className="flex gap-5 items-center">
                <p>${item.price}</p>
                <p className="border border-black px-2 py-1">
                  {item.SelectedSize}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1  flex justify-center items-center">
          <div className="flex items-center justify-center gap-3">
            <button
              disabled={item.Quantity > 1 ? false : true}
              className="border-2 px-2  "
              onClick={() => removeFromCart(item, item.SelectedSize, false)}
            >
              -
            </button>
            <span>{item.Quantity}</span>
            <button
              className="border-2 px-2  "
              onClick={() => addtocart(item, item.SelectedSize)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-span-1  flex justify-center items-center">
          <img
            src={bin_icon}
            alt=""
            className="w-6 cursor-pointer"
            onClick={() => removeFromCart(item, item.SelectedSize, true)}
          />
        </div>
      </div>
    </>
  );
}
