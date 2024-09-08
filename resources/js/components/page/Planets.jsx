import React, { useEffect, useState } from "react";
import planet from "../../../css/page/Planets.module.css";
import axios from "../api/axios";
import $ from 'jquery';


const Planets = () => {
    //const [depData, setDepData] = useState([]);

    //onClick={() => navigate('/')}
   /* useEffect(()=>{
        axios.get('/api/dapInfo')
       .then(resp => {
           setDepData(resp.data);
       });

    },[]);*/
    useEffect(()=>{
        if(window.innerHeight > 600){
            $('#footer' ).css("bottom","auto");
        }
    },[]);

    return(
        <div>
            <div>
                <div className={planet.background}>
                <h1 className="text-light text-center">P l a n e t s</h1>
                <div className={"offset-md-1 "+planet.divCenter}>
                    <p className={planet.textSize}>dddddddddddddd</p>
                </div>
                <br/><br/>

                </div>
            </div>


        </div>

    );

}
export default Planets;
