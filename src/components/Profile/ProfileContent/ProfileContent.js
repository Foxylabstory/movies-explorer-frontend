import React, { useState, useContext, useEffect } from "react";
import './ProfileContent.css';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import useFormWithValidation from '../../../utils/Hooks/UseFormWithValidation';

function ProfileContent({ onUpdate, onSignOut, errorText }) {
    const currentUser = useContext(CurrentUserContext);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [areNotEqualValues, setAreNotEqualValues] = useState(true);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        function closeByEscape(evt) {
            if (evt.key === 'Escape') {
                setIsUnlocked(false);
            }
        }
        if (isUnlocked) {
            document.addEventListener('keydown', closeByEscape);
            return () => {
                document.removeEventListener('keydown', closeByEscape);
                inputControl.resetForm();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUnlocked])

    const handleUnlock = () => {
        setIsUnlocked(!isUnlocked);
    }

    const inputControl = useFormWithValidation();
    const { name, email } = inputControl.errors;

    useEffect(() => {
        if (inputControl.values.name === currentUser.name &&
            inputControl.values.email === currentUser.email) {
            setAreNotEqualValues(false);
        } else {
            setAreNotEqualValues(true);
        }
        
    }, [currentUser, inputControl.values.name, inputControl.values.email]);

    useEffect(() => {
        setIsValid(inputControl.isValid && areNotEqualValues)
    }, [areNotEqualValues, inputControl.isValid]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email } = inputControl.values;
        onUpdate(name, email);
        inputControl.resetForm();
        setIsUnlocked(false);
    };

    return (
        <section className='profile-content'>
            <h2 className="profile-content__header">Привет, {currentUser.name}!</h2>
            <form className="profile-content__form">
                <label className="profile-content__label">
                    <span className="profile-content__span">Имя</span>
                    <input
                        className={`profile-content__input ${inputControl?.errors?.name && 'profile-content__input_error'}`}
                        name='name'
                        placeholder={currentUser.name}
                        value={inputControl?.values?.name ?? ''}
                        disabled={!isUnlocked && 'disabled'}
                        minLength='2'
                        maxLength='30'
                        pattern='[A-Za-zА-Яа-яЁё\s-]+'
                        onChange={inputControl.handleChange}
                        required
                    ></input>
                    <span className="profile-content__error">{name}</span>
                </label>
                <label className="profile-content__label">
                    <span className="profile-content__span">E-mail</span>
                    <input
                        className={`profile-content__input profile-content__input_no-border-bottom ${inputControl?.errors?.email && 'profile-content__input_error'}`}
                        name='email'
                        placeholder={currentUser.email}
                        value={inputControl?.values?.email ?? ''}
                        disabled={!isUnlocked && 'disabled'}
                        pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                        onChange={inputControl.handleChange}
                        required
                    ></input>
                    <span className="profile-content__error">{email}</span>
                </label>
                <p className={`profile-content__message ${errorText.startsWith('Изменение ') ? '' : 'profile-content__message_error'}`}>{errorText}</p>
                <button
                    className={`profile-content__button profile-content__button_submit
                    ${!isUnlocked && 'profile-content__invisible'}
                    ${(!isValid && 'profile-content__button_disable')}`}
                    disabled={(!isValid && 'disabled')}
                    onClick={handleSubmit}
                >Сохранить</button>
            </form>
            <ul className={`profile-content__list ${isUnlocked && 'profile-content__invisible'}`}>
                <li className="profile-content__list-item">
                    <button
                        className="profile-content__button profile-content__button_change"
                        onClick={handleUnlock}
                    >Редактировать</button>
                </li>
                <li className="profile-content__list-item">
                    <button className="profile-content__button profile-content__button_logout"
                        onClick={onSignOut}>Выйти из аккаунта</button>
                </li>
            </ul>
        </section>
    )
}

export default ProfileContent;