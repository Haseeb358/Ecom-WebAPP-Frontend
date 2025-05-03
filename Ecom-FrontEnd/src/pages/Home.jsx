import React from "react";
import Carousell from "../components/Carousel";
import LatestCollection from "../components/BestSeller";
export default function Home() {
  return (
    <>
      <div className="mt-20 mb-3">
        <Carousell />
        <LatestCollection />
      </div>
    </>
  );
}
