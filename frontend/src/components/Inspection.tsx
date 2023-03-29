import React from "react";

export default function Inspection() {
  function addDays(date: Date, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }


  var date = new Date();
  date = addDays(date, Math.floor(Math.random() * 7));

  return (
    <div className="flex flex-row mb-2">
      <div className="w-[31%]">
        <p className="font-bold text-gray-600">{`${date.toLocaleDateString(
          "en-GB",
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        )}`}</p>
        <p className="text-gray-500">10:10am - 10:25am</p>
      </div>
      <div className="flex justify-center items-center rounded-full  bg-black text-white w-10 h-10 mx-2 my-auto hover:cursor-pointer">
        +
      </div>
      <div className="flex justify-center items-center">+ Add to planner</div>
    </div>
  );
}
