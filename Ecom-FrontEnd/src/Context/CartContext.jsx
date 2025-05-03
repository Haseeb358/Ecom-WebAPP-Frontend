import React from "react";
import { useState, createContext } from "react";

export let MycartContext = createContext("");

export default function CartContext({ children }) {
  let [cartArray, SetcartArray] = useState([]);

  let addtocart = (SelectedPrd, SelectedSize) => {
    let CopycartArray = [...cartArray];
    let addatIndex = CopycartArray.findIndex(
      (item) => item.id === SelectedPrd.id && item.SelectedSize === SelectedSize
    );
    console.log("index", addatIndex);

    if (addatIndex === -1) {
      CopycartArray.push(SelectedPrd);
      SetcartArray(CopycartArray);
    } else {
      let SizeCheck = CopycartArray[addatIndex].SelectedSize === SelectedSize;
      console.log(SizeCheck);
      if (SizeCheck) {
        CopycartArray[addatIndex].Quantity =
          CopycartArray[addatIndex].Quantity + 1;
        SetcartArray(CopycartArray);
      } else {
        CopycartArray.push(SelectedPrd);
        SetcartArray(CopycartArray);
      }
    }
  };

  let removeFromCart = (SelectedPrd, SelectedSize, flag) => {
    let CopycartArray = [...cartArray];

    let Delindex = CopycartArray.findIndex(
      (item) => item.id === SelectedPrd.id && item.SelectedSize === SelectedSize
    );

    if (flag) {
      CopycartArray.splice(Delindex, 1);
      SetcartArray(CopycartArray);
    } else {
      CopycartArray[Delindex].Quantity = CopycartArray[Delindex].Quantity - 1;
      SetcartArray(CopycartArray);
    }
  };

  return (
    <div>
      <MycartContext.Provider value={{ cartArray, addtocart, removeFromCart }}>
        {children}
      </MycartContext.Provider>
    </div>
  );
}
