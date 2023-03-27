import Search from "../components/Search"
import EstateDisplay from "../components/EstateDisplay";
import Header from "../components/Header";


export default function SearchPage() {

  return (
    <div className="w-full block bg-gray-100">
      <div className="bg-white">
        <div className="w-[1022px] mx-auto">
          <Header/>
        </div>
      </div>
        <div className="flex flex-col justify-center items-center">
        <Search width={800}/>
        <EstateDisplay/>
      </div>
    </div>
  );
}
