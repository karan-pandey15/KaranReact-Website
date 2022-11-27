import React from "react";
import "./index.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            
              <h1>
                Kara<span>n.</span>
              </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
            
              
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact us</Link>

              <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>

            <form className="d-flex" role="search">
                <button className="btn btn-outline-success" type="submit">
                  ClickToRefresh Page
                </button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
        </Routes>
      </Router>    
    </>
  );
};

export default Navbar;
