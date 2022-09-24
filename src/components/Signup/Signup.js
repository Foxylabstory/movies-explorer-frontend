import React from "react";
import Greetings from "../BaseComponents/Greetings/Greetings";
import SignButton from "../BaseComponents/SignButton/SignButton";
import SignInput from "../BaseComponents/SignInput/SignInput";
import './Signup.css';

function Signup(params) {
  return (
    <section className="signup">
      <form className="signup__container">
        <Greetings text={'Добро пожаловать!'} />
        <SignInput header={'Имя'} type={'text'} />
        <SignInput header={'E-mail'} type={'email'} />
        <SignInput header={'Пароль'} type={'password'} />
        <SignButton
          buttonText={'Зарегистрироваться'}
          message={'Уже зарегистрированы?'}
          to={'/signin'}
          linkText={'Войти'} />

      </form>

    </section>
  )
}

export default Signup;