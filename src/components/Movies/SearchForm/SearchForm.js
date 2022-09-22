import { useState } from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
    const [searchFormState, setSearchFormState] = useState({
        movie: '',
        checkbox: false
    });



    const handleInputChange = (evt) => {
        setSearchFormState({ ...searchFormState, [evt.target.name]: evt.target.value });
    }

    const handleCheckboxChange = (evt) => {
        setSearchFormState({ ...searchFormState, checkbox: !searchFormState.checkbox /* [evt.target.name]: !evt.target.name */ });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(searchFormState);
    }
    return (
        <section className='search-form'>
            <div className='search-form__container'>
                <form className='search-form__form' onSubmit={handleSubmit}>
                    <div className='search-form__icon'></div>
                    <input
                        className='search-form__input'
                        name='movie'
                        value={searchFormState.movie}
                        onChange={handleInputChange}
                        type={'text'}
                        placeholder='Фильм'
                        required></input>
                    <button className='search-form__button' type={'submit'}></button>
                    <div className='search-form__shorts'>
                        <FilterCheckbox
                        value={searchFormState.checkbox}
                        onChange={handleCheckboxChange} />
                    </div>
                </form>
            </div>
        </section>
    )
}
export default SearchForm;