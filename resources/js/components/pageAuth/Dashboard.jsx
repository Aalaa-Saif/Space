import React, {useEffect} from "react";
import useAuthContext from "../context/AuthContext";

function Dashboard(){
    const {user} = useAuthContext();


    return(
        <div>
            <p>jjjjjjjjjjjjjjjjjj</p>
           <h1 className="reload">{user.name}</h1>
        </div>
    );
}
export default Dashboard;
