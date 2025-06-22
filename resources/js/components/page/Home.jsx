import React, { useEffect, useState } from "react";
import homee from "../../../css/page/Home.module.css";
import axios from "../api/axios";
import $ from 'jquery';

function Home(){
     const [homeData,setHomeData] = useState([]);

    useEffect(()=>{
        if(window.innerHeight < 660){
            $('#footer' ).css("bottom","0px");
        }

         axios.get('/api/get_home/')
                .then(resp => {
                    setHomeData(resp.data);
                   console.log(resp.data);
                })

    },[]);

    return(
        <div className={homee.background}>
            <div className="py-5">
            {
                    homeData.map(home=>{
                        return(
                            <div>
                                <h2 className={homee.textCenter}>
                                    {home.text}
                                </h2>
                                <h4 className="text-center text-light">{home.text2}</h4>
                                <br/>
                                <div className="container row text-light">
                                    <div className={"col-md-3 offset-md-3 "+homee.divMove}>
                                        <img className={"pt-3 "+homee.divMoveImg} src={"./img/space.jpg"}/>
                                        <h6 className="text-center py-md-3">D1</h6>
                                    </div>
                                </div>
                                <br/> <br/> <br/>
                                <h4 className="text-center text-light "> {home.text3} </h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default Home;
