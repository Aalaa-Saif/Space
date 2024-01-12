import React, {useEffect, useState, useReducer, Fragment} from "react";
import profile from "../../../css/pageAuthUser/Profile.module.css";
import useAuthContext from "../context/AuthContext";
import $ from 'jquery';
import axios from "../api/axios";
import { NavLink } from "react-router-dom";

const Profile = () => {
    const {user, userPost, forceUpdate} = useAuthContext();
    const [text,setText] = useState("");
    const [image,setImage] = useState("");
    const [name,setName] = useState("");
    const [photo,setPhoto] = useState("");

    const uploadPost = async (e) =>{
        e.preventDefault();
        const data = new FormData();
        data.append('text', text);
        for (let i = 0; i< image.length ; i++) {
            data.append(`image[${i}]`,image[i]);
        }
        //console.log(text);
       await axios.post("/api/user_store_post", data);
       forceUpdate();
    }

    const editProfileHandler = () => {
        $('.' + profile.editProfileOpen).css("display","block");
    }

    const editProfileCloseHandler = () => {
        $('.' + profile.editProfileOpen).css("display","none");
    }

    const sendEditPhoto = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const editData = new FormData();
        editData.append('id', id);
        editData.append('photo',photo[0]);

        axios.post("/api/user_editPhoto",editData);
        forceUpdate();
    }

    const sendEditName = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const editData = new FormData();
        editData.append('id', id);
        editData.append('name',name);

        axios.post("/api/user_editName",editData);
        forceUpdate();
    }

    const PageUpdate = () => {
        if(forceUpdate){
            document.getElementById('uploadPostID').value = "";
           // document.getElementById('postCommentID').value = "";
        }
    }

    const OptionHandler = (e) =>{
        const id = e.target.id;
        const deleteData = new FormData();
        deleteData.append('id', id);

        axios.post("/api/user_deletePost",deleteData);
        forceUpdate();
    }

    return(
        <div className={profile.body}>

            <div className="py-md-4 py-sm-4 py-xs-4 px-md-4 px-sm-4 col-md-12 row" onSubmit={PageUpdate}>

                <div className="col-md-2 border border-dark px-2 py-2 mx-md-5">
                    <img src={"./img/user/img/"+user.photo} className={"mx-auto d-block "+profile.profileImg} />
                    <hr/>
                    <h3 className="text-center">{user?.name}</h3>
                    <img src={"./img/edit.png"} className={profile.edit} alt="edit profile" onClick={editProfileHandler}/>

                    <div className={profile.editProfileOpen}>
                        <h2 className={"text-right "+profile.close} onClick={editProfileCloseHandler}>x</h2>
                        <img src={"./img/user/img/"+user.photo} className={"offset-md-4 offset-sm-3 "+profile.profileImg} />
                        <span className={profile.editSpanName}><b>{user.name}</b></span>
                        <br/>

                        <form encType="multipart/form-data" id={user.id} onSubmit={sendEditPhoto}>
                            <div className="my-md-4 my-sm-4 my-xs-4 offset-md-4 row">
                                <label htmlFor="editPhoto" className="col-md-2 mx-md-4"><b>change photo:</b></label>
                                <input id="editPhoto" type="file" name="photo" className="col-md-3" onChange={(e)=>setPhoto(e.target.files)} />
                                <button className="btn btn-dark col-md-1 mx-md-1">change</button>
                            </div>
                        </form>

                        <form encType="multipart/form-data" id={user.id} onSubmit={sendEditName}>
                            <div className="my-md-4 my-sm-4 my-xs-4 offset-md-4 row">
                                <label htmlFor="editName" className="col-md-2 mx-md-4"><b>change name:</b></label>
                                <input id="editName" type="text" className="col-md-3" defaultValue={user?.name} onChange={(e)=>setName(e.target.value)} />
                                <button className="btn btn-dark col-md-1 mx-md-2">change</button>
                            </div>
                        </form>

                    </div>

                </div>

                <div className="col-md-8 py-5 mx-3">
                    <div className="card border border-dark px-1 py-2">
                        <form encType="multipart/form-data" onSubmit={uploadPost}>
                            <textarea className="col-10 mx-md-5" type="text" id="uploadPostID" onChange={(e)=>setText(e.target.value)} rows="3" placeholder="Write here" ></textarea>
                            <br/>
                            <div className="offset-md-10">
                                <label htmlFor="file-input">
                                    <img className={profile.image_upload} src={"./img/upload_icon.png"} />
                                </label>

                                <input id="file-input" className={profile.profileInput} name="photo" type="file" onChange={(e)=>setImage(e.target.files)} multiple />
                                <button className={"btn btn-dark "+profile.profileButton}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

            <div className="container">

                    {userPost.map(post=>{
                        return(
                            <div key={post.id} className={"card my-3 py-3 px-3 offset-2 "+profile.profilePostCard}>
                                <div>
                                <div className="dropdown">
                                        <div className="dropdown">
                                        <img src={"./img/options.png"} className={"dropdown-toggle "+profile.options} type="button" data-bs-toggle="dropdown" aria-expanded="false"/>

                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" id={post.id} role="button" href="#" onClick={OptionHandler}>Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src={"./img/user/img/"+user.photo} className={profile.miniPostImg} />
                                    <h4 className={profile.miniPostName}>{user.name}</h4>
                                    <hr className="text-light" />
                                    <p className={profile.postText}>{post.text}</p>
                                    {post.userpostimgs.map(postImg=>{
                                        return(
                                            <Fragment key={postImg.id}>
                                                <img src={"./img/user/postimg/"+postImg.image} className={"mx-1 "+profile.postImages} />
                                            </Fragment>
                                        )
                                    })}
                                </div>


                            </div>
                        )
                    })}
            </div>
            <br/>


        </div>
    );
}

export default Profile;
