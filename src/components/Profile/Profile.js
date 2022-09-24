import React from "react";
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from "../BaseComponents/Header/Header";
import ProfileContent from "./ProfileContent/ProfileContent";

function Profile(props) {
  return (
    <div className="profile">
      <Header>
        <Link className="header__link header__link_films" to={"/movies"}>Фильмы</Link>
        <Link className="header__link header__link_saved-films" to={"/saved-movies"}>Сохранённые фильмы</Link>
        <Link className="header__button header__button_logged" to={"/profile"}>Аккаунт</Link>
      </Header>
      <ProfileContent />
    </div>
  )
}

export default Profile;