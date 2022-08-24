import React from "react";
import {BrowserRouter, Routes, Route, NavLink,} from "react-router-dom";
import Main from "./pages/main";
import Individual from "./pages/individual";
import LoveStory from "./pages/loveStory";
import Content from "./pages/content";
import Aboutme from "./pages/aboutme";
import logo from './img/logo.png';
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

function App() {
  return (
      <BrowserRouter>
          <div className="wrapper">
                  <NavLink className="nav-link" to={'/'}>
                      <img src={logo} className="img-fluid d-block mx-auto col-9 col-sm-5 col-md-3 col-lg-3" alt="logo"></img>
                  </NavLink>
                  <Navigation className="col-3 col-sm-auto"/>
              <Routes>
                  <Route path={'/'} element={<Main/>} />
                  <Route path={'/individual'} element={<Individual/>} />
                  <Route path={'/loveStory'} element={<LoveStory/>} />
                  <Route path={'/content'} element={<Content/>} />
                  <Route path={'/aboutme'} element={<Aboutme/>} />
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
