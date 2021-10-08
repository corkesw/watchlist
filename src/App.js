import "./App.css";
import Header from "./Header";
import Adder from "./Adder";
import Lister from "./Lister";
import { useState } from "react";

// TV and Film watchlist
function App() {
  const [list, setList] = useState([{name:"Bergerac", type:"tv"}])
  return (
    <div>
      <Header />  
      <Adder setList={setList}/>
      <Lister list={list}/>
    </div>
  );
}

export default App;
