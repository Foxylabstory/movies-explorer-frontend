import React from "react";
import './Main.css';
import Header from '../BaseComponents/Header/Header';
import NavTab from '../Main/NavTab/NavTab';
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../BaseComponents/Footer/Footer";

function Main(props) {
  return (
    <div className="main">
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default Main;