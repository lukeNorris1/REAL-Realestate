import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();

    function buttonHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        navigate("/search/" + searchText, { replace: true });
      }
    
      const onChangeHandler = (event:any) => {
        setSearchText(event.target.value);
      };

      
  return (
    <form className="mt-10 leading-5">
        <input
          inputMode="text"
          className="mr-2 p-3 border-solid border-2 border-black rounded-md"
          placeholder="City"
          autoFocus
          onChange={onChangeHandler}
          value={searchText}
        ></input>
        <button className="br-8 hover:border-black" onClick={(e) => buttonHandler(e)}> Search </button>
        
      </form>
  )
}
