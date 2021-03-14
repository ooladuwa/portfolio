import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import "./home.css";

const Header = () => {
  return (
    <div className="header-links">
      <header className="home">
        <nav>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </header>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
};

export default Header;
