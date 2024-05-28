import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardGroup, Container, Nav, NavDropdown, Navbar, TabContainer } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function Header() {

    return (

        <>
            <Navbar expand="lg" className="d-flex  sticky-top justify-content-between navbar">
                <Container fluid className=''>
                    <Navbar.Brand href="#">
                        <img src={require('../src/img/karma.png')} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div className='d-flex sub-menu'>

                                <Nav>
                                    <Nav.Item>
                                        {/* <Nav.Link href="/"> */}
                                            <Link className='lin' to='/'>Home</Link>
                                        {/* </Nav.Link> */}
                                    </Nav.Item>
                                    <Nav.Item>
                                        {/* <Nav.Link eventKey="/Pages"> */}
                                        <Link className='lin' to='/Pages'>Pages</Link>
                                        {/* </Nav.Link> */}
                                    </Nav.Item>
                                    <Nav.Item>
                                        {/* <Nav.Link eventKey="/Project"> */}
                                        <Link className='lin' to='/Project'>Project</Link>
                                        {/* </Nav.Link> */}
                                    </Nav.Item>
                                    <Nav.Item>
                                        {/* <Nav.Link eventKey="/Blog"> */}
                                        <Link className='lin' to='/Blog'>Blog</Link>
                                        {/* </Nav.Link> */}
                                    </Nav.Item>
                                    <Nav.Item>
                                        {/* <Nav.Link eventKey="/Contact"> */}
                                        <Link className='lin' to='/Contact'>Contact</Link>
                                        {/* </Nav.Link> */}
                                    </Nav.Item>
                                   
                                </Nav>


                            </div>
                        </Nav>

                        <button className='start'>Get Start</button>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
            {/* =========================================================== */}
           

            
        </>
    )

}

export default Header;