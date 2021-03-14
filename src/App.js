import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <div className="links">
            <Link to="#top " />
            Home
            <Link to="#projects" />
            Projects
            <Link to="#about" />
            About
            <Link to="#contact" />
            Contact
          </div>
        </nav>
      </header>
      {/* <h1>Onaje Oladuwa</h1> */}
      <div className="seedlings"></div>
    </div>
  );
}

export default App;
