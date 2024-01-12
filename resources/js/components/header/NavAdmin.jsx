import React from "react";
import $ from 'jquery';
import navAdmin from "../../../css/header/NavAdmin.module.css";
import { NavLink } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

function NavAdmin(){
    const {adminLogout} = useAuthContext();

    const adminLogoutFunction =async (e) => {
        e.preventDefault();
        adminLogout();
    }

    const closeSidebar = () => {
        $('.' + navAdmin.sidebar).css("width","0");
        $('.' + navAdmin.sidebtn).css({
            "marginLeft":"0",
            "transition":"all 0.9s"
        });
        $('.contentMove').css({
            "marginLeft":"200px",
            "transition":"all 0.9s"
        });
    }

    const clickSidebtn = () => {
        $('.' + navAdmin.sidebar).css("width","250px");
        $('.' + navAdmin.sidebar).css("display","block");
        $('.' + navAdmin.sidebtn).css({
            "marginLeft":"250px",
            "transition":"all 0.9s"
        });
        $('.contentMove').css({
            "marginLeft":"250px",
            "transition":"all 0.9s"
        });
    }

    return(
        <div>

            <div className={navAdmin.sidebar}>

                <div className={"close "+navAdmin.closedash} onClick={closeSidebar}>
                    <span >&times;</span>
                </div>

                <ul className={"navbar-nav"}>
                    <li className="nav-item">
                        <NavLink className={navAdmin.sidebar_link} to="/forHome">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={navAdmin.sidebar_link} to="forPlanet">Planets</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={navAdmin.sidebar_link} to="/logout" onClick={adminLogoutFunction}>logout</NavLink>
                    </li>
                </ul>
            </div>

            <button className={"navbar-toggler bg-dark navbar-dark border border-light "+navAdmin.sidebtn} onClick={clickSidebtn} type="button">
                <span className="navbar-toggler-icon"></span>
            </button>

        </div>
    );
}
export default NavAdmin;
