import React from "react";
import {  Navigate, Outlet } from "react-router-dom";
import NavUser from "../header/NavUser";
import NavPage from "../header/NavPage";
import useAuthContext from "../context/AuthContext";
import Cookies from "js-cookie";

const UserLayout = () => {
    const {user} = useAuthContext();

    const userCookie = Cookies.get("userName");

    return userCookie ? <><NavUser/><Outlet/></> : <><NavPage/><Navigate to="/userLogin"/></>

}

export default UserLayout;
