import React from "react";
import $ from 'jquery';
import navAdmin from "../../../css/header/NavAdmin.module.css";
import { NavLink } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import nav from "../../../css/header/NavUser.module.css";

function NavAdmin(){
    const {adminLogout} = useAuthContext();

    const adminLogoutFunction =async (e) => {
        e.preventDefault();
        adminLogout();
    }


    return(
        <div>

        <nav className={"navbar navbar-dark bg-dark fixed-top "+navAdmin.sidebar}>
            <div className="container-fluid">
            <NavLink className={"navbar-brand "+navAdmin.navbrand} to="/dashboard">Admin Dashboard</NavLink>

            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <button type="button" className={"btn-close btn-close-white "+navAdmin.closeR} data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                        <NavLink className={navAdmin.sidebar_link} to="/forHome">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={navAdmin.sidebar_link} to="forPlanet">Planets</NavLink>
                    </li>

                   <li>
                    <hr className={nav.hr}/>
                   </li>
                   <li className="nav-item">
                        <NavLink className={navAdmin.sidebar_link} to="/logout" onClick={adminLogoutFunction}>logout</NavLink>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <br/><br/>

                </div>

    );
}
export default NavAdmin;
