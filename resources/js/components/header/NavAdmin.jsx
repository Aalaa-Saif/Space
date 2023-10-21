import React from "react";
import "../../../css/header/Nav.css";
import { NavLink } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

function NavAdmin(){
    const {adminLogout} = useAuthContext();

    const userLogoutFunction =async (e) => {
        e.preventDefault();
        adminLogout();
    }
    return(
        <div>

<nav className="navbar navbar-expand-md" role="navigation">

    <div className="collapse navbar-collapse collapsedark2" id="navbarid" role="menu">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">dashboard</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/news">news</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/logout" onClick={userLogoutFunction}>logout</NavLink>
            </li>
        </ul>
    </div>
</nav>

        </div>
    );
}
export default NavAdmin;
