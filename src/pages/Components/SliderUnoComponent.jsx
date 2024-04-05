import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import DoubleSlider1 from "../../components/reactcomponents/Slider1/DoubleSlider1";
import SingleSlider1 from "../../components/reactcomponents/Slider1/SingleSlider1";

import { ThemeContext } from '../../App'; 

export const SliderUnoComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    
  };
  const [isActive, setIsActive] = React.useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const vuecodes = [
    {
      language: 'javascript',
      label: 'Slider Single Vue JS',
      code: `<template>
      <div :class="['slider1-container', active ? '' : 'disabled']">
        <div v-if="active" class="show-value">
          <span :style="{ left: currentValuePosition() }" class="current-value">
            {{ inputValue }}{{ active ? '' : '%' }}
          </span>
        </div>
        <div class="single-slider">
          <input
            type="range"
            class="custom-slider"
            min="0"
            max="100"
            step="1"
            v-model="inputValue"
            @input="handleInputChange"
            @mousedown="handleInputFocus"
            @mouseup="handleInputBlur"
          />
          <div :style="{ width: currentValuePosition() }" class="progress-bar"></div>
        </div>
        <div class="range">
          <div class="range-value">0</div>
          <div class="range-value">100</div>
        </div>
        <div v-if="!active" class="show-value" style="position: absolute">
          <span :style="{ left: currentValuePosition(), top: '14px' }" class="current-value">
            {{ inputValue }}{{ active ? '' : '%' }}
          </span>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      name: 'SingleSlider1',
      props: {
        active: Boolean
      },
      data() {
        return {
          inputValue: '50',
          isFocused: false
        };
      },
      methods: {
        handleInputChange(event) {
          if (this.active) {
            this.inputValue = event.target.value;
          }
        },
        handleInputFocus() {
          this.isFocused = true;
        },
        handleInputBlur() {
          this.isFocused = false;
        },
        currentValuePosition() {
          const value = parseInt(this.inputValue);
          if (value === 0) {
            return '8px';
          } else if (value === 100) {
            return '280px';
          } else {
            return \`\${value * 2.72 + 8}px\`;
          }
        }
      }
    };
    </script>
    
    <style scoped src="./SingleSlider1.css">
  
    </style>
    
    `
    },
    {
      language: 'css',
      label: 'Slider Single Angular CSS',
      code: `.slider1-container{
        width: 288px;
        height: 63px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    .slider1-container.disabled{
        height: 40px;
        justify-content: center;
    }
    
    .slider1-container .show-value{
        position: relative;
        width: 100%;
        height: 24px;
    }
    
    
    .slider1-container .show-value span{
        position: absolute;
        height: 24px;
        transform: translateX(-50%);
    }
    
    .single-slider{
        height: 4px;
        width: 100%;
        border-radius: 4px;
        background-color: #E5E5E5;
        position: relative;
    }
    
    .custom-slider{
        position: absolute;
        left: 0;
        width: 100%;
        margin: 0;
    }
    
    .range{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .range-value , .current-value{
        color: black;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 400;
    }
    
    .slider1-container.disabled .range-value .current-value {
        color:#E5E5E5;
    }
    
    .slider1-container.disabled .range-value{
        color:#E5E5E5;
    }
    
    .slider1-container.disabled .current-value{
        color:#E5E5E5;
    }
    
    .slider1-container input[type="range"]{
        -webkit-appearance: none;
        height: 4px;
        outline: none;
        border-radius: 4px;
        background-color: #E5E5E5;
    }
    
    .slider1-container input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #1CCC1D;
        cursor: pointer;
    }
    
    .slider1-container.disabled input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #E5E5E5;
        cursor: not-allowed;
    }
    
    
    .slider1-container input[type="range"]:focus::-webkit-slider-thumb:hover {
        outline: 6px solid rgba(28, 204, 29, 0.3);
    }
    
    .slider1-container.disabled input[type="range"]:focus::-webkit-slider-thumb:hover {
        outline: none;
    }
    
    .progress-bar{
        height: 4px;
        background: #1CCC1D;
        border-radius: 4px;
        position: absolute;
    }
    
    .slider1-container.disabled .progress-bar {
        background: #E5E5E5;
    }
    
    .input-container{
        position: relative;
    }
    
    `
    },
    {
        language: '1javascript',
        label: 'Slider Double Vue JS',
        code: `<template>
        <div :class="['double-slider1-container', active ? '' : 'disabled']">
          <div class="slider1-range-slider">
            <span
              class="slider1-track"
              :style="{ left: \`\${(minValue / 1440) * 100}%\`, right: \`\${100 - (maxValue / 1440) * 100}%\` }"
            ></span>
            <input
              type="range"
              name="slider1-min-val"
              class="slider1-min-val"
              min="0"
              max="1440"
              step="1"
              :value="minValue"
              @input="handleMinChange"
              :disabled="!active"
            />
            <input
              type="range"
              name="slider1-max-val"
              class="slider1-max-val"
              min="0"
              max="1440"
              step="1"
              :value="maxValue"
              @input="handleMaxChange"
              :disabled="!active"
            />
          </div>
          <div class="slider1-show-values">
            <div class="tooltip min-tooltip" :style="{ left: minPosition(minValue) }">
              {{ convertToTime(minValue) }}
            </div>
            <div class="tooltip max-tooltip" :style="{ right: maxPosition(maxValue) }">
              {{ convertToTime(maxValue) }}
            </div>
          </div>
        </div>
      </template>
      
      <script>
      export default {
        name: 'DoubleSlider1',
        props: {
          active: Boolean,
        },
        data() {
          return {
            minValue: 720,
            maxValue: 1080,
            minGap: 0,
          };
        },
        methods: {
          convertToTime(minutes) {
            const hours = Math.floor(minutes / 60);
            const minutesLeft = minutes % 60;
            const formattedHours = hours < 10 ? \`0\${hours}\` : \`\${hours}\`;
            const formattedMinutes = minutesLeft < 10 ? \`0$\{minutesLeft}\` : \`\${minutesLeft}\`;
            return \`\${formattedHours}:\${formattedMinutes}\`;
          },
          handleMinChange(event) {
            if (this.active) {
              this.minValue = parseInt(event.target.value);
              if (this.maxValue - parseInt(event.target.value) <= this.minGap) {
                this.maxValue = parseInt(event.target.value) + this.minGap;
              }
            }
          },
          handleMaxChange(event) {
            if (this.active) {
              this.maxValue = parseInt(event.target.value);
              if (parseInt(event.target.value) - this.minValue <= this.minGap) {
                this.minValue = parseInt(event.target.value) - this.minGap;
              }
            }
          },
          minPosition(value) {
            if (value === 0) {
              return '8px';
            } else if (value === 1440) {
              return '280px';
            } else {
              return \`\${(value * (272 / 1440)) + 8}px\`;
            }
          },
          maxPosition(value) {
            if (value === 0) {
              return '280px';
            } else if (value === 1440) {
              return '8px';
            } else {
              return \`\${280 - (value * (272 / 1440))}px\`;
            }
          },
        },
      };
      </script>
      
      <style scoped src="./DoubleSlider1.css">
      </style>
      
      `
      },
      {
        language: '1css',
        label: 'Slider Double Angular CSS',
        code: `.double-slider1-container{
            width: 288px;
            height: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .slider1-range-slider{
            position: relative;
            width: 100%;
            height: 4px;
            background-color: #E5E5E5;
            border-radius: 8px;
            margin-top: 6px;
        }
        
        .slider1-track{
            height: 100%;
            position: absolute;
            background-color: #1CCC1D;
            border-radius: 8px;
        }
        
        .double-slider1-container.disabled .slider1-track{
            background-color: #E5E5E5;
        }
        
        .slider1-range-slider input {
            position: absolute;
            width: 100%;
            background: none;
            pointer-events: none;
            left: 0;
            transform: translateY(-50%);
            appearance: none;
            margin: 0;
            top: 50%;
        }
        
        .double-slider1-container.disabled .slider1-range-slider input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #E5E5E5;
            cursor: not-allowed;
            pointer-events: auto;
        }
        
        .slider1-range-slider input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #1CCC1D;
            cursor: pointer;
            pointer-events: auto;
        }
        
        .slider1-range-slider input[type="range"]:focus::-webkit-slider-thumb {
            outline: 6px solid rgba(28, 204, 29, 0.3);
        }
        
        .slider1-range-slider input[type="range"]::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #1CCC1D;
            -moz-appearance: none;
            cursor: pointer;
        }
        
        .tooltip{
            color: black;
            font-family: Mark Pro, var(--default-font-family);
            font-size: 16px;
            font-weight: 400;
            position: absolute;
        }
        
        .double-slider1-container.disabled .tooltip{
            color: #E5E5E5;
        }
        
        .min-tooltip{
            transform: translateX(-50%) translateY(-100%);
            z-index: 5;
        }
        
        .max-tooltip{
            transform: translateX(50%) translateY(-100%);
        }
        
        .slider1-show-values{
            position: relative;
            width: 100%;
        }
      `
      },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Slider Single Next JS',
      code: `import React, { useState } from 'react';
      import './SingleSlider1.css';
      
      const SingleSlider1 = ({ active }) => {
          const [inputValue, setInputValue] = useState('50');
          const [isFocused, setIsFocused] = useState(false);
      
          const handleInputChange = (event) => {
              if (active) {
                  setInputValue(event.target.value);
              }
          };
      
          const handleInputFocus = () => {
              setIsFocused(true);
          }
      
          const handleInputBlur = () => {
              setIsFocused(false);
          }
      
      
          const currentValuePosition = () => {
              const value = parseInt(inputValue);
              if (value === 0) {
                  return '8px';
              } else if (value === 100) {
                  return '280px';
              } else {
                  return \`\${(value * 2.72) + 8}px\`;
              }
          };
      
          return (
              <div className={\`slider1-container \${active ? '' : 'disabled'}\`} >
                  {active && (
                      <div className='show-value'>
                      <span className='current-value' style={{ left: currentValuePosition() }}>
                          {inputValue}{active ? '' : '%'}
                      </span>
                  </div>
                  )}
                  <div className='single-slider'>
                      <input
                          type='range'
                          className='custom-slider'
                          min={'0'}
                          max={'100'}
                          step='1'
                          value={inputValue}
                          onChange={handleInputChange}
                          onMouseDown={handleInputFocus}
                          onMouseUp={handleInputBlur}
                      />
                      <div className='progress-bar' style={{ width: currentValuePosition() }}></div>
                  </div>
                  <div className='range'>
                      <div className='range-value'>{'0'} </div>
                      <div className='range-value'>{'100'}</div>
                  </div>
                  {!active && (
                      <div className='show-value'
                           style={{position: "absolute"}}>
                      <span className='current-value' style={{ left: currentValuePosition(), top: "14px" }}>
                          {inputValue}{active ? '' : '%'}
                      </span>
                  </div>
                  )}
              </div>
          );
      };
      
      export default SingleSlider1;
      
      
      `
    },
    {
      language: 'css',
      label: 'Slider Single Next CSS',
      code: `.slider1-container{
        width: 288px;
        height: 63px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    .slider1-container.disabled{
        height: 40px;
        justify-content: center;
    }
    
    .slider1-container .show-value{
        position: relative;
        width: 100%;
        height: 24px;
    }
    
    
    .slider1-container .show-value span{
        position: absolute;
        height: 24px;
        transform: translateX(-50%);
    }
    
    .single-slider{
        height: 4px;
        width: 100%;
        border-radius: 4px;
        background-color: #E5E5E5;
        position: relative;
    }
    
    .custom-slider{
        position: absolute;
        left: 0;
        width: 100%;
        margin: 0;
    }
    
    .range{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .range-value , .current-value{
        color: black;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 400;
    }
    
    .slider1-container.disabled .range-value .current-value {
        color:#E5E5E5;
    }
    
    .slider1-container.disabled .range-value{
        color:#E5E5E5;
    }
    
    .slider1-container.disabled .current-value{
        color:#E5E5E5;
    }
    
    .slider1-container input[type="range"]{
        -webkit-appearance: none;
        height: 4px;
        outline: none;
        border-radius: 4px;
        background-color: #E5E5E5;
    }
    
    .slider1-container input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #1CCC1D;
        cursor: pointer;
    }
    
    .slider1-container.disabled input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #E5E5E5;
        cursor: not-allowed;
    }
    
    
    .slider1-container input[type="range"]:focus::-webkit-slider-thumb:hover {
        outline: 6px solid rgba(28, 204, 29, 0.3);
    }
    
    .slider1-container.disabled input[type="range"]:focus::-webkit-slider-thumb:hover {
        outline: none;
    }
    
    .progress-bar{
        height: 4px;
        background: #1CCC1D;
        border-radius: 4px;
        position: absolute;
    }
    
    .slider1-container.disabled .progress-bar {
        background: #E5E5E5;
    }
    
    .input-container{
        position: relative;
    }
    
        
      `
    },
    {
        language: 'javascript',
        label: 'Slider Double Next JS',
        code: `import React, { useState } from 'react';
        import './DoubleSlider1.css';
        
        const DoubleSlider1 = ({active}) => {
          const [minValue, setMinValue] = useState(720);
          const [maxValue, setMaxValue] = useState(1080);
          const [minGap, setMinGap] = useState(0);
        
          const convertToTime = (minutes) => {
            const hours = Math.floor(minutes / 60);
            const minutesLeft = minutes % 60;
            const formattedHours = hours < 10 ? \`0\${hours}\` : \`\${hours}\`;
            const formattedMinutes = minutesLeft < 10 ? \`0\${minutesLeft}\` : \`\${minutesLeft}\`;
            return \`\${formattedHours}:\${formattedMinutes}\`;
          };
        
        
          const handleMinChange = (event) => {
            if (active) {
              setMinValue(parseInt(event.target.value));
              if (maxValue - parseInt(event.target.value) <= minGap) {
                setMaxValue(parseInt(event.target.value) + minGap);
              }
            }
          };
        
          const handleMaxChange = (event) => {
            if(active){
              setMaxValue(parseInt(event.target.value));
              if (parseInt(event.target.value) - minValue <= minGap) {
                setMinValue(parseInt(event.target.value) - minGap);
              }
            }
          };
        
          const minPosition = (value) => {
            if (value === 0) {
              return '8px';
            } else if (value === 1440) {
              return '280px';
            } else {
              return \`\${(value * (272 / 1440)) + 8}px\`;
            }
          };
        
          const maxPosition = (value) => {
            if (value === 0) {
              return '280px';
            } else if (value === 1440) {
              return '8px';
            } else {
              return \`\${280 - (value * (272 / 1440))}px\`;
            }
          };
        
          return (
            <div className={\`double-slider1-container \${active ? '' : 'disabled'}\`}>
              <div className='slider1-range-slider'>
                <span
                  className='slider1-track'
                  style={{
                    left: (minValue / 1440) * 100 + '%',
                    right: 100 - (maxValue / 1440) * 100 + '%'
                  }}
                ></span>
                <input
                  type='range'
                  name='slider1-min-val'
                  className='slider1-min-val'
                  min='0'
                  max='1440'
                  step={'1'}
                  value={minValue}
                  onChange={handleMinChange}
                  disabled={!active}
                />
                <input
                  type='range'
                  name='slider1-max-val'
                  className='slider1-max-val'
                  min='0'
                  max='1440'
                  step={'1'}
                  value={maxValue}
                  onChange={handleMaxChange}
                  disabled={!active}
                />
              </div>
              <div className='slider1-show-values'>
                <div
                  className='tooltip min-tooltip'
                  style={{ left: minPosition(minValue) }}
                >
                  {convertToTime(minValue)}
                </div>
                <div
                  className='tooltip max-tooltip'
                  style={{ right: maxPosition(maxValue) }}
                >
                  {convertToTime(maxValue)}
                </div>
              </div>
            </div>
          );
        };
        
        export default DoubleSlider1;
        
        `
      },
      {
        language: 'css',
        label: 'Slider Double Next CSS',
        code: `.double-slider1-container{
            width: 288px;
            height: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 20px;
        }
        
        .slider1-range-slider{
            position: relative;
            width: 100%;
            height: 4px;
            background-color: #E5E5E5;
            border-radius: 8px;
            margin-top: 6px;
        }
        
        .slider1-track{
            height: 100%;
            position: absolute;
            background-color: #1CCC1D;
            border-radius: 8px;
        }
        
        .double-slider1-container.disabled .slider1-track{
            background-color: #E5E5E5;
        }
        
        .slider1-range-slider input {
            position: absolute;
            width: 100%;
            background: none;
            pointer-events: none;
            left: 0;
            transform: translateY(-50%);
            appearance: none;
            margin: 0;
            top: 50%;
        }
        
        .double-slider1-container.disabled .slider1-range-slider input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #E5E5E5;
            cursor: not-allowed;
            pointer-events: auto;
        }
        
        .slider1-range-slider input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #1CCC1D;
            cursor: pointer;
            pointer-events: auto;
        }
        
        .slider1-range-slider input[type="range"]:focus::-webkit-slider-thumb {
            outline: 6px solid rgba(28, 204, 29, 0.3);
        }
        
        .slider1-range-slider input[type="range"]::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #1CCC1D;
            -moz-appearance: none;
            cursor: pointer;
        }
        
        .tooltip{
            color: black;
            font-family: Mark Pro, var(--default-font-family);
            font-size: 16px;
            font-weight: 400;
            position: absolute;
        }
        
        .double-slider1-container.disabled .tooltip{
            color: #E5E5E5;
        }
        
        .min-tooltip{
            transform: translateX(-50%) translateY(-100%);
            z-index: 5;
        }
        
        .max-tooltip{
            transform: translateX(50%) translateY(-100%);
        }
        
        .slider1-show-values{
            position: relative;
            width: 100%;
        }
        
        `
      }
  ];

  const angularCodes = [
    {
      language: '1typescript',
      label: 'Slider SingleAngular TS',
      code: `import { Component, Input } from '@angular/core';


      @Component({
        selector: 'app-single-slider1',
        templateUrl: './single-slider1.component.html',
        styleUrls: ['./single-slider1.component.css']
      })
      export class SingleSlider1Component {
        @Input() active: boolean = true;
        inputValue: string = '50';
        isFocused: boolean = false;
      
        handleInputChange(event: any) {
          if (this.active) {
            this.inputValue = event.target.value;
          }
        }
      
        handleInputFocus() {
          this.isFocused = true;
        }
      
        handleInputBlur() {
          this.isFocused = false;
        }
      
        currentValuePosition(): string {
          const value: number = parseInt(this.inputValue);
          if (value === 0) {
            return '8px';
          } else if (value === 100) {
            return '280px';
          } else {
            return \`\${value * 2.72 + 8}px\`;
          }
        }
      }
      
      `
    },
    {
        language: '1typescript spec',
        label: 'Slider Single Angular TS Module',
        code: `import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';
        import { FormsModule } from '@angular/forms';
        import { NgIf } from '@angular/common';
        import { SingleSlider1Component } from './single-slider1.component';
        
        @NgModule({
          declarations: [
            SingleSlider1Component
          ],
          imports: [
            CommonModule,
            FormsModule,
            NgIf
          ],
          exports: [
            SingleSlider1Component
          ]
        })
        export class SingleSlider1Module { }
        
        `
      },
    
    {
      language: '1html',
      label: 'Slider Single Angular Html',
      code: `<div [class]="['slider1-container', active ? '' : 'disabled']">
      <div *ngIf="active" class="show-value">
        <span [style.left]="currentValuePosition()" class="current-value">
          {{ inputValue }}{{ active ? '' : '%' }}
        </span>
      </div>
      <div class="single-slider">
        <input
          type="range"
          class="custom-slider"
          min="0"
          max="100"
          step="1"
          [(ngModel)]="inputValue"
          (input)="handleInputChange($event)"
          (mousedown)="handleInputFocus()"
          (mouseup)="handleInputBlur()"
        />
        <div [style.width]="currentValuePosition()" class="progress-bar"></div>
      </div>
      <div class="range">
        <div class="range-value">0</div>
        <div class="range-value">100</div>
      </div>
      <div *ngIf="!active" class="show-value" style="position: absolute">
        <span [style.left]="currentValuePosition()" style="top: 14px" class="current-value">
          {{ inputValue }}{{ active ? '' : '%' }}
        </span>
      </div>
    </div>
    
    
    `
    },
    {
      language: '1css',
      label: 'Slider Single Angular CSS',
      code: `.slider1-container{
        width: 288px;
        height: 63px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    .slider1-container.disabled{
        height: 40px;
        justify-content: center;
    }
    
    .slider1-container .show-value{
        position: relative;
        width: 100%;
        height: 24px;
    }
    
    
    .slider1-container .show-value span{
        position: absolute;
        height: 24px;
        transform: translateX(-50%);
    }
    
    .single-slider{
        height: 4px;
        width: 100%;
        border-radius: 4px;
        background-color: #E5E5E5;
        position: relative;
    }
    
    .custom-slider{
        position: absolute;
        left: 0;
        width: 100%;
        margin: 0;
    }
    
    .range{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .range-value , .current-value{
        color: black;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 400;
    }
    
    .slider1-container.disabled .range-value .current-value {
        color:#E5E5E5;
    }
    
    .slider1-container.disabled .range-value{
        color:#E5E5E5;
    }
    
    .slider1-container.disabled .current-value{
        color:#E5E5E5;
    }
    
    .slider1-container input[type="range"]{
        -webkit-appearance: none;
        height: 4px;
        outline: none;
        border-radius: 4px;
        background-color: #E5E5E5;
    }
    
    .slider1-container input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #1CCC1D;
        cursor: pointer;
    }
    
    .slider1-container.disabled input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #E5E5E5;
        cursor: not-allowed;
    }
    
    
    .slider1-container input[type="range"]:focus::-webkit-slider-thumb:hover {
        outline: 6px solid rgba(28, 204, 29, 0.3);
    }
    
    .slider1-container.disabled input[type="range"]:focus::-webkit-slider-thumb:hover {
        outline: none;
    }
    
    .progress-bar{
        height: 4px;
        background: #1CCC1D;
        border-radius: 4px;
        position: absolute;
    }
    
    .slider1-container.disabled .progress-bar {
        background: #E5E5E5;
    }
    
    .input-container{
        position: relative;
    }
    
        
      `
    },
    {
        language: '2typescript',
        label: 'Slider Double Angular TS',
        code: `import { Component, Input } from '@angular/core';

        @Component({
          selector: 'app-double-slider1',
          standalone: true,
          templateUrl: './double-slider1.component.html',
          styleUrls: ['./double-slider1.component.css']
        })
        export class DoubleSlider1Component {
          @Input() active: boolean = false;
          minValue: number = 720;
          maxValue: number = 1080;
          minGap: number = 0;
        
          convertToTime(minutes: number): string {
            const hours: number = Math.floor(minutes / 60);
            const minutesLeft: number = minutes % 60;
            const formattedHours: string = hours < 10 ? \`0\${hours}\` : \`\${hours}\`;
            const formattedMinutes: string = minutesLeft < 10 ? \`0\${minutesLeft}\` : \`\${minutesLeft}\`;
            return \`\${formattedHours}:\${formattedMinutes}\`;
          }
        
          handleMinChange(event: any) {
            if (this.active) {
              this.minValue = parseInt(event.target.value);
              if (this.maxValue - parseInt(event.target.value) <= this.minGap) {
                this.maxValue = parseInt(event.target.value) + this.minGap;
              }
            }
          }
        
          handleMaxChange(event: any) {
            if (this.active) {
              this.maxValue = parseInt(event.target.value);
              if (parseInt(event.target.value) - this.minValue <= this.minGap) {
                this.minValue = parseInt(event.target.value) - this.minGap;
              }
            }
          }
        
          minPosition(value: number): string {
            if (value === 0) {
              return '8px';
            } else if (value === 1440) {
              return '280px';
            } else {
              return \`\${(value * (272 / 1440)) + 8}px\`;
            }
          }
        
          maxPosition(value: number): string {
            if (value === 0) {
              return '280px';
            } else if (value === 1440) {
              return '8px';
            } else {
              return \`\${280 - (value * (272 / 1440))}px\`;
            }
          }
        }
        
        
        `
      },
      {
        language: '2html',
        label: 'Slider Double Angular Html',
        code: `<div [class]="'double-slider1-container ' + (active ? '' : 'disabled')">
        <div class="slider1-range-slider">
          <span class="slider1-track" [style.left]="(minValue / 1440) * 100 + '%'" [style.right]="(100 - (maxValue / 1440) * 100) + '%'"></span>
          <input type="range" name="slider1-min-val" class="slider1-min-val" min="0" max="1440" step="1" [value]="minValue" (input)="handleMinChange($event)" [disabled]="!active" />
          <input type="range" name="slider1-max-val" class="slider1-max-val" min="0" max="1440" step="1" [value]="maxValue" (input)="handleMaxChange($event)" [disabled]="!active" />
        </div>
        <div class="slider1-show-values">
          <div class="tooltip min-tooltip" [style.left]="minPosition(minValue)">
            {{ convertToTime(minValue) }}
          </div>
          <div class="tooltip max-tooltip" [style.right]="maxPosition(maxValue)">
            {{ convertToTime(maxValue) }}
          </div>
        </div>
      </div>
      
      
      `
      },
      {
        language: '2css',
        label: 'Slider Double Angular CSS',
        code: `.double-slider1-container{
            width: 288px;
            height: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .slider1-range-slider{
            position: relative;
            width: 100%;
            height: 4px;
            background-color: #E5E5E5;
            border-radius: 8px;
            margin-top: 6px;
        }
        
        .slider1-track{
            height: 100%;
            position: absolute;
            background-color: #1CCC1D;
            border-radius: 8px;
        }
        
        .double-slider1-container.disabled .slider1-track{
            background-color: #E5E5E5;
        }
        
        .slider1-range-slider input {
            position: absolute;
            width: 100%;
            background: none;
            pointer-events: none;
            left: 0;
            transform: translateY(-50%);
            appearance: none;
            margin: 0;
            top: 50%;
        }
        
        .double-slider1-container.disabled .slider1-range-slider input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #E5E5E5;
            cursor: not-allowed;
            pointer-events: auto;
        }
        
        .slider1-range-slider input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #1CCC1D;
            cursor: pointer;
            pointer-events: auto;
        }
        
        .slider1-range-slider input[type="range"]:focus::-webkit-slider-thumb {
            outline: 6px solid rgba(28, 204, 29, 0.3);
        }
        
        .slider1-range-slider input[type="range"]::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #1CCC1D;
            -moz-appearance: none;
            cursor: pointer;
        }
        
        .tooltip{
            color: black;
            font-family: Mark Pro, var(--default-font-family);
            font-size: 16px;
            font-weight: 400;
            position: absolute;
        }
        
        .double-slider1-container.disabled .tooltip{
            color: #E5E5E5;
        }
        
        .min-tooltip{
            transform: translateX(-50%) translateY(-100%);
            z-index: 5;
        }
        
        .max-tooltip{
            transform: translateX(50%) translateY(-100%);
        }
        
        .slider1-show-values{
            position: relative;
            width: 100%;
        }
        
        `
      }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Slider 1</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={toggleActive}> Desactivar</button>
      
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SingleSlider1 active={isActive} />
      
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <DoubleSlider1 active={isActive} />
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

export default SliderUnoComponent;

