import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import images from '../assets/estates/index'
import EstateInfo from "./EstateInfo";
import { cityData } from "../modules/types";

export default function EstateDisplay() {
    const [cityD, setcityD] = useState<cityData[]>();
    const urlParams = useParams();
    const navigate = useNavigate();
  
    const dev = process.env.NODE_ENV !== "production";
    const server = dev ? "" : "https://your_deployment.server.com";

  
    const options = {
      method: `GET`,
    };
  
    useEffect(() => {
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

    function imageHandler(estate: number){
        switch(estate){
            case 1:
                return images.estate1
            case 2:
                return images.estate2
            case 3:
                return images.estate3
            case 4:
                return images.estate4
            case 5:
                return images.estate5
        }
    }

  return (
    <div className="flex flex-col items-center justify-between">
        
        {cityD == undefined ? (
          <div>Loading...</div>
        ) : (
          <div className=" mt-2 min-[700px]:w-2/5 min-[900px]:w-[1022px] hover:cursor-pointer">
            {cityD.map((estate, index) => {
              return (
                <div
                  className="flex flex-row border-gray-500 my-[20px] bg-white hover:drop-shadow-xl"
                  key={estate._id}
                  onClick={() => navigate(`/:${estate.address}`, {state: estate})}
                >
                  <div className="flex min-w-[260px] h-[174px]" >
                    <img className="object-fill max-w-[260px] max-h-[174px] w-full" src={imageHandler(estate.rooms)!.img} alt={imageHandler(estate.rooms)!.link}/>
                  </div>
                  <div className="flex box-content border-[1px] border-gray-400 w-full">
                    <EstateInfo estate={estate} other={""} />
                    <span className="m-auto border-[1px] border-gray-100 border-solid mr-2 h-[80%] "/>
                    <div className="w-[200px] mt-4">
                      <h1 className="">{estate.agent_name}</h1>
                      <p className="text-gray-400 text-sm">{`Real Estate ${estate.city}`}</p>
                      <img src={""} alt={`estate logo`} />
                    </div>
                  </div>
                 
                </div>
              );
            })}
          </div>
        )}
      </div>
  )
}
