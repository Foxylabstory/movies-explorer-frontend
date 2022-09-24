import './SignButton.css';
import { Link } from 'react-router-dom';

function SignButton({ buttonText, message, to, linkText }) {
    return (
        <>
            <button className='sign-button' type='button'>{buttonText}</button>
            <div className='sign-button__container'>
                <p className='sign-button__message'>{message}</p>
                <Link className='sign-button__link' to={to} >
                    <p className="sign-button__link">{linkText}</p>
                </Link>
            </div>
        </>
    )
}

export default SignButton;