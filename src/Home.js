import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="home">
            <h2 id="HomePage"> Our Services </h2>
            <div className="services">
                <Card className="text-center" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src='https://cdn.shopify.com/s/files/1/0249/2908/products/IMDb-2021-Detail-1.jpg?v=1639372810' />
                    <Card.Body>
                        <div className="service-infos">
                            <Card.Title>Browse</Card.Title>
                        </div>
                        <Card.Text>
                            Browse any movie, tv show or anime you want.
                        </Card.Text>
                        <Button variant="outline-secondary" as={Link} to={"/Create"}>Start Browsing</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="https://itsonmylistpod.files.wordpress.com/2018/10/cropped-iomllogoitunes1.png" />
                    <Card.Body>
                        <div className="service-infos">
                            <Card.Title>My Lists </Card.Title>
                        </div>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div className="service-infos">
                            <Button variant="outline-secondary" as={Link} to={"/Add"}>My Watchlist</Button>
                            <Button variant="outline-secondary" as={Link} to={"/Watched"}>My Watched List</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Home;