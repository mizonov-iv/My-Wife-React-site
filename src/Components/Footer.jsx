import React from 'react';
import vk from '../icons/vk.svg';
import tm from '../icons/tm.svg';
import Container from "react-bootstrap/Container";

const Footer = () => {
    return (
        <Container className="mx-auto mt-5 mb-5">
            <small className="d-block text-muted text-center">Следите за мной в соцсетях</small>
            <ul className="w-75 list-unstyled mt-2 mb-2 mb-lg-0 mx-auto d-flex justify-content-center">
                <li className="d-block">
                    <a href="https://vk.com/foto_by_mizonova">
                        <img src={vk} className="img-fluid mx-auto d-block w-50 c-secondary" alt="vk"/>
                    </a>
                </li>
                <li className="d-block">
                    <a href="https://t.me/Mizonova_Foto">
                        <img src={tm} className="img-fluid mx-auto d-block w-50" alt="tm"/>
                    </a>
                </li>
            </ul>
        </Container>
    );
};

export default Footer;