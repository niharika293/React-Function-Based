// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if(mode === 'light'){
     setmode("dark");
     setbtnText("Enable Light Mode");
     document.body.style.backgroundColor = '#042743';
    }
   else{
     setmode("light");
     setbtnText("Enable Dark Mode");
     document.body.style.backgroundColor = 'white';
    }
  }
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  const toggleText  = () => {
    if(btnText === "Enable Dark Mode"){
      setbtnText("Enable Light Mode");
    }
    else{
      setbtnText("Enable Dark Mode");
    }
  }
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} btnText={btnText} toggleText = {toggleText}/>
      <div className="container">
        <TextForm heading="Enter the text to analyze below"  mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
