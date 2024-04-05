import { ThemeContext } from '../../App'; 
import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import ButtonPersonal from '../../components/reactcomponents/Button/button.jsx';



export const ButtonComponent = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes =[
    {
      language: 'JavaScript',
      label: 'Vue JS',
      code: `<template>
      <div class="main-container">
          <button :class="{
              'primary-button': true,
              'primary-button-disabled': disabled,
              'secondary-button': type === 'secondary',
              'terciary-button': type === 'terciary',
              'icon-true': icon,
              'primary-button-ghost': ghost && type === 'primary',
              'secondary-button-ghost': ghost && type === 'secondary',
              'terciary-button-ghost': ghost && type === 'terciary',
          }" type="button" :value="type + ' Button'" :disabled="disabled"
              :style="{ height: getButtonHeightSize(size) + 'px' }">
  
              <div :class="(icon && position === 'left' ? 'icon-active rotate-icon' : 'icon')">
                  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M14 4.5L12.95 5.55L18.575 11.25H2.75V12.75H18.575L12.95 18.45L14 19.5L21.5 12L14 4.5Z" />
                  </svg>
              </div>
              <span class="text">{{ type }} Button</span>
              <div :class="(icon && position === 'right' ? 'icon-active no-rotate-icon' : 'icon')">
                  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M14 4.5L12.95 5.55L18.575 11.25H2.75V12.75H18.575L12.95 18.45L14 19.5L21.5 12L14 4.5Z" />
                  </svg>
              </div>
          </button>
      </div>
  </template>
  
  <script>
  export default {
      props: {
          disabled: {
              type: Boolean,
              default: false
          },
          ghost: {
              type: Boolean,
              default: false
          },
          icon: {
              type: Boolean,
              default: false
          },
          size: {
              type: String,
              default: "S"
          },
          type: {
              type: String,
              default: "primary"
          },
          position: {
              type: String,
              default: "right"
          }
      },
      methods: {
          getButtonHeightSize(size) {
              switch (size) {
                  case "L":
                      return 56;
                  case "M":
                      return 48;
                  case "S":
                      return 40;
                  default:
                      return 56;
              }
          }
      }
  };
  </script>
  
  <style>
  :root {
      --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, 
      "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", "Source Han Sans CN", sans-serif;
  }
  
  .main-container {
      overflow: hidden;
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
  
  .main-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      gap: 12px;
      position: relative;
      width: 226px;
  }
  
  .text {
      text-transform: capitalize;
      display: flex;
      align-items: center;
      position: relative;
      top: -2px;
  }
  .center {
      display: flex;
      align-items: center;
  }
  .icon-true {
      padding: 10px 40px 10px 43px;
  }
  
  .primary-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 226px;
      margin: 0 auto;
      padding: 10px 40px 10px 40px;
      background: #1ccc1d;
      border-radius: 30px;
      border: none;
      color: #ffffff;
      font-family: Mark Pro, var(--default-font-family);
      font-size: 16px;
      font-weight: 400;
      text-align: center;
  }
  
  .primary-button:hover:not([disabled]) {
      background: #0b520c;
      cursor: pointer;
  }
  
  .primary-button:focus {
      background: #16A317;
  }
  
  .primary-button-disabled {
      color: #999999 !important;
      background: #e5e5e5 !important;
  }
  
  .primary-button-disabled .icon-active path {
      fill: #999999 !important;
  }
  
  .primary-button-ghost {
      color: #1ccc1d;
      background: none;
      border: 1px solid #1ccc1d;
  }
  
  .primary-button-ghost .icon-active path {
      fill: #1ccc1d;
  }
  
  .icon {
      display: none;
  }
  
  .icon-active {
      display: flex;
  }
  
  .icon-active path {
      fill: white;
  }
  
  .rotate-icon {
      transform: rotate(180deg);
  }
  
  .no-rotate-icon {
      transform: rotate(0deg);
  }
  
  .secondary-button {
      background: #282B38;
      padding: 10px 30px 10px 30px;
  }
  
  .secondary-button:hover:not([disabled]) {
      background: #0C0C15;
  }
  
  .secondary-button:focus {
      background: #323053;
  }
  
  .secondary-button-ghost {
      color: #282B38;
      background: none;
      border: 1px solid #282B38;
  }
  
  .secondary-button-ghost .icon-active path {
      fill: #282B38;
  }
  
  
  .terciary-button {
      background: #B1D906;
  }
  
  .terciary-button:hover:not([disabled]) {
      background: #4F6003;
  }
  
  .terciary-button:focus {
      background: #9EC106;
  }
  </style>
    `
    },
  ];

  const nextcodes=[
    {
      language: 'JavaScript',
      label: 'Next JS',
      code: `import React from 'react';
      import styles from '@/app/components/button/style.css';
      
      const Button = ({
        disabled = false,
        ghost = false,
        icon = false,
        size = "S",
        type = "primary",
        position = "right"
      }) => {
        const getButtonHeightSize = (size) => {
          switch (size) {
            case "L":
              return 56;
            case "M":
              return 48;
            case "S":
              return 40;
            default:
              return 56;
          }
        };
      
        const buttonClasses = \`\${'primary-button'} \${disabled ? 'primary-button-disabled' : ''} \${ghost && type === 'primary' ? 'primary-button-ghost' : ''} 
        \${ghost && type === 'secondary' ? 'secondary-button-ghost' : ''} \${ghost && type === 'terciary' ? 'terciary-button-ghost' : ''}
         \${type === 'secondary' ? 'secondary-button' : ''} 
        \${type === 'terciary' ? 'terciary-button' : ''} \${icon ? 'icon-true' : ''}\`;
      
        return (
          <div className="main-container">
            <button
              className={buttonClasses}
              type="button"
              disabled={disabled}
              style={{ height: \`\${getButtonHeightSize(size)}px\` }}
            >
              {icon &&
                <div className={icon && position === 'left' ? 'icon-active rotate-icon' : 'icon'}>
                  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 4.5L12.95 5.55L18.575 11.25H2.75V12.75H18.575L12.95 18.45L14 19.5L21.5 12L14 4.5Z" />
                  </svg>
                </div>
              }
      
              <span className="text">{type} Button</span>
      
              {icon &&
                <div className={icon && position === 'right' ? 'icon-active no-rotate-icon' : 'icon'}>
                  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 4.5L12.95 5.55L18.575 11.25H2.75V12.75H18.575L12.95 18.45L14 19.5L21.5 12L14 4.5Z" />
                  </svg>
                </div>
              }
            </button>
          </div>
        );
      };
      
      export default Button;
      
    `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `:root {
        --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC", 
        "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", "Source Han Sans CN", sans-serif;
    }
    
    .main-container {
        overflow: hidden;
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
    
    .main-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 12px;
        position: relative;
        width: 226px;
    }
    
    .text {
        text-transform: capitalize;
        display: flex;
        align-items: center;
        position: relative;
        top: -2px;
    }
    .center {
        display: flex;
        align-items: center;
    }
    .icon-true {
        padding: 10px 40px 10px 43px;
    }
    
    .primary-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 226px;
        margin: 0 auto;
        padding: 10px 40px 10px 40px;
        background: #1ccc1d;
        border-radius: 30px;
        border: none;
        color: #ffffff;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }
    
    .primary-button:hover:not([disabled]) {
        background: #0b520c;
        cursor: pointer;
    }
    
    .primary-button:focus {
        background: #16A317;
    }
    
    .primary-button-disabled {
        color: #999999 !important;
        background: #e5e5e5 !important;
    }
    
    .primary-button-disabled .icon-active path {
        fill: #999999 !important;
    }
    
    .primary-button-ghost {
        color: #1ccc1d;
        background: none;
        border: 1px solid #1ccc1d;
    }
    
    .primary-button-ghost .icon-active path {
        fill: #1ccc1d;
    }
    
    .icon {
        display: none;
    }
    
    .icon-active {
        display: flex;
    }
    
    .icon-active path {
        fill: white;
    }
    
    .rotate-icon {
        transform: rotate(180deg);
    }
    
    .no-rotate-icon {
        transform: rotate(0deg);
    }
    
    .secondary-button {
        background: #282B38;
        padding: 10px 30px 10px 30px;
    }
    
    .secondary-button:hover:not([disabled]) {
        background: #0C0C15;
    }
    
    .secondary-button:focus {
        background: #323053;
    }
    
    .secondary-button-ghost {
        color: #282B38;
        background: none;
        border: 1px solid #282B38;
    }
    
    .secondary-button-ghost .icon-active path {
        fill: #282B38;
    }
    
    
    .terciary-button {
        background: #B1D906;
    }
    
    .terciary-button:hover:not([disabled]) {
        background: #4F6003;
    }
    
    .terciary-button:focus {
        background: #9EC106;
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
        selector: 'app-button',
        standalone: true,
        imports: [CommonModule],
        templateUrl: './button.component.html',
        styleUrl: './button.component.css'
      })
      export class ButtonComponent {
        @Input() disabled : boolean = false;
        @Input() ghost : boolean = false;
        @Input() icon : boolean = false;
        @Input() size : string = "S";
        @Input() type : string = "primary";
        @Input() position : string = "right";
      
        getButtonHeightSize(size: string) : number {
          switch (size) {
            case "L":
              return 56;
            case "M":
              return 48;
            case "S":
              return 40;
            default:
              return 56;
          }
        }
      }
      `
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `<div class='main-container'>
      <button [ngClass]="{
          'primary-button': true,
          'primary-button-disabled': disabled,
          'secondary-button': type === 'secondary',
          'terciary-button': type === 'terciary',
          'icon-true': icon,
          'primary-button-ghost': ghost && type === 'primary',
          'secondary-button-ghost': ghost && type === 'secondary',
          'terciary-button-ghost': ghost && type === 'terciary',
        }" type="button" [value]="type + ' Button'" [disabled]="disabled" [style.height.px]="getButtonHeightSize(size)">
  
          <div [ngClass]="(icon && position === 'left' ? 'icon-active rotate-icon' : 'icon')">
              <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M14 4.5L12.95 5.55L18.575 11.25H2.75V12.75H18.575L12.95 18.45L14 19.5L21.5 12L14 4.5Z" />
              </svg>
          </div>
  
          <span class="text">{{ type }} Button</span>
  
          <div [ngClass]="(icon && position === 'right' ? 'icon-active no-rotate-icon' : 'icon')">
              <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M14 4.5L12.95 5.55L18.575 11.25H2.75V12.75H18.575L12.95 18.45L14 19.5L21.5 12L14 4.5Z" />
              </svg>
          </div>
      </button>
  </div>
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `:root {
        --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC", 
        "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", "Source Han Sans CN", sans-serif;
    }
    
    .main-container {
        overflow: hidden;
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
    
    .main-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 12px;
        position: relative;
        width: 226px;
    }
    
    .text {
        text-transform: capitalize;
        display: flex;
        align-items: center;
        position: relative;
        top: -2px;
    }
    .center {
        display: flex;
        align-items: center;
    }
    .icon-true {
        padding: 10px 40px 10px 43px;
    }
    
    .primary-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 226px;
        margin: 0 auto;
        padding: 10px 40px 10px 40px;
        background: #1ccc1d;
        border-radius: 30px;
        border: none;
        color: #ffffff;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }
    
    .primary-button:hover:not([disabled]) {
        background: #0b520c;
        cursor: pointer;
    }
    
    .primary-button:focus {
        background: #16A317;
    }
    
    .primary-button-disabled {
        color: #999999 !important;
        background: #e5e5e5 !important;
    }
    
    .primary-button-disabled .icon-active path {
        fill: #999999 !important;
    }
    
    .primary-button-ghost {
        color: #1ccc1d;
        background: none;
        border: 1px solid #1ccc1d;
    }
    
    .primary-button-ghost .icon-active path {
        fill: #1ccc1d;
    }
    
    .icon {
        display: none;
    }
    
    .icon-active {
        display: flex;
    }
    
    .icon-active path {
        fill: white;
    }
    
    .rotate-icon {
        transform: rotate(180deg);
    }
    
    .no-rotate-icon {
        transform: rotate(0deg);
    }
    
    .secondary-button {
        background: #282B38;
        padding: 10px 30px 10px 30px;
    }
    
    .secondary-button:hover:not([disabled]) {
        background: #0C0C15;
    }
    
    .secondary-button:focus {
        background: #323053;
    }
    
    .secondary-button-ghost {
        color: #282B38;
        background: none;
        border: 1px solid #282B38;
    }
    
    .secondary-button-ghost .icon-active path {
        fill: #282B38;
    }
    
    
    .terciary-button {
        background: #B1D906;
    }
    
    .terciary-button:hover:not([disabled]) {
        background: #4F6003;
    }
    
    .terciary-button:focus {
        background: #9EC106;
    }
      `
    }
  ];
  const { setTheme, theme } = useContext(ThemeContext); 
  const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
  const dividerColor = theme === "light" ? "#000000" : "#ffffff";
  return (
    <Container>
      <h1>Button</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ButtonPersonal
        disabled={false} // Puedes cambiar esto a true para deshabilitar el botón
        ghost={false}
        icon={true} // Cambia esto a false si no quieres un icono
        size="M" // Cambia el tamaño del botón: "S", "M" o "L"
        type="primary" // Tipo de botón: "primary", "secondary" o "terciary"
        position="right" // Posición del icono: "left" o "right"
      />
      </div>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ButtonPersonal
        disabled={false} // Puedes cambiar esto a true para deshabilitar el botón
        ghost={false}
        icon={true} // Cambia esto a false si no quieres un icono
        size="M" // Cambia el tamaño del botón: "S", "M" o "L"
        type="secondary" // Tipo de botón: "primary", "secondary" o "terciary"
        position="right" // Posición del icono: "left" o "right"
      />
      </div>

      </PreviewBox>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Vue"  style={{ color: tabsTextColor }} />
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
   height: auto;
   margin: 50px;
`;

export default ButtonComponent;
