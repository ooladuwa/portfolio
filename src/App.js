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
      <h1>Onaje Oladuwa</h1>
      <h3>Full-Stack Developer</h3>
      <div className="seedlings">
        <img
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

          {/* <area
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
          /> */}
        </map>
      </div>
    </div>
  );
}

export default App;
