import React from 'react'
import './FilterCheckbox.css';

function FilterCheckbox(props) {

  const handleChange = () => {
    props.onChange(props.movieId);
  };

  return (
    <label className="filterCheckbox opacity">
      <input
        className="filterCheckboxs__input"
        type="checkbox"
        checked={props.isChecked || false}
        onChange={handleChange}
      />

      <span className='filterCheckbox__slider' />
    </label>
  );
}

export default FilterCheckbox;
