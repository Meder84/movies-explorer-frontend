import React from 'react'
import './FilterCheckbox.css';

function FilterCheckbox({onFilterClick}) {
  return (
    <label className="filterCheckbox opacity">
      <input
        type="checkbox"
        className="filterCheckboxs__input"
        // checked={props.isChecked}
        // onChange={props.onChange}
        // disabled={props.isDisabled}
        onClick={onFilterClick}
      />

      <span className='filterCheckbox__slider' />
    </label>
  );
}

export default FilterCheckbox;
