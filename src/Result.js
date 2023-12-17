import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResultItem from "./ResultItem";

const Results = (props) => {

    const data = props.data;
    const browse = props.browse;
    const watched = props.watched;

    return (
        <div className="results">
            <Container fluid>
                <Row className="result-row">
                    {data.map((elem) => (
                        /*<div className="search-resullt">
                            <a href={elem['link']} ><h2>{elem['title']}</h2> </a>
                            <p> {elem['displayLink']} </p>
                        </div>*/
                        <Col className="result-row" key={elem['id']}>
                            <ResultItem item = {elem} browse={browse} watched={watched}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Results;