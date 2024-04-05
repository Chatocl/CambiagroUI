import React from 'react';
import '../InputNumber/style.css';

const InputNumber = ({ state, size }) => {

      
  const getStyles = (state) => {
    const baseStyles = {
      '--inputColor': '#000000',
      '--fontColor': '#999999',
      '--backgroundColor': 'none',
    };

    switch (state) {
      case 'active':
        baseStyles['--inputColor'] = '#16A317';
        baseStyles['--fontColor'] = '#000000';
        break;
      case 'hover':
        baseStyles['--inputColor'] = '#0B520C';
        baseStyles['--fontColor'] = '#0B520C';
        break;
      case 'disabled':
        baseStyles['--inputColor'] = '#999999';
        baseStyles['--fontColor'] = '#999999';
        baseStyles['--backgroundColor'] = '#E5E5E5';
        break;
      case 'error':
        baseStyles['--inputColor'] = '#DB2929';
        break;
      default:
        break;
    }

    switch (size) {
      case 'L':
        baseStyles['--inputHeight'] = '56px';
        break;
      case 'S':
        baseStyles['--inputHeight'] = '40px';
        break;
      case 'M':
        baseStyles['--inputHeight'] = '48px';
        break;
      default:
        break;
    }

    return baseStyles;
  };

  const getWrapperClass = (customClass = 'number-wrapper') => customClass;

  const getId = (state) => `input-${state}`;

    return (
        <div>
          <b>{state}</b>
          <label htmlFor="default">Label:</label>
          <div>
            {state === 'error' ? (
              <span
                style={getStyles(state)}
                className={getWrapperClass('number-wrapper-error')}
              >
                <input
                  type="number"
                  id={getId(state)}
                  name="input"
                  className="number-input no-hover"
                  placeholder="1000"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-exclamation-circle icon-error"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                </svg>
              </span>
            ) : (
              <span
                style={getStyles(state)}
                className={`${getWrapperClass()} ${state === 'disabled' ? 'no-hover' : ''}`}
              >
                <input
                  type="number"
                  id={getId(state)}
                  name="input"
                  className="number-input"
                  placeholder="1000"
                  disabled={state === 'disabled'}
                />
              </span>
            )}
          </div>
        </div>
      );
};

// Export the InputNumber component
export default InputNumber;
