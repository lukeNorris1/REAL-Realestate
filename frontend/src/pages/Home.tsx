import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  function buttonHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    navigate("/search/" + searchText, { replace: true });
  }

  const onChangeHandler = (event: any) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex items-center mb-4">
        <h1 className="text-[50px] font-bold">Where would you like to live?</h1>
      </div>
    <Search/>
    </div>
  );
}

{
  /* <div className="flex flex-col h-screen justify-center items-center">
<div className="flex items-center mb-4">
  <h1 className="text-3xl font-bold">Heading</h1>
</div>
<div className="flex items-center">
  <input type="text" className="py-2 px-4 border border-gray-400 rounded-l-lg w-64 focus:outline-none focus:border-blue-500"/>
  <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-r-lg">Search</button>
</div>
</div> */
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
