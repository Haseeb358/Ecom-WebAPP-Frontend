import React, { useState, useContext } from "react";
import { MycartContext } from "../Context/CartContext";

import CartProduct from "../components/CartProduct";
export default function Cart() {
  let { cartArray } = useContext(MycartContext);

  return (
    <div className="mt-20 border-2 mb-4 p-3">
      <h1 className="text-2xl font-semibold">My cart</h1>
      {cartArray.length > 0 ? (
        <div className="grid grid-cols-1 gap-2   mt-3">
          {cartArray.map((item) => (
            <CartProduct item={item} key={item.id + item.SelectedSize} />
          ))}
        </div>
      ) : (
        <p className="text-lg m-3">Cart is empty</p>
      )}
      <div className="mt-8   p-2">
        <div className=" flex items-center justify-end">
          <div className="flex flex-col items-start gap-5 border-2 border-black p-4">
            <h1 className="text-lg font-semibold">Order summary</h1>
            <div className="flex justify-between items-center gap-10">
              <span>Total Items:</span>
              <span>
                {cartArray.reduce((res, val) => {
                  res = val.Quantity + res;
                  return res;
                }, 0)}
              </span>
            </div>
            <div className="flex justify-between items-center gap-10 ">
              <span>Total Bill:</span>
              <span>
                {cartArray.reduce((res, val) => {
                  res = val.price * val.Quantity + res;
                  return res;
                }, 0)}
              </span>
            </div>
            <button className="border-2 border-green-400 p-2 font-semibold hover:bg-blue-gray-100">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
