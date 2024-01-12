import React, {useEffect} from "react";
import dashboard from "../../../css/pageAuthAdmin/Dashboard.module.css";
import useAuthContext from "../context/AuthContext";

function Dashboard(){
    const {admin} = useAuthContext();


    return(
        <div>
            <div className={"contentMove "+dashboard.cardMove}>
                <div>
                    <h1><i className="text-light"><u>Admin Dashboard</u></i></h1>
                    <div className={dashboard.card}>
                        <img src={`./img/admin/img/`+admin.photo} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
