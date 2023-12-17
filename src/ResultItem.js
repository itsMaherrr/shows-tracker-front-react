import Infos from "./Infos";
import Cast from "./Cast";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { PlaylistAdd, LibraryAddCheck } from "@mui/icons-material";
import { Card } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ResultItem = (props) => {

    const [style, setStyle] = useState({ display: 'none' });
    const [changed, setChanged] = useState(false);
    

    const elem = props.item;
    const browse = props.browse;
    const watched = props.watched;

    const addToWatchList = async (event) => {
        event.preventDefault();

        const data = elem;
        const session = JSON.parse(localStorage.getItem('session'));
        let config = {
            headers:{
                'authorization': 'Bearer ' + session.token,
                'username' : session.username
            }
        };
        
        await axios.post('http://localhost:8080/epd-project/webapi/myresource/add-to-watchlist', data, config)
        .then((response) => {
            if (response.status === 200){
                setChanged(true);
            }
        })
    }

    const addToWatchedList = async (event) => {
        event.preventDefault();

        const data = elem;
        const session = JSON.parse(localStorage.getItem('session'));
        let config = {
            headers:{
                'authorization': 'Bearer ' + session.token,
                'username' : session.username
            }
        };
        
        await axios.post('http://localhost:8080/epd-project/webapi/myresource/add-to-watched-list', data, config)
        .then((response) => {
            if (response.status === 200){
                setChanged(true);
            }
        })
    }

    const deleteItem = async (event) => {
        event.preventDefault();

        const id = elem.id;
        const session = JSON.parse(localStorage.getItem('session'));
        let config = {
            headers:{
                'authorization': 'Bearer ' + session.token,
                'username' : session.username
            }
        };
        
        await axios.delete(`http://localhost:8080/epd-project/webapi/myresource/delete/${id}`, config)
        .then((response) => {
            if (response.status === 200){
                setChanged(true);
            }
        })
    }

    const updateToWatchedList = async (event) => {
        event.preventDefault();

        const data = elem;
        const session = JSON.parse(localStorage.getItem('session'));
        let config = {
            headers:{
                'authorization': 'Bearer ' + session.token,
                'username' : session.username
            }
        };

        await axios.put('http://localhost:8080/epd-project/webapi/myresource/update-to-watched', data, config)
        .then((response) => {
            if (response.status === 200){
                setChanged(true);
            }
        })
    }

    return (
        <div className="search-result">
            <Link className="card-link">
                <Card style={{ width: '22rem' }} className="element" alignment='end' id={elem['id']} onMouseEnter={e => setStyle({ display: 'flex' })} onMouseLeave={e => setStyle({ display: 'none' })}>
                    <div className="card-layout">
                        <Card.Img variant="top" src={elem['picture']} />
                        <div className="card-buttons" style={style}>
                            {
                                browse &&
                                <div className="media-button">
                                    <IconButton aria-label="library-add-check" size="large" color="success" onClick={addToWatchList}>
                                        <PlaylistAdd />
                                    </IconButton>
                                </div>
                            }
                            {
                                !watched && browse &&
                                <div className="media-button">
                                    <IconButton aria-label="library-add-check" size="large" color="success" onClick={addToWatchedList}>
                                        <LibraryAddCheck />
                                    </IconButton>
                                </div>
                            }
                            {
                                !watched && !browse &&
                                <div className="media-button">
                                    <IconButton aria-label="library-add-check" size="large" color="success" onClick={updateToWatchedList}>
                                        <LibraryAddCheck />
                                    </IconButton>
                                </div>
                            }
                            {!browse &&
                                <div className="media-button">
                                    <IconButton aria-label="delete" size="large" color="error" onClick={deleteItem}>
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            }
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Title as={Infos} title={elem['title']} year={elem['year']} />
                        <p>{elem['type']}</p>
                        <Card.Text as={Cast} cast={elem['cast']} />
                        {/*<Button variant="primary">Go somewhere</Button>*/}
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

export default ResultItem;