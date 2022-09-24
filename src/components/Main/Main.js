import React from "react";
import { Link } from 'react-router-dom';
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
      <Header>
        <Link className="header__link" to={"/signup"}>Регистрация</Link>
        <Link className="header__button header__button_unlogged" to={"/signin"}>Войти</Link>
      </Header>
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