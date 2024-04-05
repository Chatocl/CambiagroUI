import React, { useState } from "react";

function RadioButton({ options }) {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="radio-options-container">
      {options.map(option => (
        <div className="radio-option" key={option.id}>
          <input
            type="radio"
            id={option.id}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => setSelectedOption(option.value)}
            disabled={option.disabled}
            className="radio-input"
          />
          <label htmlFor={option.id}> {option.label}</label>
        </div>
      ))}
      <p>Opción seleccionada: {selectedOption}</p>
      <style jsx>{`
        .radio-options-container {
          align-items: center;
          display: inline-block;
        }

        .radio-option {
          align-items: center;
          justify-content: center;
          position: relative;
          top: -0.2em;
          margin-bottom: 10px;
        }

        .radio-input {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 1px solid #1CCC1D;
          outline: none;
          cursor: pointer;
        }

        .radio-input:hover {
          border: 1px solid #0B520C;
        }

        .radio-input:checked {
          background-color: #1CCC1D;
          box-shadow: inset 0 0 0 2px #FFFFFF;
          border: 1px solid #1CCC1D;
        }

        .radio-input:checked:hover {
          background-color: #0B520C;
          border: 1px solid #0B520C;
          box-shadow: inset 0 0 0 2px #FFFFFF;
        }

        .radio-input:disabled {
          border: 1px solid #E5E5E5;
        }

        .radio-input:disabled + label {
          color: #E5E5E5;
        }

        .radio-input:disabled:checked {
          background-color: #E5E5E5;
          box-shadow: inset 0 0 0 2px #FFFFFF;
          border: 1px solid #E5E5E5;
        }
      `}</style>
    </div>
  );
}

export default RadioButton;
