import './More.css';

function More({ handleShowMoreMovies }) {
    return (
        <section className='more'>
            <div className='more__container'>
                <button className='more__button' onClick={handleShowMoreMovies}>Ещё</button>
            </div>
        </section>
    )
}

export default More;