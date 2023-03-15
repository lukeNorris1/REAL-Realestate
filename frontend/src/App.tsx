import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import  Home  from './pages/Home'
import SearchPage from "./pages/SearchPage";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search/:city" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
