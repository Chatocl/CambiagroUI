import React, { useState, useRef, useEffect } from 'react';
import styles from './SliderDouble.module.css';

/*Deshabilitar slider <ProgressBarDouble isLocked={true} />
 Habilitar slider <ProgressBarDouble isLocked={false} /> */
const ProgressBarDouble = ({ isLocked }) => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    const [isDragging1, setIsDragging1] = useState(false);
    const [isDragging2, setIsDragging2] = useState(false);
    const [isHovered, setIsHovered] = useState(false); 
    const [isEnabled, setIsEnabled] = useState(true);
    const progressBarRef = useRef(null);
    const handleMouseMoveRef = useRef(null);
    const minValueDistance = 20; //distancia minima entre los progress dot

    useEffect(() => {
        if ((isDragging1 || isDragging2) && isEnabled) {
            handleMouseMoveRef.current = (event) => {
                handleDrag(event);
            };

            const handleMouseUp = () => {
                setIsDragging1(false);
                setIsDragging2(false);
                document.removeEventListener('mousemove', handleMouseMoveRef.current);
                document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mousemove', handleMouseMoveRef.current);
            document.addEventListener('mouseup', handleMouseUp);
        }
    }, [isDragging1, isDragging2, isEnabled]);

    const handleMouseDown1 = () => {
        if (!isEnabled || isLocked) return;
        setIsDragging1(true);
    };

    const handleMouseDown2 = () => {
        if (!isEnabled || isLocked) return;
        setIsDragging2(true);
    };
    const handleDrag = (event) => {
        if (!progressBarRef.current || !isEnabled || isLocked) return;
    
        const rect = progressBarRef.current.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        let newValue = (offsetX / rect.width) * 100;
    
        if (isDragging1) {
            if (newValue < 0) {
                setValue1(0);
            } else if (newValue < value2 - minValueDistance) {
                setValue1(newValue);
            } else {
                setValue1(value2 - minValueDistance);
            }
        } else if (isDragging2) {
            if (newValue < value1 + minValueDistance) {  // Permitir movimiento incluso si está en la parte izquierda
                setValue2(value1 + minValueDistance);
            } else if (newValue > 100) {
                setValue2(100);
            } else {
                setValue2(newValue);
            }
        }
    };
    
    
    const handleMouseEnter = () => {
        if (!isEnabled || isLocked) return; // No aplicar hover si el slider está deshabilitado
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
   return (
    <div className={styles.container}>
        <div className={styles.label}>Slider Double</div>
        <div
            className={styles.progressBarContainer}
            ref={progressBarRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`${styles.progressBar} ${isLocked ? styles.progressBarDisabled : ''} ${isEnabled && !isLocked ? '' : styles.progressBarHover}`}></div>
            <div className={`${styles.progressBar} ${isLocked ? styles.progressBarDisabled : ''} ${isEnabled && !isLocked ? '' : styles.progressBarHover}`}></div>
            <div
                className={`${styles.progressDot} ${isLocked ? styles.progressDotDisabled : ''} ${isHovered && isEnabled && !isLocked ? styles.progressDotHover : ''}`}
                style={{ left: `${value1}%` }}
                onMouseDown={handleMouseDown1}
            ></div>
            <div
                className={`${styles.progressDot} ${isLocked ? styles.progressDotDisabled : ''} ${isHovered && isEnabled && !isLocked ? styles.progressDotHover : ''}`}
                style={{ left: `calc(${value2}% - 8px)` }}
                onMouseDown={handleMouseDown2}
            ></div>
        </div>
        <div className={styles.valuesContainer}>
            <div className={`${styles.value} ${isLocked ? styles.valueDisabled : ''}`} style={{ left: `${value1}%`, top: '0' }}>{Math.round(value1)}</div>
            <div className={`${styles.value} ${isLocked ? styles.valueDisabled : ''}`} style={{ left: `calc(${value2}% + 190px)`, top: '0' }}>{Math.round(value2)}</div>
        </div>
    </div>
);

    
}

export default ProgressBarDouble;