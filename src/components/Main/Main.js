import React from "react";
import { Link } from 'react-router-dom';
import './Main.css';
import Header from '../BaseComponents/Header/Header';
import NavTab from '../Main/NavTab/NavTab';
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";

function Main(props) {
  return (
    <div className="Main">
      <Header>
        <Link className="ol header__link" to={"/signup"}>Регистрация</Link>
        <button className="ol header__button-main">Войти</button>
      </Header>
      <Promo />
      <NavTab />
      <AboutProject />
    </div>
  )
}

export default Main;