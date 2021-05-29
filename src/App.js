import './App.css';
import Navbar from './components/navbar.js';
import React, { useState } from 'react';
import Footer from './components/footer.js';
import DynamicFullTable from './components/dynamicfull.js';
import CompactFullTable from './components/dynamiccompact.js';


function App() {

  const [display, setDisplay] = useState(false)
  const Display = () => {
    setDisplay(!display)
  }


  const [fullDynamic, setfullDynamic] = useState(false)
  const FullDynamic = () => {
    setfullDynamic(true)
    setcompactDynamic(false)
    setDisplay(false)
  }
  const [compactDynamic, setcompactDynamic] = useState(false)

  const CompactDynamic = () => {
    setcompactDynamic(true)
    setfullDynamic(false)
    setDisplay(false)

  }
  return (
    <div className="App">
      <Navbar />
      <div className={fullDynamic ? "dynamic-table" : "dynamic-hide"}>

        <DynamicFullTable />
      </div>
      <div className={compactDynamic ? "compact-table" : "compact-hide"}>
        <CompactFullTable />
      </div>
      <Footer Display={() => Display()} enableDisplay={display} fullDynamic={() => FullDynamic()} compactDynamic={() => CompactDynamic()} className="footer" />
    </div>
  );
}

export default App;
