import './SignInput.css';

function SignInput({ header, type }) {
    return (
        <label className='sign-input'>
            <span className='sign-input__span sign-input__span_header'>{header}</span>
            <input className='sign-input__input' type={type} id={type} required></input>
            <span className='sign-input__span sign-input__span_error' id={type}></span>
        </label>
    )
}

export default SignInput;