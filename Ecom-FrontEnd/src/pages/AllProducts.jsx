import React, { useEffect, useState } from "react";

import { products } from "../Data/Data";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import SortSelect from "../components/SortSelect";

export default function AllProducts() {
  let [FilteredProducts, SetFilteredProducts] = useState(products);
  let [Categories, SetCategories] = useState([]);
  let [SubCategories, SetSubCategories] = useState([]);
  let [sorttype, Setsorttype] = useState("Default");

  const getCategories = (e) => {
    if (Categories.includes(e.target.value)) {
      SetCategories((pre) => pre.filter((item) => item !== e.target.value));
    } else {
      SetCategories((pre) => [...pre, e.target.value]);
    }
  };
  const getSubCategories = (e) => {
    if (SubCategories.includes(e.target.value)) {
      SetSubCategories((pre) => pre.filter((item) => item !== e.target.value));
    } else {
      SetSubCategories((pre) => [...pre, e.target.value]);
    }
  };

  const ApplyFilters = () => {
    let CopyProduct = [...products];
    if (Categories.length > 0) {
      CopyProduct = CopyProduct.filter((item) =>
        Categories.includes(item.category)
      );
    }
    if (SubCategories.length > 0) {
      CopyProduct = CopyProduct.filter((item) =>
        SubCategories.includes(item.subCategory)
      );
    }

    SetFilteredProducts(CopyProduct);
  };
  const SortProducts = () => {
    let copyFilterProduct = [...FilteredProducts];
    if (sorttype === "Low to Hight") {
      SetFilteredProducts(copyFilterProduct.sort((a, b) => a.price - b.price));
    } else if (sorttype === "High to low") {
      SetFilteredProducts(copyFilterProduct.sort((a, b) => b.price - a.price));
    } else if (sorttype === "Default") {
      SetFilteredProducts(FilteredProducts);
    }
  };

  useEffect(() => {
    ApplyFilters();
  }, [Categories, SubCategories]);
  useEffect(() => {
    SortProducts();
  }, [sorttype]);

  return (
    <>
      <div className=" mt-20 mb-5 grid md:grid-cols-5 grid-cols-1 p-3">
        <CategoryFilter
          getCategories={getCategories}
          getSubCategories={getSubCategories}
        />
        <div className=" md:col-span-4 p-2">
          {/* Products Display */}
          <div className="flex flex-wrap gap-3 justify-between items-center  mb-3">
            <h1 className="text-2xl mx-3">All Collection</h1>
            <SortSelect Setsorttype={Setsorttype} sorttype={sorttype} />
          </div>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FilteredProducts.map((prd) => (
              <ProductCard prd={prd} key={prd.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
