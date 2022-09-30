import React from "react";
import Greetings from "../BaseComponents/Greetings/Greetings";
import SignButton from "../BaseComponents/SignButton/SignButton";
import SignInput from "../BaseComponents/SignInput/SignInput";
import useFormWithValidation from '../../utils/Hooks/UseFormWithValidation';
import SpanError from "../BaseComponents/SpanError/SpanError";
import './Signin.css';

function Signin({ onSignIn, errorText }) {
    const inputControl = useFormWithValidation();
    const { email, password } = inputControl.errors;

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = inputControl.values;
        onSignIn(email, password);
        inputControl.resetForm();
    };
    return (
        <section className="signin">
            <form className="signin__container">
                <Greetings text={'Рады видеть!'} />
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
                <SpanError errorText={errorText} />
                <SignButton
                    buttonText={'Войти'}
                    message={'Ещё не зарегистрированы?'}
                    to={'/signup'}
                    linkText={'Регистрация'}
                    onClick={handleSubmit}
                    isDisable={!inputControl.isValid}
                />
            </form>
        </section>
    )
}

export default Signin;