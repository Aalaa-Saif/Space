import React from "react";
import "../../../css/header/Nav.css";
import { NavLink } from "react-router-dom";

function NavPage(){
    return(
        <div>

<nav className="navbar navbar-expand-md" role="navigation">
<button className="navbar-toggler navbar-dark bg-dark collapsedark" type="button" data-toggle="collapse" data-target="#navbarid" aria-expanded="false">
        <span className="navbar-toggler-icon "></span>
    </button>
    <NavLink className="navbar-brand img-responsive" to="/" >
        <img src="http://localhost:8000/img/space logo.jpg" />
    </NavLink>


    <div className="collapse navbar-collapse collapsedark2" id="navbarid" role="menu">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/planets">Planets</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/adminLogin">adminLogin</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/userLogin">userLogin</NavLink>
            </li>
        </ul>
    </div>
</nav>

        </div>
    );
}
export default NavPage;
