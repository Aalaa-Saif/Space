import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import dashboard from "../../../css/pageAuthAdmin/Dashboard.module.css";
import useAuthContext from "../context/AuthContext";

const ForPlanet = () => {
    const {forceUpdate} = useAuthContext();
    const [text,setText] = useState("");

    const uploadPlanetData = async (e) =>{
        e.preventDefault();
        const UploadPlanet = new FormData();
        UploadPlanet.append("text",text);
        axios.post("/api/admin_store_planet",UploadPlanet);
        forceUpdate();
    }

    return(
        <div  className={"contentMove "+dashboard.cardMove}>

            <div className="col-md-8 py-5 mx-3">
                <h5>Here is the only one paragragh about planets</h5>
                <div className="border border-dark px-1 py-2">
                    {/* Upload planet Data */}
                    <form encType="multipart/form-data" onSubmit={uploadPlanetData}>
                        <textarea className="col-10 mx-md-5" type="text" id="uploadPostID" onChange={(e)=>setText(e.target.value)} rows="3" placeholder="Write here" ></textarea>
                        <button className={"btn btn-dark"}>Send</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ForPlanet;
