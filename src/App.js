import React from "react";
import './fonts/stylesheet.css'
import './App.css'

import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  ) 
}

export default App;