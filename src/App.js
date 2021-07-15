import './App.css';
import React, { useEffect, useState } from "react";
import Poem  from "./comps/Poem/Poem";
import Mainpage from "./comps/Main/Mainpage";

function App() {
  
  const [poemVisible, updatePoemVisibility] = useState(true);
  useEffect(()=>{
    setTimeout(function(){document.getElementById("poem").remove();},12000);

  },[]);
  return (
    <div>
      <Poem />
    
      <div className="App">
      
        <Mainpage/>
      
      </div>
    </div>
  );
}

export default App;
