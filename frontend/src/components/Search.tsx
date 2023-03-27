import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type props = {
  width?: number,
  height?: number
}

export default function Search(props: props) {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [searchText, setSearchText] = useState<string>(urlParams.city || "");
  const [height, setHeight] = useState(props.height || 50)
  const [width, setWidth] = useState(props.width || 500)

  function buttonHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchText != "") navigate("/search/" + searchText, { replace: true });
    else alert("enter search");
  }

  const onChangeHandler = (event: any) => {
    setSearchText(event.target.value);
  };



  return (
    <form style={{ width: `${width}px`, height: `${height}px` }} onSubmit={e => buttonHandler(e)}>
      <div className="flex mt-3">
        <div className="relative w-full">
          <input
            type="search"
            className="block p-2.5 w-full z-20 text-sm rounded-l-lg rounded-r-lg border-l-black border border-black  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search"
            onChange={e => onChangeHandler(e)}
            value={searchText}
          />
          <button
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-white rounded-r-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
