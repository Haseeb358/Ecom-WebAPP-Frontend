import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ prd }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border flex flex-col h-full">
        <img
          className="w-full h-96 object-cover" // Fixed height and cover the container
          src={prd.image[0]}
          alt="..."
        />

        <div className="px-6 py-4 flex-1">
          {" "}
          {/* Added flex-1 to make the content take up the available space */}
          <div className="font-bold text-xl mb-2">{prd.name}</div>
          <p className="text-gray-700 font-bold text-base text-right">
            ${prd.price}
          </p>
        </div>
        <div className="px-6 pt-2 pb-4">
          <Link to={`/products/${prd.id}`}>
            <button className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
