import React from "react";
import nav from "../../../css/header/Nav.module.css";
import { NavLink } from "react-router-dom";

function NavPage(){
    return(
        <div>


<nav class={"navbar navbar-expand-lg navbar-dark bg-dark border-bottom "+nav.nav}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <NavLink className="navbar-brand img-responsive" to="/" >
        <img src="http://localhost:8000/img/space logo.jpg" />
    </NavLink>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li className="nav-item">
            <NavLink className={"nav-link "+nav.nav_link} to="/planets">Planets</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={"nav-link "+nav.nav_link} to="/adminLogin">adminLogin</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={"nav-link "+nav.nav_link} to="/userLogin">userLogin</NavLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    );
}
export default NavPage;
