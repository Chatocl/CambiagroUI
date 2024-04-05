import React from 'react';
import './style.css';

const Button = ({
  disabled = false,
  ghost = false,
  icon = false,
  size = "S",
  type = "primary",
  position = "right"
}) => {
  const getButtonHeightSize = (size) => {
    switch (size) {
      case "L":
        return 56;
      case "M":
        return 48;
      case "S":
        return 40;
      default:
        return 56;
    }
  };

  const buttonClasses = `${'primary-button'} ${disabled ? 'primary-button-disabled' : ''} ${ghost && type === 'primary' ? 'primary-button-ghost' : ''} ${ghost && type === 'secondary' ? 'secondary-button-ghost' : ''} ${ghost && type === 'terciary' ? 'terciary-button-ghost' : ''} ${type === 'secondary' ? 'secondary-button' : ''} ${type === 'terciary' ? 'terciary-button' : ''} ${icon ? 'icon-true' : ''}`;

  return (
    <button
      className={buttonClasses}
      type="button"
      disabled={disabled}
      style={{ height: `${getButtonHeightSize(size)}px` }}
    >
      {icon &&
        <div className={icon && position === 'left' ? 'icon-active rotate-icon' : 'icon'}>
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14 4.5L12.95 5.55L18.575 11.25H2.75V12.75H18.575L12.95 18.45L14 19.5L21.5 12L14 4.5Z" />
          </svg>
        </div>
      }

      <span className="text">{type} Button</span>

      {icon &&
        <div className={icon && position === 'right' ? 'icon-active no-rotate-icon' : 'icon'}>
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14 4.5L12.95 5.55L18.575 11.25H2.75V12.75H18.575L12.95 18.45L14 19.5L21.5 12L14 4.5Z" />
          </svg>
        </div>
      }
    </button>
  );
};

export default Button;
