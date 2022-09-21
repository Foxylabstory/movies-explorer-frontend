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

function Main(props) {
  return (
    <div className="Main">
      <Header>
        <Link className="header__link" to={"/signup"}>Регистрация</Link>
        <button className="header__button-main">Войти</button>
      </Header>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  )
}

export default Main;