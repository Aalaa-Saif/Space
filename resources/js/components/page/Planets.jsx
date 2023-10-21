import React, { Component, useEffect, useState } from "react";
import axios from "../api/axios";
import { Navigate, useNavigate } from "react-router-dom";


const Planets = () => {
    const [depData, setDepData] = useState([]);
    const navigate = useNavigate();

    const clicknavigate = (e) =>{
        e.preventDefault();
       navigate("/");
    }
//onClick={() => navigate('/')}
    useEffect(()=>{
        axios.get('/api/dapInfo')
       .then(resp => {
           setDepData(resp.data);
       });

    },[])

    return(
        <div>
            <div className="container">
            <h1>Planets</h1>
            <p>jjjjjjjjjjjj</p>
            {depData.map(row=>{
                return(
                    <div key={row.id}>
                        <p onClick={clicknavigate}>{row.name}</p>
                    </div>
                )
            })}

            </div>

        </div>

    );

}
export default Planets;
