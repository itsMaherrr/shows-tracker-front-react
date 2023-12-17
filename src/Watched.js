import React, { useEffect, useState } from "react";
import axios from 'axios';
import Results from "./Result";

const Watched = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('session') !== null){
            getData();
        }
        else {
            window.location.href = "/login";
        }
    }, []);


    const getData = async () => {        
        const session = JSON.parse(localStorage.getItem('session'));
        let config = {
            headers:{
                'authorization': 'Bearer ' + session.token,
                'username' : session.username
            }
        };
        await axios.get('http://localhost:8080/epd-project/webapi/myresource/watched-list',config)
        .then(response => {
            console.log(response);
            if (response.status === 200){
                response = response.data
                if (response.success === 'true'){
                    setData(JSON.parse(response.data));
                }
            }
        })
        
    }


    return (
        <div className="create">
                <h3 id="my-list-h3"> Watched List </h3>
                <Results data = {data} browse={false} watched={true}/>
        </div>
    );
}
 
export default Watched;