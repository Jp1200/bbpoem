import './App.css';
import React from "react";
import Poem  from "./comps/Poem/Poem";
import Mainpage from "./comps/Main/Mainpage";

function App() {
  return (
    <div className="App">
      
      <Mainpage/>
      <Poem/>
    </div>
  );
}

export default App;
