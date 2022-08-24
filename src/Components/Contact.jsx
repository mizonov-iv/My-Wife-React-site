import React from 'react';
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";

const Contact = () => {
    return (
        <Container>
            <h4 className="text-center m-3 m-sm-4 text-black-50">Связаться со мной</h4>
                <h5 className="text-center d-block m-3 m-sm-4 text-black-50">По всем интересующим вас вопросам вы всегда можете связаться со мной.</h5>
            <Button variant="outline-secondary m-4 " className="d-block mx-auto mb-5">
                <a href='https://t.me/Mizonova_Foto' className='link-secondary text-decoration-none'>Написать</a>
            </Button>
        </Container>
    );
};

export default Contact;