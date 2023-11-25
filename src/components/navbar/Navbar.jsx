import React from "react";
import "./navbar.css";

function Navbar() {
  const navList = ["Skills", "projects", "Contact"];
  return (
    <>
      <nav className="navbar container">
        <a href="" className="logo navbar-brand">
          Mudassir
        </a>
        <div>
          <ul className="d-flex m-auto gap-lg-5 gap-md-5 gap-sm-3 gap-3 list-unstyled">
            {navList.map((item) => (
              <li className="nav-item">
                <a className="nav-link" href="">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
