import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import EstateInfo from "../components/EstateInfo";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { cityData } from "../modules/types";

export default function EstatePage() {
  const estate: cityData = useLocation().state;
  const svgWidth = 18;

  const svgs = [
    "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z",
    "M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z",
    "M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.1-31.9-123-10.9L170.5 61.3C151.8 42.5 126.4 32 99.9 32C44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32V131.9zM256 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z",
  ];

  function getHouseStat(index: number) {
    if (index == 0) return estate.rooms;
    else if (index == 1) return estate.garage_spaces;
    else if (index == 2) return estate.bathrooms;
  }

  return (
    <div className="">
      <Header />
      <div className="">
        <Slider />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-10 w-[1000px] ">
          <div className="col-span-7 min-h-[400px]">
            <div className="mx-4 mt-4">
              <div>
                <p className="text-lg font-bold">
                  {`$` + estate.cost + ` per week`}
                </p>
              </div>
              <div className="flex w-70 ">
                <div>{`${estate.address}, ${estate.city}`}</div>
              </div>
              <hr className="mx-auto my-2 border-t border-gray-300 w-[90%]" />
              <div className="flex flex-row justify-start items-center pt-1 pb-2 ">
                <p>Apartment | </p>
                {Array.from({ length: 3 }, (_, index) => {
                  return (
                    <Fragment key={index}>
                      <div key={index} className="ml-1 mr-2">
                        {getHouseStat(index)}
                      </div>
                      <svg
                        width={svgWidth}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="ml-[-3px] mb-[1px]"
                      >
                        <path d={svgs[index]} />
                      </svg>
                    </Fragment>
                  );
                })}
              </div>
              <hr className="mx-auto my-2 border-t border-gray-300 w-[90%]" />
              <div>
                <h1 className="font-bold">Welcome to {estate.city}</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                   industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not
                      only five centuries, but also the leap into electronic typesetting,
                       remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software like Aldus PageMaker 
                         including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-gray-400 min-h-[400px]">
            <h1 className="">{estate.agent_name}</h1>
            <p className="text-white text-sm">{`Real Estate ${estate.city}`}</p>
            <img src={""} alt={`estate logo`} />
          </div>
        </div>
      </div>
    </div>
  );
}
