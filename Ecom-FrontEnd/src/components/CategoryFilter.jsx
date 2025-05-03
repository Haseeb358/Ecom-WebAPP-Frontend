import React, { useState } from "react";

import dropdown_icon from "../assets/dropdown_icon.png";
export default function CategoryFilter({ getCategories, getSubCategories }) {
  let [showfilters, Setshowfilters] = useState(false);
  return (
    <>
      <div className=" p-2">
        {/* Filter */}
        <h1 className="ps-3  text-2xl hidden md:block">Filters</h1>

        <p
          className="ps-3  text-2xl md:hidden"
          onClick={() => Setshowfilters(!showfilters)}
        >
          Show Filter
          <img src={dropdown_icon} alt="" className="w-2 mx-2  inline-block" />
        </p>
        <div
          className={`flex flex-col p-3 ${
            showfilters ? "" : "hidden"
          } md:block`}
        >
          <div className="border p-2 rounded">
            <p className="font-bold text-[1.1rem]">Categories</p>
            <div>
              <p>
                <input
                  type="checkbox"
                  name="Man"
                  value={"Men"}
                  id=""
                  className="mx-2"
                  onChange={getCategories}
                />
                MAN
              </p>
              <p>
                <input
                  type="checkbox"
                  name="women"
                  id=""
                  value={"Women"}
                  className="mx-2"
                  onChange={getCategories}
                />
                WOMAN
              </p>
              <p>
                <input
                  type="checkbox"
                  name="Man"
                  id=""
                  value={"Kids"}
                  className="mx-2"
                  onChange={getCategories}
                />
                KID
              </p>
            </div>
          </div>
          <div className="border p-2 my-2 rounded">
            <p className="font-bold text-[1.1rem]">Sub-Categories</p>
            <div>
              <p>
                <input
                  type="checkbox"
                  name="Man"
                  value={"Topwear"}
                  id=""
                  onChange={getSubCategories}
                  className="mx-2 "
                />
                TOP-WEAR
              </p>
              <p>
                <input
                  type="checkbox"
                  name="Man"
                  value={"Bottomwear"}
                  id=""
                  onChange={getSubCategories}
                  className="mx-2"
                />
                BOTTOM-WEAR
              </p>
              <p>
                <input
                  type="checkbox"
                  name="Man"
                  value={"Winterwear"}
                  id="WINTER-WEAR"
                  onChange={getSubCategories}
                  className="mx-2"
                />
                WINTER-WEAR
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
