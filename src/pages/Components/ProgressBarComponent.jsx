import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import ProgressBar from "../../components/reactcomponents/ProgressBar/ProgressBar";
import { ThemeContext } from '../../App'; 

export const ProgressBarComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const [progress, setProgress] = useState(50);
  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const decreaseProgress = () => {
    if (progress > 0) {
      setProgress(progress - 10);
    }
  };


  const vuecodes = [
    {
      language: 'javascript',
      label: 'Vue JS',
      code: `<template>
      <div class="progress-container" :style="{ marginBottom: size === 'S' ? '5px' : (size === 'L' ? '15px' : '10px') }">
        <div class="progress-bar" :style="{ width: progress + '%', height: getBarHeight(), backgroundColor: barColor }"></div>
      </div>
    </template>
    
    <script>
    export default {
      props: {
        progress: {
          type: Number,
          default: 0
        },
        variant: {
          type: String,
          default: 'default',
          validator: value => ['default', 'success', 'error', 'warning'].includes(value)
        },
        size: {
          type: String,
          default: 'M',
          validator: value => ['S', 'M', 'L'].includes(value)
        }
      },
      computed: {
        barColor() {
          // Determinar el color de la barra de progreso según la variante
          switch (this.variant) {
            case 'success':
              return '#1CCC1D'; 
            case 'error':
              return '#DB2929'; 
            case 'warning':
              return '#E3A322'; 
            default:
              return '#282B38'; 
          }
        }
      },
      methods: {
        getBarHeight() {
          switch (this.size) {
            case 'S':
              return '16px';
            case 'M':
              return '24px';
            case 'L':
              return '32px';
            default:
              return '24px'; // Valor por defecto
          }
        }
      }
    };
    </script>
    
    <style scoped>
    .progress-container {
      background-color: #E5E5E5; /* Color de fondo del contenedor */
      border-radius: 4px;
      overflow: hidden;
    }
    
    .progress-bar {
      transition: width 0.3s ease-in-out;
    }
    </style>
    
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `'use client';
      import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ progress, variant, size }) => {
  const getBarColor = () => {
    switch (variant) {
      case 'success':
        return '#1CCC1D';
      case 'error':
        return '#DB2929';
      case 'warning':
        return '#E3A322';
      default:
        return '#282B38';
    }
  };

  const getBarHeight = () => {
    switch (size) {
      case 'S':
        return '16px';
      case 'M':
        return '24px';
      case 'L':
        return '32px';
      default:
        return '24px'; // Valor por defecto
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#E5E5E5',
        borderRadius: '4px',
        overflow: 'hidden',
        marginBottom: '10px',
      }}
    >
      <div
        style={{
          height: getBarHeight(),
          width: \`\${progress}%\`,
          transition: 'width 0.3s ease-in-out',
          backgroundColor: getBarColor(),
        }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['S', 'M', 'L']).isRequired, // Nueva prop para el tamaño
};

export default ProgressBar;

      
      `
    },
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `// progress-bar.component.ts
      import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
      
      @Component({
        selector: 'app-progress-bar',
        templateUrl: './progress-bar.component.html',
        styleUrls: ['./progress-bar.component.css']
      })
      export class ProgressBarComponent implements OnInit {
        @Input() progress: number = 0;
        @Input() variant: string = 'default';
        @Input() size: string = 'M'; // Nueva entrada para el tamaño
        @Output() increaseProgressEvent: EventEmitter<void> = new EventEmitter<void>();
        @Output() decreaseProgressEvent: EventEmitter<void> = new EventEmitter<void>();
      
        constructor() { }
      
        ngOnInit(): void {
        }
      
        get barColor(): string {
          // Determinar el color de la barra de progreso según la variante
          switch (this.variant) {
            case 'success':
              return '#1CCC1D'; 
            case 'error':
              return '#DB2929'; 
            case 'warning':
              return '#E3A322'; 
            default:
              return '#282B38'; 
          }
        }
      
        get barHeight(): string {
          // Determinar la altura de la barra de progreso según el tamaño
          switch (this.size) {
            case 'S':
              return '16px';
            case 'M':
              return '24px';
            case 'L':
              return '32px';
            default:
              return '24px'; // Valor por defecto
          }
        }
      }
      
      
      `
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `
      <div class="progress-container">
        <div class="progress-bar" [style.width.%]="progress" [style.backgroundColor]="barColor" [style.height.px]="barHeight"></div>
      </div>
      
    
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `.progress-container {
        background-color: #E5E5E5; 
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 10px; 
      }
      
      .progress-bar {
        height: 20px; 
        transition: width 0.3s ease-in-out;
      }
      
      `
    }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Progress</h1>
      <PreviewBox>
      <ProgressBar progress={progress} variant="error" size="S"/>
      <ProgressBar progress={progress} variant="success" size="M"/>
      <ProgressBar progress={progress} variant="default" size="L"/>
      <button onClick={increaseProgress}>Increase Progress</button>
      <button onClick={decreaseProgress}>Decrease Progress</button>
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

export default ProgressBarComponent;

