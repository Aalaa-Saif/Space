import React from "react";
import {  Navigate, Outlet } from "react-router-dom";
import NavUser from "../header/NavUser";
import NavPage from "../header/NavPage";
import Footer from "../footer/Footer";
import useAuthContext from "../context/AuthContext";
import Cookies from "js-cookie";

const UserLayout = () => {
    const {user} = useAuthContext();

    const userCookie = Cookies.get("userName");

    return userCookie ? <><NavUser/><Outlet/></> : <><NavPage/><Navigate to="/userLogin"/><Footer/></>

}

export default UserLayout;
