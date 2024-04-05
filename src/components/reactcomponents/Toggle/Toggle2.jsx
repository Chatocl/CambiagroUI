import React, { useState } from "react";
import "../Toggle/Toggle2.css";

function Toggle2({ label, disabled }) {
  return (
    <div className="main">
      <div className="div-check">
        <label className={` ${disabled ? `disabled-toggle` : `toggle`}`}>
          <input
            type="checkbox"
            className={`${disabled ? `disabled-checkbox` : ``}`}
          />
          <span
            className={` ${disabled ? `disabled-slider` : `slider`}`}
          ></span>
        </label>
      </div>
      <div className="div-label">
        <label className={`label ${disabled ? `disabled-label` : ``}`}>
          {label}
        </label>
      </div>
    </div>
  );
}

export default Toggle2;
