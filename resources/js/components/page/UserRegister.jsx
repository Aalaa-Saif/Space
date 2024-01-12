import React,{useState} from "react";
import userRegister from "../../../css/page/UserRegister.module.css";
import axios from "../api/axios";

const UserRegister = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [photo,setPhoto] = useState("");

    const registerName = (e) =>{
        setName(e.target.value);
    }

    const registerEmail = (e) =>{
        setEmail(e.target.value);
    }

    const registerPassword = (e) =>{
        setPassword(e.target.value);
    }

    const registerPhoto = (e) =>{
        setPhoto(e.target.files);
    }
    const RegisterSubmitHandler = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('password', password);
        data.append('photo',photo[0]);

        await axios.post("/api/user_register", data);
       //forceUpdate();
    }

    return(
        <div>
        <div className="col-md-5 col-lg-5 col-sm-5 col-xl-5 offset-md-3 my-md-5">

            <div className={"bg-dark "+userRegister.card}>
                <div className="text-light text-center pt-md-4"><b><h4>Register</h4></b></div>
                <div className="card-body text-light">
                    <form onSubmit={RegisterSubmitHandler} className="py-md-3">
                        <div className="form-group my-md-1">
                            <label htmlFor="name" className={"col-md-12 text-md-center mb-md-2 "+userRegister.loginLabel}>name</label><br/>
                            <input id="name" className={"col-md-6 "+userRegister.loginField} type="name" name="name" onChange={registerName} autoFocus/>
                        </div>
                        <br/>

                        <div className="form-group my-md-1">
                            <label htmlFor="email" className={"col-md-12 text-md-center mb-md-2 "+userRegister.loginLabel}>Email</label><br/>
                            <input id="email" className={"col-md-6 "+userRegister.loginField} type="email" name="email" onChange={registerEmail} autoFocus/>
                        </div>
                        <br/>
                        <div className="form-group my-md-1">
                            <label htmlFor="password" className={"col-md-12 text-md-center mb-md-2 "+userRegister.loginLabel}>Password</label><br/>
                                <input id="description" className={"col-md-6 "+userRegister.loginField} type="password" name="password" onChange={registerPassword}/>
                        </div>
                        <br/>

                        <div className="my-md-3">
                            <label htmlFor="photo" className={"col-md-12 text-md-center mb-md-2 "+userRegister.loginLabel}>Photo</label><br/>

                            <input id="photo" className="offset-md-3" type="file" name="photo" onChange={registerPhoto} />
                        </div>
                        <br/>


                        <div className="form-group">
                            <div className={"col-md-4 "+userRegister.loginButton}>
                                <button className='btn btn-dark border-light mt-md-2'>
                                    register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
    )
}

export default UserRegister;
