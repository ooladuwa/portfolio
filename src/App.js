import React from "react";
import "./App.css";
import Home from "./components/Home";
import { FaInstagramSquare } from "react-icons/fa";
import Flowers from "./components/Flowers";
import Seedlings from "./components/Seedlings";

function App() {
  return (
    <div className="container">
      <FaInstagramSquare className="instagram" />
      <Flowers />
      <Home />
      <Seedlings />
    </div>
  );
}

export default App;
