import React, { useState } from 'react';
import styles from './RemovableTags.module.css'; 

const RemTagIconActive = () => {
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

  const handleClick = (event) => {
    event.stopPropagation(); // Detener la propagación del evento para evitar que se active el onClick del contenedor
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
            <div className={styles.text}>Removable Tag Active Icon</div>
            <div
              className={styles.iconWrapper}
            >
              <div
                className={`${styles.icon} ${
                  disabled ? styles.iconDisabled : hovered ? styles.iconWhite : styles.iconWhite
                }`}
                onClick={handleClick} // Asignar el manejador de clic al icono solamente
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RemTagIconActive;
