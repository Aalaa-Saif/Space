import React, {useState, useEffect} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import adminLogin from "../../../css/page/AdminLogin.module.css";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";

function UserLogin(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {userLogin, getUser} = useAuthContext();

    const handleLogin = async (e) => {
        e.preventDefault();
        userLogin({email,password});
    }

    return(
        <div>
            <div className="col-md-5 col-sm-5 col-xl-5 offset-md-3 offset-sm-3 offset-xl-3 my-5">

                <div className={"bg-dark "+adminLogin.card}>
                    <div className="text-light text-center pt-md-4"><b><h4>User Login</h4></b></div>
                    <div className="card-body text-light">
                        <form onSubmit={handleLogin} className="py-md-3">

                            <div className="form-group my-md-1">
                                <label htmlFor="email" className={"col-md-12 text-md-center mb-md-2 "+adminLogin.loginLabel}>Email</label><br/>
                                <input id="email" className={"col-md-6 "+adminLogin.loginField} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} autoFocus/>
                            </div>
                            <br/>
                            <div className="form-group my-md-1">
                                <label htmlFor="password" className={"col-md-12 text-md-center mb-md-2"+adminLogin.loginLabel}>Password</label><br/>
                                    <input id="description" className={"col-md-6 "+adminLogin.loginField} type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                             </div>

                            <div className="form-group">
                                <div className={"col-md-12 offset-md-5 "+adminLogin.loginButton}>
                                    <button type="submit" className='btn btn-dark border-light mt-md-4'>
                                        Login
                                    </button>
                                </div>
                            </div>
                            <br/>
                            <div className="form-group">
                                <div className={"col-md-12 offset-md-5 "+adminLogin.loginButton}>
                                    <NavLink to="/userRegister">Sign up</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default UserLogin;
