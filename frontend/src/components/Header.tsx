import React from 'react'
import Hero from "../assets/RRHeor.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-black text-white px-4 py-3">
        <div className="flex items-center">
          <img src={Hero} alt="Logo" className="h-8 w-auto mr-2" />
          <h1 className="text-5xl text-clip">REAL Realestate</h1>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-300 rounded-full h-8 w-8"></div>
          <div className="bg-gray-300 rounded-full h-8 w-8 ml-2"></div>
          <div className="bg-gray-300 rounded-full h-8 w-8 ml-2"></div>
        </div>
      </header>
  )
}
