import React, {useState, Fragment, useEffect} from "react";
import profile from "../../../css/pageAuthUser/Profile.module.css";
import useAuthContext from "../context/AuthContext";
import $ from 'jquery';
import axios from "../api/axios";

const Profile = () => {
    const {user, userPost, forceUpdate} = useAuthContext();
    const [text,setText] = useState(""); //for upload text posts & edit text post
    const [image,setImage] = useState(""); //images for upload posts & edit image post

    const [name,setName] = useState(""); //for edit profile name
    const [photo,setPhoto] = useState(""); //for edit profile photo
    const [fetchEditPost,setEditPost] = useState(""); //get data from DB.. in edit

    //for upload posts
    const uploadPost = async (e) =>{
        e.preventDefault();
        const editData = new FormData();
        editData.append("text",text);
        for (let i = 0; i< image.length ; i++) {
            editData.append(`image[${i}]`,image[i]);
        }
        axios.post("/api/user_store_post",editData);
        forceUpdate();
    }

    const editProfileHandler = () => {
        $('.' + profile.editProfileOpen).css("display","block");
    }

    const editProfileCloseHandler = () => {
        $('.' + profile.editProfileOpen).css("display","none");
    }

    //for edit profile data (name & photo)
    const sendEditProfile = (e) => {
        e.preventDefault();
        const id = e.target.id;
        if(photo != null){
            //console.log("yes");
            const editData = new FormData();
            editData.append('id', id);
            editData.append('photo',photo[0]);
            axios.post("/api/user_editPhoto",editData);
        }
        else{
            //console.log("no");
            const editData = new FormData();
            editData.append('id', id);
            //editData.append('photo','photo');
            axios.post("/api/user_editPhoto",editData);
        }

        const data ={
            id:id,
            name: name,
        }
        axios.post("/api/user_editName",data);
        forceUpdate();

    }

    //for update page without refresh the page
    const PageUpdate = () => {
        if(forceUpdate){
            document.getElementById('uploadPostID').onChange = setText("");
            document.getElementById('uploadPostID').value = "";
            document.getElementById('uploadPostIDImg').onChange = setImage("");
           // document.getElementById('postCommentID').value = "";
        }
    }

    const OptionDeletePostHandler = (e) =>{
        const id = e.target.id;
        const deleteData = new FormData();
        deleteData.append('id', id);

        axios.post("/api/user_deletePost",deleteData);
        forceUpdate();
    }


    const editPostClose = (e) => {
        const id = e.target.id;
        $('#editPostOpen-'+id ).css("display","none");
    }

    const deleteImgPostHandler = (e) =>{
        e.preventDefault();
        const id = e.target.id;
        const deleteImgPost = new FormData();
        deleteImgPost.append('id', id);

        axios.post("/api/user_deleteEditImgPost",deleteImgPost);
        forceUpdate();
    }

    //option edit.. it is open when click ..and shows the data from DB
    const OptionEditPostHandler = (e) =>{
        e.preventDefault();
        const id = e.target.id;
        $('#editPostOpen-'+id ).css("display","block");
        const edit = new FormData();
        edit.append('id',id);

        axios.post('/api/user_editPost/',edit)
        .then(resp=>{
            setEditPost(resp.data);
            console.log(resp.data);
        });
    }

    /*useEffect(() => {
        axios.post('/api/user_editPost').then(resp => {
            setEditPost(resp.data);
            console.log(resp.data);
        })
    })*/

    const sendEditPost = async (e) => {
        e.preventDefault();
        const id = e.target.id;

        const data = new FormData();
        data.append('id', id);
        data.append('text', text);
        for (let i = 0; i< image.length ; i++) {
            data.append(`image[${i}]`,image[i]);
        }

        console.log(data);
        await axios.post("/api/user_updatePost", data);
        forceUpdate();
    }

    const OpenCommentBigSpace = (e) => {
        e.preventDefault();
        const id = e.target.id;
        $('#CommentBigSpace-'+id ).css("display","block");

        console.log(id);

    }

    const CloseCommentBigSpace = (e) => {
        const id = e.target.id;
        $('#CommentBigSpace-'+id ).css("display","none");
    }

    return(
        <div className={profile.body}>

            <div className="py-md-5 py-sm-5 py-5 px-md-4 px-sm-4 col-md-12 row" onSubmit={PageUpdate}>

                <div className="col-md-2 col-6 offset-3 border border-dark px-2 py-2 mx-md-5">
                    <img src={"./img/user/img/"+user.photo} className={"mx-auto d-block "+profile.profileImg} />
                    <hr/>
                    <h3 className="text-center">{user?.name}</h3>
                    <img src={"./img/edit.png"} className={profile.edit} alt="edit profile" onClick={editProfileHandler}/>


                    <div className={profile.editProfileOpen}>
                        <h2 className={"text-right "+profile.close} onClick={editProfileCloseHandler}>x</h2>
                        <img src={"./img/user/img/"+user.photo} className={"offset-md-4 offset-sm-3 "+profile.profileImg} />
                        <span className={profile.editSpanName}><b>{user.name}</b></span>
                        <br/>
                     {/* Edit profile name and photo */}
                        <form encType="multipart/form-data" id={user.id} onSubmit={sendEditProfile}>
                            <div className="my-md-4 my-sm-4 my-xs-4 offset-md-4 row">
                                <label htmlFor="editPhoto" className="col-md-2 mx-md-4"><b>change photo:</b></label>
                                <input id="editPhoto" type="file" name="photo" className="col-md-3" onChange={(e)=>setPhoto(e.target.files)} />
                            </div>
                            <div className="my-md-4 my-sm-4 my-xs-4 offset-md-4 row">
                                <label htmlFor="editName" className="col-md-2 mx-md-4"><b>change name:</b></label>
                                <input id="editName" type="text" className="col-md-3" defaultValue={user?.name} onChange={(e)=>setName(e.target.value)} />
                            </div>
                             <button className="btn btn-dark col-md-1 mx-md-2 offset-md-5" type="submit">Update</button>
                        </form>

                    </div>

                </div>


                <div className="col-md-8 py-5 mx-3">
                    <div className="card border border-dark px-1 py-2">
                        {/* Upload posts */}
                        <form encType="multipart/form-data" onSubmit={uploadPost}>
                            <textarea className="col-10 mx-md-5" type="text" id="uploadPostID" onChange={(e)=>setText(e.target.value)} rows="3" placeholder="Write here" ></textarea>
                            <br/>
                            <div className="offset-md-10">
                                <label htmlFor="file-input">
                                    <img className={profile.image_upload} src={"./img/upload_icon.png"} />
                                </label>

                                <input htmlFor="file-input" className={profile.profileInput} id="uploadPostIDImg" name="photo" type="file" onChange={(e)=>setImage(e.target.files)} multiple />
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
                                                <li><a className="dropdown-item" id={post.id} role="button" onClick={OptionEditPostHandler}>Edit</a></li>
                                                <li><a className="dropdown-item" id={post.id} role="button" onClick={OptionDeletePostHandler}>Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className={profile.editPostOpen} id={"editPostOpen-"+post.id}>

                                        <p className={"my-md-4 "+profile.editPostClose} id={post.id} onClick={editPostClose}>&#8594;</p>

                                        <div>
                                            {/* Edit post data */}
                                            <form encType="multipart/form-data" id={post.id} onSubmit={sendEditPost}>
                                                <div className="my-md-5 my-sm-5 my-xs-5 offset-md-2 row">
                                                    <label htmlFor="editName" className="col-md-2 mx-md-2"><b>edit post:</b></label>
                                                    <textarea id="editName" type="text" className={"col-md-5 "+profile.eInput} name="text" defaultValue={fetchEditPost.text} onChange={(e)=>setText(e.target.value)} autoFocus />
                                                </div>

                                                <div className="offset-md-10">
                                                    <label htmlFor="file-input">
                                                        <img className={profile.imageUploadEdit} src={"./img/upload_icon.png"} />
                                                    </label>

                                                    <input id="file-input" className={profile.profileInput} name="image[]" type="file" onChange={(e)=>setImage(e.target.files)} multiple />
                                                </div>

                                                <button type="submit" className={"btn btn-primary col-md-1 "+profile.editPostBtn}>Update</button>

                                                <div>
                                                    <div className={profile.scroll_post}>
                                                        {post.userpostimgs.map(postImg=>{
                                                            return(
                                                                <Fragment key={postImg.id}>
                                                                    <img src={"./img/user/postimg/"+postImg.image} name="image" value={fetchEditPost.image} className={profile.postImagesSmall} />
                                                                    <span id={postImg.id} className={profile.postImgSmallBtn} onClick={deleteImgPostHandler}>&#x2612;</span>
                                                                </Fragment>
                                                            )
                                                        })}
                                                    </div>
                                                </div>

                                            </form>
                                        </div>

                                    </div>

                                    <img src={"./img/user/img/"+user.photo} className={profile.miniPostImg} />
                                    <h4 className={profile.miniPostName}>{user.name}</h4>
                                    <hr className="text-light" />
                                    <p className={profile.postText}>{post.text}</p>
                                    {post.userpostimgs.map(postImg=>{
                                        return(
                                            <Fragment key={postImg.id} >
                                                <img src={"./img/user/postimg/"+postImg.image} className={"mx-1 my-1 "+profile.postImages} />
                                            </Fragment>
                                        )
                                    })}
                                </div>


                                {/* User's Comments */}
                                <div class="card-footer">
                                    <form method="POST" action="">
                                        <input class="form-control" placeholder="clickHere" id={post.id} onClick={OpenCommentBigSpace} />
                                        <p class="blockqoute offset-md-9">created</p>
                                    </form>
                                </div>
                                <div id={"CommentBigSpace-"+post.id} class={profile.CommentBigSpace}>
                                    <p className={"my-md-4 "+profile.editPostClose} id={post.id} onClick={CloseCommentBigSpace}>&#8594;</p>
                                    <br/><br/>
                                    <div class="mx-1" id={"reload_div-"+post.id} >
                                        <form method="POST" action="" class="form_comment">
                                            <div class="form-group">
                                                <textarea class="form-control col-md-2 border-dark" id={"comment-"+post.id} name="comment" placeholder="Write a comment" row="3"></textarea>
                                            </div>
                                            <button href="" comment_id={post.id} class="btn btn-info pull-right comment_btn my-2">Send</button>
                                        </form>

                                        <div class="row">
                                            <div class="col-md-6 offset-md-3 comment_space">
                                                <div class="scroll_post">


                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
