import React from 'react';
import img1 from "../img/25.jpg";
import img2 from "../img/21.jpg";
import img3 from "../img/16.jpg";
import img4 from "../img/26.jpg";
import {Col, Image} from "react-bootstrap";
import TypeOfPhoto from "../Components/TypeOfPhoto";

const LoveStory = () => {

    const descr = [
        {text: 'Обсуждение образа и идеи съемки, помощь вподготовке'},
        {text: 'Студийная или уличная фотосъемка 1 час, 20 фото в авторской ретуши'},
        {text: 'Все удачные исходники в день съемки, фотографии передаются через облако'}
    ]
    const imgs = [
        {src: img1},
        {src: img2},
        {src: img3},
        {src: img4},
    ]

    return (
        <TypeOfPhoto
            title={'Love Story'}
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

export default LoveStory;