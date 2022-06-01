import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onFilterClick }) {
  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__switcher"
        type="checkbox"
        onClick={onFilterClick}
      />
    </div>
  );
}

export default FilterCheckbox;
