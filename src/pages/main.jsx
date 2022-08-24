import React from "react";
import Slider from "../Components/Slider";
import Container from "react-bootstrap/Container";
import Contact from "../Components/Contact";
import Portfolio from "../Components/Portfolio";

const Main = () => {
    return(
        <Container>
            <Slider/>
            <Contact/>
            <Portfolio/>
        </Container>
    )
}

export default Main