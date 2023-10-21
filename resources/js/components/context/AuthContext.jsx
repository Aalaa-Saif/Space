import { createContext, useContext,useState,useEffect, useReducer, useRef } from "react";
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom";


const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState([]); //user in profile page
    const [userIn,setUserIn] = useState();
    const [userOut,setUserOut] = useState();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [valueUpdate, forceUpdate] = useReducer(x => x + 1, 0);
    //const redirectLogin = location.state?.from || 'profile';

    const csrf = () => axios.get("/sanctum/csrf-cookie/");

    const getUser = async () => {
        await axios.get('/api/admin_profile/')
        .then(resp=>{
            setUser(resp.data);
            console.log(resp.data.id);
            localStorage.setItem("id",resp.data.name);
            localStorage.getItem("id");

        });
    }

    /*
    const logIn = (email: string, password: string) => {
    return servicesApi.get('/sanctum/csrf-cookie').then(() => {
    return axios.post('auth/login', {
        email,
        password,
    })
    })
    }
    */
    const login = async ({...data}) => {
        await csrf();
        try{
            axios.post("/api/login_check/",
            data,
            ).then(res => {
                if(res.data.status == true){
                    getUser();
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
            setUser(null);
            localStorage.setItem("id","undefined");
            navigate('/adminLogin');
        });
    }


  /*  useEffect(()=>{
        getUser();
        getUserPost();
    },[valueUpdate]);*/
    useEffect(()=>{
        getUser();
    },[])



    return <AuthContext.Provider value={{user, getUser, login,forceUpdate, adminLogout, userIn}}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext(){
    return useContext(AuthContext);
}

