import React, { useEffect, useState } from "react";
import home from "../../../css/page/Home.module.css";
import axios from "../api/axios";
import $ from 'jquery';

function Home(){

    useEffect(()=>{
        if(window.innerHeight < 660){
            $('#footer' ).css("bottom","0px");
        }
    },[]);

    return(
        <div className="container">
            <div className="my-5">
                <h2>hi</h2>
            </div>
        </div>
    );
}
export default Home;
