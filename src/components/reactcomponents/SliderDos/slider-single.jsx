import React, { useState, useRef, useEffect } from 'react';
import styles from './SliderSingle.module.css';

/*Deshabilitar slider <ProgressBar isLocked={true} />
 Habilitar slider <ProgressBar isLocked={false} /> */

 const ProgressBar = ({ isLocked }) => { 
  const [percentage, setPercentage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHandleHovered, setIsHandleHovered] = useState(false);
  const progressBarRef = useRef(null);
  
    useEffect(() => {
      if (isDragging && !isLocked) {
        const handleMouseMove = (event) => {
          handleDrag(event);
        };
        
        const handleMouseUp = () => {
          setIsDragging(false);
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
  
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    }, [isDragging, isLocked]);
  
    const handleMouseDown = (event) => {
      if (!isLocked) {
        setIsDragging(true);
        handleDrag(event);
      }
    };
  
    const handleDrag = (event) => {
      if (!progressBarRef.current || isLocked) return;
      
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      let newPercentage = (offsetX / rect.width) * 100;
      newPercentage = Math.min(Math.max(newPercentage, 0), 100);
      setPercentage(newPercentage);
    };
  
    const handleMouseEnter = () => {
      setIsHandleHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHandleHovered(false);
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.label}>Slider Single</div>
        <div className={styles.progressContainer}>
          <div
            className={`${styles.progressBar} ${isLocked ? styles.progressBarDisabled : ''}`}
            ref={progressBarRef}
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`${styles.background} ${isLocked ? styles.fillDisabled : ''}`}></div>
            <div
              className={`${styles.fill} ${isLocked ? styles.fillDisabled : ''}`}
              style={{ width: `${percentage}%` }}
            ></div>
            <div
              className={`${styles.handle} ${isHandleHovered ? styles.handleHover : styles.handleDefault} ${isLocked ? styles.handleDisabled : ''}`}
              style={{ left: `calc(${percentage}% - 8px)` }}
            ></div>
          </div>
          <div className={`${styles.progressLabel} ${isLocked ? styles.progressLabelDisabled : ''}`}>{Math.round(percentage)}%</div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
