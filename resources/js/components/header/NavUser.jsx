import React,{useState} from "react";
import nav from "../../../css/header/NavUser.module.css";
import { NavLink } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

function NavUser(){
    const {userLogout,setUser,setUserPost} = useAuthContext();


    const userLogoutFunction =async (e) => {
        e.preventDefault();
        userLogout();
    }

    const [search,setSearch] = useState("");
    const searchHandler = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('search', search);
        await axios.post("/api/user_profile", data) .then(resp=>{
            setUser(resp.data.user);
            setUserPost(resp.data.post);
        });
    }

    return(
        <div>

<nav className="navbar navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="/profile">Profile</NavLink>

    <form className="d-flex mt-3" role="search" onSubmit={searchHandler}>
        <input className="form-control me-2" type="search" name="search" onChange={(e)=>setSearch(e.target.value)} placeholder="search" aria-label="search"/>
        <button className="btn btn-success" type="submit">Search</button>
    </form>

    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><u>List</u></h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Posts</a>
          </li>

           <li>
            <hr className={nav.hr}/>
           </li>
           <li className="nav-item">
                <NavLink className="nav-link" to="/logout" onClick={userLogoutFunction}>logout</NavLink>
            </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
<br/><br/>

        </div>
    );
}
export default NavUser;
