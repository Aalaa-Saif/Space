import React, { useEffect, useState } from "react";
import planet from "../../../css/page/Planets.module.css";
import axios from "../api/axios";
import $ from 'jquery';


const Planets = () => {
    const [planetData,setPlanetData] = useState([]);
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

        axios.get('/api/get_planet/')
        .then(resp => {
            setPlanetData(resp.data);
           console.log(resp.data);
        })
    },[]);

    return(
        <div>
            <div>
                <div  className={planet.background}>
                <h1 className="text-light text-center">P l a n e t s</h1>
                <div className={"container "+planet.divCenter}>
                {
                    planetData.map(planet=>{
                        return(
                            <div>
                                <div className="my-2">
                                <h2> {planet.text} </h2>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <br/><br/>


                </div>
            </div>

        </div>


    );

}
export default Planets;
