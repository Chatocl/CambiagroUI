import React from "react";
import { useState } from "react";
import "./Textarea.css";

export default function Textarea({ label, error, disabled }) {
  const [text, setText] = useState("");
  const maxLength = 100;

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  return (
    <>
      <div className="main-container-text">
        <span
          className={`label-text
        ${disabled ? "disabled-text" : ""}
        `}
        >
          {label}
        </span>
        <span className={`char-counter-text
        ${disabled ? "disabled-text" : ""}
        `}>
          {text.length}/{maxLength}
        </span>
        <textarea
          className={`textarea 
           ${disabled ? "disabled-textarea" : ""} 
           ${error ? "error-textarea" : ""}
           `}
          placeholder="Placeholder text"
          value={text}
          onChange={handleChange}
          maxLength={maxLength}
        />


        <span className="error">{error}</span>
      </div>
    </>
  );
}
