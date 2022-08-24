import React from 'react';
import TypeOfPhoto from "../Components/TypeOfPhoto";
import {Col, Image} from "react-bootstrap";
import img4 from "../img/1.jpg";
import img5 from "../img/2.jpg";
import img6 from "../img/3.jpg";
import img7 from "../img/4.jpg";


const Individual = () => {

    const descr = [
        {text: 'Обсуждение образа и идеи съемки, помощь вподготовке'},
        {text: 'Студийная или уличная фотосъемка 1 час, 20 фото в авторской ретуши'},
        {text: 'Все удачные исходники в день съемки, фотографии передаются через облако'}
    ]
    const imgs = [
        {src: img4},
        {src: img5},
        {src: img6},
        {src: img7},
    ]

    return (
        <TypeOfPhoto
            title={'Индивидуальная съемка'}
            cost={'3.000 руб./час'}
            list={
            descr.map((item, index) =>
                <li className='col-12 col-md-3 list-unstyled d-block m-2 text-center'>{item.text}</li>)
            }
            works={imgs.map(img =>
                <Col className='col-12 col-sm-5'>
                    <Image fluid={true} src={img.src} className='m-3'/>
                </Col>
                )}
        ></TypeOfPhoto>
    );
};

export default Individual;