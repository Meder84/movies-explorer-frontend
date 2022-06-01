import React from 'react';
import './BookmarkBtn.css';

function BookmarkBtn({ isAdded, onClick }) {
  return (
    <button
      className={!isAdded
        ? 'bookmark-btn'
        : 'bookmark-btn bookmark-btn_is-added'}
      type="button"
      onClick={onClick}
    />
  );
}

export default BookmarkBtn;
