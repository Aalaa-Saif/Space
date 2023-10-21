import React from "react";
import {  Navigate, useNavigate,useLocation, Outlet } from "react-router-dom";
import useAuthContext from '../context/AuthContext';
import NavAdmin from "../header/NavAdmin";
import NavPage from "../header/NavPage";
import Cookies from "js-cookie";
import AdminLogin from "../page/AdminLogin";
import AdminLayout from "./AdminLayout";

const VisitLayout = () => {
    const {user} = useAuthContext();
    const navigate = useNavigate();

    const authenticated = localStorage.getItem("id");
    //Cookies.set("id",user.id);
    //const y= Cookies.get("id");
    //const location = useLocation();
    //const navigate = useNavigate();

   return authenticated == "undefined" ? <><NavPage/><Outlet/></> : <><NavAdmin/><Navigate to="/dashboard"/></>

}

export default VisitLayout;
