import React from 'react';
import './HeaderBlock.css';

function HeaderBlock (props) {
  return (
    <div className={`headerBlock ${props.headerBlockCustomClass}`}>
      <h2 className='headerBlock__title'>
        {props.children}
      </h2>
    </div>
  )
};

export default HeaderBlock;
