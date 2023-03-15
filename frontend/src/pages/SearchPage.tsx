import React from 'react'
import { useParams, useNavigate } from "react-router-dom";

export default function SearchPage() {

    const city = useParams()
    console.log(`city: ${city.city}`)
  return (
    <div>
        {city.city}
    </div>
  )
}
