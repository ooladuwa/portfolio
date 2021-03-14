import React from "react";
import "./App.css";
import Home from "./components/Home";
import { FaInstagramSquare } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <FaInstagramSquare className="instagram" />
      <img
        src="https://i.ibb.co/BghNjVh/flowers-Border.png"
        alt="flowers"
        usemap="#image-map"
      />
      <map name="image-map">
        <area
          target="_blank"
          alt="Instagram"
          title="Instagram"
          href="https://www.instagram.com/rbwanderlust/"
          coords="112,110,105"
          shape="circle"
        />

        <area
          target="_blank"
          alt="Github"
          title="Github"
          href="https://github.com/ooladuwa"
          coords="70,351,105"
          shape="circle"
        />
        <area
          target="_blank"
          alt="Twitter"
          title="Twitter"
          href="https://twitter.com/ooladuwa"
          coords="365,75,88"
          shape="circle"
        />
      </map>
      <Home />
      <div className="App">
        <div classNam="titles">
          <h1>Onaje Oladuwa</h1>
          <h3>Full-Stack Developer</h3>
        </div>
        <div className="seedlings">
          {/* <img
          src="https://i.ibb.co/n0jnPH1/seedlings.png"
          alt="seedlings"
          usemap="#image-map"
          />
          <map name="image-map">
          <area
          target="_blank"
          alt="To Do"
          title="To Do"
          href="https://www.twitter.com"
          coords="714,667,76"
          shape="circle"
          />
          
          <area
          target="_blank"
          alt="Shopping Cart"
          title="Shopping Cart"
          href="https://www.facebook.com"
          coords="694,849,54"
          shape="circle"
          />
          <area
          target="_blank"
          alt="Instagram Clone"
          title="Instagram Clone"
          href="https://www.instagram.com"
          coords="1385,1149,89"
          shape="circle"
          />
          <area
          target="_blank"
          alt="Resume"
          title="Resume"
          href="https://www.amazon.com"
          coords="1282,637,62"
          shape="circle"
          /> 
        </map> */}
        </div>
      </div>
    </div>
  );
}

export default App;
