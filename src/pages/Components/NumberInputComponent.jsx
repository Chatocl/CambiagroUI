import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import InputNumber from "../../components/reactcomponents/InputNumber/inputnumber";
import { ThemeContext } from '../../App'; 

export const NumberInputComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes = [
    {
      language: 'javascript',
      label: 'Vue JS',
      code: ` <template>
      <b>{{ state }}</b>
      <label for="default">Label:</label>
    <div>
      <span v-if="state === 'default'" :style="getStyles('default')" :class="getWrapperClass()">
        <input type="number" :id="getId('default')" name="input" class="number-input" placeholder="1000">
      </span>
      <span v-else-if="state === 'active'" :style="getStyles('active')" :class="getWrapperClass()">
        <input type="number" :id="getId('active')" name="input" class="number-input" placeholder="1000">
      </span>
      <span v-else-if="state === 'hover'" :style="getStyles('hover')" :class="getWrapperClass()">
        <input type="number" :id="getId('hover')" name="input" class="number-input" placeholder="1000">
      </span>
      <span v-else-if="state === 'disabled'" :style="getStyles('disabled')" :class="[getWrapperClass(), 'no-hover']">
        <input type="number" :id="getId('disabled')" name="input" class="number-input" placeholder="N/A" readonly>
      </span>
      <span v-else-if="state === 'filled'" :style="getStyles('filled')" :class="getWrapperClass()">
        <input type="number" :id="getId('filled')" name="input" class="number-input" placeholder="1000">
      </span>
      <span v-else-if="state === 'error'" :style="getStyles('error')" :class="getWrapperClass('number-wrapper-error')">
        <input type="number" :id="getId('error')" name="input" class="number-input" placeholder="1000">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-exclamation-circle icon-error" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
        </svg>
      </span>
      <span v-else :style="getStyles('default')" :class="getWrapperClass()">
        <input type="number" :id="getId('default')" name="input" class="number-input" placeholder="1000">
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InputNumber',
    props: {
      state: String,
      size: String
    },
    methods: {
      getStyles(state) {
        const baseStyles = {
          '--inputColor': '#000000',
          '--fontColor': '#999999',
          '--backgroundColor': 'none'
        };
  
        switch (state) {
          case 'active':
            baseStyles['--inputColor'] = '#16A317';
            baseStyles['--fontColor'] = '#000000';
            break;
          case 'hover':
            baseStyles['--inputColor'] = '#0B520C';
            baseStyles['--fontColor'] = '#0B520C';
            break;
          case 'disabled':
            baseStyles['--inputColor'] = '#999999';
            baseStyles['--fontColor'] = '#999999';
            baseStyles['--backgroundColor'] = '#E5E5E5';
            break;
          case 'filled':
            break;
          case 'error':
            baseStyles['--inputColor'] = '#DB2929';
            break;
        }
  
        switch (this.size) {
          case 'L':
            baseStyles['--inputHeight'] = '56px';
            break;
          case 'S':
            baseStyles['--inputHeight'] = '40px';
            break;
          case 'M':
            baseStyles['--inputHeight'] = '48px';
            break;
        }
  
        return baseStyles;
      },
      getWrapperClass(customClass = 'number-wrapper') {
        return customClass;
      },
      getId(state) {
        return \`input-\${state}\`;
      }
    }
  }
  </script>
  
  
  <style src="./index.css"></style> `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `/* * {
        font-family: 'Mark Pro';
    } */
    
    .number-input {
      width: 164px;
      height: 56px;
      padding: 10px 16px 10px 16px;
      border-radius: 40px;
      gap: 8px;
      outline: none;
      font-size: 19px;
      border: 1px solid var(--inputColor);
      color: var(--fontColor);
      background-color: var(--backgroundColor);
    }
    
    /* .number-input:hover {
      border: 1px solid #0B520C;
    } */
    .number-input:hover:not([disabled]):not(.no-hover),
    .number-input:active:not([disabled]):not(.no-hover) {
      border: 1px solid #0B520C !important;
    }
    /* .number-input:hover:not(.no-hover),
    .number-input:active:not(.no-hover) {
      border: 1px solid #0B520C !important;
    } */
    .number-wrapper input[type="number"]::-webkit-inner-spin-button,
    .number-wrapper input[type="number"]::-webkit-outer-spin-button {
      opacity: 0;
      height: 40px;
    }
    
    .number-wrapper {
      position: relative;
      color: var(--inputColor);
    }
    
    .number-wrapper:after,
    .number-wrapper:before {
      position: absolute;
      right: 11px;
      color: inherit;
      pointer-events: none;
      font-size: 10px;
      transform: scaleX(1.4);
    }
    
    .number-wrapper:hover:not(.no-hover) {
      color: #0B520C !important;
    }
    
    label {
      display: block;
      margin-bottom: 5px;
    }
    
    .number-wrapper:after {
      right: 20px;
      top: -4px;
      content: "\\25B2";
    }
    
    .number-wrapper:before {
      content: "\\25BC";
      right: 20px;
      bottom: -5px;
    }
    
    /* ERROR */
    .number-wrapper-error {
      position: relative;
    }
    .number-wrapper-error input[type="number"]::-webkit-inner-spin-button,
    .number-wrapper-error input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0; 
    }
    .number-wrapper-error input[type="number"] {
      -moz-appearance:textfield;
    }
    .icon-error {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      color: #DB2929;
    }
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `import React from "react";
             import "@/app/style.css";
      
      const InputNumber = ({ state, size }) => {
      
            
        const getStyles = (state) => {
          const baseStyles = {
            '--inputColor': '#000000',
            '--fontColor': '#999999',
            '--backgroundColor': 'none',
          };
      
          switch (state) {
            case 'active':
              baseStyles['--inputColor'] = '#16A317';
              baseStyles['--fontColor'] = '#000000';
              break;
            case 'hover':
              baseStyles['--inputColor'] = '#0B520C';
              baseStyles['--fontColor'] = '#0B520C';
              break;
            case 'disabled':
              baseStyles['--inputColor'] = '#999999';
              baseStyles['--fontColor'] = '#999999';
              baseStyles['--backgroundColor'] = '#E5E5E5';
              break;
            case 'error':
              baseStyles['--inputColor'] = '#DB2929';
              break;
            default:
              break;
          }
      
          switch (size) {
            case 'L':
              baseStyles['--inputHeight'] = '56px';
              break;
            case 'S':
              baseStyles['--inputHeight'] = '40px';
              break;
            case 'M':
              baseStyles['--inputHeight'] = '48px';
              break;
            default:
              break;
          }
      
          return baseStyles;
        };
      
        const getWrapperClass = (customClass = 'number-wrapper') => customClass;
      
        const getId = (state) => \`input-\${state}\`;
      
          return (
              <div>
                <b>{state}</b>
                <label htmlFor="default">Label:</label>
                <div>
                  {state === 'error' ? (
                    <span
                      style={getStyles(state)}
                      className={getWrapperClass('number-wrapper-error')}
                    >
                      <input
                        type="number"
                        id={getId(state)}
                        name="input"
                        className="number-input no-hover"
                        placeholder="1000"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-exclamation-circle icon-error"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                      </svg>
                    </span>
                  ) : (
                    <span
                      style={getStyles(state)}
                      className={\`\${getWrapperClass()} \${state === 'disabled' ? 'no-hover' : ''}\`}
                    >
                      <input
                        type="number"
                        id={getId(state)}
                        name="input"
                        className="number-input"
                        placeholder="1000"
                        disabled={state === 'disabled'}
                      />
                    </span>
                  )}
                </div>
              </div>
            );
      };
      
      // Export the InputNumber component
      export default InputNumber;
      `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `/* * {
    font-family: 'Mark Pro';
} */

.number-input {
    width: 164px;
    height: 56px;
    padding: 10px 16px 10px 16px;
    border-radius: 40px;
    gap: 8px;
    outline: none;
    font-size: 19px;
    border: 1px solid var(--inputColor);
    color: var(--fontColor);
    background-color: var(--backgroundColor);
}

/* .number-input:hover {
    border: 1px solid #0B520C;
} */
.number-input:hover:not([disabled]):not(.no-hover),
.number-input:active:not([disabled]):not(.no-hover) {
    border: 1px solid #0B520C !important;
}
/* .number-input:hover:not(.no-hover),
.number-input:active:not(.no-hover) {
    border: 1px solid #0B520C !important;
} */
.number-wrapper input[type="number"]::-webkit-inner-spin-button,
.number-wrapper input[type="number"]::-webkit-outer-spin-button {
    opacity: 0;
    height: 40px;
}

.number-wrapper {
    position: relative;
    color: var(--inputColor);
}

.number-wrapper:after,
.number-wrapper:before {
    position: absolute;
    right: 11px;
    color: inherit;
    pointer-events: none;
    font-size: 10px;
    transform: scaleX(1.4);
}

.number-wrapper:hover:not(.no-hover) {
    color: #0B520C !important;
}

label {
    display: block;
    margin-bottom: 5px;
}

.number-wrapper:after {
    right: 20px;
    top: -4px;
    content: "\\25B2";
}

.number-wrapper:before {
    content: "\\25BC";
    right: 20px;
    bottom: -5px;
}

/* ERROR */
.number-wrapper-error {
    position: relative;
}
.number-wrapper-error input[type="number"]::-webkit-inner-spin-button,
.number-wrapper-error input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}
.number-wrapper-error input[type="number"] {
    -moz-appearance:textfield;
}
.icon-error {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    color: #DB2929;
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
        selector: 'app-number-input',
        standalone: true,
        imports: [CommonModule],
        templateUrl: './number-input.component.html',
        styleUrl: './number-input.component.css'
      })
      export class NumberInputComponent {
        @Input() state = '';
        @Input() size = '';
      }
      `
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `<b>{{state}}</b>

      <label for="default">Label:</label>
      
      
      @switch (state) {
          @case ('default') {
              <span class='number-wrapper' [ngStyle]="{ '--inputColor': '#000000', '--fontColor': '#999999', '--backgroundColor': 'none' }">
                  <input type="number" id="default" name="input" class="number-input" placeholder="1000" [style.height]="size === 'L' ? '56px' : size === 'S' ? '40px' : '48px'">
              </span>
          }
          @case ('active') {
              <span class='number-wrapper' [ngStyle]="{ '--inputColor': '#16A317', '--fontColor': '#000000', '--backgroundColor': 'none' }">
                  <input type="number" id="default" name="input" class="number-input" placeholder="1000" [style.height]="size === 'L' ? '56px' : size === 'S' ? '40px' : '48px'">
              </span>
          }
          @case ('hover') {
              <span class='number-wrapper' [ngStyle]="{ '--inputColor': '#0B520C', '--fontColor': '#0B520C', '--backgroundColor': 'none' }">
                  <input type="number" id="default" name="input" class="number-input" placeholder="1000" [style.height]="size === 'L' ? '56px' : size === 'S' ? '40px' : '48px'">
              </span>
          }
          @case ('disabled') {
              <span class='number-wrapper no-hover' [ngStyle]="{ '--inputColor': '#999999', '--fontColor': '#999999', '--backgroundColor': '#E5E5E5' }">
                  <input type="number" id="default" name="input" class="number-input" placeholder="N/A" disabled [style.height]="size === 'L' ? '56px' : size === 'S' ? '40px' : '48px'">
              </span>
          }
          @case ('filled') {
              <span class='number-wrapper' [ngStyle]="{ '--inputColor': '#000000', '--fontColor': '#999999', '--backgroundColor': 'none' }">
                  <input type="number" id="default" name="input" class="number-input" placeholder="1000" [style.height]="size === 'L' ? '56px' : size === 'S' ? '40px' : '48px'">
              </span>
          }
          @case ('error') {
              <span class='number-wrapper-error' [ngStyle]="{ '--inputColor': '#DB2929', '--fontColor': '#999999', '--backgroundColor': 'none' }">
                  <input type="number" id="default" name="input" class="number-input no-hover" placeholder="1000" [style.height]="size === 'L' ? '56px' : size === 'S' ? '40px' : '48px'">
      
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-exclamation-circle icon-error" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                  </svg>
              </span>
          }
          @default {
              <span class='number-wrapper' [ngStyle]="{ '--inputColor': '#000000', '--fontColor': '#999999', '--backgroundColor': 'none' }">
                  <input type="number" id="default" name="input" class="number-input" placeholder="1000" [style.height]="size === 'L' ? '56px' : size === 'S' ? '40px' : '48px'">
              </span>
          }
      }
      
      <!-- @if (isError) {
          <span class='number-wrapper-error'
              [ngStyle]="{ '--inputColor': inputColor, '--fontColor': fontColor, '--backgroundColor': backgroundColor }">
              <input type="number" id="default" name="input" class="number-input" placeholder="{{inputValue}}"
                  [readonly]="isReadOnly">
      
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-exclamation-circle icon-error"
                  viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
              </svg>
          </span>
      
      } @else {
          <span class='number-wrapper'
              [ngStyle]="{ '--inputColor': inputColor, '--fontColor': fontColor, '--backgroundColor': backgroundColor }">
              <input type="number" id="default" name="input" class="number-input" placeholder="{{inputValue}}"
                  [readonly]="isReadOnly">
          </span>
      } -->
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `/* * {
        font-family: 'Mark Pro';
    } */
    
    .number-input {
        width: 164px;
        height: 56px;
        padding: 10px 16px 10px 16px;
        border-radius: 40px;
        gap: 8px;
        outline: none;
        font-size: 19px;
        border: 1px solid var(--inputColor);
        color: var(--fontColor);
        background-color: var(--backgroundColor);
    }
    
    /* .number-input:hover {
        border: 1px solid #0B520C;
    } */
    .number-input:hover:not([disabled]):not(.no-hover),
    .number-input:active:not([disabled]):not(.no-hover) {
        border: 1px solid #0B520C !important;
    }
    /* .number-input:hover:not(.no-hover),
    .number-input:active:not(.no-hover) {
        border: 1px solid #0B520C !important;
    } */
    .number-wrapper input[type="number"]::-webkit-inner-spin-button,
    .number-wrapper input[type="number"]::-webkit-outer-spin-button {
        opacity: 0;
        height: 40px;
    }
    
    .number-wrapper {
        position: relative;
        color: var(--inputColor);
    }
    
    .number-wrapper:after,
    .number-wrapper:before {
        position: absolute;
        right: 11px;
        color: inherit;
        pointer-events: none;
        font-size: 10px;
        transform: scaleX(1.4);
    }
    
    .number-wrapper:hover:not(.no-hover) {
        color: #0B520C !important;
    }
    
    label {
        display: block;
        margin-bottom: 5px;
    }
    
    .number-wrapper:after {
        right: 20px;
        top: -4px;
        content: "\\25B2";
    }
    
    .number-wrapper:before {
        content: "\\25BC";
        right: 20px;
        bottom: -5px;
    }
    
    /* ERROR */
    .number-wrapper-error {
        position: relative;
    }
    .number-wrapper-error input[type="number"]::-webkit-inner-spin-button,
    .number-wrapper-error input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0; 
    }
    .number-wrapper-error input[type="number"] {
        -moz-appearance:textfield;
    }
    .icon-error {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        color: #DB2929;
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
      <InputNumber state="error" ></InputNumber>
      <InputNumber state="active" ></InputNumber>
      <InputNumber state="disabled" ></InputNumber>
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

export default NumberInputComponent;

