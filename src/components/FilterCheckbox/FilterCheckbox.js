import React from 'react'
import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, onChange }) {

  return (
    <label className="filterCheckbox opacity">
      <input
        type="checkbox"
        className="filterCheckboxs__input"
        checked={isChecked}
        onChange={onChange}
      />

      <span className='filterCheckbox__slider' />
    </label>
  );
}

export default FilterCheckbox;
