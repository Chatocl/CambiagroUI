import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import Tooltip from "../../components/reactcomponents/ToolTip/tooltip";
import { ThemeContext } from '../../App'; 

export const ToolTipComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes = [
    {
      language: 'javascript',
      label: 'Vue JS',
      code: `<template>
      <div class="main-container-tooltip">
        <div class="main-text">
          <span>Definition Tooltip</span>
          <svg :class="{'show': icon, 'no-show': !icon}" width="16" height="16" 
          viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99935
               1.99999C4.68564 1.99999 1.99935 4.68628 1.99935 7.99999C1.99935 11.3137
                4.68564 14 7.99935 14C11.3131 14 13.9993 11.3137 13.9993 7.99999C13.9993
                 4.68628 11.3131 1.99999 7.99935 1.99999ZM0.666016 7.99999C0.666016 3.9499 
                 3.94926 0.666656 7.99935 0.666656C12.0494 0.666656 15.3327 3.9499 15.3327 
                 7.99999C15.3327 12.0501 12.0494 15.3333 7.99935 15.3333C3.94926 15.3333 0.666016
                  12.0501 0.666016 7.99999Z" fill="#1CCC1D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99935 7.33332C8.36754 7.33332 
              8.66602 7.6318 8.66602 7.99999V10.6667C8.66602 11.0348 8.36754 11.3333 7.99935 
              11.3333C7.63116 11.3333 7.33268 11.0348 7.33268 10.6667V7.99999C7.33268 7.6318 7.63116 
              7.33332 7.99935 7.33332Z" fill="#1CCC1D"/>
              <path d="M8.66602 5.33332C8.66602 5.70151 8.36754 5.99999 7.99935 5.99999C7.63116 5.99999 
              7.33268 5.70151 7.33268 5.33332C7.33268 4.96513 7.63116 4.66666 7.99935 4.66666C8.36754
               4.66666 8.66602 4.96513 8.66602 5.33332Z" fill="#1CCC1D"/>
          </svg>
        </div>
        <div class="tooltip-container" :style="{ width: getTooltipWidthSize(size) + 'px'}">
          <div :class="['triangle', { 'left-triangle': position === 'left', 'center-triangle': 
          position === 'center', 'right-triangle': position === 'right' }]"></div>
          <div class="frame">
            <span class="container-text">Lorem ipsum dolor sit amet, di 
            os consectetur adipiscing elit, sed do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.</span>
            <div class="frame-1" :class="{ 'show': action && size === 'L', 'no-show': !action || size !== 'L' }">
              <div class="link">
                <a href="#" class="link-2">Link</a>
              </div>
              <button class="buttons">
                <span class="tooltip-button">Button</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          showTooltip: false,
        };
      },
      props: {
        size: {
          type: String,
          default: "S",
        },
        position: {
          type: String,
          default: "left",
        },
        action: {
          type: Boolean,
          default: false,
        },
        icon: {
          type: Boolean,
          default: true,
        },
      },
      methods: {
        getTooltipWidthSize(size) {
          switch (size) {
            case "L":
              return 250.14;
            case "M":
              return 162.1;
            case "S":
              return 81;
            default:
              return 250.14;
          }
        },
      },
    };
    </script>
    
    <style>
  :root {
      --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
          "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
          "Source Han Sans CN", sans-serif;
  }
  
  .main-container-tooltip {
      position: relative !important;
  }
  
  .main-container-tooltip,
  .main-container-tooltip * {
      box-sizing: border-box;
  }
  
  input,
  select,
  textarea,
  button {
      outline: 0;
  }
  
  .main-text {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      text-align: center;
  }
  
  .main-text:hover + .tooltip-container {
      display: block;
  }
  
  .tooltip-container {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      width: 250.14px;
      height: auto;
      margin: 0 auto;
      z-index: 4;
  }
  
  .tooltip-container:hover {
      display: block;
  }
  
  .triangle {
      position: relative;
      width: 9px;
      height: 5px;
      margin: 0 0 0 17px;
      background: url(images/c9d41d09-302e-4840-887c-003819e76886.png) no-repeat center;
      background-size: 100% 100%;
  }
  
  .left-triangle {
      margin: 0 0 0 17px;
  }
  .right-triangle {
      margin: 0 17px 0 auto;
  }
  .center-triangle {
      margin: 0 auto;
  }
  
  .frame {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: nowrap;
      gap: 20px;
      width: auto;
      height: auto;
      margin: 0 0 0 -0.01px;
      padding: 16px;
      background: #282b38;
      z-index: 1;
      border-radius: 8px;
  }
  
  .container-text {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-shrink: 0;
      position: relative;
      width: auto;
      height: auto;
      color: #ffffff;
      font-family: Mark Pro, var(--default-font-family);
      font-size: 13.329999923706055px;
      font-weight: 400;
      line-height: 18.662px;
      text-align: left;
      transform: rotate(0.1deg);
      z-index: 2;
  }
  
  .frame-1 {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      flex-shrink: 0;
      gap: 20px;
      position: relative;
      width: 193px;
      z-index: 3;
  }
  
  .link {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      flex-shrink: 0;
      gap: 5px;
      position: relative;
      width: 33px;
      z-index: 4;
  }
  
  .link-2 {
      flex-shrink: 0;
      flex-basis: auto;
      position: relative;
      height: 24px;
      color: #1ccc1d;
      font-family: Mark Pro, var(--default-font-family);
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      text-decoration: underline;
      white-space: nowrap;
      z-index: 5;
  }
  
  .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      flex-shrink: 0;
      gap: 10px;
      position: relative;
      width: 140px;
      height: 40px;
      padding: 10px 43px 10px 43px;
      cursor: pointer;
      background: #1ccc1d;
      border: none;
      z-index: 6;
      border-radius: 24px;
  }
  
  .tooltip-button {
      flex-shrink: 0;
      flex-basis: auto;
      position: relative;
      height: 24px;
      color: #ffffff;
      font-family: Mark Pro, var(--default-font-family);
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      white-space: nowrap;
      z-index: 7;
  }
  
  /* Variables */
  .show {
      display: flex;
  }
  
  .no-show {
      display: none;
  }
  
    </style>
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `import React from 'react';
      import styles from '@/app/components/tooltip/style.css'; // Importar estilos
      
      const Tooltip = ({ size = 'L', position = 'left', action = true, icon = true }) => {
        const getTooltipWidthSize = (size) => {
          switch (size) {
            case "L":
              return 250.14;
            case "M":
              return 162.1;
            case "S":
              return 81;
            default:
              return 250.14;
          }
        };
      
        return (
          <div className="main-container-tooltip">
            <div className="main-text">
              <span>Definition Tooltip</span>
              {icon && (
                <svg className={icon ? 'show' : 'no-show'} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.99935 1.99999C4.68564 1.99999 1.99935
                   4.68628 1.99935 7.99999C1.99935 11.3137 4.68564 14 7.99935 14C11.3131 14 13.9993 11.3137 
                   13.9993 7.99999C13.9993 4.68628 11.3131 1.99999 7.99935 1.99999ZM0.666016 7.99999C0.666016 3.9499 
                   3.94926 0.666656 7.99935 0.666656C12.0494 0.666656 15.3327 3.9499 15.3327 7.99999C15.3327 12.0501 12.0494 15.3333 
                   7.99935 15.3333C3.94926 15.3333 0.666016 12.0501 0.666016 7.99999Z" fill="#1CCC1D"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.99935 7.33332C8.36754 7.33332 8.66602 
                  7.6318 8.66602 7.99999V10.6667C8.66602 11.0348 8.36754 11.3333 7.99935 11.3333C7.63116 
                  11.3333 7.33268 11.0348 7.33268 10.6667V7.99999C7.33268 7.6318 7.63116 7.33332 7.99935 7.33332Z" fill="#1CCC1D"/>
                  <path d="M8.66602 5.33332C8.66602 5.70151 8.36754 5.99999 7.99935 5.99999C7.63116 5.99999 
                  7.33268 5.70151 7.33268 5.33332C7.33268 4.96513 7.63116 4.66666 7.99935 4.66666C8.36754
                   4.66666 8.66602 4.96513 8.66602 5.33332Z" fill="#1CCC1D"/>
                </svg>
              )}
            </div>
            <div className="tooltip-container" style={{ width: \`\${getTooltipWidthSize(size)}px\` }}>
              <div className={\`triangle \${position === 'left' ? 'left-triangle' : 
              position === 'center' ? 'center-triangle' : 'right-triangle'}\`}></div>
              <div className="frame">
                <span className="container-text">Lorem ipsum dolor sit amet, di os consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.</span>
                <div className={\`frame-1 \${action && size === 'L' ? 'show' : 'no-show'}\`}>
                  <div className="link">
                    <a href="#" className="link-2">Link</a>
                  </div>
                  <button className="buttons">
                    <span className="tooltip-button">Button</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default Tooltip;
      `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `:root {
        --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
            "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
            "Source Han Sans CN", sans-serif;
    }
    
    .main-container-tooltip {
        position: relative !important;
    }
    
    .main-container-tooltip,
    .main-container-tooltip * {
        box-sizing: border-box;
    }
    
    input,
    select,
    textarea,
    button {
        outline: 0;
    }
    
    .main-text {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        text-align: center;
    }
    
    .main-text:hover + .tooltip-container {
        display: block;
    }
    
    .tooltip-container {
        position: absolute;
        top: 22px;
        left: 50%;
        transform: translateX(-50%);
        display: none;
        width: 250.14px;
        height: auto;
        margin: 0 auto;
        z-index: 4;
    }
    
    .tooltip-container:hover {
        display: block;
    }
    
    .triangle {
        position: relative;
        width: 9px;
        height: 5px;
        margin: 0 0 0 17px;
        background: url(images/c9d41d09-302e-4840-887c-003819e76886.png) no-repeat center;
        background-size: 100% 100%;
    }
    
    .left-triangle {
        margin: 0 0 0 17px;
    }
    .right-triangle {
        margin: 0 17px 0 auto;
    }
    .center-triangle {
        margin: 0 auto;
    }
    
    .frame {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
        gap: 20px;
        width: auto;
        height: auto;
        margin: 0 0 0 -0.01px;
        padding: 16px;
        background: #282b38;
        z-index: 1;
        border-radius: 8px;
    }
    
    .container-text {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-shrink: 0;
        position: relative;
        width: auto;
        height: auto;
        color: #ffffff;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 13.329999923706055px;
        font-weight: 400;
        line-height: 18.662px;
        text-align: left;
        transform: rotate(0.1deg);
        z-index: 2;
    }
    
    .frame-1 {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        flex-shrink: 0;
        gap: 20px;
        position: relative;
        width: 193px;
        z-index: 3;
    }
    
    .link {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        flex-shrink: 0;
        gap: 5px;
        position: relative;
        width: 33px;
        z-index: 4;
    }
    
    .link-2 {
        flex-shrink: 0;
        flex-basis: auto;
        position: relative;
        height: 24px;
        color: #1ccc1d;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: left;
        text-decoration: underline;
        white-space: nowrap;
        z-index: 5;
    }
    
    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        flex-shrink: 0;
        gap: 10px;
        position: relative;
        width: 140px;
        height: 40px;
        padding: 10px 43px 10px 43px;
        cursor: pointer;
        background: #1ccc1d;
        border: none;
        z-index: 6;
        border-radius: 24px;
    }
    
    .tooltip-button {
        flex-shrink: 0;
        flex-basis: auto;
        position: relative;
        height: 24px;
        color: #ffffff;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: left;
        white-space: nowrap;
        z-index: 7;
    }
    
    /* Variables */
    .show {
        display: flex;
    }
    
    .no-show {
        display: none;
    }
      `
    }
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `import { Component, Input } from '@angular/core';
      import { CommonModule } from '@angular/common';
      
      @Component({
        selector: 'app-tooltip',
        standalone: true,
        imports: [CommonModule],
        templateUrl: './tooltip.component.html',
        styleUrl: './tooltip.component.css'
      })
      export class TooltipComponent {
        @Input() size : string = "S";
        @Input() position : string = "left";
        @Input() action : boolean = false;
        @Input() icon : boolean = true;
      
        getTooltipWidthSize(size: string) : number {
          switch (size) {
            case "L":
              return 250.14;
            case "M":
              return 162.1;
            case "S":
              return 81;
            default:
              return 250.14;
          }
        }
      }
      
      `
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `<div class="main-container">
      <div class="main-text">
          <span>Definition Tooltip</span>
          <svg [ngClass]="(icon ? 'show' : 'no-show')" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99935 1.99999C4.68564 1.99999 1.99935 4.68628 1.99935 7.99999C1.99935 11.3137 4.68564 14 7.99935 14C11.3131 14 13.9993 11.3137 13.9993 7.99999C13.9993 4.68628 11.3131 1.99999 7.99935 1.99999ZM0.666016 7.99999C0.666016 3.9499 3.94926 0.666656 7.99935 0.666656C12.0494 0.666656 15.3327 3.9499 15.3327 7.99999C15.3327 12.0501 12.0494 15.3333 7.99935 15.3333C3.94926 15.3333 0.666016 12.0501 0.666016 7.99999Z" fill="#1CCC1D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99935 7.33332C8.36754 7.33332 8.66602 7.6318 8.66602 7.99999V10.6667C8.66602 11.0348 8.36754 11.3333 7.99935 11.3333C7.63116 11.3333 7.33268 11.0348 7.33268 10.6667V7.99999C7.33268 7.6318 7.63116 7.33332 7.99935 7.33332Z" fill="#1CCC1D"/>
              <path d="M8.66602 5.33332C8.66602 5.70151 8.36754 5.99999 7.99935 5.99999C7.63116 5.99999 7.33268 5.70151 7.33268 5.33332C7.33268 4.96513 7.63116 4.66666 7.99935 4.66666C8.36754 4.66666 8.66602 4.96513 8.66602 5.33332Z" fill="#1CCC1D"/>
          </svg>
      </div>
      <div class="tooltip-container" [style.width.px]="getTooltipWidthSize(size)">
          <div class="triangle" [ngClass]="{
              'left-triangle' : position === 'left',
              'center-triangle' : position === 'center',
              'right-triangle' : position === 'right'
          }"></div>
          <div class="frame">
              <span class="container-text">Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
              </span>
              <div class="frame-1" [ngClass]="(action && size === 'L' ? 'show' : 'no-show')">
                  <div class="link">
                      <a href="#" class="link-2">Link</a>
                  </div>
                  <button class="buttons">
                      <span class="primary-button">Button</span>
                  </button>
              </div>
          </div>
      </div>
  </div>
  
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `:root {
        --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
            "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
            "Source Han Sans CN", sans-serif;
    }
    
    .main-container {
        position: relative;
    }
    
    .main-container,
    .main-container * {
        box-sizing: border-box;
    }
    
    input,
    select,
    textarea,
    button {
        outline: 0;
    }
    
    .main-text {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        text-align: center;
    }
    
    .main-text:hover + .tooltip-container {
        display: block;
    }
    
    .tooltip-container {
        position: absolute;
        top: 22px;
        left: 50%;
        transform: translateX(-50%);
        display: none;
        width: 250.14px;
        height: auto;
        margin: 0 auto;
        z-index: 4;
    }
    
    .tooltip-container:hover {
        display: block;
    }
    
    .triangle {
        position: relative;
        width: 9px;
        height: 5px;
        margin: 0 0 0 17px;
        background: url(../../assets/images/c9d41d09-302e-4840-887c-003819e76886.png) no-repeat center;
        background-size: 100% 100%;
    }
    
    .left-triangle {
        margin: 0 0 0 17px;
    }
    .right-triangle {
        margin: 0 17px 0 auto;
    }
    .center-triangle {
        margin: 0 auto;
    }
    
    .frame {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
        gap: 20px;
        width: auto;
        height: auto;
        margin: 0 0 0 -0.01px;
        padding: 16px;
        background: #282b38;
        z-index: 1;
        overflow: hidden;
        border-radius: 8px;
    }
    
    .container-text {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-shrink: 0;
        position: relative;
        width: auto;
        height: auto;
        color: #ffffff;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 13.329999923706055px;
        font-weight: 400;
        line-height: 18.662px;
        text-align: left;
        transform: rotate(0.1deg);
        z-index: 2;
    }
    
    .frame-1 {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        flex-shrink: 0;
        gap: 20px;
        position: relative;
        width: 193px;
        z-index: 3;
    }
    
    .link {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        flex-shrink: 0;
        gap: 5px;
        position: relative;
        width: 33px;
        z-index: 4;
    }
    
    .link-2 {
        flex-shrink: 0;
        flex-basis: auto;
        position: relative;
        height: 24px;
        color: #1ccc1d;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: left;
        text-decoration: underline;
        white-space: nowrap;
        z-index: 5;
    }
    
    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        flex-shrink: 0;
        gap: 10px;
        position: relative;
        width: 140px;
        height: 40px;
        padding: 10px 43px 10px 43px;
        cursor: pointer;
        background: #1ccc1d;
        border: none;
        z-index: 6;
        border-radius: 24px;
    }
    
    .primary-button {
        flex-shrink: 0;
        flex-basis: auto;
        position: relative;
        height: 24px;
        color: #ffffff;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: left;
        white-space: nowrap;
        z-index: 7;
    }
    
    /* Variables */
    .show {
        display: flex;
    }
    
    .no-show {
        display: none;
    }
      `
    }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Number Input</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Tooltip position="center" action={true} size="L" icon={true}></Tooltip>
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

export default ToolTipComponent;

