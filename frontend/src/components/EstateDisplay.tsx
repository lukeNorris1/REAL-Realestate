import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Search from "./Search";
import images from '../assets/estates/index'
import EstateInfo from "./EstateInfo";

export default function EstateDisplay() {
    const [cityD, setcityD] = useState<cityData[]>();
    const urlParams = useParams();
  
    const dev = process.env.NODE_ENV !== "production";
    const server = dev ? "" : "https://your_deployment.server.com";

  
    const options = {
      method: `GET`,
    };
  
    type cityData = {
      _id: string;
      address: string;
      city: string;
      rooms: number;
      bathrooms: number;
      garage_spaces: number;
      date: Date;
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
  
    useEffect(() => {
      console.log(cityD);
    }, [cityD]);


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
                  className="flex flex-row border-gray-500 my-[20px] bg-white"
                  key={estate._id}
                >
                  <div className="flex min-w-[260px] h-[174px]" >
                    <img className="object-fill max-w-[260px] max-h-[174px] w-full" src={imageHandler(estate.rooms)!.img} alt={imageHandler(estate.rooms)!.link}/>
                  </div>
                  <div className="flex box-content border-[1px] border-gray-400 w-full">
                    <EstateInfo estate={estate} other={""} />
                    <span className="m-auto border-[1px] border-gray-100 border-solid mr-2 h-[80%] "/>
                    <div className="w-[200px]">
                      <h1>Estate Agent: sdads</h1>
                      <p>Estate location</p>
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
