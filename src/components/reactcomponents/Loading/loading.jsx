import React from "react";
import './style.css';

const LoadingComponent = ({ size, type, label }) => {
  const getLoadingSize = (size, type) => {
    switch (size) {
      case "L":
        if (type === "circle") return { height: 84, width: 84 };
        else return { height: 8, width: 380 };
      case "M":
        if (type === "circle") return { height: 64, width: 64 };
        else return { height: 8, width: 240 };
      case "S":
        if (type === "circle") return { height: 48, width: 48 };
        else return { height: 4, width: 160 };
      default:
        if (type === "circle") return { height: 48, width: 48 };
        else return { height: 4, width: 160 };
    }
  };

  const loadingSize = getLoadingSize(size, type);

  return (
    <div className="loading">
      <div
        style={{
          width: `${loadingSize.width}px`,
          height: `${loadingSize.height}px`
        }}
        className={type === 'circle' ? 'circle-loader' : 'linear-loader'}
      ></div>
      <span className={label ? 'label-loading label-loading-active' : 'label-loading'}>
        Label goes here
      </span>
    </div>
  );
};

export default LoadingComponent;