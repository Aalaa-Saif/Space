import React, {useEffect} from "react";
import dashboard from "../../../css/pageAuthAdmin/Dashboard.module.css";
import useAuthContext from "../context/AuthContext";
import { NavLink } from "react-router-dom";

function Dashboard(){
    const {admin} = useAuthContext();


    return(
        <div>
            <div className={"contentMove "+dashboard.cardMove}>
                <div>
                    <h1><i><NavLink className={dashboard.adminDashLink} to="/dashboard">Admin Dashboard</NavLink></i></h1>
                    <div className={dashboard.card}>
                        <img src={`./img/admin/img/`+admin.photo} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
