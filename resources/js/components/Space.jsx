import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuthContext, { AuthProvider } from "./context/AuthContext";
import NavPage from "./header/NavPage";
import Home from "./page/Home";
import Planets from "./page/Planets";
import AdminLogin from "./page/AdminLogin";
import Dashboard from "./pageAuth/Dashboard";
import News from "./pageAuth/News";
import VisitLayout from "./layouts/VisitLayout";
import AdminLayout from "./layouts/AdminLayout";
import NavAdmin from "./header/NavAdmin";


function Space(){

    return(
        <div>
            <Routes>
                <Route element={<VisitLayout/>}>
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/planets" element={<Planets/>} />
                    <Route path="/adminLogin" element={<AdminLogin/>} />
                </Route>

                <Route element={<AdminLayout/>}>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/news" element={<News/>} />
                </Route>
            </Routes>
        </div>

    );
}
export default Space;

ReactDOM.createRoot(document.getElementById("myApp")).render(<BrowserRouter><AuthProvider><Space/></AuthProvider></BrowserRouter>);
