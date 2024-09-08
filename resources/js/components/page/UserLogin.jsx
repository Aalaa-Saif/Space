import React, {useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import adminLogin from "../../../css/page/AdminLogin.module.css";
import useAuthContext from "../context/AuthContext";
import $ from 'jquery';

function UserLogin(){

    useEffect(()=>{
        if(window.innerHeight > 600){
            $('#footer' ).css("bottom","auto");
        }
    },[]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {userLogin,errors} = useAuthContext();

    const handleLogin = async (e) => {
        e.preventDefault();
        userLogin({email,password});
    }


    return(
        <div>
            <div className="col-md-5 col-sm-5 offset-md-3 offset-sm-3 my-5">

                <div className={"bg-dark "+adminLogin.card}>
                    <div className="text-light text-center pt-md-4 pt-4"><b><h4>User Login</h4></b></div>
                    <div className="card-body text-light">
                        <form onSubmit={handleLogin} className="py-md-3 py-3">

                            <div className="form-group my-md-1 my-1">
                                <label htmlFor="email" className={"col-md-12 col-12 text-md-center text-center "+adminLogin.loginLabel}>Email</label><br/>
                                <input id="email" className={"col-md-6 col-6 "+adminLogin.loginField} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} autoFocus/>
                                <br/>
                                {errors.email && (<div><p className="text-center"><small className="text-danger">{errors.email[0]}</small></p></div>)}
                            </div>
                            <br/>
                            <div className="form-group my-md-1">
                                <label htmlFor="password" className={"col-md-12 col-12 text-md-center text-center "+adminLogin.loginLabel}>Password</label><br/>
                                    <input id="description" className={"col-md-6 col-6 "+adminLogin.loginField} type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                    {errors.password && (<div><p  className="text-center"><small className="text-danger" role="alert">{errors.password[0]}</small></p></div>)}
                            </div>

                            <div className="form-group">
                                <div className={"col-md-12 text-md-center text-center mt-2"}>
                                    <button type="submit" className='btn btn-dark border-light mt-md-4'>
                                        Login
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className={"col-md-12 text-md-center col-12 text-center mt-2"}>
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
