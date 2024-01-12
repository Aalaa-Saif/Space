import React from "react";
import home from "../../../css/page/Home.module.css";

function Home(){
    return(
        <div>
            <div className={home.homeLeft}>
            </div>


            <div className={home.homeRight}>
                <h1 className={"col-md-8 "+home.h1}>Home</h1>

            </div>


        </div>
    );
}
export default Home;
