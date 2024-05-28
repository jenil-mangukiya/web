import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
const Project = () => {


    return (
        <>
            <Container>
                <div className='sch d-flex'>
                    <div className='col-6'>
                        <p style={{ fontFamily: 'Roboto', fontSize: '50px', }}>Sweet Chocolate</p>
                        <p style={{ fontFamily: 'Roboto', color: '#999999' }}>Photography</p>
                    </div>
                    <div col-6>
                        <p style={{ fontFamily: 'Roboto', color: '#999999', textAlign: 'left', fontSize: '16px', lineHeight: '24px' }}>
                            The relationship between geometry and architectural design are described and discussed along some examples. Geometry is the fundamental science of forms and their order. Geometric figures, forms and transformations build the material of architectural design. In the history of architecture geometric rules based on the ideas of proportions and symmetries formed fixed tools for architectural design. The relationship between geometry and architectural design are described.</p>
                        <p style={{ fontFamily: 'Roboto', color: '#999999' }}>
                            Portfolio Metro
                        </p>
                        <div className='d-flex justify-content-between'>

                            <div>
                                <p>
                                    Client</p>
                                <p style={{ fontFamily: 'Roboto', color: '#999999' }}>Insight Studio</p>
                            </div>
                            <div>
                                <p>Date
                                </p>
                                <p style={{ fontFamily: 'Roboto', color: '#999999' }}>28 Aug 2019</p>
                            </div>
                            <div>
                                <p>Services</p>
                                <p style={{ fontFamily: 'Roboto', color: '#999999' }}>Design, Art Direction, Website</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='d-flex cat'>
                <img src={require('../src/img/image-28.jpeg')} alt="" />
                <img src={require('../src/img/image-29.jpeg')} alt="" />
                    
                </div>
                <div className='d-flex cat'>
                <img src={require('../src/img/image-49.jpeg')} alt="" />
                <img src={require('../src/img/image-50.jpeg')} alt="" />

                </div>
            </Container>

        </>
    )
}

export default Project