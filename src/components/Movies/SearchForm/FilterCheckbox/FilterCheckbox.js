import './FilterCheckbox.css'

function FilterCheckbox(props) {
    return (
        <label className='search-form__label-for-checkbox'>
            <input
                className={'search-form__checkbox'}
                name='checkbox'
                value={props.value}
                onChange={props.onChange}
                type={'checkbox'}></input>
            <span className={props.value ? 'search-form__checkbox-span-visible' : 'search-form__checkbox-span'}></span>
            <span className='search-form__checkbox-text'>Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox;