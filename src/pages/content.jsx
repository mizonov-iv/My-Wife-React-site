import React from 'react';
import {Col, Image} from "react-bootstrap";
import TypeOfPhoto from "../Components/TypeOfPhoto";
import img1 from "../img/17.jpg";
import img2 from "../img/19.jpg";
import img3 from "../img/30.jpg";
import img4 from "../img/31.jpg";

const Content = () => {

    const descr = [
        {text: 'Обсуждение идеи съемки, цветовой палитры'},
        {text: 'Подбор образов и реквизитов'},
        {text: 'Помощь в подготовке к съемке, бронь студии'},
        {text: 'Студийная съемка 1 час/1,5 часа'},
        {text: '30 фото в авторской ретуши'},
        {text: 'Составление ленты и визуала'},
        {text: 'Все удачные исходники в день съемки'},
        {text: 'Фотографии передаются через облако'}
    ]
    const imgs = [
        {src: img1},
        {src: img2},
        {src: img3},
        {src: img4},
    ]

    return (
        <TypeOfPhoto
            title={'Контентная съемка'}
            cost={'3.000 руб./час'}
            list={
                descr.map((item, index) =>
                    <li className='col-12 col-md-4 list-unstyled d-block m-1 text-center'>{item.text}</li>)
            }
            works={imgs.map(img =>
                <Col className='col-12 col-sm-5'>
                    <Image fluid={true} src={img.src} className='m-3'/>
                </Col>
            )}
        ></TypeOfPhoto>
    );
};

export default Content;