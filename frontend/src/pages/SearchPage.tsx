import Search from "../components/Search"
import EstateDisplay from "../components/EstateDisplay";
import Header from "../components/Header";


export default function SearchPage() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <div className="flex flex-col justify-center items-center">
        <Search width={800}/>
      </div>
      <EstateDisplay/>
    </div>
  );
}
