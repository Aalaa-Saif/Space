import React, {useState,useEffect} from "react";
import dashboard from "../../../css/pageAuthAdmin/Dashboard.module.css";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";

function EditAdminProfile(){
    const {admin,forceUpdate} = useAuthContext();
    const [name,setName] = useState(""); //for edit profile name
    const [photo,setPhoto] = useState(""); //for edit profile photo

     //for edit admin profile data (name & photo)
        const sendEditProfile = (e) => {
            e.preventDefault();
            const id = e.target.id;
            if(photo != null){
                //console.log("yes");
                const editData = new FormData();
                editData.append('id', id);
                editData.append('photo',photo[0]);
                axios.post("/api/admin_editPhoto",editData);
            }
            else{
                //console.log("no");
                const editData = new FormData();
                editData.append('id', id);
                //editData.append('photo','photo');
                axios.post("/api/admin_editPhoto",editData);
            }

            const data ={
                id:id,
                name: name,
            }
            axios.post("/api/admin_editName",data);
            forceUpdate();

        }

    return(
        <div>
              {/* Edit profile name and photo */}
              <form encType="multipart/form-data" id={admin.id} className={dashboard.editProfileForm} onSubmit={sendEditProfile}>
                            <div className="my-md-4 my-sm-4 my-xs-4 offset-md-4 row">
                                <label htmlFor="editPhoto" className="col-md-2 mx-md-4"><b>change photo:</b></label>
                                <input id="editPhoto" type="file" name="photo" className="col-md-3" onChange={(e)=>setPhoto(e.target.files)} />
                            </div>
                            <div className="my-md-4 my-sm-4 my-xs-4 offset-md-4 row">
                                <label htmlFor="editName" className="col-md-2 mx-md-4"><b>change name:</b></label>
                                <input id="editName" type="text" className="col-md-3" defaultValue={admin?.name} onChange={(e)=>setName(e.target.value)} />
                            </div>
                             <button className="btn btn-dark col-md-1 mx-md-2 offset-md-5" type="submit">Update</button>
                        </form>

        </div>
    );
}
export default EditAdminProfile;
