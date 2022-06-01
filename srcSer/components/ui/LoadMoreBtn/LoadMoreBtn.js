import React from 'react';
import './LoadMoreBtn.css';

function LoadMoreBtn({ onClick }) {
  return (
    <div className="load-more">
      <button className="load-more__more-btn" type="button" onClick={onClick}>Ещё</button>
    </div>
  );
}

export default LoadMoreBtn;
