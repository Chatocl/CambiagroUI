import React from 'react';
import './Checkbox.css';

export default function Checkbox({ label, isDisabled }) {
  return (
    <div className="main-container">
      <input
        type="checkbox"
        id="checkbox"
        disabled={isDisabled}
        className={isDisabled ? 'disabled-checkbox' : ''}
      />
      <label htmlFor="checkbox" className={isDisabled ? 'disabled-checkbox' : ''}></label>
      <span className="label-goes-here">{label}</span>
    </div>
  );
}
