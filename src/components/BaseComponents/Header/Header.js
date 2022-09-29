import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import './Header.css';
import logoPath from "../../../images/header/logo__COLOR_main-1.svg";
import CustomLink from '../CustomLink/CustomLink';

function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="header">
      <div className="header__container">
        <Link className='header__logo-link' to="/" >
          <img className="header__logo" alt="Логотип сайта" src={logoPath} />
        </Link>
        <div className="header__links-container">

          {currentUser.loggedIn ? (
            <>
              <button type="button" className={'header__button header__open-button ' + (isMenuOpen ? 'header__menu-closed' : 'header__menu-opened')} aria-label="Открыть меню" onClick={handleMenuOpen}></button>
              <div className={'header__menu ' + (isMenuOpen ? 'header__menu-opened' : 'header__menu-closed')}>
                <nav className='header__menu-navigation'>
                  <button type="button" className={'header__button header__close-button ' + (isMenuOpen ? 'header__menu-opened' : 'header__menu-closed')} aria-label="Закрыть меню" onClick={handleMenuOpen}></button>
                  <ul className="header__nav-links">
                    <li className="header__nav-links-item header__nav-links-item_main"><CustomLink className={'header__link header__link'} to={"/"}>Главная</CustomLink></li>
                    <li className="header__nav-links-item"><CustomLink className={"header__link header__link"} to={"/movies"}>Фильмы</CustomLink></li>
                    <li className="header__nav-links-item"><CustomLink className={"header__link header__link_saved-films header__link"} to={"/saved-movies"}>Сохранённые фильмы</CustomLink></li>
                    <li className="header__nav-links-item"><Link className="header__button header__button_logged" to={"/profile"}>Аккаунт</Link></li>
                  </ul>
                </nav>
              </div>
            </>
          ) : (
            <ul className="header__nav-links-unlogged">
              <li className="header__nav-links-item"><Link className="header__link header__link_unlogged" to={"/signup"}>Регистрация</Link></li>
              <li className="header__nav-links-item"><Link className="header__button header__button_unlogged" to={"/signin"}>Войти</Link></li>
            </ul>
          )}



        </div>
      </div>
    </div>
  )
}

export default Header;