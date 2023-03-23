import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { cityData } from "../modules/types";

export default function EstatePage() {
  const location: cityData = useLocation().state;

  console.log(location);

  return (
    <div>
      <Header />
      <div className="">
        <Slider />
      </div>
      <div className="flex justify-center bg-blue-200 ">
      <div className="grid grid-cols-10 w-[1000px]">
        <div className="col-span-7 bg-gray-200 h-24"></div>
        <div className="col-span-3 bg-gray-400 h-24">
          Estate info
        </div>
      </div>


      </div>
    </div>
  );
}
