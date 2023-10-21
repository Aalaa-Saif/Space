import React from "react";
import home from "../../../css/page/Home.module.css";

function Home(){
    return(
        <div>
            <div className={home.homeLeft}>
                <img className={"col-md-3 "+home.img} src="http://localhost:8000/img/space home.jpg" />
            </div>


            <div className={home.homeRight}>
                <h1 className="col-md-8">Home</h1>
            </div>


        </div>
    );
}
export default Home;
