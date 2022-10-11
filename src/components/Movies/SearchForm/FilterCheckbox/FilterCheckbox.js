import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

function FilterCheckbox({shortsCheckbox, shortsCheckboxSaved, keyWord, onChangeShortsCheckbox, ...props}) {
    const location = useLocation();

    const onhandleChange = () => {
        onChangeShortsCheckbox(keyWord);
    }

    return (
        <label className='search-form__label-for-checkbox'>
            <input
                className={'search-form__checkbox'}
                name='checkbox'
                value={location.pathname === '/movies' ? shortsCheckbox : shortsCheckboxSaved}
                onChange={onhandleChange}
                type={'checkbox'}></input>
            <span className={(location.pathname === '/movies' ? shortsCheckbox : shortsCheckboxSaved) ? 'search-form__checkbox-span-visible' : 'search-form__checkbox-span'}></span>
            <span className='search-form__checkbox-text'>Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox;