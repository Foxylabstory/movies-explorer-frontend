import React from "react";
import Greetings from "../BaseComponents/Greetings/Greetings";
import SignButton from "../BaseComponents/SignButton/SignButton";
import SignInput from "../BaseComponents/SignInput/SignInput";
import './Signin.css';

function Signin(props) {
    return (
        <section className="signin">
            <form className="signin__container">
                <Greetings text={'Рады видеть!'} />
                <SignInput header={'E-mail'} type={'email'} placeholder={'Виталий'} />
                <SignInput header={'Пароль'} type={'password'} placeholder={'pochta@yandex.ru'} />
                <SignButton
                    buttonText={'Войти'}
                    message={'Ещё не зарегистрированы?'}
                    to={'/signup'}
                    linkText={'Регистрация'} />
            </form>
        </section>
    )
}

export default Signin;