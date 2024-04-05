import { ThemeContext } from '../../App'; 
import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import TabsProyect from '../../components/reactcomponents/Tabs/tabhicon';


export const TabsComponent = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes =[
    {
      language: 'Horinzontalicon',
      label: 'Vue JS Horinzontal Icon',
      code: `<template>
      <div class="tabs-container">
        <div v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)">
          <div :class="{ 'container-disabled': tab.disabled, 'container-select': selectedTab === index && !tab.disabled, 'container-default': selectedTab !== index && !tab.disabled }">
            <div class="tab">
              <div class="icon-wrapper">
                <div class="icon"></div>
              </div>
              <div :class="{ 'tab-label-disabled': tab.disabled, 'tab-label': selectedTab === index && !tab.disabled, 'tab-label': selectedTab !== index && !tab.disabled }">{{ tab.label }}</div>
            </div>
            <div class="separator" v-if="selectedTab === index && !tab.disabled"></div>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          selectedTab: null,
          tabs: [
            { label: 'Tab 1', disabled: false },
            { label: 'Tab 2', disabled: false },
            { label: 'Tab 3', disabled: true }, // Tab deshabilitado
            { label: 'Tab 4', disabled: false }
          ]
        };
      },
      methods: {
        selectTab(index) {
          // Si el tab está deshabilitado, no hacer nada
          if (this.tabs[index].disabled) {
            return;
          }
          // Si ya está seleccionado, deseleccionarlo
          if (this.selectedTab === index) {
            this.selectedTab = null;
          } else {
            // De lo contrario, seleccionar el tab correspondiente
            this.selectedTab = index;
          }
        }
      }
    };
    </script>
    
    <style scoped src="../tab1.css">
    /* Estilos adicionales para el contenedor de los tabs */
    .tabs-container {
      display: flex;
      gap: 10px; /* Espacio entre los tabs */
      width: 100%; /* Ancho fijo del contenedor de los tabs */
    }
    
    /* Estilos para el tab deshabilitado */
    .container-disabled {
      width: 140px; /* Ancho fijo del tab deshabilitado */
    }
    </style>
    `
    },
    {
      language: 'Horinzontalicon',
      label: 'Vue JS Horinzontal No Icon',
      code: `<template>
      <div class="tabs-container">
        <div v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)">
          <div :class="{ 'container-disabled': tab.disabled, 'container-select': selectedTab === index && !tab.disabled, 'container-default': selectedTab !== index && !tab.disabled }">
            <div class="tab">
              <div :class="{ 'tab-label-disabled': tab.disabled, 'tab-label': selectedTab === index && !tab.disabled, 'tab-label': selectedTab !== index && !tab.disabled }">{{ tab.label }}</div>
            </div>
            <div class="separator" v-if="selectedTab === index && !tab.disabled"></div>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          selectedTab: null,
          tabs: [
            { label: 'Tab 1', disabled: false },
            { label: 'Tab 2', disabled: false },
            { label: 'Tab 3', disabled: true }, // Tab deshabilitado
            { label: 'Tab 4', disabled: false }
          ]
        };
      },
      methods: {
        selectTab(index) {
          // Si el tab está deshabilitado, no hacer nada
          if (this.tabs[index].disabled) {
            return;
          }
          // Si ya está seleccionado, deseleccionarlo
          if (this.selectedTab === index) {
            this.selectedTab = null;
          } else {
            // De lo contrario, seleccionar el tab correspondiente
            this.selectedTab = index;
          }
        }
      }
    };
    </script>
    
    <style scoped src="../tab1.css">
    
    </style>
    `
    },
    {
      language: 'Horinzontalicon',
      label: 'Vue JS Vertical Icon',
      code: `<template>
      <div>
        <div v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)">
          <div :class="{ 'container-disabled': tab.disabled, 'containerv-select': selectedTab === index && !tab.disabled, 'containerv-default': selectedTab !== index && !tab.disabled }">
            <div class="tab">
              <div class="icon-wrapper">
                <div class="icon"></div>
              </div>
              <div :class="{ 'tab-label-disabled': tab.disabled, 'tab-label': selectedTab === index && !tab.disabled, 'tab-label': selectedTab !== index && !tab.disabled }">{{ tab.label }}</div>
            </div>
            <div class="separator" v-if="selectedTab === index && !tab.disabled"></div>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          selectedTab: null,
          tabs: [
            { label: 'Tab 1', disabled: false },
            { label: 'Tab 2', disabled: false },
            { label: 'Tab 3', disabled: true }, // Tab deshabilitado
            { label: 'Tab 4', disabled: false }
          ]
        };
      },
      methods: {
        selectTab(index) {
          // Si el tab está deshabilitado, no hacer nada
          if (this.tabs[index].disabled) {
            return;
          }
          // Si ya está seleccionado, deseleccionarlo
          if (this.selectedTab === index) {
            this.selectedTab = null;
          } else {
            // De lo contrario, seleccionar el tab correspondiente
            this.selectedTab = index;
          }
        }
      }
    };
    </script>
    
    <style scoped src="../tab1.css">
    
    </style>
    `
    },
    {
      language: 'Horinzontalicon',
      label: 'Vue JS Vertical No Icon',
      code: `<template>
      <div>
        <div v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)">
          <div :class="{ 'container-disabled': tab.disabled, 'containerv-select': selectedTab === index && !tab.disabled, 'containerv-default': selectedTab !== index && !tab.disabled }">
            <div class="tab">
              <div :class="{ 'tab-label-disabled': tab.disabled, 'tab-label': selectedTab === index && !tab.disabled, 'tab-label': selectedTab !== index && !tab.disabled }">{{ tab.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          selectedTab: null,
          tabs: [
            { label: 'Tab 1', disabled: false },
            { label: 'Tab 2', disabled: false },
            { label: 'Tab 3', disabled: true }, // Tab deshabilitado
            { label: 'Tab 4', disabled: false }
          ]
        };
      },
      methods: {
        selectTab(index) {
          // Si el tab está deshabilitado, no hacer nada
          if (this.tabs[index].disabled) {
            return;
          }
          // Si ya está seleccionado, deseleccionarlo
          if (this.selectedTab === index) {
            this.selectedTab = null;
          } else {
            // De lo contrario, seleccionar el tab correspondiente
            this.selectedTab = index;
          }
        }
      }
    };
    </script>
    
    <style scoped src="../tab1.css">
    
    </style>
    
    `
    },
    {
      language: 'css',
      label: 'Vue CSS',
      code: `.container-select {
        width: 140px;
        height: 100%;
        background: #F2F2F2;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        display: inline-flex;
      }
      .containerv-select {
        width: fit-content;
        height: 100%;
        background: #F2F2F2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;  
        display: inline-flex;
        flex-direction: column;
        border-right: 2px #282B38 solid;
      }
      
      .container-default {
        width: fit-content;
        height: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        display: inline-flex;
        border-bottom: 3px #282B38 solid;
      }
      .containerv-default {
        width: fit-content;
        height: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        display: inline-flex;
      }
      .container-disabled {
        width: fit-content; 
        height: 20px;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 12px;
        padding-bottom: 12px;
        opacity: 0.32;
        justify-content: center;
        align-items: center;
        gap: 10px;
        display: inline-flex;
      }
      
      
      .container-hover {
        width: fit-content;
        height: 20px;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 12px;
        padding-bottom: 12px;
        background: white;
        justify-content: center;
        align-items: center;
        gap: 8px;
        display: inline-flex;
      }
      .tab {
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 11px;
        padding-bottom: 11px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        display: inline-flex;
      }
      
      .icon-wrapper {
        width: 24px;
        height: 24px;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      
      .icon {
        width: 24px;
        height: 24px;
        position: relative;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="vuesax/linear/setting"><g id="setting"><path id="Vector" d="M3 9.11V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.11C21 7 21 7 19 5.65L13.5 2.47C12.68 1.99 11.33 1.99 10.5 2.47L5 5.65C3 7 3 7 3 9.11Z" stroke="%23323053" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="%23323053" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>');
      }
      
      .tabs-container {
        display: flex;
        gap: 10px; /* Espacio entre los tabs */
        width: 100%; /* Ancho fijo del contenedor de los tabs */
      }
      
      .separator {
      align-self: stretch;
      height: 3px;
      background: #323053;
      }
      
      .tab-label-hover {
        color: #0B520C;
        font-size: 16px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 500;
        line-height: 24px;
        word-wrap: break-word;
      }
      .tab-label{
        color: #323053;
        font-size: 16px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 500;
        line-height: 24px;
        word-wrap: break-word;
      }
      
      `
    }
  ];

  const nextcodes=[
    {
      language: 'Horinzontalicon',
      label: 'Next JS Horinzontal Icon',
      code: `import React from 'react';
      import styles from './tab1.module.css'; 
      
      const TabDefault = ({ label, onClick, isSelected, children }) => {
          const [hovered, setHovered] = React.useState(false);
      
          return (
              <div className={isSelected ? styles.containerSelect : (hovered ? styles.containerHover : styles.containerDefault)}
                   onClick={() => onClick(label)}
                   onMouseEnter={() => setHovered(true)}
                   onMouseLeave={() => setHovered(false)}>
                  <div className={styles.tab}>
                      <div className={styles.iconWrapper}>
                          <div className={styles.icon}></div>
                      </div>
                      <div className={isSelected ? styles.tabLabelSelected : (hovered ? styles.tabLabelHover : styles.tabLabelDefault)}>
                          {label}
                      </div>
                  </div>
                  {isSelected && <div className={styles.separator}></div>}
                  {isSelected && <div className={styles.tabContent}>{children}</div>}
              </div>
          );
      };
      
      const TabDisabled = () => {
          return (
              <div className={styles.containerDisabled}>
                  <div className={styles.tab}>
                      <div className={styles.iconWrapper}>
                          <div className={styles.icon}></div>
                      </div>
                      <div className={styles.tabLabelDisabled}>Tab 4</div>
                  </div>
              </div>
          );
      };
      
      const TabPrototype = () => {
          const [selectedTab, setSelectedTab] = React.useState(null);
      
          const handleTabClick = (label) => {
              setSelectedTab(label);
          };
      
          return (
              <div className={styles.tabsContainer}>
                  <TabDefault label="Tab 1" onClick={handleTabClick} isSelected={selectedTab === "Tab 1"}>
                  </TabDefault>
                  <TabDefault label="Tab 2" onClick={handleTabClick} isSelected={selectedTab === "Tab 2"}>
                  </TabDefault>
                  <TabDefault label="Tab 3" onClick={handleTabClick} isSelected={selectedTab === "Tab 3"}>
                  </TabDefault>
                  <TabDisabled />
              </div>
          );
      };
      
      export default TabPrototype;
      
    `
    },
    {
      language: 'Horinzontalicon',
      label: 'Next JS Horinzontal No Icon',
      code: `import React from 'react';
      import styles from './tab1.module.css'; 
      
      const TabDefault = ({ label, onClick, isSelected, children }) => {
          const [hovered, setHovered] = React.useState(false);
      
          return (
              <div className={isSelected ? styles.containerSelect : (hovered ? styles.containerHover : styles.containerDefault)}
                   onClick={() => onClick(label)}
                   onMouseEnter={() => setHovered(true)}
                   onMouseLeave={() => setHovered(false)}>
                  <div className={styles.tab}>
                      <div className={isSelected ? styles.tabLabelSelected : (hovered ? styles.tabLabelHover : styles.tabLabelDefault)}>
                          {label}
                      </div>
                  </div>
                  {isSelected && <div className={styles.separator}></div>}
                  {isSelected && <div className={styles.tabContent}>{children}</div>}
              </div>
          );
      };
      
      const TabDisabled = () => {
          return (
              <div className={styles.containerDisabled}>
                  <div className={styles.tab}>
                      <div className={styles.tabLabelDisabled}>Tab 4</div>
                  </div>
              </div>
          );
      };
      
      const TabPrototype = () => {
          const [selectedTab, setSelectedTab] = React.useState(null);
      
          const handleTabClick = (label) => {
              setSelectedTab(label);
          };
      
          return (
              <div className={styles.tabsContainer}>
                  <TabDefault label="Tab 1" onClick={handleTabClick} isSelected={selectedTab === "Tab 1"}>
                  </TabDefault>
                  <TabDefault label="Tab 2" onClick={handleTabClick} isSelected={selectedTab === "Tab 2"}>
                  </TabDefault>
                  <TabDefault label="Tab 3" onClick={handleTabClick} isSelected={selectedTab === "Tab 3"}>
                  </TabDefault>
                  <TabDisabled />
              </div>
          );
      };
      
      export default TabPrototype;
      
    `
    },
    {
      language: 'Horinzontalicon',
      label: 'Next JS Vertical Icon',
      code: `import React from 'react';
      import styles from './tab1.module.css'; 
      
      const TabvDefault = ({ label, onClick, isSelected, isDisabled }) => {
          const [hovered, setHovered] = React.useState(false);
      
          return (
              <div className={(isSelected ? styles.containervSelect : styles.containervDefault) + (isDisabled ? \` \${styles.tabDisabled}\` : "")}
                   onClick={() => !isDisabled && onClick(label)}
                   onMouseEnter={() => setHovered(true)}
                   onMouseLeave={() => setHovered(false)}
                   style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}>
                  <div className={styles.tab}>
                      <div className={styles.iconWrapper}>
                          <div className={styles.icon}></div>
                      </div>
                      <div className={(isSelected ? styles.tabLabelSelected : (hovered ? styles.tabLabelHover : styles.tabLabelvDefault)) + (isDisabled ? \` \${styles.tabLabelDisabled}\` : "")}>
                          {label}
                      </div>
                  </div>
              </div>
          );
      };
      
      const TabDisabled = ({ label }) => {
          return (
              <div className={styles.containervDisabled}>
                  <div className={styles.tab}>
                      <div className={styles.iconWrapper}>
                          <div className={styles.icon}></div>
                      </div>
                      <div className={styles.tabLabelDisabled}>
                          {label}
                      </div>
                  </div>
              </div>
          );
      };
      
      const TabPrototypeVertical = () => {
          const [selectedTab, setSelectedTab] = React.useState(null);
      
          const handleTabClick = (label) => {
              setSelectedTab(label);
          };
      
          return (
              <div className={styles.container}>
                  <div className={styles.tabsContainerVertical}>
                      <TabvDefault label="Tab 1" onClick={handleTabClick} isSelected={selectedTab === "Tab 1"} />
                      <TabvDefault label="Tab 2" onClick={handleTabClick} isSelected={selectedTab === "Tab 2"} />
                      <TabvDefault label="Tab 3" onClick={handleTabClick} isSelected={selectedTab === "Tab 3"} />
                      <TabDisabled label="Tab 4" />
                  </div>
              </div>
          );
      };
      
      export default TabPrototypeVertical;
      
    `
    },
    {
      language: 'Horinzontalicon',
      label: 'Next JS Vertical No Icon',
      code: `import React from 'react';
      import styles from './tab1.module.css'; 
      
      const TabvDefault = ({ label, onClick, isSelected, isDisabled }) => {
          const [hovered, setHovered] = React.useState(false);
      
          return (
              <div className={(isSelected ? styles.containervSelect : styles.containervDefault) + (isDisabled ? \` \${styles.tabDisabled}\` : "")}
                   onClick={() => !isDisabled && onClick(label)}
                   onMouseEnter={() => setHovered(true)}
                   onMouseLeave={() => setHovered(false)}
                   style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}>
                  <div className={styles.tab}>
                      <div className={(isSelected ? styles.tabLabelSelected : (hovered ? styles.tabLabelHover : styles.tabLabelvDefault)) + (isDisabled ? \` \${styles.tabLabelDisabled}\` : "")}>
                          {label}
                      </div>
                  </div>
              </div>
          );
      };
      
      const TabDisabled = ({ label }) => {
          return (
              <div className={styles.containervDisabled}>
                  <div className={styles.tab}>
                      <div className={styles.tabLabelDisabled}>
                          {label}
                      </div>
                  </div>
              </div>
          );
      };
      
      const TabPrototypeVertical = () => {
          const [selectedTab, setSelectedTab] = React.useState(null);
      
          const handleTabClick = (label) => {
              setSelectedTab(label);
          };
      
          return (
              <div className={styles.container}>
                  <div className={styles.tabsContainerVertical}>
                      <TabvDefault label="Tab 1" onClick={handleTabClick} isSelected={selectedTab === "Tab 1"} />
                      <TabvDefault label="Tab 2" onClick={handleTabClick} isSelected={selectedTab === "Tab 2"} />
                      <TabvDefault label="Tab 3" onClick={handleTabClick} isSelected={selectedTab === "Tab 3"} />
                      <TabDisabled label="Tab 4" />
                  </div>
              </div>
          );
      };
      
      export default TabPrototypeVertical;
    `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `
      .containerSelect {
        width: 140px;
        height: 100%;
        background: #F2F2F2;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        display: inline-flex;
      }
      .containervSelect {
        width: fit-content; /* Cambiado a fit-content para que tenga el ancho del contenido */
        height: 100%;
        background: #F2F2F2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;  
        display: inline-flex;
       flex-direction: column;
       border-right: 2px #282B38 solid;
      }
      
      .containerDefault {
        width: fit-content;
        height: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        display: inline-flex;
        border-bottom: 3px #282B38 solid;
      }
      .containervDefault {
        width: fit-content;
        height: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        display: inline-flex;
      }
      .containerDisabled {
        width: fit-content; /* Cambiado a fit-content para que tenga el ancho del contenido */
        height: 100%;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 12px;
        padding-bottom: 12px;
        opacity: 0.32;
        justify-content: center;
        align-items: center;
        gap: 10px;
        display: inline-flex;
      }
      
      
      .containerHover {
        width: fit-content; /* Cambiado a fit-content para que tenga el ancho del contenido */
        height: 100%;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 12px;
        padding-bottom: 12px;
        background: white;
        justify-content: center;
        align-items: center;
        gap: 8px;
        display: inline-flex;
      }
      .tab {
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 11px;
        padding-bottom: 11px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        display: inline-flex;
      }
      
      .iconWrapper {
        width: 24px;
        height: 24px;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      
      .icon {
        width: 24px;
        height: 24px;
        position: relative;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="vuesax/linear/setting"><g id="setting"><path id="Vector" d="M3 9.11V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.11C21 7 21 7 19 5.65L13.5 2.47C12.68 1.99 11.33 1.99 10.5 2.47L5 5.65C3 7 3 7 3 9.11Z" stroke="%23323053" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="%23323053" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>');
      }
      
      .iconGreen {
        width: 24px;
        height: 24px;
        position: relative;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="vuesax/linear/setting"><g id="setting"><path id="Vector" d="M3 9.11V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.11C21 7 21 7 19 5.65L13.5 2.47C12.68 1.99 11.33 1.99 10.5 2.47L5 5.65C3 7 3 7 3 9.11Z" stroke="%23323053" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="%23323053" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>');
      }
      
      .tabLabelSelected {
        color: #323053;
        font-size: 16px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 500;
        line-height: 24px;
        word-wrap: break-word;
      }
      
      .tabLabelDefault {
        color: #282B38;
        font-size: 16px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 500;
        line-height: 24px;
        word-wrap: break-word;
      }
      
      .tabLabelDisabled { 
        color: #999999;
        font-size: 16px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 500;
        line-height: 24px;
        word-wrap: break-word;
      }
      .tabLabelHover {
        color: #0B520C;
        font-size: 16px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 500;
        line-height: 24px;
        word-wrap: break-word;
      }
      
      .tabLabelvDefault {
        color: #282B38;
        font-size: 16px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 500;
        line-height: 24px;
        word-wrap: break-word;
      }
      .separator {
        align-self: stretch;
        height: 3px;
        background: #323053;
      }
      
      .tabContentText {
      
        background-color:white; /* Color de texto del contenido del tab */
      
      }
      
      .tabsContainerVertical {
        display: flex;
        flex-direction: column;
        gap: 10px; /* Espacio entre los tabs */
      }
      
      
      `
    }
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: ``
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `
      `
    }
  ];
  const { setTheme, theme } = useContext(ThemeContext); 
  const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
  const dividerColor = theme === "light" ? "#000000" : "#ffffff";
  return (
    <Container>
      <h1>Tabs</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TabsProyect />
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

export default TabsComponent;
