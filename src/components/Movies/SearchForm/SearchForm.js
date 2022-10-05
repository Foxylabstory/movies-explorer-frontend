import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ searchKey, onChangeShortsCheckbox, shortsCheckbox, shortsCheckboxSaved, onSubmit }) {
    const location = useLocation();

    const [searchFormState, setSearchFormState] = useState({
        errorText: '',
        keyWord: '',
        isFormValid: false,
    });

    useEffect(() => {
        if (searchKey && (location.pathname === '/movies' || location.pathname === '/saved-movies')) {
            setSearchFormState({ keyWord: searchKey });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInputChange = (evt) => {
        setSearchFormState({
            ...searchFormState,
            errorText: '',
            [evt.target.name]: evt.target.value,
            isFormValid: evt.target.closest('form').checkValidity(),
        });

    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSearchFormState({
            ...searchFormState,
            isFormValid: evt.target.closest('form').checkValidity(),
        });
        if (!searchFormState.isFormValid) {
            return setSearchFormState({
                ...searchFormState,
                errorText: 'Нужно ввести ключевое слово',
            });
        }
        onSubmit(searchFormState.keyWord);

    }
    return (
        <section className='search-form'>
            <div className='search-form__container'>
                <form className='search-form__form' onSubmit={handleSubmit} noValidate>
                    <div className='search-form__icon'></div>
                    <input
                        className='search-form__input'
                        name='keyWord'
                        value={searchFormState.keyWord}
                        onChange={handleInputChange}
                        type={'text'}
                        placeholder='Фильм'
                        required
                        minLength='1'
                    ></input>
                    <button className='search-form__button' type={'submit'}></button>
                    <div className='search-form__shorts'>
                        <FilterCheckbox
                            value={localStorage.getItem('shortsCheckbox')}
                            onChange={onChangeShortsCheckbox}
                            shortsCheckbox={shortsCheckbox}
                            shortsCheckboxSaved={shortsCheckboxSaved} />
                    </div>
                </form>
                <span className='search-form__error'>{searchFormState.errorText}</span>
                <div className='search-form__shorts search-form__shorts_outside'>
                    <FilterCheckbox
                        value={localStorage.getItem('shortsCheckbox')}
                        onChange={onChangeShortsCheckbox}
                        shortsCheckbox={shortsCheckbox}
                        shortsCheckboxSaved={shortsCheckboxSaved} />
                </div>
            </div>
        </section>
    )
}
export default SearchForm;