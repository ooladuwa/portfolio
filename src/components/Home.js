import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <header className="home">
        {/* <div className="links"> */}
        <nav className="navigation links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        {/* </div> */}

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/"></Route>
        </Switch>
      </header>
    </div>
  );
};

export default Home;
