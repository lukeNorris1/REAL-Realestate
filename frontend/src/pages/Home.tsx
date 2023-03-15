import React from "react";

export default function Home() {

  function buttonHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(`clicked`);
  }

  return (
    <div className="App">
      <h1 className="">Where would you like to live?</h1>
      <form>
        <input className="mr-2" placeholder="City"></input>
        <button onClick={(e) => buttonHandler(e)}> Search </button>
      </form>
    </div>
  );
}
