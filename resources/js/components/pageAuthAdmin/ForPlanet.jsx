import React from "react";
import { NavLink } from "react-router-dom";
import dashboard from "../../../css/pageAuthAdmin/Dashboard.module.css";
import useAuthContext from "../context/AuthContext";

const ForPlanet = () => {
    const {forceUpdate} = useAuthContext();

    const uploadPlanetData = async (e) =>{
        e.preventDefault();
        const editData = new FormData();
        editData.append("text",text);
        axios.post("/api/user_store_post",editData);
        forceUpdate();
    }

    return(
        <div  className={"contentMove "+dashboard.cardMove}>
            <h1><i><NavLink className={dashboard.adminDashLink} to="/dashboard">Admin Dashboard</NavLink></i></h1>
            <div className="col-md-8 py-5 mx-3">
                <div className="card border border-dark px-1 py-2">
                    {/* Upload planet Data */}
                    <form encType="multipart/form-data" onSubmit={uploadPlanetData}>
                        <textarea className="col-10 mx-md-5" type="text" id="uploadPostID" onChange={(e)=>setText(e.target.value)} rows="3" placeholder="Write here" ></textarea>
                        <button className={"btn btn-dark "}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForPlanet;
