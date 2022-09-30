import React from "react";
import Greetings from "../BaseComponents/Greetings/Greetings";
import SignButton from "../BaseComponents/SignButton/SignButton";
import SignInput from "../BaseComponents/SignInput/SignInput";
import './Signup.css';
import useFormWithValidation from '../../utils/Hooks/UseFormWithValidation';
import SpanError from "../BaseComponents/SpanError/SpanError";

function Signup({ onSignUp, errorText }) {
  const inputControl = useFormWithValidation();
  const { name, email, password } = inputControl.errors;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = inputControl.values;
    onSignUp(name, email, password);
    inputControl.resetForm();
  };
  return (
    <section className="signup">
      <form className="signup__container">
        <Greetings text={'Добро пожаловать!'} />
        <SignInput
          header={'Имя'}
          type={'name'}
          placeholder={'Ваше имя, латиницей, кириллицей, может включать пробел или дефис.'}
          value={inputControl?.values?.name || ''}
          onChange={inputControl.handleChange}
          errorText={name}
          minLength={'2'}
          maxLength={'30'}
          pattern={'[A-Za-zА-Яа-яЁё\s-]+'}
        />
        <SignInput
          header={'E-mail'}
          type={'email'}
          placeholder={'mail@domain.net'}
          pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
          onChange={inputControl.handleChange}
          value={inputControl?.values?.email || ''}
          errorText={email}
        />
        <SignInput
          header={'Пароль'}
          type={'password'}
          placeholder={'password'}
          onChange={inputControl.handleChange}
          value={inputControl?.values?.password || ''}
          errorText={password}
        />
        <SpanError errorText={errorText}/>
        <SignButton
          buttonText={'Зарегистрироваться'}
          message={'Уже зарегистрированы?'}
          to={'/signin'}
          linkText={'Войти'}
          onClick={handleSubmit}
          isDisable={!inputControl.isValid}
          />
      </form>

    </section>
  )
}

export default Signup;