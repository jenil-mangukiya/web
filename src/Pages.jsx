import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { IconName, Si1001Tracklists } from "react-icons/si";
import { BsArrowRightShort } from "react-icons/bs";
const Pages = () => {

    return (
        <>
           
                <div className='wcy' style={{ backgroundImage: `url(${require("../src/img/O6NM390-1-1-1.jpg")})`, height: '500px  ', width: "100%" }}>
                    why choos Us
                </div>
                <Container>
                    <div className='ps-2'>
                        <div className='d-flex'>
                            <div className='lp'>
                                <img src={require('../src/img/images.jpeg')} alt="" />
                            </div>
                            <div className='bx'>
                                    <p style={{fontSize:'30px',lineHeight:'50.4px',paddingTop:'20px',fontFamily: 'Poppins'}}>More for you business success</p>
                                    <p style={{color:'#999999',fontSize:'16px',fontFamily: 'Poppins'}}>We create our one-of-a-kind handmade soaps with care and love using the finest ingredients available. We use earth-friendly ingredients like fresh goat milk, olive oil, shea and cocoa butter, coconut and avocado oil. Our natural exfoliates include lemon peel, ground coffee and calendula petals and more. In order to take your raw ingredients and turn them into an organic soap, you need to have a chemical reaction. This is where lye comes in.</p>
                                    <a href="https://n.foxdsgn.com/karma/about-classic/">know more <BsArrowRightShort /></a>
                            </div>
                        </div>
                    </div>
                </Container>
         



        </>
    )
}

export default Pages