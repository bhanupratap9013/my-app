import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";
import About from "./About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d0833";
      showAlert("Dark mode turned on", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode turned on", "success");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <>
              <Navbar title="Desi Qna" link="Links" mode={mode} toggleMode={toggleMode} />
              <Alert alert={alert} />
              <TextForm showAlert={showAlert} heading="Desi QnA - word counter, character counter, time counter" mode={mode} />

          </>}/>
        <Route exact path="/About" element={
          <>
            <Navbar title="Desi Qna" link="Links" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <About mode={mode} />
          </>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
