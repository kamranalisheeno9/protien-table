import './App.css';
import Navbar from './components/navbar.js';
import React, { useState } from 'react';
import Footer from './components/footer.js';
import DynamicFullTable from './components/dynamicfull.js';
import CompactFullTable from './components/dynamiccompact.js';
import UniversalFull from './components/universalfull';
import UniversalCompact from './components/universalcompact';
import { BsList } from "react-icons/bs";

function App() {

  const [display, setDisplay] = useState(false)
  const Display = () => {
    setDisplay(!display)
  }
  const [displayFooter, setDisplayFooter] = useState(false)
  const FooterDisplay = () => {
    setDisplayFooter(!displayFooter)
    console.log(displayFooter)
  }


  const [fullDynamic, setfullDynamic] = useState(false)
  const FullDynamic = () => {
    setfullDynamic(true)
    setcompactDynamic(false)
    setcompactUniversal(false)
    setfullUniversal(false)
    setDisplayFooter(false)
    setDisplay(false)
  }
  const [compactDynamic, setcompactDynamic] = useState(false)

  const CompactDynamic = () => {
    setcompactDynamic(true)
    setfullDynamic(false)
    setcompactUniversal(false)
    setfullUniversal(false)
    setDisplayFooter(false)

    setDisplay(false)

  }


  const [fullUniversal, setfullUniversal] = useState(false)
  const FullUniversal = () => {
    setfullUniversal(true)
    setcompactUniversal(false)
    setfullDynamic(false)
    setcompactDynamic(false)
    setDisplay(false)
    setDisplayFooter(false)

  }
  const [compactUniversal, setcompactUniversal] = useState(false)

  const CompactUniversal = () => {
    setcompactUniversal(true)
    setfullUniversal(false)
    setfullDynamic(false)
    setcompactDynamic(false)
    setDisplay(false)
    setDisplayFooter(false)

  }



  return (
    <div className="App">
      <Navbar />
      <div className={fullDynamic ? "dynamic-table" : "dynamic-hide"}>

        <DynamicFullTable compactDynamic={() => CompactDynamic()} />
      </div>
      <div className={compactDynamic ? "compact-table" : "compact-hide"}>
        <CompactFullTable fullDynamic={() => FullDynamic()} />
      </div>
      <div className={fullUniversal ? "universal-dynamic" : "universal-dynamic-hide"}>
        <UniversalFull compactUniversal={() => CompactUniversal()} />
      </div>
      <div className={compactUniversal ? "universal-compact" : "universal-compact-hide"}>
        <UniversalCompact fullUniversal={() => FullUniversal()} />
      </div>

      <div className={displayFooter ? "footer" : "footer-hide"}>

        <Footer Display={() => Display()} enableDisplay={display} fullDynamic={() => FullDynamic()} compactDynamic={() => CompactDynamic()} fullUniversal={() => FullUniversal()} compactUniversal={() => CompactUniversal()} />
      </div>
      <h1 className="footer-toggle">
        <BsList onClick={() => FooterDisplay()} />
      </h1>
    </div>

  );
}

export default App;
