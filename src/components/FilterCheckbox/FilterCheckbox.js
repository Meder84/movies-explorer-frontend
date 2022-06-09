import React from 'react'
import './FilterCheckbox.css';

function FilterCheckbox({ onFilterClick, isChecked, onChange, isDisabled, movieId }) {

  const handleChange = () => {
    onChange(movieId);
  };

  return (
    <label className="filterCheckbox opacity">
      <input
        type="checkbox"
        className="filterCheckboxs__input"
        onClick={onFilterClick}
        checked={isChecked}
        onChange={handleChange}
        disabled={isDisabled}
      />

      <span className='filterCheckbox__slider' />
    </label>
  );
}

export default FilterCheckbox;
