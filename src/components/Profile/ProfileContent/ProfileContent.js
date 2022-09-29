import React from "react";
import './ProfileContent.css';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function ProfileContent(params) {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <section className='profile-content'>
            <h2 className="profile-content__header">Привет, {currentUser.name}!</h2>
            <form className="profile-content__form">
                <label className="profile-content__label">
                    <span className="profile-content__span">Имя</span>
                    <input className="profile-content__input" value={currentUser.name} disabled></input>
                    <span className="profile-content__error"></span>
                </label>
                <label className="profile-content__label">
                    <span className="profile-content__span">E-mail</span>
                    <input className="profile-content__input profile-content__input_no-border-bottom" value={currentUser.email} disabled></input>
                    <span className="profile-content__error"></span>
                </label>
                <p className="profile-content__message"></p>
                <button className="profile-content__button profile-content__button_submit profile-content__invisible">Сохранить</button>
            </form>
            <ul className="profile-content__list">
                    <li className="profile-content__list-item">
                        <button className="profile-content__button profile-content__button_change">Редактировать</button>
                    </li>
                    <li className="profile-content__list-item">
                        <button className="profile-content__button profile-content__button_logout">Выйти из аккаунта</button>
                    </li>
                </ul>
        </section>
    )
}

export default ProfileContent;