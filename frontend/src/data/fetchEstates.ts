
export const dataFetch = async () => {
      const data = await (
        await fetch(
          "http://localhost:5000/estate/estateinfo"
        )
      ).json();

      // set state when the data received
      return(data)
};
