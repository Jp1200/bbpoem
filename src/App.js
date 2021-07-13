import './App.css';
import React from "react";
import Poem  from "./comps/Poem/Poem";
import Mainpage from "./comps/Main/Mainpage";

function App() {
  return (
    <div>
      <Poem/>
    
      <div className="App">
      
        <Mainpage/>
      
      </div>
    </div>
  );
}

export default App;
