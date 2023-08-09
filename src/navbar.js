import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
            <a class="navbar-brand" href="#">
              IBMSKILLBUILD
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/homecontent">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    Highschool Students
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/steptopart">
                    Adult Learners
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">
                    About IBM
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/aboutcsr">
                    About CSRBOX
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              {/* <form class="d-flex">
             <NavLink to="/contact"><button class="btn  btn-style" type="submit">
                  Sign Up
                </button></NavLink>
               <NavLink to="/contact"> <button class="btn  btn-style btn-style-border" type="submit">
                  Log in
                </button></NavLink>
              </form> */}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
