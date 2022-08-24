import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import img4 from "../img/1.jpg";

const TypeOfPhoto = (props) => {
    return (
        <Container >
            <h2 className='text-center m-4'>{props.title}</h2>
            <h3  className='text-center'>{props.cost}</h3>
            {/*<ul className='d-flex justify-content-around mx-auto m-4'>{props.list}</ul>*/}
            <Row className='justify-content-center mx-auto'>{props.list}</Row>
            <Row className='justify-content-center'>
                {props.works}
            </Row>
        </Container>
    );
};

export default TypeOfPhoto;