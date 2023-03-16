import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  function buttonHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    navigate("/search/" + searchText, { replace: true });
  }

  const onChangeHandler = (event:any) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl text-clip overflow-hidden">Where would you like to live?</h1>
      <form className="mt-10 leading-5">
        <input
          inputMode="text"
          className="mr-2 p-3 border-solid border-2 border-black rounded-md"
          placeholder="City"
          autoFocus
          onChange={onChangeHandler}
          value={searchText}
        ></input>
        <button className="br-8 hover:border-black" onClick={(e) => buttonHandler(e)}> Search </button>
        
      </form>
      </div>
    </div>
  );
}


// button {
//   border-radius: 8px;
//   border: 1px solid transparent;
//   padding: 0.6em 1.2em;
//   font-size: 1em;
//   font-weight: 500;
//   font-family: inherit;
//   background-color: #1a1a1a;
//   cursor: pointer;
//   transition: border-color 0.25s;
// }
// button:hover {
//   border-color: #646cff;
// }
// button:focus,
// button:focus-visible {
//   outline: 4px auto -webkit-focus-ring-color;
// }
