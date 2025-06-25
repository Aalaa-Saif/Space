import React, { useState } from "react";
import profile from "../../../css/pageAuthUser/Profile.module.css";

const Post = () => {

    const [text,settext] = useState("");
    const sub = (e) => {
       // e.preventDefault();
       const text = e.target.value;
        console.log(text);
    }

    return(
        <div className={"container "+profile.body}>
             <div className="row">
                <div className="float-left col-md-4 my-4 rounded border border-info">
                    <h3>project</h3>
                </div>

                <div className="float-right col-md-8 my-4">
                    <h4>stevan</h4>
                    <form>
                        <input type="text" value={"vampire"} onChange={sub} />

                    </form>
                </div>
             </div>
        </div>
    )

}

export default Post;
