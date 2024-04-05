import { ThemeContext } from '../../App'; 
import React, { useState, useContext } from 'react';
 import styled from "styled-components";
 import { TabPanel } from '@mui/lab';
 import { TabContext } from '@mui/lab';
 import CodeViewer from '../../components/CodeViewer';
 import { Divider, Tab, Tabs } from '@mui/material';
 import Toggle2 from '../../components/reactcomponents/Toggle/Toggle2'; 

 
 
 export const ToggleComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
  const dividerColor = theme === "light" ? "#000000" : "#ffffff";
   const [tabValue, setTabValue] = useState(0);
   const handleTabChange = (event, newValue) => {
     setTabValue(newValue);
   };
 
   const vuecodes =  [
    {
      language: 'javascript',
      label: 'Vue JS',
      code: `<template>
      <div class="main">
        <div class="div-check">
          <label :class="disabled ? 'disabled-toggle' : 'toggle'">
            <input type="checkbox" :class="disabled ? 'disabled-checkbox' : ''" />
            <span :class="disabled ? 'disabled-slider' : 'slider'"></span>
          </label>
        </div>
        <div class="div-label">
          <label :class="'label ' + (disabled ? 'disabled-label' : '')">
            {{ label }}
          </label>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      props: {
        label: String,
        disabled: Boolean
      }
    }
    </script>
    
    <style scoped>
    .main{
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      width: 100%;
      height: 100%;
    }
    .div-label{
      margin-left: 15px;
      margin-bottom: 8.5px;
    }
    
    .label {
      flex-shrink: 0;
      flex-basis: auto;
      position: relative;
      height: 24px;
      color: #000000;
      font-family: Mark Pro, var(--default-font-family);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      white-space: nowrap;
      z-index: 3;
    }
    
    .toggle {
      position: relative;
      display: inline-block;
      height: 32px;
      width: 56px;
    }
    
    .toggle input {
      display: none;
    }
    
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ffffff;
      border: #1CCC1D 1px solid;
      transition: .4s;
      border-radius: 16px;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 4px;
      bottom: 3px;
      background-color: #1CCC1D;
      transition: .4s;
      border-radius: 50%;
    }
    .slider:hover:before {
      background-color: #0B520C; /* Cambiar el color del slider en estado desactivado cuando se hace hover */
    }
    .slider:hover{
      background-color: #ffffff; /* Cambiar el color del slider en estado desactivado cuando se hace hover */
      border: #0B520C 1px solid;
    }
    
    input:checked + .slider {
      background-color: #1CCC1D;
    }
    
    input:focus + .slider {
      box-shadow: 0 0 1px #1CCC1D;
    }
    
    input:checked + .slider:before {
      transform: translateX(24px);
    }
    
    input:checked + .slider:hover {
      background-color: #0B520C;
    }
    .toggle input:checked + .slider:before {
      background-color: #ffffff; /* Cambia el color del slider cuando está marcado */
      transform: translateX(24px);
    }
    
    /*disableds*/
    /* Estilo para el toggle deshabilitado */
    .toggle input:disabled + .slider {
      background-color: #E5E5E5; /* Cambiar color de fondo cuando está deshabilitado */
      border: #E5E5E5 1px solid; /* Cambiar color del borde cuando está deshabilitado *//* Cambiar cursor cuando está deshabilitado */
    }
    .toggle-disabled input + .slider {
      background-color: #E5E5E5; /* Cambiar color de fondo cuando está deshabilitado */
      border: #E5E5E5 1px solid; /* Cambiar color del borde cuando está deshabilitado *//* Cambiar cursor cuando está deshabilitado */
    }
    
    .toggle input:disabled + .slider:before {
      background-color: #999999; /* Cambiar color del slider cuando está deshabilitado */
    }
    
    .toggle input:checked:disabled + .slider:before {
      background-color: #E5E5E5; /* Cambiar color del slider cuando está marcado y deshabilitado */
    }
    
    /*disabled con clases*/
    .disabled-label {
      color: #999999; /* Cambiar color de la etiqueta cuando está deshabilitado */
    }
    
    .disabled-toggle {
      position: relative;
      display: inline-block;
      height: 32px;
      width: 56px;
    }
    
    .disabled-toggle input {
      display: none;
    }
    
    .disabled-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #E5E5E5;
      border: #999999 1px solid;
      transition: .4s;
      border-radius: 16px;
    }
    
    .disabled-slider:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 4px;
      bottom: 3px;
      background-color: #999999;
      transition: .4s;
      border-radius: 50%;
    }
    
    input.disabled-checkbox:checked + .disabled-slider {
      background-color: #999999;
    }
    
    input.disabled-checkbox:focus + .disabled-slider {
      box-shadow: 0 0 1px #000000;
    }
    
    input.disabled-checkbox:checked + .disabled-slider:before {
      transform: translateX(24px);
    }
    
    input.disabled-checkbox:checked + .slider:hover {
      background-color: #0B520C;
    }
    .disabled-toggle input.disabled-checkbox:checked + .disabled-slider:before {
      background-color: #E5E5E5; /* Cambia el color del slider cuando está marcado */
      transform: translateX(24px);
    }
    /*fin de los css con disabled*/
    </style>
    `
    },
  ];
   const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `"use client";
      import React, { useState } from "react";
      import "./Toggle2.css";
      
      function Toggle2({ label, disabled }) {
        return (
          <div className="main">
            <div className="div-check">
              <label className={\` \${disabled ? \`disabled-toggle\` : \`toggle\`}\`}>
                <input
                  type="checkbox"
                  className={\`\${disabled ? \`disabled-checkbox\` : \`\`}\`}
                />
                <span
                  className={\` \${disabled ? \`disabled-slider\` : \`slider\`}\`}
                ></span>
              </label>
            </div>
            <div className="div-label">
              <label className={\`label \${disabled ? \`disabled-label\` : \`\`}\`}>
                {label}
              </label>
            </div>
          </div>
        );
      }
      
      export default Toggle2;
      `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `.main{
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 100%;
        height: 100%;
      }
      .div-label{
        margin-left: 15px;
        margin-bottom: 8.5px;
      }
      
      .label {
        flex-shrink: 0;
        flex-basis: auto;
        position: relative;
        height: 24px;
        color: #000000;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        white-space: nowrap;
        z-index: 3;
      }
      
      .toggle {
        position: relative;
        display: inline-block;
        height: 32px;
        width: 56px;
      }
      
      .toggle input {
        display: none;
      }
      
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffff;
        border: #1CCC1D 1px solid;
        transition: .4s;
        border-radius: 16px;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: 24px;
        width: 24px;
        left: 4px;
        bottom: 3px;
        background-color: #1CCC1D;
        transition: .4s;
        border-radius: 50%;
      }
      .slider:hover:before {
        background-color: #0B520C; /* Cambiar el color del slider en estado desactivado cuando se hace hover */
      }
      .slider:hover{
        background-color: #ffffff; /* Cambiar el color del slider en estado desactivado cuando se hace hover */
        border: #0B520C 1px solid;
      }
      
      input:checked + .slider {
        background-color: #1CCC1D;
      }
      
      input:focus + .slider {
        box-shadow: 0 0 1px #1CCC1D;
      }
      
      input:checked + .slider:before {
        transform: translateX(24px);
      }
      
      input:checked + .slider:hover {
        background-color: #0B520C;
      }
      .toggle input:checked + .slider:before {
        background-color: #ffffff; /* Cambia el color del slider cuando está marcado */
        transform: translateX(24px);
      }
      
      /*disableds*/
      /* Estilo para el toggle deshabilitado */
      .toggle input:disabled + .slider {
        background-color: #E5E5E5; /* Cambiar color de fondo cuando está deshabilitado */
        border: #E5E5E5 1px solid; /* Cambiar color del borde cuando está deshabilitado *//* Cambiar cursor cuando está deshabilitado */
      }
      .toggle-disabled input + .slider {
        background-color: #E5E5E5; /* Cambiar color de fondo cuando está deshabilitado */
        border: #E5E5E5 1px solid; /* Cambiar color del borde cuando está deshabilitado *//* Cambiar cursor cuando está deshabilitado */
      }
      
      .toggle input:disabled + .slider:before {
        background-color: #999999; /* Cambiar color del slider cuando está deshabilitado */
      }
      
      .toggle input:checked:disabled + .slider:before {
        background-color: #E5E5E5; /* Cambiar color del slider cuando está marcado y deshabilitado */
      }
      
      /*disabled con clases*/
      .disabled-label {
        color: #999999; /* Cambiar color de la etiqueta cuando está deshabilitado */
      }
      
      .disabled-toggle {
        position: relative;
        display: inline-block;
        height: 32px;
        width: 56px;
      }
      
      .disabled-toggle input {
        display: none;
      }
      
      .disabled-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #E5E5E5;
        border: #E5E5E5 1px solid;
        transition: .4s;
        border-radius: 16px;
      }
      
      .disabled-slider:before {
        position: absolute;
        content: "";
        height: 24px;
        width: 24px;
        left: 4px;
        bottom: 3px;
        background-color: #999999;
        transition: .4s;
        border-radius: 50%;
      }
      
      input.disabled-checkbox:checked + .disabled-slider {
        background-color: #999999;
      }
      
      input.disabled-checkbox:focus + .disabled-slider {
        box-shadow: 0 0 1px #000000;
      }
      
      input.disabled-checkbox:checked + .disabled-slider:before {
        transform: translateX(24px);
      }
      
      input.disabled-checkbox:checked + .slider:hover {
        background-color: #0B520C;
      }
      .disabled-toggle input.disabled-checkbox:checked + .disabled-slider:before {
        background-color: #E5E5E5; /* Cambia el color del slider cuando está marcado */
        transform: translateX(24px);
      }
      /*fin de los css con disabled*/`
    }
  ];
 
   const angularCodes = [
     {
       language: 'typescript',
       label: 'Angular TS',
       code: `import { Component, Input  } from '@angular/core';

       @Component({
         selector: 'app-toggle',
         templateUrl: './toggle.component.html',
         styleUrl: './toggle.component.css'
       })
       export class ToggleComponent {
         @Input() label: string = '';
         @Input() disabled: boolean = false;
       }
       `
     },
     {
      language: 'spec.typescript',
      label: 'Angular SPEC.TS',
      code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

      import { ToggleComponent } from './toggle.component';
      
      describe('ToggleComponent', () => {
        let component: ToggleComponent;
        let fixture: ComponentFixture<ToggleComponent>;
      
        beforeEach(async () => {
          await TestBed.configureTestingModule({
            declarations: [ToggleComponent]
          })
          .compileComponents();
          
          fixture = TestBed.createComponent(ToggleComponent);
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
       language: 'html',
       label: 'Angular Html',
       code: `<div class="main">
       <div class="div-check">
         <label [ngClass]="disabled ? 'disabled-toggle' : 'toggle'">
           <input type="checkbox" [ngClass]="disabled ? 'disabled-checkbox' : ''" />
           <span [ngClass]="disabled ? 'disabled-slider' : 'slider'"></span>
         </label>
       </div>
       <div class="div-label">
         <label class="label" [ngClass]="disabled ? 'disabled-label' : ''">{{ label }}</label>
       </div>
     </div>
     `
     },
     {
       language: 'css',
       label: 'Angular CSS',
       code: `.main {
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 100%;
        height: 100%;
      }
      
      .div-label {
        margin-left: 15px;
        margin-bottom: 5px;
      }
      
      .label {
        flex-shrink: 0;
        flex-basis: auto;
        position: relative;
        height: 24px;
        color: #000000;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        white-space: nowrap;
        z-index: 3;
      }
      
      .toggle {
        position: relative;
        display: inline-block;
        height: 32px;
        width: 56px;
      }
      
      .toggle input {
        display: none;
      }
      
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffff;
        border: #1CCC1D 1px solid;
        transition: .4s;
        border-radius: 16px;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: 24px;
        width: 24px;
        left: 4px;
        bottom: 3px;
        background-color: #1CCC1D;
        transition: .4s;
        border-radius: 50%;
      }
      
      .slider:hover:before {
        background-color: #0B520C;
      }
      
      .slider:hover {
        background-color: #ffffff;
        border: #0B520C 1px solid;
      }
      
      input:checked + .slider {
        background-color: #1CCC1D;
      }
      
      input:focus + .slider {
        box-shadow: 0 0 1px #1CCC1D;
      }
      
      input:checked + .slider:before {
        transform: translateX(24px);
      }
      
      input:checked + .slider:hover {
        background-color: #0B520C;
      }
      
      .toggle input:checked + .slider:before {
        background-color: #ffffff;
        transform: translateX(24px);
      }
      
      .toggle input:disabled + .slider {
        background-color: #E5E5E5;
        border: #E5E5E5 1px solid;
      }
      
      .toggle-disabled input + .slider {
        background-color: #E5E5E5;
        border: #E5E5E5 1px solid;
      }
      
      .toggle input:disabled + .slider:before {
        background-color: #999999;
      }
      
      .toggle input:checked:disabled + .slider:before {
        background-color: #E5E5E5;
      }
      
      .disabled-label {
        color: #999999;
      }
      
      .disabled-toggle {
        position: relative;
        display: inline-block;
        height: 32px;
        width: 56px;
      }
      
      .disabled-toggle input {
        display: none;
      }
      
      .disabled-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #E5E5E5;
        border: #E5E5E5 1px solid;
        transition: .4s;
        border-radius: 16px;
      }
      
      .disabled-slider:before {
        position: absolute;
        content: "";
        height: 24px;
        width: 24px;
        left: 4px;
        bottom: 3px;
        background-color: #999999;
        transition: .4s;
        border-radius: 50%;
      }
      
      input.disabled-checkbox:checked + .disabled-slider {
        background-color: #999999;
      }
      
      input.disabled-checkbox:focus + .disabled-slider {
        box-shadow: 0 0 1px #000000;
      }
      
      input.disabled-checkbox:checked + .disabled-slider:before {
        transform: translateX(24px);
      }
      
      input.disabled-checkbox:checked + .slider:hover {
        background-color: #0B520C;
      }
      
      .disabled-toggle input.disabled-checkbox:checked + .disabled-slider:before {
        background-color: #E5E5E5;
      }
      
       `
     }
   ];
   return (
     <Container>
        <h1>Toggle</h1>
        <PreviewBox>
        <Toggle2 disabled={false} />
        <Toggle2 label="Opción 2" disabled={true} />
        </PreviewBox>
       <Tabs value={tabValue} onChange={handleTabChange}>
         <Tab label="Vue" />
         <Tab label="Angular" />
         <Tab label="Next" />
       </Tabs>
       <Divider sx={{ my: 2 }} />
       <TabContext value={tabValue}>
         <TabPanel value={0}>
           <CodeViewer files ={vuecodes} />
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
 
 export default ToggleComponent;
 