import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate,useLocation } from "react-router-dom";
import useAuthContext from '../context/AuthContext';
import NavAdmin from "../header/NavAdmin";
import NavPage from "../header/NavPage";
import axios from "../api/axios";
import Cookies from "js-cookie";

const AdminLayout = () => {
    const {user} = useAuthContext();
    const navigate = useNavigate();
    const authenticated = localStorage.getItem("id");
   /* const setCookie = Cookies.set('id',user.id);
    const getCookie = Cookies.get('id');
    console.log(getCookie);*/
    //const location = useLocation();
    //const navigate = useNavigate();

    /*if(!user.name){
        setTimeout(()=>{
          return navigate("/adminLogin");
        },200)
    }*/

    return authenticated != "undefined" ? <><NavAdmin/><Outlet/></> : <><NavPage/><Navigate to="/adminLogin"/></>
}

export default AdminLayout;
