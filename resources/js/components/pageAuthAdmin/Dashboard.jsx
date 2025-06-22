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

                    <div className={"container "+ dashboard.card}>
                        <div className={dashboard.divLeft}>
                            <img src={`./img/admin/img/`+admin.photo} />
                        </div>
                        <div className={dashboard.divRight}>
                            <h2>{admin?.name}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
