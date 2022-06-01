import React from 'react';
import './BookmarkRemoveBtn.css';

function BookmarkRemoveBtn({ onClick }) {
  return (
    <button className="bookmark-remove-btn" type="button" onClick={onClick} />
  );
}

export default BookmarkRemoveBtn;
