import { useState } from 'react';

export default function CustomTextInput({
  label,
  placeholder,
  size = 'M',
  errorMessage = '',
  successMessage = '',
  maxLength = Infinity,
  disabled = false,
  inputPattern = ''
}) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [localErrorMessage, setLocalErrorMessage] = useState('');
  const [localSuccessMessage, setLocalSuccessMessage] = useState('');

  const isDisabled = disabled;

  const isError = !!localErrorMessage;
  const isSuccess = !!localSuccessMessage;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    validateInput();
  };

  const validateInput = () => {
    if (inputPattern && inputValue.trim() !== '') {
      const regex = new RegExp(inputPattern);
      if (!regex.test(inputValue)) {
        console.log(errorMessage)
        setLocalErrorMessage(errorMessage || 'Entrada inválida.');
        setLocalSuccessMessage('');
      } else {
        setLocalSuccessMessage(successMessage || 'Entrada válida.');
        setLocalErrorMessage('');
      }
    }
  };

  const getInputHeight = () => {
    switch (size.toUpperCase()) {
      case 'S':
        return '20px';
      case 'M':
        return '38px';
      case 'L':
        return '46px';
      default:
        return '38px';
    }
  };

  return (
    <div className={`text-input ${size.toLowerCase()} ${isDisabled ? 'disabled' : ''}`}>
      <label className="label">{label}</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder || ''}
        maxLength={maxLength}
        disabled={isDisabled}
        className={`input ${isSuccess ? 'success' : isError ? 'error' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ height: getInputHeight() }}
      />
      
      {isSuccess && <div className="success-message">{localSuccessMessage}</div>}
      {isError && <div className="error-message">{localErrorMessage}</div>}
      <style>{`
        .text-input {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
        }

        .label {
          font-size: 10px;
          text-align: left;
          color: #000000;
          margin-left: 10px;
        }

        .input {
          padding: 8px;
          border: 1px solid #000000;
          border-radius: 20px;
          transition: border-color 0.3s;
          outline: none;
        }

        .input:focus,
        .input.success:focus,
        .input.error:focus {
          border-color: #16A317;
        }

        .input:hover,
        .input.success:hover,
        .input.error:hover {
          border-color: #0B520C;
        }

        .error {
          border-color: #DB2929;
        }

        .success {
          border-color: #1CCC1D;
        }

        .disabled input {
          background-color: #f8f9fa;
          color: #6c757d;
        }

        .success-message {
          font-size: 10px;
          text-align: left;
          color: #1CCC1D;
          margin-left: 10px;
        }

        .error-message {
          font-size: 10px;
          text-align: left;
          color: #DB2929;
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
}
