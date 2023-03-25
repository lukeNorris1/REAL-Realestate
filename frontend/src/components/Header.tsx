import React from "react";
import Hero from "../assets/RRHeor.png";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate()
  return (
    <header className="flex items-center justify-between bg-white text-black px-4 py-3">
      <div className="flex items-center hover:cursor-pointer" onClick={() => navigate("/", { replace: true })}>
        <img src={Hero} alt="Logo" className="h-8 w-auto mr-2" />
        <h1 className="text-5xl text-clip">REAL Realestate</h1>
      </div>
    </header>
  );
}
