import React from "react";
import "../../../css/header/Nav.css";
import { NavLink } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

function NavUser(){
    const {userLogout} = useAuthContext();

    const userLogoutFunction =async (e) => {
        e.preventDefault();
        userLogout();
    }
    return(
        <div>

<nav className="navbar navbar-expand-md" role="navigation">

    <div className="collapse navbar-collapse collapsedark2" id="navbarid" role="menu">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/profile">profile</NavLink>
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
export default NavUser;
