import { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import images from "../assets/estates/index";
import EstateInfo from "./EstateInfo";
import { cityData } from "../modules/types";

export default function EstateDisplay() {
  const [cityD, setcityD] = useState<cityData[]>();
  const [pageNum, setPageNum] = useState(1);
  const urlParams = useParams();
  const navigate = useNavigate();

  const cityListLength = Math.max(cityD?.length || 14, 14);

  const dev = process.env.NODE_ENV !== "production";
  const server = dev ? "" : "https://your_deployment.server.com";

  const options = {
    method: `GET`,
  };

  useEffect(() => {
    setPageNum(1);
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `http://localhost:5000/estate/estateCity/?city=${urlParams.city}`,
          options
        )
      ).json();
      // set state when the data received
      setcityD(data);
    };
    dataFetch();
  }, [urlParams]);

  function imageHandler(estate: number) {
    switch (estate) {
      case 1:
        return images.estate1;
      case 2:
        return images.estate2;
      case 3:
        return images.estate3;
      case 4:
        return images.estate4;
      case 5:
        return images.estate5;
    }
  }

  function handleArrowClick(direction: string) {
    switch (direction) {
      case "-":
        if (pageNum > 1) setPageNum((number) => number - 1);
        break;
      case "+":
        if (pageNum < 4) setPageNum((number) => number + 1);
        break;
    }
  }

  return (
    <div className="flex flex-col items-center justify-between">
      {cityD == undefined ? (
        <div className="flex items-center justify-center mt-[100px]">
          <div
            className="inline-block h-32 w-32 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className=" mt-2 min-[700px]:w-2/5 min-[900px]:w-[1022px]">
          {cityD
            ?.filter(
              (e, index) => index > (pageNum - 1) * 15 && index < pageNum * 15
            )
            .map((estate, index) => {
              return (
                <div
                  className="flex flex-row border-gray-500 my-[20px] bg-white hover:drop-shadow-xl hover:cursor-pointer"
                  key={estate._id}
                  onClick={() =>
                    navigate(`/:${estate.address}`, { state: estate })
                  }
                >
                  <div className="flex min-w-[260px] h-[174px]">
                    <img
                      className="object-fill max-w-[260px] max-h-[174px] w-full"
                      src={imageHandler(estate.rooms)!.img}
                      alt={imageHandler(estate.rooms)!.link}
                    />
                  </div>
                  <div className="flex box-content border-[1px] border-gray-400 w-full">
                    <EstateInfo estate={estate} other={""} />
                    <span className="m-auto border-[1px] border-gray-100 border-solid mr-2 h-[80%] " />
                    <div className="w-[200px] mt-4">
                      <h1 className="">{estate.agent_name}</h1>
                      <p className="text-gray-400 text-sm">{`${estate.city} Real Estate`}</p>
                      <img src={""} alt={`estate logo`} />
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="flex flex-row justify-center items-align truncate ">
            {cityListLength > 4 * 14 ? (
              <div className="flex">
                <div onClick={() => handleArrowClick("-")}>{"<"}</div>
                {Array.from({ length: cityListLength }, (_, index) => {
                  return index < 4 ? (
                    pageNum == index + 1 ? (
                      <div
                        key={index}
                        className="flex mx-1 mb-10 w-[20px] bg-blue-600 text-white  justify-center items-align"
                      >
                        {pageNum == index + 1 ? (
                          <div>{index + 1}</div>
                        ) : (
                          <>{index + 1}</>
                        )}
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="flex mx-1 mb-10 hover:cursor-pointer w-[20px] bg-black text-white justify-center items-align"
                        onClick={() => setPageNum(index + 1)}
                      >
                        {pageNum == index + 1 ? (
                          <div>{index + 1}</div>
                        ) : (
                          <>{index + 1}</>
                        )}
                      </div>
                    )
                  ) : null;
                })}
                <div onClick={() => handleArrowClick("+")}>{">"}</div>
              </div>
            ) : (
              Array.from(
                { length: Math.ceil(cityListLength / 14) },
                (_, index) => {
                  return (
                    <div
                      key={index}
                      className="flex mx-1 mb-10 hover:cursor-pointer w-[20px] bg-black text-white justify-center items-align"
                      onClick={() => setPageNum(index + 1)}
                    >
                      {pageNum == index + 1 ? (
                        <div>{index + pageNum}</div>
                      ) : (
                        <>{index + pageNum}</>
                      )}
                    </div>
                  );
                }
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
