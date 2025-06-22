import React, { useState } from "react";
import dashboard from "../../../css/pageAuthAdmin/Dashboard.module.css";
import useAuthContext from "../context/AuthContext";

const ForHome = () => {
    const {forceUpdate} = useAuthContext();
    const [text,setText] = useState("");
    const [text2,setText2] = useState("");
    const [text3,setText3] = useState("");

    const uploadHomeData = async (e) =>{
        e.preventDefault();
        const UploadHome = new FormData();
        UploadHome.append("text",text);
        UploadHome.append("text2",text2);
        UploadHome.append("text3",text3);
        axios.post("/api/admin_store_home",UploadHome);
        forceUpdate();
    }


    return(
        <div className={"contentMove container "+dashboard.cardMove}>
              <div className="col-md-8 py-5 mx-3">
                <h5>Here is the only one paragragh about Home</h5>
                <div className="border border-dark px-1 py-2">
                    {/* Upload planet Data */}
                    <form encType="multipart/form-data" onSubmit={uploadHomeData}>
                        <h4 className="text-center">Headline</h4>
                        <textarea className="col-10 mx-md-5" type="text" id="uploadPostID" onChange={(e)=>setText(e.target.value)} rows="1" placeholder="Write here" ></textarea>
                        <h4 className="text-center">Text 2</h4>
                        <textarea className="col-10 mx-md-5" type="text" id="uploadPostID" onChange={(e)=>setText2(e.target.value)} rows="3" placeholder="Write here" ></textarea>
                        <h4 className="text-center">Text 3</h4>
                        <textarea className="col-10 mx-md-5" type="text" id="uploadPostID" onChange={(e)=>setText3(e.target.value)} rows="3" placeholder="Write here" ></textarea>
                        <button className={"btn btn-dark"}>Send</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ForHome;
