import React from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {

  return (
    <form name='search-form' className='search-form'>
      <div className="search-form__input-container opacity">
        <input
          className="search-form__input opacity"
          type="text"
          id="search-form-input"
          name="search-form-input"
          required
          placeholder="Фильм"
        />
        <button
          className='search-form__input-button opacity'
          type='submit'
        >
          Найти
        </button>
      </div>

      <fieldset className={`search-form__checkbox-container ${props.customSearchFormCheckboxContainer}`}>
        <div className='search-form__checkbox-button-container'>
          <FilterCheckbox />
        </div>
        <span className='search-form__checkbox-text'>
          Короткометражки
        </span>
      </fieldset>
    </form>
  );
}

export default SearchForm;
