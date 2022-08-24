import React from 'react';
import {Carousel} from "react-bootstrap";
import img1 from '../img/3.jpg';
import img2 from '../img/4.jpg';
import img3 from '../img/5.jpg';
import img4 from '../img/6.jpg';
import img5 from '../img/7.jpg';
import img6 from '../img/8.jpg';
import img7 from '../img/9.jpg';
import img8 from '../img/10.jpg';
import img9 from '../img/11.jpg';
import img10 from '../img/12.jpg';
import img11 from '../img/13.jpg';
import img12 from '../img/14.jpg';

const Slider = () => {
    return (
        <Carousel fade controls={false} indicators={true} className="col-12 mx-auto">
            <Carousel.Item  className="d-flex justify-content-center">
                <img
                    className="d-block col-6 col-sm-4"
                    src={img1}
                    alt="First slide"
                />
                <img
                    className="d-block col-6 col-sm-4"
                    src={img2}
                    alt="First slide"
                />
                <img
                    className="d-block d-none d-sm-block col-sm-4"
                    src={img3}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="d-flex justify-content-center">
                <img
                    className="d-block d-none d-sm-block col-sm-4"
                    src={img4}
                    alt="First slide"
                />
                <img
                    className="d-block col-6 col-sm-4"
                    src={img5}
                    alt="First slide"
                />
                <img
                    className="d-block col-6 col-sm-4"
                    src={img6}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="d-flex justify-content-center">
                <img
                    className="d-block col-6 col-sm-4"
                    src={img7}
                    alt="First slide"
                />
                <img
                    className="d-block d-none d-sm-block col-sm-4"
                    src={img8}
                    alt="First slide"
                />
                <img
                    className="d-block col-6 col-sm-4"
                    src={img9}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="d-flex justify-content-center">
                <img
                    className="d-block col-6 col-sm-4"
                    src={img10}
                    alt="First slide"
                />
                <img
                    className="d-block d-none d-sm-block col-sm-4"
                    src={img11}
                    alt="First slide"
                />
                <img
                    className="d-block col-6 col-sm-4"
                    src={img12}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;