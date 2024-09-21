import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';
import { useState } from 'react';

function App() {
  // State to toggle dark mode
  const [mode, setMode] = useState('light');
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      // document.title = "Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
      <div>
        <div className="navbar">
          <Navbar title="Navbar Title"  mode={mode} toggleMode={toggleMode}/>
        </div>
        <div className="textform">
          <Textform heading="This is the heading" />
        </div>
        
        <div className="about">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
