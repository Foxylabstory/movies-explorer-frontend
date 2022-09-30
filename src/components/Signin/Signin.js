import React from "react";
import Greetings from "../BaseComponents/Greetings/Greetings";
import SignButton from "../BaseComponents/SignButton/SignButton";
import SignInput from "../BaseComponents/SignInput/SignInput";
import './Signin.css';

function Signin({ onSignIn, handleChangeInput, emailInput, passwordInput }) {
    return (
        <section className="signin">
            <form className="signin__container">
                <Greetings text={'Рады видеть!'} />
                <SignInput
                    header={'E-mail'}
                    type={'email'}
                    placeholder={'mail@domain.net'}
                    handleChangeInput={handleChangeInput}
                    value={emailInput}
                />
                <SignInput
                    header={'Пароль'}
                    type={'password'}
                    placeholder={'password'}
                    handleChangeInput={handleChangeInput}
                    value={passwordInput}
                />
                <SignButton
                    buttonText={'Войти'}
                    message={'Ещё не зарегистрированы?'}
                    to={'/signup'}
                    linkText={'Регистрация'}
                    onClick={onSignIn} />
            </form>
        </section>
    )
}

export default Signin;