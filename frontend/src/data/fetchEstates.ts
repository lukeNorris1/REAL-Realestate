import React from "react";
import dotenv from "dotenv";

dotenv.config();

export const dataFetch = async () => {
      const data = await (
        await fetch(
          "http://localhost:5000/estate/estateinfo"
        )
      ).json();

      // set state when the data received
      return(data)
};

const useFetchCityData = (city: string) => {
  // const [data, setData] = React.useState();
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(false);

  // React.useEffect(() => {
  //   const dev = process.env.NODE_ENV !== "production";
  //   const server = dev
  //     ? "http://localhost:4000"
  //     : "https://your_deployment.server.com";

  //   setData(undefined);
  //   setLoading(true);
  //   setError(false);

  //   const options = {
  //     method: `GET`,
  //   };

  //   const myPromise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("foo");
  //     }, 300);
  //   });

  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (Math.random() > 0.2) {
  //         resolve(`data from server for ${city}`);
  //       }
  //       reject();
  //     }, 2000);
  //   })
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data in city data: ", error);
  //       setLoading(false);
  //       setError(true);
  //     });
  // }, [city]);

  // return [data, loading, error];
};

export { useFetchCityData };