import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { products } from "../Data/Data";
import AddcartBtn from "../components/AddcartBtn";
export default function Product() {
  let { prdId } = useParams();

  let MyProduct = products.filter((prd) => prd.id == prdId);
  let [size, Setsize] = useState(MyProduct[0].sizes[0]);

  return (
    <>
      <div className="mt-20 mb-5 p-3  grid grid-cols-1 smd:grid-cols-2 gap-3  ">
        <div className=" flex justify-center smd:justify-end">
          {/*G1 Product Image */}
          <img src={MyProduct[0].image[0]} alt="" />
        </div>
        <div className=" ">
          {/*G2 Product Detail */}
          <div className="flex flex-col gap-5 smd:gap-2 h-full justify-evenly items-start p-2 px-3">
            <h1 className="text-2xl font-bold font-serif">
              {MyProduct[0].name}
            </h1>
            <p className="text-gray-600 text-[1.2rem]">${MyProduct[0].price}</p>
            <p className="text-[1rem font-medium]">
              {MyProduct[0].description}
            </p>
            <h1 className="text-[1.1rem]">Select Size</h1>
            <div className="flex gap-3">
              {MyProduct[0].sizes.map((sz) => (
                <div
                  key={sz}
                  onClick={() => Setsize(sz)}
                  className={` border-black px-3 py-2 cursor-pointer  hover:bg-gray-500  ${
                    size === sz
                      ? "bg-gray-400 border-[3px] border-red-600"
                      : "bg-gray-300 border border-black"
                  }`}
                >
                  {" "}
                  {sz}{" "}
                </div>
              ))}
            </div>
            <AddcartBtn MyProduct={MyProduct} size={size} />
          </div>
        </div>
      </div>
      <div className="mb-2">
        <h1 className="border-2 p-3 w-28 bg-gray-200">Description</h1>
        <p className="border-2 p-2 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          consectetur sint cumque laboriosam, consequuntur voluptates molestiae
          deserunt, error maxime, facere quasi delectus. Ipsum ducimus, rerum
          quisquam dolorum iure odit. Pariatur? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Delectus minima expedita et maxime?
          Amet et id explicabo atque recusandae, tenetur eos harum suscipit non
          cupiditate, dicta aliquam minima consectetur eligendi?
        </p>
      </div>
    </>
  );
}
