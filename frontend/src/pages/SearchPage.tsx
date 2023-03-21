import Search from "../components/Search"
import EstateDisplay from "../components/EstateDisplay";
import Header from "../components/Header";


export default function SearchPage() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <Search />
      <EstateDisplay/>
    </div>
  );
}
