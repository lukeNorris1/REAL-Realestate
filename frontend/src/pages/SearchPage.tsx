import { useParams, useNavigate } from "react-router-dom";

export default function SearchPage() {

    const city = useParams()
    console.log(`city: ${city.city}`)
  return (
    <div>
      <header className="flex items-center justify-between bg-gray-100 px-4 py-3">
  <div className="flex items-center">
    <img src="logo.png" alt="Logo" className="h-8 w-auto mr-2"/>
    <h1 className="font-bold text-lg">My Website</h1>
  </div>
  <div className="flex-1 mx-4">
    <div className="relative rounded-md shadow-sm">
      <input type="search" className="form-input block w-1/2 h-10 sm:text-sm sm:leading-5 pr-10" placeholder="Search..."/>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M22 22l-6-6"/>
          <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 0h0"/>
        </svg>
      </div>
    </div>
  </div>
  <div className="flex items-center">
    <div className="bg-gray-300 rounded-full h-8 w-8"></div>
    <div className="bg-gray-300 rounded-full h-8 w-8 ml-2"></div>
    <div className="bg-gray-300 rounded-full h-8 w-8 ml-2"></div>
  </div>
</header>
        {city.city}
    </div>
  )
}
