import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./page/Home";
import Planets from "./page/Planets";
import AdminLogin from "./page/AdminLogin";
import Dashboard from "./pageAuthAdmin/Dashboard";
import EditAdminProfile from "./pageAuthAdmin/editAdminProfile";
import ForHome from "./pageAuthAdmin/ForHome";
import ForPlanet from "./pageAuthAdmin/ForPlanet";
import Profile from "./pageAuthUser/Profile";
import Post from "./pageAuthUser/Post";
import UserLogin from "./page/UserLogin";
import VisitLayout from "./layouts/VisitLayout";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import UserLogLayout from "./layouts/UserLogLayout";
import UserRegister from "./page/UserRegister";


const Space = () => {

    return(
        <div>
            <Routes>

                <Route element={<VisitLayout/>}>
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/planets" element={<Planets/>} />
                    <Route path="/adminLogin" element={<AdminLogin/>} />
                </Route>

                <Route element={<UserLogLayout/>}>
                    <Route path="/userLogin" element={<UserLogin/>} />
                    <Route path="userRegister" element={<UserRegister/>} />
                </Route>

                <Route element={<AdminLayout/>}>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/editAdminProfile" element={<EditAdminProfile/>} />
                    <Route path="/forHome" element={<ForHome/>} />
                    <Route path="/forPlanet" element={<ForPlanet/>} />
                </Route>

                <Route element={<UserLayout/>}>
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/post" element={<Post/>} />
                </Route>

            </Routes>
        </div>

    );
}
export default Space;

ReactDOM.createRoot(document.getElementById("myApp")).render(<BrowserRouter><AuthProvider><Space/></AuthProvider></BrowserRouter>);
