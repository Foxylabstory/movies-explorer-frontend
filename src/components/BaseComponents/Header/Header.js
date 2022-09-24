import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoPath from "../../../images/header/logo__COLOR_main-1.svg";

function Header(props) {
  return (
    <div className="header">
      <div className="header__container">
        <Link className='header__logo-link' to="/" >
          <img className="header__logo" alt="Логотип сайта" src={logoPath} />
        </Link>

        <div className="header__links-container">
          {/* <Link className="ol header__link" to={props.link} onClick={props.onAction} >
            {props.linkText}
          </Link>
          <button className="ol header__button">{props.buttonText}</button> */}
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Header;