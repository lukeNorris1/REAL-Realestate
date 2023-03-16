import { Route, Routes } from "react-router-dom";
import  Home  from './pages/Home'
import SearchPage from "./pages/SearchPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search/:city" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
