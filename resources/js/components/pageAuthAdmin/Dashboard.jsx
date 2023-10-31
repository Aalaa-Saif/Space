import React, {useEffect} from "react";
import useAuthContext from "../context/AuthContext";

function Dashboard(){
    const {admin,getAdmin} = useAuthContext();
    const {adminLogout} = useAuthContext();

    const adminLogoutFunction =async (e) => {
        e.preventDefault();
        adminLogout();
    }


    return(
        <div>
            <p>jjjjjjjjjjjjjjjjjj</p>
            <button onClick={adminLogoutFunction}>logout</button>
           <h1>{admin.name}</h1>
        </div>
    );
}
export default Dashboard;
