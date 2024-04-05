import React from "react";
import "./Breadcrumb.css";

export default function Breadcrumb({ items, current }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${item.disabled == true ? 'disabled' : ''}`}>
            {item.disabled === true ? (
              <span>{item.label}</span>
            ) : (
              <a className={`breadcrumb-link ${item.label === current ? 'current' : ''}`}> {item.label}</a>
            )}
            
          </li>
        ))}
      </ol>
    </nav>
  );
}
