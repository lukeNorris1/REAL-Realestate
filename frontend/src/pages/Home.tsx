import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  function buttonHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(`${searchText}`);
    navigate("/search/" + searchText, { replace: true });
  }

  const onChangeHandler = (event:any) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="">Where would you like to live?</h1>
      <form className="mt-5">
        <input
          inputMode="text"
          className="mr-2 p-3 border-solid border-2 border-black rounded-md"
          placeholder="City"
          autoFocus
          onChange={onChangeHandler}
          value={searchText}
        ></input>
        <button className="hover:border-black" onClick={(e) => buttonHandler(e)}> Search </button>
        
      </form>
    </div>
  );
}
