import React from 'react'
import { useLocation } from 'react-router-dom';
import { cityData } from "../modules/types";

export default function EstatePage() {
    const location:cityData = useLocation().state

    console.log(location)

  return (
    <div>{location.address}</div>
  )
}
