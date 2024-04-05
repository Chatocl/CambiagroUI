import { ThemeContext } from '../../App'; 
import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel, TabContext } from '@mui/lab';
import { Divider, Tab, Tabs } from '@mui/material';
import Checkbox from '../../components/reactcomponents/Checkbox/Checkbox';
import CodeViewer from '../../components/CodeViewer';



export const CheckboxComponent = () => {
  
  
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes = [
    {
      language: 'javascript',
      label: 'Vue JS',
      code: `<template>
      <div class="main-container">
        <input type="checkbox" id="checkbox" :disabled="isDisabled" :class="{'disabled-checkbox': isDisabled}" />
        <label for="checkbox" :class="{'disabled-checkbox': isDisabled}"></label>
        <span class="label-goes-here">{{ label }}</span>
      </div>
    </template>
    
    <script>
    export default {
      name: 'Checkbox',
      props: {
        label: String,
        isDisabled: Boolean
      }
    }
    </script>
    
    <style scoped src="./Checkbox.css">
    </style>`
    },
    {
      language: 'css',
      label: 'Vue CSS',
      code: `:root {
        --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
            "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
            "Source Han Sans CN", sans-serif;
      }
      
      .main-container {
        display: flex;
        justify-content: center;
      }
      
      .label-goes-here {
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
        z-index: 4;
      }
      
      
      /* Oculta el checkbox original */
      input[type="checkbox"] {
        display: none;
      }
      
      /* Crea un nuevo checkbox */
      input[type="checkbox"]+label {
        position: relative;
        padding-left: 35px;
        cursor: pointer;
      }
      
      input[type="checkbox"]+label:before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: #ffffff;
        border: 1px solid #1ccc1d;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
      }
      
      /*Hover sin checkear*/
      input[type="checkbox"]:hover+label:before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: #ffffff;
        border: 1px solid #0B520C;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
      }
      
      /* Color cuando el checkbox está seleccionado */
      input[type="checkbox"]:checked:hover+label:before {
        background: #0B520C;
        background-image: url("../Checkbox/img/white_check.svg");
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
        /* Color de fondo cuando está seleccionado */
      }
      
      /* Color cuando el checkbox está seleccionado */
      input[type="checkbox"]:checked+label:before {
        background: #1ccc1d;
        background-image: url("../Checkbox/img/white_check.svg");
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
        /* Color de fondo cuando está seleccionado */
      }
      
      
      /* Estilo para la clase disabled-checkbox */
      .disabled-checkbox + label:before {
        border-color: #E5E5E5; /* Cambiar el borde a gris */
        background: #FFFFFF; /* Cambiar el fondo a gris */
        cursor: not-allowed; /* Cambiar el cursor a no permitido */
      }
      
      .disabled-checkbox + label {
        cursor: not-allowed; /* Cambiar el cursor del label a no permitido */
      }
      
      input[type="checkbox"].disabled-checkbox:checked + label:before {
        background: #E5E5E5; /* Cambiar el color de fondo cuando está seleccionado y deshabilitado */
        border-color: #E5E5E5; /* Cambiar el color del borde cuando está seleccionado y deshabilitado */
        cursor: not-allowed; /* Cambiar el cursor cuando está seleccionado y deshabilitado */
        background-image: url("../Checkbox/img/gray_check.svg");
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
      }
      input[type="checkbox"].disabled-checkbox+label:before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: #ffffff;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
      }`
    }
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `import React, { useState } from 'react'
      import './Checkbox.css';
      export default function Checkbox({ label, isDisabled }) {
        return (
          <div className="main-container">
              <input type="checkbox" id="checkbox" disabled = {isDisabled} className={isDisabled ? \`  disabled-checkbox \` : \`\`}  />
              <label for="checkbox" className={isDisabled ? \` disabled-checkbox \` : \`\`}></label>
              <span className="label-goes-here">{label}</span>
          </div>
        );
      }`
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
      
      .main-container {
        display: flex;
        justify-content: center;
      }
      
      .label-goes-here {
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
        z-index: 4;
      }
      
      
      /* Oculta el checkbox original */
      input[type="checkbox"] {
        display: none;
      }
      
      /* Crea un nuevo checkbox */
      input[type="checkbox"]+label {
        position: relative;
        padding-left: 35px;
        cursor: pointer;
      }
      
      input[type="checkbox"]+label:before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: #ffffff;
        border: 1px solid #1ccc1d;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
      }
      
      /*Hover sin checkear*/
      input[type="checkbox"]:hover+label:before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: #ffffff;
        border: 1px solid #0B520C;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
      }
      
      /* Color cuando el checkbox está seleccionado */
      input[type="checkbox"]:checked:hover+label:before {
        background: #0B520C;
        background-image: url("../Checkbox/img/white_check.svg");
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
        /* Color de fondo cuando está seleccionado */
      }
      
      /* Color cuando el checkbox está seleccionado */
      input[type="checkbox"]:checked+label:before {
        background: #1ccc1d;
        background-image: url("../Checkbox/img/white_check.svg");
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
        /* Color de fondo cuando está seleccionado */
      }
      
      
      /* Estilo para la clase disabled-checkbox */
      .disabled-checkbox + label:before {
        border-color: #E5E5E5; /* Cambiar el borde a gris */
        background: #FFFFFF; /* Cambiar el fondo a gris */
        cursor: not-allowed; /* Cambiar el cursor a no permitido */
      }
      
      .disabled-checkbox + label {
        cursor: not-allowed; /* Cambiar el cursor del label a no permitido */
      }
      
      input[type="checkbox"].disabled-checkbox:checked + label:before {
        background: #E5E5E5; /* Cambiar el color de fondo cuando está seleccionado y deshabilitado */
        border-color: #E5E5E5; /* Cambiar el color del borde cuando está seleccionado y deshabilitado */
        cursor: not-allowed; /* Cambiar el cursor cuando está seleccionado y deshabilitado */
        background-image: url("../Checkbox/img/gray_check.svg");
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
      }
      input[type="checkbox"].disabled-checkbox+label:before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: #ffffff;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
      }`
    }
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `import { Component,Input } from '@angular/core';

      @Component({
        selector: 'app-checkbox',
        standalone: true,
        templateUrl: './checkbox.component.html',
        styleUrl: './checkbox.component.css'
      })
      export class CheckboxComponent {
        @Input() label = "";
        @Input() isDisabled = false;
      }`
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `<div class="main-container">
      <input type="checkbox" id="checkbox" [disabled]="isDisabled" [class]="isDisabled ? 'disabled-checkbox' : ''"  />
      <label for="checkbox" [class]="isDisabled ? 'disabled-checkbox' : ''"></label>
      <span class="label-goes-here">{{ label }}</span>
  </div>`
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
        display: flex;
        justify-content: center;
      }
      
      .label-goes-here {
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
        z-index: 4;
      }
      
      
      /* Oculta el checkbox original */
      input[type="checkbox"] {
        display: none;
      }
      
      /* Crea un nuevo checkbox */
      input[type="checkbox"]+label {
        position: relative;
        padding-left: 35px;
        cursor: pointer;
      }
      
      input[type="checkbox"]+label:before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: #ffffff;
        border: 1px solid #1ccc1d;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
      }
      
      /*Hover sin checkear*/
      input[type="checkbox"]:hover+label:before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: #ffffff;
        border: 1px solid #0B520C;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
      }
      
      /* Color cuando el checkbox está seleccionado */
      input[type="checkbox"]:checked:hover+label:before {
        background: #0B520C;
        background-image: url("../Checkbox/img/white_check.svg");
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
        /* Color de fondo cuando está seleccionado */
      }
      
      /* Color cuando el checkbox está seleccionado */
      input[type="checkbox"]:checked+label:before {
        background: #1ccc1d;
        background-image: url("../Checkbox/img/white_check.svg");
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
        /* Color de fondo cuando está seleccionado */
      }
      
      
      /* Estilo para la clase disabled-checkbox */
      .disabled-checkbox + label:before {
        border-color: #E5E5E5; /* Cambiar el borde a gris */
        background: #FFFFFF; /* Cambiar el fondo a gris */
        cursor: not-allowed; /* Cambiar el cursor a no permitido */
      }
      
      .disabled-checkbox + label {
        cursor: not-allowed; /* Cambiar el cursor del label a no permitido */
      }
      
      input[type="checkbox"].disabled-checkbox:checked + label:before {
        background: #E5E5E5; /* Cambiar el color de fondo cuando está seleccionado y deshabilitado */
        border-color: #E5E5E5; /* Cambiar el color del borde cuando está seleccionado y deshabilitado */
        cursor: not-allowed; /* Cambiar el cursor cuando está seleccionado y deshabilitado */
        background-image: url("../Checkbox/img/gray_check.svg");
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
      }
      input[type="checkbox"].disabled-checkbox+label:before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: #ffffff;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
      }`
    }
  ];
  const { setTheme, theme } = useContext(ThemeContext); 
  const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
  const dividerColor = theme === "light" ? "#000000" : "#ffffff";

  return (
    <Container>
      <h1>Checkbox</h1>
      <PreviewBox>
      <Checkbox label="Aceptar términos y condiciones" isDisabled={false} />
      <Checkbox label="Esta opción está deshabilitada" isDisabled={true} />
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
   height: auto;
   margin: 50px;
`;

export default CheckboxComponent;
