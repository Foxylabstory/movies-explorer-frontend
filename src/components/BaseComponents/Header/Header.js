import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import './Header.css';
import logoPath from "../../../images/header/logo__COLOR_main-1.svg";
import CustomLink from '../CustomLink/CustomLink';

/* const hamburger = document.querySelector('.header__hamburger');
const navLinks = document.querySelector(".header__nav-links");
const links = document.querySelectorAll(".header__nav-links header__nav-links-item");

const handleMenuOpen = () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
  //Hamburger Animation
  hamburger.classList.toggle("toggle"); 
}
*/
/* hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
  //Hamburger Animation
  hamburger.classList.toggle("toggle");
}); */

function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    console.log(`isMenuOpen is: ${isMenuOpen}`);
    setIsMenuOpen(!isMenuOpen);
    console.log(`isMenuOpen is: ${isMenuOpen}`);
  }

  const linkClassNames = ({isActive}) => isActive ? 'header__link_active' : '';

  return (
    <div className="header">
      <div className="header__container">
        <Link className='header__logo-link' to="/" >
          <img className="header__logo" alt="Логотип сайта" src={logoPath} />
        </Link>
        <div className="header__links-container">
          <button type="button" className={'header__button header__open-button ' + (isMenuOpen ? 'header__menu-closed' : 'header__menu-opened')} aria-label="Открыть меню" onClick={handleMenuOpen}></button>
          <div className={'header__menu ' + (isMenuOpen ? 'header__menu-opened' : 'header__menu-closed')}>
            <nav className='header__menu-navigation'>
              <button type="button" className={'header__button header__close-button ' + (isMenuOpen ? 'header__menu-opened' : 'header__menu-closed')} aria-label="Закрыть меню" onClick={handleMenuOpen}></button>
              {currentUser.loggedIn ? (
                <ul className="header__nav-links">
                  <li className="header__nav-links-item"><CustomLink className={'header__link header__link'} to={"/"}>Главная</CustomLink></li>
                  <li className="header__nav-links-item"><CustomLink className={"header__link header__link_films header__link"} to={"/movies"}>Фильмы</CustomLink></li>
                  <li className="header__nav-links-item"><CustomLink className={"header__link header__link_saved-films header__link"} to={"/saved-movies"}>Сохранённые фильмы</CustomLink></li>
                  <li className="header__nav-links-item"><Link className="header__button header__button_logged" to={"/profile"}>Аккаунт</Link></li>
                </ul>
              ) : (
                <>
                  <Link className="header__link" to={"/signup"}>Регистрация</Link>
                  <Link className="header__button header__button_unlogged" to={"/signin"}>Войти</Link>
                </>
              )}
            </nav>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header;