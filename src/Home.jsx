import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup, Container, Nav, Navbar } from 'react-bootstrap';
const Home = () => {

    return (
        <>
            <div className='sec-1'>
                <Container>
                    <div className='d-flex'>
                        <div className='content-p'>
                            <p className='power-1'>
                                Powering the digital business simply
                            </p>
                            <p className='power-2'>
                                We provides you with user management functionality that results in faster development, faster revenue, more users.
                            </p>
                            <button className='start-2' variant='dark'>Get Start</button>
                            <p className='power-4'>
                                Companies that trust us.
                            </p>
                            <div className='d-flex'>
                                <img className='im1' src={require('../src/img/qwer.png')} alt="" />
                                <img className='im1' src={require('../src/img/qwe.png')} alt="" />
                                <img className='im1' src={require('../src/img/qwert.png')} alt="" />

                            </div>
                        </div>
                        <div className='img'>
                            <img src={require('../src/img/Frame-12-2.png.webp')} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
            {/* ============================================================================================================ */}
            <div className='sec-2'>
                <Container>
                    <div className='key'>
                        Keywords research. Content optimisation. Backlinks. Store monitoring.
                    </div>
                    <CardGroup>
                        <Card style={{ border: 'none', marginTop: '50px' }}>
                            <div className='c-img'>
                                <img src={require('../src/img/Group-37-1.png')} alt="" />
                            </div>
                            <Card.Body>
                                <Card.Title style={{ paddingTop: '30px' }} >Get Quality Leads</Card.Title>
                                <Card.Text style={{fontFamily:'popins'}}>
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{ border: 'none', marginTop: '50px' }}>
                            <div className='c-img'>
                                <img src={require('../src/img/Group-36-1.png')} alt="" />
                            </div>
                            <Card.Body>
                                <Card.Title style={{ paddingTop: '30px' }}>Grow Your Traffic</Card.Title>
                                <Card.Text style={{fontFamily:'popins'}}>
                                    Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{ border: 'none', marginTop: '50px' }}>
                            <div className='c-img'>
                                <img src={require('../src/img/Group-38-1.png')} alt="" />
                            </div>
                            <Card.Body>
                                <Card.Title style={{ paddingTop: '30px', }}>Drive More Sales</Card.Title>
                                <Card.Text style={{fontFamily:'popins'}}>
                                    Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.


                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>

                </Container>
            </div>
        </>
    )
}

export default Home