import React from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../UseFormWithValidation/UseFormWithValidation';
import './SearchForm.css';

function SearchForm(props, { onFilterClick, onSearch, isLoading }) {
  const formWithValidation = useFormWithValidation();
  const { searchText } = formWithValidation.values;
  const { handleChange, resetForm } = formWithValidation;
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setError('Нужно ввести ключевое слово');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      onSearch(searchText);
      resetForm();
    }
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
          value={searchText || ''}
          onChange={handleChange}
          autoComplete="off"
          disabled={isLoading}
        />
        {error && <span className="search-form__error">{error}</span>}
        <button
          className='search-form__input-button opacity'
          type='submit'
        >
          Найти
        </button>
      </div>

      <fieldset className={`search-form__checkbox-container ${props.customSearchFormCheckboxContainer}`}>
        <div className='search-form__checkbox-button-container'>
          <FilterCheckbox onFilterClick={onFilterClick} />
        </div>
        <span className='search-form__checkbox-text'>
          Короткометражки
        </span>
      </fieldset>
    </form>
  );
}

export default SearchForm;
