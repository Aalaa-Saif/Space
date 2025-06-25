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
                            <img className={dashboard.imgProfile} src={`./img/admin/img/`+admin.photo} />
                        </div>
                        <div className={dashboard.divRight}>
                            <h2>{admin?.name}</h2>
                        </div>
                            <NavLink className="img-responsive" to="/editAdminProfile" >
                                 <img src={"./img/edit.png"} className={dashboard.edit} alt="edit profile" />
                             </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
