import { createContext, useContext,useState,useEffect, useReducer, useRef } from "react";
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [admin,setAdmin] = useState([]); //admin in dashboard page
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [valueUpdate, forceUpdate] = useReducer(x => x + 1, 0);

    const csrf = () => axios.get("/sanctum/csrf-cookie/");

    const getAdmin = async () => {
        await axios.get('/api/admin_profile/')
        .then(resp=>{
            setAdmin(resp.data);
            console.log(resp.data.id);
        });
    }

    const login = async ({...data}) => {
        await csrf();
        try{
            axios.post("/api/login_check/",
            data,
            ).then(res => {
                if(res.data.status == true){
                    getAdmin();
                    Cookies.set("adminName",res.data.admin["name"]);
                    console.log(res.data.admin["name"]);
                    navigate("/dashboard");

                }
            });

        }
         catch(e){
            console.log(e);
            /*if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }*/
        }
    }

    const adminLogout =async () => {
        await axios.post('/api/admin_logout').then(() => {
            setAdmin(null);
           Cookies.remove("adminName");
            navigate('/adminLogin');
        });
    }

    const [user,setUser] = useState([]); //user in profile page

    const getUser = async () => {
        await axios.get('/api/user_profile/')
        .then(resp=>{
            setUser(resp.data);
            //console.log(resp.data.id);

        });
    }

    const userLogin = async ({...data}) => {
        await csrf();
        try{
            axios.post("/api/user_check/",
            data,
            ).then(res => {
                if(res.data.status == true){
                    Cookies.set("userName",res.data.user["name"]);
                    //getUser();
                    navigate("/profile");
                }
            });
        }
         catch(e){
            console.log(e);
            /*if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }*/
        }
    }

    const userLogout =async () => {
        await axios.post('/api/user_logout').then(() => {
            setUser(null);
            Cookies.remove("userName")
            navigate('/userLogin');
        });
    }

  /*  useEffect(()=>{
        getUser();
        getUserPost();
    },[valueUpdate]);*/

useEffect(()=>{
    getAdmin();
    getUser();
},[])

    return <AuthContext.Provider value={{admin, login,forceUpdate, adminLogout, user, userLogin, userLogout, getAdmin, getUser}}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext(){
    return useContext(AuthContext);
}
