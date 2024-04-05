import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ progress, variant, size }) => {
  const getBarColor = () => {
    switch (variant) {
      case 'success':
        return '#1CCC1D';
      case 'error':
        return '#DB2929';
      case 'warning':
        return '#E3A322';
      default:
        return '#282B38';
    }
  };

  const getBarHeight = () => {
    switch (size) {
      case 'S':
        return '16px';
      case 'M':
        return '24px';
      case 'L':
        return '32px';
      default:
        return '24px'; // Valor por defecto
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#E5E5E5',
        borderRadius: '4px',
        overflow: 'hidden',
        marginBottom: '10px',
      }}
    >
      <div
        style={{
          height: getBarHeight(),
          width: `${progress}%`,
          transition: 'width 0.3s ease-in-out',
          backgroundColor: getBarColor(),
        }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['S', 'M', 'L']).isRequired, // Nueva prop para el tamaño
};

export default ProgressBar;
