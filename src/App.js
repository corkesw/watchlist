import "./App.css";
import Header from "./Header";
import Adder from "./Adder";
import Lister from "./Lister";
import { useState } from "react";

// TV and Film watchlist
function App() {
  const [list, SetList] = useState({name:"Bergerac", type:"tv"})
  return (
    <div>
      <Header />  
      <Adder />
      <Lister list={list}/>
    </div>
  );
}

export default App;
