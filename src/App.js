import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';
import Alert from './Alert';
import { useState } from 'react';

function App() {
  // State to toggle dark mode
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    // Optionally, auto-dismiss after a timeout
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Function to manually dismiss the alert
  const dismissAlert = () => {
    setAlert(null);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode turned on", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark mode turned off", "success");
    }
  };

  return (
    <>
      <div>
        <div className="navbar">
          <Navbar title="Navbar Title" mode={mode} toggleMode={toggleMode} />
        </div>
        {/* Pass dismissAlert function to Alert */}
        <Alert alert={alert} dismissAlert={dismissAlert} />
        <div className="textform">
          <Textform heading="This is the heading" showAlert={showAlert}/>
        </div>
        <div className="about">
          <About alert={alert} />
        </div>
      </div>
    </>
  );
}

export default App;
