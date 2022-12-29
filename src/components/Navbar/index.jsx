import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export function Navbar() {
  const [clickBlog, setClickBlog] = useState(false);
  const [clickPort, setClickPort] = useState(false);

  const [responsive, setResponsive] = useState(false);

  return (
    <nav className="nav-component">
      <div className="container">
        <div className="row">
          <h2 className="brand">Modern Business </h2>
          <p
            className="hamburger d-none"
            onClick={() => setResponsive(!responsive)}
          >
            ☰
          </p>
          <div className="link">
            <ul>
              <Link to="/">
                 Home
              </Link>
              <Link to="/about">
                 About 
              </Link>
              <Link to="/">
                 Contact 
              </Link>
              <Link to="/">
                 Pricing 
              </Link>
              <Link to="/">
                 FAQ 
              </Link>
              <li className="dropdown">
                <span
                  className="toggle"
                  onClick={() => {
                    setClickBlog(!clickBlog);
                    setClickPort(false);
                  }}
                >
                  Blog
                </span>
                <ul className={`content ${!clickBlog ? "d-none" : ""} `}>
                  <li>
                    <a href="!#"> Blog Home </a>
                  </li>
                  <li>
                    <a href="!#"> Blog Post </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <span
                  className="toggle"
                  onClick={() => {
                    setClickPort(!clickPort);
                    setClickBlog(false);
                  }}
                >
                  Portfolio
                </span>
                <ul className={`content ${!clickPort ? "d-none" : ""} `}>
                  <li>
                    <a href="!#"> Portfolio Overview </a>
                  </li>
                  <li>
                    <a href="!#"> Portfolio Item </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className={`mobile-row  ${responsive ? "" : "d-none"} `}>
          <ul>
            <li className="links">
            <Link to="/"> Home </Link>
            <Link to="/about">About </Link>
            <Link to="/"> Contact </Link>
            <Link to="/"> Pricing </Link>
            <Link to="/about"> FAQ </Link>
            </li>
            <li className="dropdown">
              <span
                className="toggle"
                onClick={() => {
                  setClickBlog(!clickBlog);
                  setClickPort(false);
                }}
              >
                Blog
              </span>
              <ul className={`content ${!clickBlog ? "d-none" : ""} `}>
                <li>
                  <a href="!#"> Blog Home </a>
                </li>
                <li>
                  <a href="!#"> Blog Post </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <span
                className="toggle"
                onClick={() => {
                  setClickPort(!clickPort);
                  setClickBlog(false);
                }}
              >
                Portfolio
              </span>
              <ul className={`content ${!clickPort ? "d-none" : ""} `}>
                <li>
                  <a href="!#"> Portfolio Overview </a>
                </li>
                <li>
                  <a href="!#"> Portfolio Item </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
