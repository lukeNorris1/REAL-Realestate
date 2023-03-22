import { Route, Routes } from "react-router-dom";
import  Home  from './pages/Home'
import SearchPage from "./pages/SearchPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EstatePage from "./pages/EstatePage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search/:city" element={<SearchPage />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path=":estate" element={<EstatePage />} />
    </Routes>
  );
}

export default App;
