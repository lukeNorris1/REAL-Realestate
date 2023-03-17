import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [cityD, setcityD] = useState<string[]>();
  const urlParams = useParams();

  const dev = process.env.NODE_ENV !== "production";
  const server = dev ? "" : "https://your_deployment.server.com";

  const options = {
    method: `GET`,
  };

  type cityData = {
    id: string,
    address: string,
    city: string,
    rooms: number,
    bathrooms: number,
    garage_spaces: number,
    date: string
  }

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
  }, []);

  useEffect(() => {
    console.log(cityD);
  }, [cityD]);

  return (
    <div>
      <header className="flex items-center justify-between bg-gray-100 px-4 py-3">
        <div className="flex items-center">
          <img src={""} alt="Logo" className="h-8 w-auto mr-2" />
          <h1 className="font-bold text-lg">My Website</h1>
        </div>
        <div className="flex-1 mx-4">
          <div className="relative rounded-md shadow-sm">
            <input
              type="search"
              className="form-input block w-1/2 h-10 sm:text-sm sm:leading-5 pr-10"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"></div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-300 rounded-full h-8 w-8"></div>
          <div className="bg-gray-300 rounded-full h-8 w-8 ml-2"></div>
          <div className="bg-gray-300 rounded-full h-8 w-8 ml-2"></div>
        </div>
      </header>
      {cityD == undefined ? <div>Loading...</div> : <div>{cityD.map((e:cityData) => e.garage_spaces)}</div>}
    </div>
  );
}
