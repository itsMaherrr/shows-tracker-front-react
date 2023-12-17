import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';


const MyNavbar = () => {

    const [session, setSession] = useState(null);

    useEffect(() => {
        if (localStorage.getItem('session') !== null) {
            const username = JSON.parse(localStorage.getItem('session'))['username'];
            setSession({
                name: username,
                id: 3
            });
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('session');
        setSession(null);
        window.location.href = "/";
    }


    return (
        /*<nav className="navbar">
            <div className="navbar-components">
                <div className="website-title">
                    <Link to="/">Projet EPD</Link>
                </div>
                <LinksList class = "links" data = {links} />
            </div>
        </nav>*/
        <div className="mynavbar">
            <Navbar key={'xxl'} bg="dark" variant="dark" expand={'xxl'} className="mb-3" fixed="top">
                <Container fluid>
                    <Navbar.Brand as={Link} to={"/"}>EPD Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'xxl'}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${'xxl'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'xxl'}`}
                        placement="end"
                    >
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to={"/Create"} key={1}>Browse</Nav.Link>
                                <NavDropdown title="My Lists">
                                    <NavDropdown.Item as={Link} to={"/Add"} >Watchlist</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/Watched"}>Watched list</NavDropdown.Item>
                                </NavDropdown>

                                { session == null && <Nav.Link as={Link} to={"/login"} key={2}>Login</Nav.Link> }
                                { session !== null && 
                                <NavDropdown title={session.name}>
                                <NavDropdown.Item as={Link} onClick={logout} >Log out</NavDropdown.Item>
                            </NavDropdown>
                                }
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default MyNavbar;