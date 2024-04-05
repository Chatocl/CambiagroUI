import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import Slider from "../../components/reactcomponents/SliderDos/slider-single";
import SliderDouble from"../../components/reactcomponents/SliderDos/slider-double";
import { ThemeContext } from '../../App'; 

export const SliderDosComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes = [
    {
      language: 'javascript',
      label: 'Slider Single Vue JS',
      code: `<template>
      <div class="container">
        <div class="label">Slider Single</div>
        <div
          class="progress-container"
          @mousedown="handleMouseDown"
          @mousemove="handleMouseMove"
          @mouseup="handleMouseUp"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          ref="progressBarRef"
        >
          <div class="progress-bar" :class="{ 'progress-bar-disabled': isLocked }">
            <div class="background" :class="{ 'fill-disabled': isLocked }"></div>
            <div class="fill" :class="{ 'fill-disabled': isLocked }" :style="{ width: percentage + '%' }"></div>
            <div
              class="handle"
              :class="{ 'handle-hover': isHandleHovered, 'handle-default': !isHandleHovered, 'handle-disabled': isLocked }"
              :style="{ left: handlePosition + 'px' }"
              ref="handle"
              @mousedown="handleMouseDown"
            ></div>
          </div>
          <div class="progress-label" :class="{ 'progress-label-disabled': isLocked }">{{ Math.round(percentage) }}%</div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      props: {
        isLocked: {
          type: Boolean,
          default: false, //Deshabilitar slider <SliderSingle :is-locked.="true"/> Habilitar slider <SliderSingle :is-locked.="false"/>
        },
      },
      data() {
        return {
          percentage: 0,
          isDragging: false,
          isHandleHovered: false,
          handlePosition: 0,
          progressBarWidth: 207.88,
          handleWidth: 0,
          maxHandlePosition: 0,
        };
      },
      mounted() {
        this.updateHandleDimensions();
        window.addEventListener('resize', this.updateHandleDimensions);
      },
      beforeUnmount() {
        window.removeEventListener('resize', this.updateHandleDimensions);
      },
      watch: {
        isLocked() {
          this.isDragging = false; // Reset dragging when locked
        },
      },
      methods: {
        handleMouseDown(event) {
          if (!this.isLocked) {
            this.isDragging = true;
            this.handleMouseMove(event);
          }
        },
        handleMouseMove(event) {
          if (this.isDragging && !this.isLocked && this.$refs.progressBarRef && this.$refs.handle) {
            const rect = this.$refs.progressBarRef.getBoundingClientRect();
            const newHandlePosition = event.clientX - rect.left - this.handleWidth / 2;
            this.handlePosition = Math.max(0, Math.min(newHandlePosition, this.maxHandlePosition));
            this.percentage = (this.handlePosition / this.maxHandlePosition) * 100;
          }
        },
        handleMouseUp() {
          if (this.isDragging && !this.isLocked) {
            this.isDragging = false;
          }
        },
        handleMouseEnter() {
          this.isHandleHovered = true;
        },
        handleMouseLeave() {
          this.isHandleHovered = false;
        },
        updateHandleDimensions() {
          this.handleWidth = this.$refs.handle.offsetWidth;
          this.maxHandlePosition = this.progressBarWidth - this.handleWidth;
        },
      },
    };
    </script>
    
    <style scoped src="../SliderSingle.css">
    
    </style>
    `
    },
    {
      language: 'css',
      label: 'Slider Single Angular CSS',
      code: `/* En tu archivo ProgressBar.module.css */

      .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 20px;
        }
        
        .label,
        .progress-label {
          color: black;
          font-size: 16px;
          font-family:Verdana, Geneva, Tahoma, sans-serif;
          font-weight: 400;
          line-height: 24px;
          margin-left: 5px;
          word-wrap: break-word;
        }
      
        
        .progress-container {
          display: inline-flex;
          justify-content: flex-start;
          align-items: center;
          gap: 8px;
        }
        
        .progress-bar {
          width: 207.88px;
          height: 16px;
          position: relative;
        }
        
        .progress-bar div {
          position: absolute;
          border-radius: 10px; /* Cambiado de 4px a 10px para mantener los estilos originales */
        }
        
        .background {
          width: 207.87px;
          height: 4px;
          left: 0.01px;
          top: 6px;
          background: #e5e5e5; /* Cambiado a minúsculas para mantener consistencia */
        }
        
      
        .fill {
          height: 4px; /* Altura de la barra de progreso */
          background: #1ccc1d; /* Color de relleno */
          border-radius: 4px; /* Radio de borde */
          top: 6px;
        }
      
        
        .handle-default {
          width: 16px;
          height: 16px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #1ccc1d;
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
        }
        
      .handle-hover {
          width: 16px;
          height: 16px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #0B520C;
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
        }
      
        .progress-bar-disabled .fill,
        .progress-bar-disabled .handle {
          background-color: #999999;
          cursor: not-allowed;
        }
        
        .progress-label-disabled {
          color: #999999;
        }
        
        .progress-container-disabled {
          pointer-events: none;
        }
      
      
        
    `
    },
    {
        language: '1javascript',
        label: 'Slider Double Vue JS',
        code: `<template>
        <div class="container">
          <div class="label">Slider Double</div>
          <div
            class="progress-bar-container"
            ref="progressBarRef"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <div
              class="progress-bar"
              :class="{ 'progress-bar-disabled': !isEnabled || isLocked, 'progress-bar-hover': isHovered && isEnabled && !isLocked }"
            ></div>
            <div
              class="progress-bar"
              :class="{ 'progress-bar-disabled': !isEnabled || isLocked, 'progress-bar-hover': isHovered && isEnabled && !isLocked }"
            ></div>
            <div
              class="progress-dot"
              :class="{ 'progress-dot-disabled': !isEnabled || isLocked, 'progress-dot-hover': isHovered && isEnabled && !isLocked }"
              :style="{ left: calculateDotPosition(value1) }"
              @mousedown="handleMouseDown1"
            ></div>
            <div
              class="progress-dot"
              :class="{ 'progress-dot-disabled': !isEnabled || isLocked, 'progress-dot-hover': isHovered && isEnabled && !isLocked }"
              :style="{ left: calculateDotPosition(value2) }"
              @mousedown="handleMouseDown2"
            ></div>
          </div>
          <div class="values-container">
            <div
              class="value"
              :class="{ 'value-disabled': !isEnabled || isLocked }"
              :style="{ left: value1 + '%', top: '0' }"
            >{{ Math.round(value1) }}</div>
            <div
              class="value"
              :class="{ 'value-disabled': !isEnabled || isLocked }"
              :style="{ left: \`calc(\${value2}% + 190px)\`, top: '0' }"
            >{{ Math.round(value2) }}</div>
          </div>
        </div>
      </template>
      
      <script>
      export default {
        props: {
          isLocked: {
            type: Boolean,
            default: false, //Deshabilitar slider <SliderDouble :is-locked.="true"/> Habilitar slider <SliderDouble :is-locked.="false"/>
          },
        },
        data() {
          return {
            value1: 0,
            value2: 100,
            isDragging1: false,
            isDragging2: false,
            isHovered: false,
            isEnabled: true,
          };
        },
        mounted() {
          this.handleMouseMoveRef = (event) => {
            this.handleDrag(event);
          };
        },
        beforeUnmount() {
          document.removeEventListener('mousemove', this.handleMouseMoveRef);
        },
        methods: {
            handleMouseDown1() {
            if (!this.isEnabled || this.isLocked) return;
            this.isDragging1 = true;
            document.addEventListener('mousemove', this.handleMouseMoveRef);
            document.addEventListener('mouseup', this.handleMouseUp);
          },
          handleMouseDown2() {
            if (!this.isEnabled || this.isLocked) return;
            this.isDragging2 = true;
            document.addEventListener('mousemove', this.handleMouseMoveRef);
            document.addEventListener('mouseup', this.handleMouseUp);
          },
    
          handleDrag(event) {
      if (!this.isEnabled || this.isLocked) return;
    
      const rect = this.$refs.progressBarRef.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      let newValue = (offsetX / rect.width) * 100;
    
      if (this.isDragging1) {
        newValue = Math.max(0, newValue); // Evitar que el valor sea menor que cero
        newValue = Math.min(newValue, this.value2 - 20); // Limitar el movimiento máximo
        this.value1 = newValue;
      } else if (this.isDragging2) {
        newValue = Math.min(100, newValue); // Evitar que el valor sea mayor que cien
        newValue = Math.max(newValue, this.value1 + 20); // Limitar el movimiento máximo
        this.value2 = newValue;
      }
    },
    
    
          handleMouseEnter() {
            if (!this.isEnabled || this.isLocked) return;
            this.isHovered = true;
          },
          handleMouseLeave() {
            this.isHovered = false;
          },
          calculateDotPosition(value) {
            return \`\${value}%\`;
          },
          handleMouseUp() {
            if (!this.isEnabled || this.isLocked) return;
            this.isDragging1 = false;
            this.isDragging2 = false;
            document.removeEventListener('mousemove', this.handleMouseMoveRef);
            document.removeEventListener('mouseup', this.handleMouseUp);
          },
        },
      };
      </script>
      
      <style scoped src="../SliderDouble.css"></style>
      `
      },
      {
        language: '1css',
        label: 'Slider Double Angular CSS',
        code: `.container {
            width: 100%;
            height: 100%;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 20px;
            display: inline-flex;
        }
        
        .label {
            color: black;
            font-size: 16px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 400;
            line-height: 24px;
            word-wrap: break-word;
        }
        
        .progress-bar-container {
            width: 208px;
            height: 16px;
            position: relative;
        }
        
        .progress-bar {
            width: 207.87px;
            height: 4px;
            left: 0.01px;
            top: 6px;
            position: absolute;
            background:#1CCC1D;
            border-radius: 4px;
        }
        .progress-bar-disabled {
            width: 207.87px;
            height: 4px;
            left: 0.01px;
            top: 6px;
            position: absolute;
            background:#999999;
            border-radius: 4px;
        }
        
        
          
        .progress-dot {
            width: 16px;
            height: 16px;
            left: 0;
            top: 0;
            position: absolute;
            background: #1CCC1D;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 9999px;
            border: 2px white solid;
        }
        .progress-dot-hover {
            width: 16px;
            height: 16px;
            left: 0;
            top: 0;
            position: absolute;
            background: #0B520C;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 9999px;
            border: 2px white solid;
        }
        .progress-dot-disabled {
            width: 16px;
            height: 16px;
            left: 0;
            top: 0;
            position: absolute;
            background: #999999;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 9999px;
            border: 2px white solid;
        }
        
        
        .values-container {
            position: relative;
        }
        
        .value {
            position: absolute;
            color: #333333;
            font-size: 16px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 400;
            line-height: 24px;
            word-wrap: break-word;
        }
        .value-disabled {
            position: absolute;
            color: #999999;
            font-size: 16px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 400;
            line-height: 24px;
            word-wrap: break-word;
        }
        
        .value:first-child {
            left: 0;
            top: 0;
        }
        
        .value:last-child {
            left: 207.87px;
            top: 0;
        }
        
        .progressDot:last-child {
            left: 207.87px;
            top: 0;
        }
        
      `
      },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Slider Single Next JS',
      code: `import React, { useState, useRef, useEffect } from 'react';
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
                  className={\`\${styles.progressBar} \${isLocked ? styles.progressBarDisabled : ''}\`}
                  ref={progressBarRef}
                  onMouseDown={handleMouseDown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={\`\${styles.background} \${isLocked ? styles.fillDisabled : ''}\`}></div>
                  <div
                    className={\`\${styles.fill} \${isLocked ? styles.fillDisabled : ''}\`}
                    style={{ width: \`\${percentage}%\` }}
                  ></div>
                  <div
                    className={\`\${styles.handle} \${isHandleHovered ? styles.handleHover : styles.handleDefault} \${isLocked ? styles.handleDisabled : ''}\`}
                    style={{ left: \`calc(\${percentage}% - 8px)\` }}
                  ></div>
                </div>
                <div className={\`\${styles.progressLabel} \${isLocked ? styles.progressLabelDisabled : ''}\`}>{Math.round(percentage)}%</div>
              </div>
            </div>
          );
        };
        
        export default ProgressBar;
      
      `
    },
    {
      language: 'css',
      label: 'Slider Single Next CSS',
      code: `/* En tu archivo ProgressBar.module.css */

      .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 20px;
        }
        
        .label,
        .progressLabel {
          color: black;
          font-size: 16px;
          font-family:Verdana, Geneva, Tahoma, sans-serif;
          font-weight: 400;
          line-height: 24px;
          margin-left: 5px;
          word-wrap: break-word;
        }
        .progressLabelDisabled {
          color: #999999;
          font-size: 16px;
          font-family:Verdana, Geneva, Tahoma, sans-serif;
          font-weight: 400;
          line-height: 24px;
          margin-left: 5px;
          word-wrap: break-word;
        }
        
        .progressContainer {
          display: inline-flex;
          justify-content: flex-start;
          align-items: center;
          gap: 8px;
        }
        
        .progressBar {
          width: 207.88px;
          height: 16px;
          position: relative;
        }
        
        .progressBar div {
          position: absolute;
          border-radius: 10px; /* Cambiado de 4px a 10px para mantener los estilos originales */
        }
        
        .background {
          width: 207.87px;
          height: 4px;
          left: 0.01px;
          top: 6px;
          background: #e5e5e5; /* Cambiado a minúsculas para mantener consistencia */
        }
        
      
        .fill {
          height: 4px; /* Altura de la barra de progreso */
          background: #1ccc1d; /* Color de relleno */
          border-radius: 4px; /* Radio de borde */
          top: 6px;
        }
        .fillDisabled {
          height: 4px; /* Altura de la barra de progreso */
          background: #999999; /* Color de relleno */
          border-radius: 4px; /* Radio de borde */
          top: 6px;
        }
        
        .handleDefault {
          width: 16px;
          height: 16px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #1ccc1d;
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
        }
        
      .handleHover {
          width: 16px;
          height: 16px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #0B520C;
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
        }
      
        .handleDisabled {
          width: 16px;
          height: 16px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #999999;
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
        }
        
      `
    },
    {
        language: 'javascript',
        label: 'Slider Double Next JS',
        code: `import React, { useState, useRef, useEffect } from 'react';
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
                    <div className={\`\${styles.progressBar} \${isLocked ? styles.progressBarDisabled : ''} \${isEnabled && !isLocked ? '' : styles.progressBarHover}\`}></div>
                    <div className={\`\${styles.progressBar} \${isLocked ? styles.progressBarDisabled : ''} \${isEnabled && !isLocked ? '' : styles.progressBarHover}\`}></div>
                    <div
                        className={\`\${styles.progressDot} \${isLocked ? styles.progressDotDisabled : ''} \${isHovered && isEnabled && !isLocked ? styles.progressDotHover : ''}\`}
                        style={{ left: \`\${value1}%\` }}
                        onMouseDown={handleMouseDown1}
                    ></div>
                    <div
                        className={\`\${styles.progressDot} \${isLocked ? styles.progressDotDisabled : ''} \${isHovered && isEnabled && !isLocked ? styles.progressDotHover : ''}\`}
                        style={{ left: \`calc(\${value2}% - 8px)\` }}
                        onMouseDown={handleMouseDown2}
                    ></div>
                </div>
                <div className={styles.valuesContainer}>
                    <div className={\`\${styles.value} \${isLocked ? styles.valueDisabled : ''}\`} style={{ left: \`\${value1}%\`, top: '0' }}>{Math.round(value1)}</div>
                    <div className={\`\${styles.value} \${isLocked ? styles.valueDisabled : ''}\`} style={{ left: \`calc(\${value2}% + 190px)\`, top: '0' }}>{Math.round(value2)}</div>
                </div>
            </div>
        );
        
            
        }
        
        export default ProgressBarDouble;
        `
      },
      {
        language: 'css',
        label: 'Slider Double Next CSS',
        code: `.container {
            width: 100%;
            height: 100%;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 20px;
            display: inline-flex;
        }
        
        .label {
            color: black;
            font-size: 16px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 400;
            line-height: 24px;
            word-wrap: break-word;
        }
        
        .progressBarContainer {
            width: 208px;
            height: 16px;
            position: relative;
        }
        
        .progressBar {
            width: 207.87px;
            height: 4px;
            left: 0.01px;
            top: 6px;
            position: absolute;
            background:#1CCC1D;
            border-radius: 4px;
        }
        .progressBarDisabled {
            width: 207.87px;
            height: 4px;
            left: 0.01px;
            top: 6px;
            position: absolute;
            background:#999999;
            border-radius: 4px;
        }
        
        
          
        .progressDot {
            width: 16px;
            height: 16px;
            left: 0;
            top: 0;
            position: absolute;
            background: #1CCC1D;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 9999px;
            border: 2px white solid;
        }
        .progressDotHover {
            width: 16px;
            height: 16px;
            left: 0;
            top: 0;
            position: absolute;
            background: #0B520C;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 9999px;
            border: 2px white solid;
        }
        .progressDotDisabled {
            width: 16px;
            height: 16px;
            left: 0;
            top: 0;
            position: absolute;
            background: #999999;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 9999px;
            border: 2px white solid;
        }
        
        
        .valuesContainer {
            position: relative;
        }
        
        .value {
            position: absolute;
            color: #333333;
            font-size: 16px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 400;
            line-height: 24px;
            word-wrap: break-word;
        }
        .valueDisabled {
            position: absolute;
            color: #999999;
            font-size: 16px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 400;
            line-height: 24px;
            word-wrap: break-word;
        }
        
        .value:first-child {
            left: 0;
            top: 0;
        }
        
        .value:last-child {
            left: 207.87px;
            top: 0;
        }
        
        .progressDot:last-child {
            left: 207.87px;
            top: 0;
        }
        
        `
      }
  ];

  const angularCodes = [
    {
      language: '1typescript',
      label: 'Slider SingleAngular TS',
      code: `import { Component, Input, ElementRef, ViewChild, HostListener } from '@angular/core';

      @Component({
        // llamar al componente  <app-slider-single [isLocked]="false"></app-slider-single>
        selector: 'app-slider-single',
        standalone: true,
        imports: [],
        templateUrl: './slider-single.component.html',
        styleUrl: './slider-single.component.css'
      })
      export class SliderSingleComponent {
        @Input() isLocked: boolean = false;
        percentage: number = 0;
        isDragging: boolean = false;
        isHandleHovered: boolean = false;
        @ViewChild('progressBarRef') progressBarRef!: ElementRef;
      
        constructor() { }
      
        handleMouseDown(event: MouseEvent) {
          if (!this.isLocked) {
            this.isDragging = true;
            this.handleDrag(event);
          }
        }
      
        handleDrag(event: MouseEvent) {
          if (!this.progressBarRef.nativeElement || !this.isDragging || this.isLocked) return;
      
          const rect = this.progressBarRef.nativeElement.getBoundingClientRect();
          const offsetX = event.clientX - rect.left;
          let newPercentage = (offsetX / rect.width) * 100;
          newPercentage = Math.min(Math.max(newPercentage, 0), 100);
          this.percentage = Math.round(newPercentage);
        }
      
        handleMouseEnter() {
          this.isHandleHovered = true;
        }
      
        handleMouseLeave() {
          if (!this.isDragging) {
            this.isHandleHovered = false;
          }
        }
      
        handleMouseUp() {
          this.isDragging = false;
        }
      
        handleMouseClick(event: MouseEvent) {
          if (!this.isLocked) {
            this.handleDrag(event);
          }
        }
      
        @HostListener('document:mousemove', ['$event'])
        onMouseMove(event: MouseEvent) {
          this.handleDrag(event);
        }
      
        @HostListener('document:mouseup')
        onMouseUp() {
          this.isDragging = false;
        }
      }
      
      `
    },
    {
        language: '1typescript spec',
        label: 'Slider Single Angular TS Spec',
        code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

        import { SliderSingleComponent } from './slider-single.component';
        
        describe('SliderSingleComponent', () => {
          let component: SliderSingleComponent;
          let fixture: ComponentFixture<SliderSingleComponent>;
        
          beforeEach(async () => {
            await TestBed.configureTestingModule({
              imports: [SliderSingleComponent]
            })
            .compileComponents();
            
            fixture = TestBed.createComponent(SliderSingleComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
          });
        
          it('should create', () => {
            expect(component).toBeTruthy();
          });
        });
        
        `
      },
    
    {
      language: '1html',
      label: 'Slider Single Angular Html',
      code: `<div class="container">
      <div class="label">Slider Single</div>
      <div class="progressContainer">
        <div
          class="progressBar"
          [class.progressBarDisabled]="isLocked"
          #progressBarRef
          (mousedown)="handleMouseDown($event)"
          (mousemove)="handleDrag($event)"
          (mouseenter)="handleMouseEnter()"
          (mouseleave)="handleMouseLeave()"
          (click)="handleMouseClick($event)"
        >
          <div class="background"></div>
          <div
            class="fill"
            [style.width.%]="percentage"
            [class.fillDisabled]="isLocked"
          ></div>
          <div
            class="handle"
            [class.handleHover]="isHandleHovered || isDragging"
            [class.handleDefault]="!isHandleHovered && !isDragging && !isLocked"
            [class.handleDisabled]="isLocked"
            [style.left.%]="percentage"
          ></div>
        </div>
        <div class="progressLabel" [class.progressLabelDisabled]="isLocked">{{percentage}}%</div>
      </div>
    </div>
    
    `
    },
    {
      language: '1css',
      label: 'Slider Single Angular CSS',
      code: `/* En tu archivo ProgressBar.module.css */

      .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 20px;
        }
        
        .label,
        .progressLabel {
          color: black;
          font-size: 16px;
          font-family:Verdana, Geneva, Tahoma, sans-serif;
          font-weight: 400;
          line-height: 24px;
          margin-left: 15px;
          word-wrap: break-word;
        }
        .progressLabelDisabled {
          color: #999999;
          font-size: 16px;
          font-family:Verdana, Geneva, Tahoma, sans-serif;
          font-weight: 400;
          line-height: 24px;
          margin-left: 5px;
          word-wrap: break-word;
        }
        
        .progressContainer {
          display: inline-flex;
          justify-content: flex-start;
          align-items: center;
          gap: 8px;
        }
        
        .progressBar {
          width: 207.88px;
          height: 16px;
          position: relative;
        }
        
        .progressBar div {
          position: absolute;
          border-radius: 10px; /* Cambiado de 4px a 10px para mantener los estilos originales */
        }
        
        .background {
          width: 207.87px;
          height: 4px;
          left: 0.01px;
          top: 6px;
          background: #e5e5e5; /* Cambiado a minúsculas para mantener consistencia */
        }
        
      
        .fill {
          height: 4px; /* Altura de la barra de progreso */
          background: #1ccc1d; /* Color de relleno */
          border-radius: 4px; /* Radio de borde */
          top: 6px;
        }
        .fillDisabled {
          height: 4px; /* Altura de la barra de progreso */
          background: #999999; /* Color de relleno */
          border-radius: 4px; /* Radio de borde */
          top: 6px;
        }
        
        .handleDefault {
          width: 16px;
          height: 16px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #1ccc1d;
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
        }
        
      .handleHover {
          width: 16px;
          height: 16px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #0B520C;
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
        }
      
        .handleDisabled {
          width: 16px;
          height: 16px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #999999;
          border-radius: 50%;
          border: 2px solid white;
          cursor: pointer;
        }
        
      `
    },
    {
        language: '2typescript',
        label: 'Slider Double Angular TS',
        code: `import { Component, Input, ElementRef, ViewChild, HostListener } from '@angular/core';

        @Component({
          // llamar al componente  <app-slider-double [isLocked]="false"></app-slider-double>
          selector: 'app-slider-double',
          standalone: true,
          imports: [],
          templateUrl: './slider-double.component.html',
          styleUrl: './slider-double.component.css'
        })
        export class SliderDoubleComponent {
          @Input() isLocked: boolean = false;
          value1: number = 0;
          value2: number = 100;
          isDragging1: boolean = false;
          isDragging2: boolean = false;
          isHovered: boolean = false;
          isEnabled: boolean = true;
          minValueDistance: number = 20;
          @ViewChild('progressBarRef') progressBarRef!: ElementRef;
        
          constructor() { }
        
          @HostListener('document:mouseup')
          handleMouseUp() {
            this.isDragging1 = false;
            this.isDragging2 = false;
          }
        
          handleMouseDown1() {
            if (!this.isEnabled || this.isLocked) return;
            this.isDragging1 = true;
          }
        
          handleMouseDown2() {
            if (!this.isEnabled || this.isLocked) return;
            this.isDragging2 = true;
          }
        
          handleDrag(event: MouseEvent) {
            if (!this.progressBarRef.nativeElement || !this.isEnabled || this.isLocked) return;
        
            const rect = this.progressBarRef.nativeElement.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            let newValue = (offsetX / rect.width) * 100;
        
            if (this.isDragging1) {
              newValue = Math.max(0, Math.min(newValue, this.value2 - this.minValueDistance));
              this.value1 = newValue;
            } else if (this.isDragging2) {
              newValue = Math.max(this.value1 + this.minValueDistance, Math.min(newValue, 100));
              this.value2 = newValue;
            }
          }
        
          handleMouseEnter() {
            if (!this.isEnabled || this.isLocked) return;
            this.isHovered = true;
          }
        
          handleMouseLeave() {
            this.isHovered = false;
          }
        
          round(value: number): number {
            return Math.round(value);
          }
        }
        
        `
      },
      {
          language: '2typescript spec',
          label: 'Slider Double Angular TS Spec',
          code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

          import { SliderDoubleComponent } from './slider-double.component';
          
          describe('SliderDoubleComponent', () => {
            let component: SliderDoubleComponent;
            let fixture: ComponentFixture<SliderDoubleComponent>;
          
            beforeEach(async () => {
              await TestBed.configureTestingModule({
                imports: [SliderDoubleComponent]
              })
              .compileComponents();
              
              fixture = TestBed.createComponent(SliderDoubleComponent);
              component = fixture.componentInstance;
              fixture.detectChanges();
            });
          
            it('should create', () => {
              expect(component).toBeTruthy();
            });
          });
          
          `
        },
      
      {
        language: '2html',
        label: 'Slider Double Angular Html',
        code: `<div class="container">
        <div class="label">Slider Double</div>
        <div class="progressBarContainer"
             #progressBarRef
             (mouseenter)="handleMouseEnter()"
             (mouseleave)="handleMouseLeave()"
             (mousemove)="handleDrag($event)">
          <div class="progressBar"
               [class]="{'progressBarDisabled': !isEnabled || isLocked, 'progressBarHover': isHovered && isEnabled && !isLocked}"></div>
          <div class="progressBar"
               [class]="{'progressBarDisabled': !isEnabled || isLocked, 'progressBarHover': isHovered && isEnabled && !isLocked}"></div>
          <div class="progressDot"
               [class]="{'progressDotDisabled': !isEnabled || isLocked, 'progressDotHover': isHovered && isEnabled && !isLocked}"
               [style.left.%]="value1"
               (mousedown)="handleMouseDown1()"></div>
          <div class="progressDot"
               [class]="{'progressDotDisabled': !isEnabled || isLocked, 'progressDotHover': isHovered && isEnabled && !isLocked}"
               [style.left.%]="value2"
               (mousedown)="handleMouseDown2()"></div>
        </div>
        <div class="valuesContainer">
          <div class="value"
               [class]="{'valueDisabled': !isEnabled || isLocked}"
               [style.left.%]="value1"
               style="top: 0">{{ round(value1) }}</div>
          <div class="value"
               [class]="{'valueDisabled': !isEnabled || isLocked}"
               [style.left.%]="value2"
               [style.margin-left.px]="190"
               style="top: 0">{{ round(value2) }}</div>
        </div>
      </div>
      
      `
      },
      {
        language: '2css',
        label: 'Slider Double Angular CSS',
        code: `.container {
            width: 100%;
            height: 100%;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 20px;
            display: inline-flex;
        }
        
        .label {
            color: black;
            font-size: 16px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 400;
            line-height: 24px;
            word-wrap: break-word;
        }
        
        .progressBarContainer {
            width: 208px;
            height: 16px;
            position: relative;
        }
        
        .progressBar {
            width: 207.87px;
            height: 4px;
            left: 0.01px;
            top: 6px;
            position: absolute;
            background:#1CCC1D;
            border-radius: 4px;
        }
        .progressBarDisabled {
            width: 207.87px;
            height: 4px;
            left: 0.01px;
            top: 6px;
            position: absolute;
            background:#999999;
            border-radius: 4px;
        }
        
        
          
        .progressDot {
            width: 16px;
            height: 16px;
            left: 0;
            top: 0;
            position: absolute;
            background: #1CCC1D;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 9999px;
            border: 2px white solid;
        }
        .progressDotHover {
            width: 16px;
            height: 16px;
            left: 0;
            top: 0;
            position: absolute;
            background: #0B520C;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 9999px;
            border: 2px white solid;
        }
        .progressDotDisabled {
            width: 16px;
            height: 16px;
            left: 0;
            top: 0;
            position: absolute;
            background: #999999;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 9999px;
            border: 2px white solid;
        }
        
        
        .valuesContainer {
            position: relative;
        }
        
        .value {
            position: absolute;
            color: #333333;
            font-size: 16px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 400;
            line-height: 24px;
            word-wrap: break-word;
        }
        .valueDisabled {
            position: absolute;
            color: #999999;
            font-size: 16px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 400;
            line-height: 24px;
            word-wrap: break-word;
        }
        
        .value:first-child {
            left: 0;
            top: 0;
        }
        
        .value:last-child {
            left: 207.87px;
            top: 0;
        }
        
        .progressDot:last-child {
            left: 207.87px;
            top: 0;
        }
        
        `
      }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Slider 2</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Slider isLocked={true} ></Slider> <SliderDouble isLocked={true} ></SliderDouble> 
      <Slider isLocked={false} ></Slider> <SliderDouble isLocked={false} ></SliderDouble>
      </div>
    </PreviewBox>
    <Tabs value={tabValue} onChange={handleTabChange}>
      <Tab label="Vue" style={{ color: tabsTextColor }} />
      <Tab label="Angular"  style={{ color: tabsTextColor }}/>
      <Tab label="Next" style={{ color: tabsTextColor }} />
    </Tabs>
    <Divider style={{ backgroundColor: dividerColor }} sx={{ my: 2 }} />
    <TabContext value={tabValue}>
      <TabPanel value={0}>
        <CodeViewer files={vuecodes} />
      </TabPanel>
      <TabPanel value={1}>
        <CodeViewer files={angularCodes} />
      </TabPanel>
      <TabPanel value={2}>
        <CodeViewer files={nextcodes} />
      </TabPanel>
    </TabContext>
  </Container>
);
}

const PreviewBox = styled.div`
margin-bottom: 20px;
padding: 20px;
border-radius: 25px;
background-color: #fff;
`;

const Container = styled.div`
   height: 100vh;
   margin: 50px;
`;

export default SliderDosComponent;

