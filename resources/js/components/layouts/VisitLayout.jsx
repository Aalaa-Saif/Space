import React from "react";
import {  Navigate, Outlet } from "react-router-dom";
import NavAdmin from "../header/NavAdmin";
import NavPage from "../header/NavPage";
import Footer from "../footer/Footer";
import useAuthContext from "../context/AuthContext";
import Cookies from "js-cookie";

const VisitLayout = () => {
    const {admin} = useAuthContext();
    const adminCookie = Cookies.get("adminName");

   return !adminCookie  ? <><NavPage/><Outlet/><Footer/></> : <><NavAdmin/><Navigate to="/dashboard"/></>


}

export default VisitLayout;
