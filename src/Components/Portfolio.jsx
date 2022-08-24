import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import img1 from '../img/16.jpg'
import img2 from '../img/25.jpg'
import img3 from '../img/23.jpg'
import img4 from '../img/1.jpg'
import img5 from '../img/32.jpg'
import img6 from '../img/28.jpg'

const Portfolio = () => {
    return (
        <Container>
            <Row>
                <Col className='col-6 col-sm-4'>
                    <Image fluid={true} src={img1}/>
                </Col>
                <Col className='col-6 col-sm-4'>
                    <Image fluid={true} src={img2}/>
                </Col>
                <Col className='d-none d-sm-block col-sm-4'>
                    <Image fluid={true} src={img3}/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className='col-6 col-sm-4'>
                    <Image fluid={true} src={img4}/>
                </Col >
                <Col className='col-6 col-sm-4'>
                    <Image fluid={true} src={img5}/>
                </Col>
                <Col className='d-none d-sm-block col-sm-4'>
                    <Image fluid={true} src={img6}/>
                </Col>
            </Row>
            <Row className='d-sm-none'>
                <Col className='col-6'>
                    <Image fluid={true} src={img3}/>
                </Col>
                <Col className='col-6'>
                    <Image fluid={true} src={img6}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Portfolio;