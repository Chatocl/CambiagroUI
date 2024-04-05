import React from 'react';
import './style.css';

const Tooltip = ({ size = 'L', position = 'left', action = true, icon = true }) => {
  const getTooltipWidthSize = (size) => {
    switch (size) {
      case "L":
        return 250.14;
      case "M":
        return 162.1;
      case "S":
        return 81;
      default:
        return 250.14;
    }
  };

  return (
    <div className="main-container-tooltip">
      <div className="main-text">
        <span>Definition Tooltip</span>
        {icon && (
          <svg className={icon ? 'show' : 'no-show'} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.99935 1.99999C4.68564 1.99999 1.99935 4.68628 1.99935 7.99999C1.99935 11.3137 4.68564 14 7.99935 14C11.3131 14 13.9993 11.3137 13.9993 7.99999C13.9993 4.68628 11.3131 1.99999 7.99935 1.99999ZM0.666016 7.99999C0.666016 3.9499 3.94926 0.666656 7.99935 0.666656C12.0494 0.666656 15.3327 3.9499 15.3327 7.99999C15.3327 12.0501 12.0494 15.3333 7.99935 15.3333C3.94926 15.3333 0.666016 12.0501 0.666016 7.99999Z" fill="#1CCC1D"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.99935 7.33332C8.36754 7.33332 8.66602 7.6318 8.66602 7.99999V10.6667C8.66602 11.0348 8.36754 11.3333 7.99935 11.3333C7.63116 11.3333 7.33268 11.0348 7.33268 10.6667V7.99999C7.33268 7.6318 7.63116 7.33332 7.99935 7.33332Z" fill="#1CCC1D"/>
            <path d="M8.66602 5.33332C8.66602 5.70151 8.36754 5.99999 7.99935 5.99999C7.63116 5.99999 7.33268 5.70151 7.33268 5.33332C7.33268 4.96513 7.63116 4.66666 7.99935 4.66666C8.36754 4.66666 8.66602 4.96513 8.66602 5.33332Z" fill="#1CCC1D"/>
          </svg>
        )}
      </div>
      <div className="tooltip-container" style={{ width: `${getTooltipWidthSize(size)}px` }}>
        <div className={`triangle ${position === 'left' ? 'left-triangle' : position === 'center' ? 'center-triangle' : 'right-triangle'}`}></div>
        <div className="frame">
          <span className="container-text">Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.</span>
          <div className={`frame-1 ${action && size === 'L' ? 'show' : 'no-show'}`}>
            <div className="link">
              <a href="#" className="link-2">Link</a>
            </div>
            <button className="buttons">
              <span className="tooltip-button">Button</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;