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
        <Search />
        {cityD == undefined ? (
          <div>Loading...</div>
        ) : (
          <div className="bg-red-200 mt-2 min-[700px]:w-2/5 max-[900px]:w-4/5 hover:cursor-pointer">
            {cityD.map((estate, index) => {
              return (
                <div
                  className="flex flex-row py-5 border-b-2 border-gray-500"
                  key={estate._id}
                >
                  <EstateInfo estate={estate} />
                 
                  <div className="flex flex-1 justify-center items-center bg-gray-200"><img className="object-cover" src={imageHandler(estate.rooms)!.img} alt={imageHandler(estate.rooms)!.link}/></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
  )
}
