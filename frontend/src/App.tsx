import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import  Home  from './pages/Home'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
