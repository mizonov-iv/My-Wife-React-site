import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import img from '../img/046.jpg';
import Container from "react-bootstrap/Container";

const Aboutme = () => {
    return (
        <Container>
            <Row className='justify-content-center m-2 mt-4'>
                <Col className='col-10 col-sm-4'>
                    <Image fluid={true} src={img}/>
                </Col>
                <Col className='col-10 col-sm-6'>
                    <div className='mt-3'>
                        <p>Меня зовут Вера Мизонова.</p>
                        <p>Занимаюсь фотографией более 3 лет.<br/>Работаю с направлениями: женский портрет, контент, love story.</p>
                        <p>К каждому клиенту я нахожу индивидуальный подход, помогаю найти локацию, а так же, с выбором образов для фотосессии. Мы вместе выберем фотостудию, я помогу с выбором образов и буду с вами постоянно на связи! В день съемки, помогу настроиться, подскажу с позами.</p>
                        <p>Для меня очень важно, чтобы мои клиенты остались довольны не только готовыми фотографиями, но и получили удовольствие от самого процесса съемки.</p>
                        <p>По желанию помогу организовать съемку "под ключ". Работаю в команде (стилисты, визажисты).</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Aboutme;