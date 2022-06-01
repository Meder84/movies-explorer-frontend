import React from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onFilterClick, onSearch, isLoading }) {
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
    <form className="search-form" noValidate onSubmit={handleSubmit}>
      <div className="search-form__search-input-wrapper">
        <input
          name="searchText"
          className="search-form__text-input"
          type="text"
          placeholder="Фильм"
          required
          value={searchText || ''}
          onChange={handleChange}
          autoComplete="off"
          disabled={isLoading}
        />
        {error && <span className="search-form__error">{error}</span>}
        <button className="search-form__button" type="submit">Найти</button>
      </div>
      <div className="search-form__shorts-wrapper">
        <p className="search-form__shorts-title">Короткометражки</p>
        <FilterCheckbox onFilterClick={onFilterClick} />
      </div>
    </form>
  );
}

export default SearchForm;
