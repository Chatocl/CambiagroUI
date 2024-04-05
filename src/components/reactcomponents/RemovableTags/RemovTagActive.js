import React, { useState } from 'react';
import styles from './RemovableTags.module.css'; 

const RemTagActive = () => {
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [disabled, setDisabled] = useState(false); // true (deshabilitar el removable tag)
  
  const handleRemove = () => {
    setVisible(false);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    if (!disabled) { // Verificar si el removable tag está deshabilitado
      handleRemove();
    }
  };

  return (
    <>
      {visible && (
        <div
          className={`${styles.container} ${
            disabled
              ? styles.containerDisabled 
              : hovered
              ? styles.containerHover
              : styles.containerActive
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <div
            className={`${styles.content} ${
              disabled
                ? styles.textDisabled 
                : hovered
                ? styles.textWhite
                : styles.textWhite
            }`}
          >
            <div className={styles.text}>Removable Tag Active</div>
          </div>
        </div>
      )}
    </>
  );
};

export default RemTagActive;
