import React, { useEffect, useState } from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { KEY_WORD_ERROR } from '../../utils/consts';
import './SearchForm.css';

function SearchForm(props) {
  const [searchString, setSearchString] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [searchString]);

  const handleSwitchChange = () => {
    props.onSwitchChange();
  };

  const handleStringChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchString && !props.savedFilms) {
      setErrorMessage(KEY_WORD_ERROR);
      return;
    }
    props.onSubmit(searchString);
  };

  return (
    <form
      name='search-form'
      className='search-form'
      onSubmit={handleSubmit}
    >
      <div className="search-form__input-container opacity">
        <input
          className="search-form__input opacity"
          type="text"
          id="search-form-input"
          name="search-form-input"
          required
          placeholder="Фильм"
          value={searchString}
          onChange={handleStringChange}
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
          <FilterCheckbox
            isChecked={props.isSwitchOn || false}
            onChange={handleSwitchChange}
            isDisabled={props.isSwitchDisabled}
          />
        </div>
        <span className='search-form__checkbox-text'>
          Короткометражки
        </span>
      </fieldset>
    </form>
  );
}

export default SearchForm;
