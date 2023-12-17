import { Card } from "react-bootstrap";
import React from "react";

const Cast = (props) => {

    const cast = props.cast;

    return (
        <div className="cast">
            <h6>Main Actors :</h6>
            <Card.Text>{cast}</Card.Text>
        </div>
    );
}

export default Cast;