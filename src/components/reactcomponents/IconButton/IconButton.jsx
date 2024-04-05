import React, { useState } from 'react';
const IconButton = ({ icon, onClick, disabled = false, size = 'm', variant = 'standard' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (!isDisabled) {
      console.log('Button clicked'); // Aquí puedes realizar las acciones que desees al hacer clic
    }
  };

  const getSizePercentage = () => {
    switch (size.toLowerCase()) {
      case 'xs':
        return '24px';
      case 's':
        return '32px';
      case 'm':
        return '40px';
      case 'l':
        return '48px';
      case 'xl':
        return '56px';
      default:
        return '32px';
    }
  };

  const getIconClass = () => {
    switch (variant) {
      case 'standard':
        return 'standard-icon';
      case 'filled-round':
        return 'filled-round-icon';
      case 'filled-square':
        return 'filled-square-icon';
      default:
        return '';
    }
  };

  return (
    <button
      className={`icon-button ${variant} ${isHovered ? 'hover' : ''} ${isDisabled ? 'disabled' : ''}`}
      style={{ height: getSizePercentage(), width: getSizePercentage() }}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      disabled={isDisabled}
    >
      <div className={getIconClass()} />
      {icon}
      <style>{`
        .icon-button {
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
        }

        .standard:hover {
          background-color: #D2F5D2;
          border-radius: 98%;
          padding: 10px;
        }

        .icon-button.disabled .standard-icon {
          color: #999999;
        }

        .icon-button:hover .standard-icon {
          color: #0B520C;
        }

        .standard .standard-icon {
          color: #1CCC1D; 
        }

        /* Round */
        .filled-round {
          background-color: #1CCC1D;
          border-radius: 98%;
        }

        .filled-round .filled-round-icon {
          color: #FFFFFF; 
        }

        .filled-round:hover {
          background-color: #0B520C;
        }

        .icon-button:hover .filled-round-icon {
          color: #E5E5E5;
        }

        .filled-round.disabled {
          background-color: #E5E5E5;
        }

        .icon-button.disabled .filled-round-icon {
          color: lightgray; 
        }

        /* Square */
        .filled-square {
          background-color: #1CCC1D;
          border-radius: 10%;
        }

        .filled-square:hover {
          background-color: #0B520C;
        }

        .filled-square.disabled {
          background-color: #f0f0f0;
        }

        .filled-square .filled-square-icon {
          color: #E5E5E5;
        }

        .icon-button:hover .filled-square-icon {
          color: #E5E5E5;
        }

        .icon-button.disabled .filled-square-icon {
          color: lightgray; 
        }
      `}</style>
    </button>
  );
};

export default IconButton;

