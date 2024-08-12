import React, { useEffect, useState } from "react";
import home from "../../../css/page/Home.module.css";
import axios from "../api/axios";
import $ from 'jquery';

function Home(){
    const [test,setTest] = useState([]);
    const [editText,setEditText] = useState(null);
    const [editInfo,setEditInfo] = useState(null);
    const [editWord,setEditWord] = useState(null);

    useEffect(() => {
        axios.get("/api/get_test").then(res => {
            setTest(res.data);
            console.log(res.data);
        });
    },[]);

    const openedit = (e) => {
        e.preventDefault();
        const id = e.target.id;
        $('#editPostOpen-'+id ).css("display","block");
        console.log(id);
    }

    const editPostClose = (e) => {
        const id = e.target.id;
        $('#editPostOpen-'+id ).css("display","none");
    }

    const sendEditPost = async (e) => {
        e.preventDefault();
        const id = e.target.id;

        const data ={
            id: id,
            text:editText,
            info:editInfo,
            word:editWord,
        }

        console.log(data);

        await axios.post("/api/post_test", data);

    }

    return(
        <div>
            <div className={home.homeLeft}>
            </div>

            <div className={home.homeRight}>
                <h1 className={"col-md-8 "+home.h1}>Home</h1>

                <div>
                    {test.map(row=>{
                        return(
                            <div key={row.id}>
                                <p>{row.info}</p>

                                <button id={row.id} onClick={openedit}>edit</button>


                                <div className={home.editPostOpen} id={"editPostOpen-"+row.id}>

                                    <p className={"my-md-4 "+home.editPostClose} id={row.id} onClick={editPostClose}>&#8594;</p>

                                    <div>
                                        <form encType="multipart/form-data" id={row.id} onSubmit={sendEditPost}>
                                            <div className="my-md-5 my-sm-5 my-xs-5 offset-md-2 row">
                                                <label htmlFor="editName" className="col-md-2 mx-md-2"><b>edit post:</b></label>
                                                <input id="editName" type="text" className={"col-md-5 "+home.eInput} name="text" defaultValue={row.text} onChange={(e)=>setEditText(e.target.value)} autoFocus />
                                                <input id="editName" type="text" className={"col-md-5 "+home.eInput} name="info" defaultValue={row.info} onChange={(e)=>setEditInfo(e.target.value)} />
                                                <input id="editName" type="text" className={"col-md-5 "+home.eInput} name="word" defaultValue={row.word} onChange={(e)=>setEditWord(e.target.value)} />
                                            </div>

                                            <button type="submit" className={"btn btn-primary col-md-1 "+home.editPostBtn}>Update</button>

                                        </form>
                                    </div>

                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>


        </div>
    );
}
export default Home;
