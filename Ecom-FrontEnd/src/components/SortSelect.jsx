import React from "react";
import { Select, Option } from "@material-tailwind/react";
export default function SortSelect({ Setsorttype, sorttype }) {
  return (
    <>
      <div className="w-72">
        <Select
          label="Sort by Price"
          value={sorttype}
          onChange={(val) => Setsorttype(val)}
        >
          <Option value="Default">Default</Option>
          <Option value="Low to Hight">Low to Hight</Option>
          <Option value="High to low">High to low</Option>
        </Select>
      </div>
    </>
  );
}
