import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import Textinput from "../../components/reactcomponents/TextInput/Text-input";
import { ThemeContext } from '../../App'; 

export const TextInputComponent = () => {
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
      <div :class="['text-input', size.toLowerCase(), { disabled: isDisabled }]">
        <label class="label">{{ label }}</label>
        <input
          type="text"
          v-model="inputValue"
          :placeholder="placeholder || ''"
          :maxlength="maxLength"
          :disabled="isDisabled"
          :class="{ success: isSuccess, error: isError }"
          @blur="validateInput"
          @focus="handleFocus"
          @mouseleave="handleMouseLeave"
        />
        <div v-if="isError" class="error-message">{{ errorMessage }}</div>
        <div v-if="isSuccess" class="success-message">{{ successMessage }}</div>
      </div>
    </template>
    
    <script>
    export default {
      name: 'CustomTextInput',
      props: {
        label: {
          type: String,
          required: true
        },
        placeholder: String,
        size: {
          type: String,
          default: 'M',
          validator: (value) => ['s', 'm', 'l'].includes(value.toLowerCase()) 
        },
        errorMessage: {
          type: String,
          default: ''
        },
        successMessage: {
          type: String,
          default: ''
        },
        maxLength: {
          type: Number,
          default: Infinity
        },
        disabled: {
          type: Boolean,
          default: false
        },
        inputPattern: {
          type: String,
          default: '' // Se espera que el patrón se pase al componente, si es necesario
        }
      },
      data() {
        return {
          inputValue: '',
          isFocused: false,
          localErrorMessage: '',
          localSuccessMessage: ''
        };
      },
      computed: {
        isDisabled() {
          return this.disabled;
        },
        isError() {
          return !!this.localErrorMessage;
        },
        isSuccess() {
          return !!this.localSuccessMessage;
        }
      },
      methods: {
        handleFocus() {
          this.isFocused = true;
        },
        handleMouseLeave() {
          this.isFocused = false;
        },
        validateInput() {
          if (this.inputPattern && this.inputValue.trim() !== '') {
            const regex = new RegExp(this.inputPattern);
            if (!regex.test(this.inputValue)) {
              this.localErrorMessage = this.errorMessage || 'Entrada inválida.';
              this.localSuccessMessage = '';
            } else {
              this.localSuccessMessage = this.successMessage || 'Entrada válida.';
              this.localErrorMessage = '';
            }
          }
        }
      }
    };
    </script>
    
    <style scoped>
    .text-input {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    
    .label {
      font-size: 10px;
      text-align: left;
      color: #000000; 
      margin-left: 10px;
    }
    
    input {
      padding: 8px;
      border: 1px solid #000000;
      border-radius: 20px;
      transition: border-color 0.3s;
      outline: none;
    }
    
    input:focus,
    input.success:focus
    input.error:focus {
      border-color: #16A317;
    }
    
    input:hover,
    input.success:hover,
    input.error:hover {
      border-color: #0B520C;
    }
    
    input.error {
      border-color: #DB2929;
    }
    
    .s input {
      height: 20px;
    }
    
    .m input {
      height: 38px;
    }
    
    .l input {
      height: 46px;
    }
    
    input.success{
      border-color: #1CCC1D; /* Cambia el color del borde en caso de éxito */
    }
    
    input.error {
      border-color: #DB2929; /* Cambia el color del borde en caso de error */
    }
    .disabled input {
      background-color: #f8f9fa;
      color: #6c757d;
    }
    
    .success-message {
      font-size: 10px;
      text-align: left;
      color: #1CCC1D; 
      margin-left: 10px;
    }
    
    .error-message {
      font-size: 10px;
      text-align: left;
      color: #DB2929; 
      margin-left: 10px;
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
      import { useState } from 'react';
      
      export default function CustomTextInput({
        label,
        placeholder,
        size = 'M',
        errorMessage = '',
        successMessage = '',
        maxLength = Infinity,
        disabled = false,
        inputPattern = ''
      }) {
        const [inputValue, setInputValue] = useState('');
        const [isFocused, setIsFocused] = useState(false);
        const [localErrorMessage, setLocalErrorMessage] = useState('');
        const [localSuccessMessage, setLocalSuccessMessage] = useState('');
      
        const isDisabled = disabled;
      
        const isError = !!localErrorMessage;
        const isSuccess = !!localSuccessMessage;
      
        const handleFocus = () => {
          setIsFocused(true);
        };
      
        const handleBlur = () => {
          setIsFocused(false);
          validateInput();
        };
      
        const validateInput = () => {
          if (inputPattern && inputValue.trim() !== '') {
            const regex = new RegExp(inputPattern);
            if (!regex.test(inputValue)) {
              setLocalErrorMessage(errorMessage || 'Entrada inválida.');
              setLocalSuccessMessage('');
            } else {
              setLocalSuccessMessage(successMessage || 'Entrada válida.');
              setLocalErrorMessage('');
            }
          }
        };
      
        const getInputHeight = () => {
          switch (size.toUpperCase()) {
            case 'S':
              return '20px';
            case 'M':
              return '38px';
            case 'L':
              return '46px';
            default:
              return '38px';
          }
        };
      
        return (
          <div className={\`text-input \${size.toLowerCase()} \${isDisabled ? 'disabled' : ''}\`}>
            <label className="label">{label}</label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={placeholder || ''}
              maxLength={maxLength}
              disabled={isDisabled}
              className={\`input \${isSuccess ? 'success' : isError ? 'error' : ''}\`}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ height: getInputHeight() }}
            />
            {isError && <div className="error-message">{localErrorMessage}</div>}
            {isSuccess && <div className="success-message">{localSuccessMessage}</div>}
            <style jsx>{\`
              .text-input {
                display: flex;
                flex-direction: column;
                margin-bottom: 16px;
              }
      
              .label {
                font-size: 10px;
                text-align: left;
                color: #000000;
                margin-left: 10px;
              }
      
              .input {
                padding: 8px;
                border: 1px solid #000000;
                border-radius: 20px;
                transition: border-color 0.3s;
                outline: none;
              }
      
              .input:focus,
              .input.success:focus,
              .input.error:focus {
                border-color: #16A317;
              }
      
              .input:hover,
              .input.success:hover,
              .input.error:hover {
                border-color: #0B520C;
              }
      
              .error {
                border-color: #DB2929;
              }
      
              .success {
                border-color: #1CCC1D;
              }
      
              .disabled input {
                background-color: #f8f9fa;
                color: #6c757d;
              }
      
              .success-message {
                font-size: 10px;
                text-align: left;
                color: #1CCC1D;
                margin-left: 10px;
              }
      
              .error-message {
                font-size: 10px;
                text-align: left;
                color: #DB2929;
                margin-left: 10px;
              }
            \`}</style>
          </div>
        );
      }
      
      `
    },
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `import { Component, Input } from '@angular/core';

      @Component({
        selector: 'app-custom-text-input',
        templateUrl: './text-input.component.html',
        styleUrls: ['./text-input.component.css']
      })
      export class CustomTextInputComponent {
        @Input() label: string = '';
        @Input() placeholder: string = '';
        @Input() size: string = 'M';
        @Input() errorMessage: string = '';
        @Input() successMessage: string = '';
        @Input() maxLength: number = Infinity;
        @Input() disabled: boolean = false;
        @Input() inputPattern: string = '';
      
        inputValue: string = '';
        isFocused: boolean = false;
        localErrorMessage: string = '';
        localSuccessMessage: string = '';
      
        get isDisabled(): boolean {
          return this.disabled;
        }
      
        get isError(): boolean {
          return !!this.localErrorMessage;
        }
      
        get isSuccess(): boolean {
          return !!this.localSuccessMessage;
        }
      
        handleFocus() {
          this.isFocused = true;
        }
      
        handleMouseLeave() {
          this.isFocused = false;
        }
      
        validateInput() {
          if (this.inputPattern && this.inputValue.trim() !== '') {
            const regex = new RegExp(this.inputPattern);
            if (!regex.test(this.inputValue)) {
              this.localErrorMessage = this.errorMessage || 'Entrada inválida.';
              this.localSuccessMessage = '';
            } else {
              this.localSuccessMessage = this.successMessage || 'Entrada válida.';
              this.localErrorMessage = '';
            }
          }
        }
      }
      
      `
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `
      <div [class]="'text-input ' + size.toLowerCase()" [class.disabled]="isDisabled">
          <label class="label">{{ label }}</label>
          <input
            type="text"
            [(ngModel)]="inputValue"
            [placeholder]="placeholder || ''"
            [maxlength]="maxLength"
            [disabled]="isDisabled"
            [class.success]="isSuccess"
            [class.error]="isError"
            (blur)="validateInput()"
            (focus)="handleFocus()"
            (mouseleave)="handleMouseLeave()">
          <div *ngIf="isError" class="error-message">{{ errorMessage }}</div>
          <div *ngIf="isSuccess" class="success-message">{{ successMessage }}</div>
        </div>
        
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `.text-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
      }
      
      .label {
        font-size: 10px;
        text-align: left;
        color: #000000; 
        margin-left: 10px;
      }
      
      input {
        padding: 8px;
        border: 1px solid #000000;
        border-radius: 20px;
        transition: border-color 0.3s;
        outline: none;
      }
      
      input:focus,
      input.success:focus,
      input.error:focus {
        border-color: #16A317;
      }
      
      input:hover,
      input.success:hover,
      input.error:hover {
        border-color: #0B520C;
      }
      
      input.error {
        border-color: #DB2929;
      }
      
      .s input {
        height: 20px;
      }
      
      .m input {
        height: 38px;
      }
      
      .l input {
        height: 46px;
      }
      
      input.success {
        border-color: #1CCC1D;
      }
      
      input.error {
        border-color: #DB2929;
      }
      
      .disabled input {
        background-color: #f8f9fa;
        color: #6c757d;
      }
      
      .success-message {
        font-size: 10px;
        text-align: left;
        color: #1CCC1D; 
        margin-left: 10px;
      }
      
      .error-message {
        font-size: 10px;
        text-align: left;
        color: #DB2929; 
        margin-left: 10px;
      }
      
      `
    }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Progress Bar</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Textinput
        label="Nombre"
        placeholder="Introduce tu nombre"
        size="s"
        errorMessage="Nombre inválido"
        successMessage="Nombre válido"
        maxLength={5}
        disabled={false}
        inputPattern="[A-Za-z ]+"
      />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Textinput
        label="Nombre"
        placeholder="Introduce tu nombre"
        size="M"
        errorMessage="Nombre inválido"
        successMessage="Nombre válido"
        maxLength={5}
        disabled={false}
        inputPattern="[A-Za-z ]+"
      />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Textinput
        label="Nombre"
        placeholder="Introduce tu nombre"
        size="L"
        errorMessage="Nombre inválido"
        successMessage="Nombre válido"
        maxLength={5}
        disabled={false}
        inputPattern="[A-Za-z ]+"
      />
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

export default TextInputComponent;

