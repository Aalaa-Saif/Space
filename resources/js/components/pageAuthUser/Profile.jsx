import React, {useEffect} from "react";
import useAuthContext from "../context/AuthContext";

const Profile = () => {
    const {user, getUser} = useAuthContext();

    return(
        <div>
            <h1>Profile</h1>
            <h3>{user.name}</h3>
        </div>
    );
}

export default Profile;
