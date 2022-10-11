import './SpanError.css';

function SpanError({errorText}) {
    return (
        <span className='span-error'>{errorText}</span>
    )
}

export default SpanError;