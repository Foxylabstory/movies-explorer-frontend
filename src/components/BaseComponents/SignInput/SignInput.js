import './SignInput.css';

function SignInput({ header, type, placeholder }) {
    return (
        <label className='sign-input'>
            <span className='sign-input__span sign-input__span_header'>{header}</span>
            <input className='sign-input__input' type={type} id={type} required placeholder={placeholder}></input>
            <span className='sign-input__span sign-input__span_error' id={type}></span>
        </label>
    )
}

export default SignInput;