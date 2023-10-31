import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavAdmin from "../header/NavAdmin";
import NavPage from "../header/NavPage";
import useAuthContext from "../context/AuthContext";
import Cookies from "js-cookie";

const AdminLayout = () => {

    const adminCookie = Cookies.get("adminName");


    return adminCookie ? <><NavAdmin/><Outlet/></> : <><NavPage/><Navigate to="/adminLogin"/></>
}

export default AdminLayout;
