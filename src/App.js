import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Text from "./components/Text";
import NavBar from "./components/Nav";
import About from "./components/About";
import Alert from "./components/Alert";
function App() {
  let [darkMode, setDarkMode] = useState(false);
  let [alert, setAlert] = useState({});
  function declareAlert(message, typeOfAlert) {
    setAlert({ message: message, typeOfAlert: typeOfAlert });

    setTimeout(() => setAlert({}), 1500);
  }
  function enableDarkMode() {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor=!darkMode?"black":"white"
    let mode = !darkMode ? "Dark Mode" : "Light Mode";
    declareAlert(mode + " Enabled", "success");
  }
  return (
    <div
      className="App"
      style={darkMode ? { backgroundColor: "black", color: "white" } : null}
    >
     <Router>
   
      <NavBar
        title="TextUtils"
        darkMode={darkMode}
        setDarkMode={enableDarkMode}
      />
      <div className="container">
       
        <Alert alert={alert} />
       
        <Routes>
        <Route exact path="/" element={<Text declareAlert={declareAlert} darkMode={darkMode} heading="Enter Text To Analyze Below"/>}/>
        <Route  exact path="/about" element={<About/>}/>
        </Routes>
         
          
         
      </div>
      </Router>
    </div>
  );
}
NavBar.propTypes = { title: PropTypes.string.isRequired };

export default App;
