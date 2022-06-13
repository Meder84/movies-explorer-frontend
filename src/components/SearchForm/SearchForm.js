import React from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../UseFormWithValidation/UseFormWithValidation';
import './SearchForm.css';

function SearchForm({
  onSearch, isLoading,
  customSearchFormCheckboxContainer, isChecked, onChange,
}) {
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
          name="searchText"
          required
          placeholder="Фильм"
          value={searchText || ''}
          onChange={handleChange}
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

      <fieldset className={`search-form__checkbox-container ${customSearchFormCheckboxContainer}`}>
        <div className='search-form__checkbox-button-container'>
          <FilterCheckbox
            isChecked={isChecked}
            onChange={onChange}
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
