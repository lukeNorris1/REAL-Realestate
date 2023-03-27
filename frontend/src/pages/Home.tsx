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
    <div className="flex flex-col h-screen justify-center items-center bg-white">
      <h1 className="text-[20px] sm:text-[50px] font-bold">Where would you like to live?</h1>
      <div className="w-[250px] md:w-full flex justify-center">
        <Search/>
      </div>
    </div>
  );
}

