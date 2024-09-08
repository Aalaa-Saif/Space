import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavAdmin from "../header/NavAdmin";
import NavPage from "../header/NavPage";
import Footer from "../footer/Footer";
import useAuthContext from "../context/AuthContext";
import Cookies from "js-cookie";

const AdminLayout = () => {
    const {admin} = useAuthContext();

    const adminCookie = Cookies.get("adminName");


    return adminCookie ? <><NavAdmin/><Outlet/></> : <><NavPage/><Navigate to="/adminLogin"/><Footer/></>
}

export default AdminLayout;
