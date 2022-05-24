import React from 'react'
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <label className="filterCheckbox opacity">
      <input
        type="checkbox"
        className="filterCheckboxs__input"
        checked={props.isChecked}
        onChange={props.onChange}
        disabled={props.isDisabled}
      />

      <span className='filterCheckbox__slider' />
    </label>
  );
}

export default FilterCheckbox;
