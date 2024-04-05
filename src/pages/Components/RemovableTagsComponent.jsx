import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import RemovableTags from "../../components/reactcomponents/RemovableTags/RemovTagDefault";
import { ThemeContext } from '../../App'; 

export const RemovableTagsComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes = [
    {
      language: 'javascript',
      label: 'Tags sin Icon Vue JS',
      code: `<template>
      <div v-if="visible" :class="[containerClasses]" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <div :class="[contentClasses]">
          <div class="text">Removable Tag Icon</div>
          <div class="icon-wrapper">
            <div :class="[iconClasses]" @click="handleClick"></div>
          </div>
        </div>
      </div>
    </template>
    <script>  // invocar al componente <RemovableTagIcon initialStyle=" default, ghost o active" /> 
    export default {
      data() {
        return {
          visible: true,
          hovered: false,
          disabled: false // true (deshabilitar el removable tag)
        };
      },
      computed: {
        containerClasses() {
          return {
            'container': true,
            'container-disabled': this.disabled,
            'container-hover': this.hovered && !this.disabled,
            'container-default': !this.hovered && !this.disabled && this.initialStyle === 'default',
            'container-active': !this.hovered && !this.disabled && this.initialStyle === 'active',
            'container-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
        },
        contentClasses() {
          return {
            'content': true,
            'text-disabled': this.disabled,
            'text-white': (this.hovered || this.initialStyle === 'active') && !this.disabled,
            'text-black': !this.hovered && !this.disabled && this.initialStyle === 'default',
            'text-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
        },
        iconClasses() {
          return {
            'icon-black': !this.hovered && !this.disabled && (this.initialStyle === 'active' || this.initialStyle === 'default'),
            'icon-disabled': this.disabled,
            'icon-white': (this.hovered || this.initialStyle === 'active') && !this.disabled,
            'icon-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
        }
      },
      props: {
        initialStyle: {
          type: String,
          default: 'normal'
        }
      },
      methods: {
        handleRemove() {
          this.visible = false;
        },
        handleMouseEnter() {
          this.hovered = true;
        },
        handleMouseLeave() {
          this.hovered = false;
        },
        handleClick(event) {
          event.stopPropagation(); // Detener la propagación del evento para evitar que se active el onClick del contenedor
          if (!this.disabled) { // Verificar si el removable tag está deshabilitado
            this.handleRemove();
          }
        }
      }
    };
    </script>
    
    <style scoped src="../RemovableTags.css">
    </style>
    `
    },
    {
      language: 'css',
      label: 'Tags con Icon Vue JS',
      code: `<template>
      <div v-if="visible" :class="[containerClasses]" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <div :class="[contentClasses]">
          <div class="text">Removable Tag Icon</div>
          <div class="icon-wrapper">
            <div :class="[iconClasses]" @click="handleClick"></div>
          </div>
        </div>
      </div>
    </template>
    <script>  // invocar al componente <RemovableTagIcon initialStyle=" default, ghost o active" /> 
    export default {
      data() {
        return {
          visible: true,
          hovered: false,
          disabled: false // true (deshabilitar el removable tag)
        };
      },
      computed: {
        containerClasses() {
          return {
            'container': true,
            'container-disabled': this.disabled,
            'container-hover': this.hovered && !this.disabled,
            'container-default': !this.hovered && !this.disabled && this.initialStyle === 'default',
            'container-active': !this.hovered && !this.disabled && this.initialStyle === 'active',
            'container-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
        },
        contentClasses() {
          return {
            'content': true,
            'text-disabled': this.disabled,
            'text-white': (this.hovered || this.initialStyle === 'active') && !this.disabled,
            'text-black': !this.hovered && !this.disabled && this.initialStyle === 'default',
            'text-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
        },
        iconClasses() {
          return {
            'icon-black': !this.hovered && !this.disabled && (this.initialStyle === 'active' || this.initialStyle === 'default'),
            'icon-disabled': this.disabled,
            'icon-white': (this.hovered || this.initialStyle === 'active') && !this.disabled,
            'icon-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
        }
      },
      props: {
        initialStyle: {
          type: String,
          default: 'normal'
        }
      },
      methods: {
        handleRemove() {
          this.visible = false;
        },
        handleMouseEnter() {
          this.hovered = true;
        },
        handleMouseLeave() {
          this.hovered = false;
        },
        handleClick(event) {
          event.stopPropagation(); // Detener la propagación del evento para evitar que se active el onClick del contenedor
          if (!this.disabled) { // Verificar si el removable tag está deshabilitado
            this.handleRemove();
          }
        }
      }
    };
    </script>
    
    <style scoped src="../RemovableTags.css">
    </style>
    
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Tags sin Icon Next JS',
      code: `import React, { useState } from 'react';
      import styles from './RemovableTags.module.css'; // Importa tus estilos CSS
      
      const RemTag = ({ initialStyle = 'default' }) => {
        const [visible, setVisible] = useState(true);
        const [hovered, setHovered] = useState(false);
        const [disabled, setDisabled] = useState(true); // true (deshabilitar el removable tag)
        const [currentStyle, setCurrentStyle] = useState(initialStyle);
      
        const handleRemove = () => {
          if (!disabled) {
            setVisible(false);
          }
        };
      
        const handleMouseEnter = () => {
          if (!disabled) {
            setHovered(true);
          }
        };
      
        const handleMouseLeave = () => {
          if (!disabled) {
            setHovered(false);
          }
        };
      
        const handleClick = () => {
          setVisible(false); // Ocultar el removable tag al hacer clic en cualquier parte del componente
        };
      
        const containerClass = () => {
          if (currentStyle === 'active') {
            return \`\${styles.containerActive} \${hovered ? styles.containerHover : ''}\`;
          } else if (currentStyle === 'ghost') {
            return \`\${styles.containerGhost} \${hovered ? styles.containerHover : ''}\`;
          } else {
            return \`\${styles.containerDefault} \${hovered ? styles.containerHover : ''}\`;
          }
        };  
      
        const textStyle = () => {
          if (currentStyle === 'active') {
            return disabled ? styles.textDisabled : styles.textWhite;
          } else if (currentStyle === 'default') {
            return disabled ? styles.textDisabled : hovered ? styles.textWhite : styles.textBlack;
          } else if (currentStyle === 'ghost') {
            return disabled ? styles.textDisabled : styles.textGhost;
          }
        };
      
        return (
          <>
            {visible && (
              <div
                className={\`\${styles.container} \${containerClass()} \${
                  disabled ? styles.containerDisabled : ''
                }\`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick} // Ocultar el removable tag al hacer clic en cualquier parte del componente
                style={disabled ? { pointerEvents: 'none' } : null}
              >
                <div className={\`\${styles.content} \${textStyle()}\`}>
                  <div className={styles.text}>Removable Tag</div> 
                </div>
              </div>
            )}
          </>
        );
      };
      
      export default RemTag;
      
      `
    },
    {
      language: 'javascript2',
      label: 'Tags con Icon Next JS',
      code: `import React, { useState } from 'react';
      import styles from './RemovableTags.module.css'; // Importa tus estilos CSS
      
      const RemTagIcon = ({ initialStyle = 'default' }) => {
        const [visible, setVisible] = useState(true);
        const [hovered, setHovered] = useState(false);
        const [disabled, setDisabled] = useState(false); // true (deshabilitar el removable tag)
        const [currentStyle, setCurrentStyle] = useState(initialStyle);
      
        const handleRemove = () => {
          if (!disabled) {
            setVisible(false);
          }
        };
      
        const handleMouseEnter = () => {
          if (!disabled) {
            setHovered(true);
          }
        };
      
        const handleMouseLeave = () => {
          if (!disabled) {
            setHovered(false);
          }
        };
      
        const handleClick = (event) => {
          event.stopPropagation(); // Evitar la propagación del evento para que no afecte al contenedor
          setVisible(false); // Ocultar el removable tag al hacer clic en el icono
        };
      
        const containerClass = () => {
          if (currentStyle === 'active') {
            return \`\${styles.containerActive} \${hovered ? styles.containerHover : ''}\`;
          } else if (currentStyle === 'ghost') {
            return \`\${styles.containerGhost} \${hovered ? styles.containerHover : '', disabled ? styles.containerDisabled : ''}\`;
          } else {
            return \`\${styles.containerDefault} \${hovered ? styles.containerHover : ''}\`;
          }
        };  
      
        const textStyle = () => {
          if (currentStyle === 'active') {
            return disabled ? styles.textDisabled : styles.textWhite;
          } else if (currentStyle === 'default') {
            return disabled ? styles.textDisabled : hovered ? styles.textWhite : styles.textBlack;
          } else if (currentStyle === 'ghost') {
            return disabled ? styles.textDisabled : styles.textGhost;
          }
        };
        
      
        const iconClass = () => {
          if (currentStyle === 'active') {
            return styles.iconWhite;
          } else if (currentStyle === 'default') {
            return hovered ? styles.iconWhite : styles.iconBlack;
          } else {
            return disabled ? styles.iconDisabled : \`\${styles.iconGhost} \${hovered ? styles.iconWhite : ''}\`;
          }
        };
      
        return (
          <>
            {visible && (
              <div
                className={\`\${styles.container} \${containerClass()} \${
                  disabled ? styles.containerDisabled : ''
                }\`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={disabled ? { pointerEvents: 'none' } : null}
              >
                <div className={\`\${styles.content} \${textStyle()}\`}>
                  <div className={styles.text}>Removable Tag Icon</div> 
                  <div className={styles.iconWrapper}>
                    <div
                      className={\`\${styles.icon} \${iconClass()} \${
                        disabled ? styles.iconDisabled : ''
                      }\`}
                      onClick={handleClick} // Ocultar el removable tag al hacer clic en el icono
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      };
      
      export default RemTagIcon;
      
      `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `
      /*CONTAINERS*/
      
      .containerDefault {
        display: inline-flex;
        height: 26px; /*S 26px, M 32px, L 40px */
        width: auto;
        padding: 10px 14px 10px 18px; 
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        border-radius: 10px;
        background: var(--UI-Terciary-Default, #B1D906);
      }
      
      .containerActive {
        display: inline-flex;
        height: 26px; /*S 26px, M 32px, L 40px */
        width: auto;
        padding: 10px 14px 10px 18px; 
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        border-radius: 10px;
        background: var(--UI-Terciary-Active, #9EC106);
      }
      .containerDisabled {
        display: inline-flex;
        height: 26px; /*S 26px, M 32px, L 40px */
        width: auto;
        padding: 10px 14px 10px 18px; 
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        border-radius: 10px;
        background: var(--UI-Background-Disabled, #E5E5E5);
      }
      .containerHover {
        display: inline-flex;
        height: 26px; /*S 26px, M 32px, L 40px */
        width: auto;
        padding: 10px 14px 10px 18px; 
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        border-radius: 10px;
        background: var(--UI-Terciary-Hover, #4F6003);  
      }
      .containerGhost {
        display: inline-flex;
        height: 26px; /*S 26px, M 32px, L 40px */
        width: auto;
        padding: 10px 14px 10px 18px; 
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        border-radius: 10px;
        border: 1px solid var(--UI-Terciary-Default, #B1D906); 
        background-color: #FFF;
      }
      
      
      .content {
        display: flex;
        align-items: center;
        justify-content: space-between; 
        width: 100%;
      }
      
      
      /*TEXTS*/
      
      .textBlack {
        color: var(--UI-Text-Secondary, #282B38);
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; 
      
      }
      
      .textWhite {
        color: var(--UI-Text-White, #FFF);
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; 
       
      }
      
      .textDisabled {
        color: var(--UI-Text-Disabled, #999);
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; 
      
      }
      .textGhost {
        color: var(--UI-Terciary-Default, #B1D906);
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; 
       
      }
      
      /*ICONS*/
      
      .iconWrapper {
        width: 24px;
        height: 24px;
        justify-content: center;
        align-items: center;
        display: flex;
        margin-left: 10px;
      }
      
      .iconBlack {
        width: 24px;
        height: 24px;
        position: relative;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"
         width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="close">
         <path id="Fill" fill-rule="evenodd" clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05
          6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="%23282B38"/></g></svg>');
      }
      
      .iconWhite {
        width: 24px;
        height: 24px;
        position: relative;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"
         width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="close"><path id="Fill" 
         fill-rule="evenodd" clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95
          12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="white"/></g></svg>');
      }
      
      .iconDisabled {
        width: 24px;
        height: 24px;
        position: relative;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
        viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05
        6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="%23999999"/></svg>');
      }
      
      .iconGhost {
        width: 24px;
        height: 24px;
        position: relative;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"
         width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" 
         clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 
         18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="%23B1D906"/></svg>');
      }
      
      
      
      `
    }
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Tags Icon Angular TS',
      code: `import { Component, Input } from '@angular/core';

      @Component({
          // invocar al componente <app-removable-tag-icon [initialStyle]="'active, deafult o ghost'"></app-removable-tag-icon>
        selector: 'app-removable-tag-icon',
        standalone: true,
        imports: [],
        templateUrl: './removable-tag-icon.component.html',
        styleUrl: './removable-tag-icon.component.css'
      })
      export class RemovableTagIconComponent {
      
        @Input() initialStyle: string = 'normal';
      
        visible: boolean = true;
        hovered: boolean = false;
        disabled: boolean = false; // true (deshabilitar el removable tag)
      
        containerClasses = {};
        contentClasses = {};
        iconClasses = {};
      
        constructor() {}
      
        ngOnInit() {
          this.setClasses();
        }
      
        setClasses() {
          this.containerClasses = {
            'container': true,
            'container-disabled': this.disabled,
            'container-hover': this.hovered && !this.disabled,
            'container-default': !this.hovered && !this.disabled && this.initialStyle === 'default',
            'container-active': !this.hovered && !this.disabled && this.initialStyle === 'active',
            'container-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
      
          this.contentClasses = {
            'content': true,
            'text-disabled': this.disabled,
            'text-white': (this.hovered || this.initialStyle === 'active') && !this.disabled,
            'text-black': !this.hovered && !this.disabled && this.initialStyle === 'default',
            'text-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
      
          this.iconClasses = {
            'icon-black': !this.hovered && !this.disabled && (this.initialStyle === 'active' || this.initialStyle === 'default'),
            'icon-disabled': this.disabled,
            'icon-white': (this.hovered || this.initialStyle === 'active') && !this.disabled,
            'icon-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
        }
      
        handleRemove = () => {
          this.visible = false;
          this.setClasses(); 
        }
        
        handleMouseEnter() {
          this.hovered = true;
          this.setClasses();
        }
      
        handleMouseLeave() {
          this.hovered = false;
          this.setClasses();
        }
      
        handleClick(event: MouseEvent) {
          event.stopPropagation();// Detener la propagación del evento para evitar que se active el onClick del contenedor
          if (!this.disabled) {// Verificar si el removable tag está deshabilitado
            this.visible = false;
          }
        }
        
            
      }
        
      `
    },
    {
      language: 'typescript',
      label: 'Tags Icon Angular TS SPEC',
      code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

      import { RemovableTagIconComponent } from './removable-tag-icon.component';
      
      describe('RemovableTagIconComponent', () => {
        let component: RemovableTagIconComponent;
        let fixture: ComponentFixture<RemovableTagIconComponent>;
      
        beforeEach(async () => {
          await TestBed.configureTestingModule({
            imports: [RemovableTagIconComponent]
          })
          .compileComponents();
          
          fixture = TestBed.createComponent(RemovableTagIconComponent);
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
      label: 'Tags Icon Angular Html',
      code: `<div [class]="{'container': true, 'hidden': !visible, 'container-disabled': disabled, 'container-hover': hovered && !disabled, 'container-default': !hovered && !disabled && initialStyle === 'default', 'container-active': !hovered && !disabled && initialStyle === 'active', 'container-ghost': !hovered && !disabled && initialStyle === 'ghost'}" (mouseenter)="handleMouseEnter()" (mouseleave)="handleMouseLeave()">
      <div [class]="{'content': true, 'text-disabled': disabled, 'text-white': (hovered || initialStyle === 'active') && !disabled, 'text-black': !hovered && !disabled && initialStyle === 'default', 'text-ghost': !hovered && !disabled && initialStyle === 'ghost'}">
        <div class="text">Removable Tag Icon</div>
        <div class="icon-wrapper">
          <div [class]="{'icon-black': !hovered && !disabled && (initialStyle === 'active' || initialStyle === 'default'), 'icon-disabled': disabled, 'icon-white': (hovered || initialStyle === 'active') && !disabled, 'icon-ghost': !hovered && !disabled && initialStyle === 'ghost'}" (click)="handleClick($event)"></div>
        </div>
      </div>
    </div>
    
    `
    },
    {
      language: 'css',
      label: 'Tags Icon Angular CSS',
      code: `
      /*CONTAINERS*/
      
      .container-default {
          display: inline-flex;
          height: 26px; /*S 26px, M 32px, L 40px */
          width: auto;
          padding: 10px 14px 10px 18px; 
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--UI-Terciary-Default, #B1D906);
        }
        
        .container-active {
          display: inline-flex;
          height: 26px; /*S 26px, M 32px, L 40px */
          width: auto;
          padding: 10px 14px 10px 18px; 
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--UI-Terciary-Active, #9EC106);
        }
        .container-disabled {
          display: inline-flex;
          height: 26px; /*S 26px, M 32px, L 40px */
          width: auto;
          padding: 10px 14px 10px 18px; 
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--UI-Background-Disabled, #E5E5E5);
        }
        .container-hover {
          display: inline-flex;
          height: 26px; /*S 26px, M 32px, L 40px */
          width: auto;
          padding: 10px 14px 10px 18px; 
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--UI-Terciary-Hover, #4F6003);  
        }
        .container-ghost {
          display: inline-flex;
          height: 26px; /*S 26px, M 32px, L 40px */
          width: auto;
          padding: 10px 14px 10px 18px; 
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 10px;
          border: 1px solid var(--UI-Terciary-Default, #B1D906); 
          background-color: #FFF;
        }
        
        
        .content {
          display: flex;
          align-items: center;
          justify-content: space-between; 
          width: 100%;
        }
        
        
        /*TEXTS*/
        
        .text-black {
          color: var(--UI-Text-Secondary, #282B38);
          font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; 
        
        }
        
        .text-white {
          color: var(--UI-Text-White, #FFF);
          font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; 
         
        }
      
      
        .text-disabled {
          color: var(--UI-Text-Disabled, #999);
          font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; 
        
        }
        .text-ghost {
          color: var(--UI-Terciary-Default, #B1D906);
          font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; 
         
        }
        
        /*ICONS*/
        
        .icon-wrapper {
          width: 24px;
          height: 24px;
          justify-content: center;
          align-items: center;
          display: flex;
          margin-left: 10px;
        }
        
        .icon-black {
          width: 24px;
          height: 24px;
          position: relative;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="close"><path id="Fill" 
          fill-rule="evenodd" clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95
           12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="%23282B38"/></g></svg>');
        }
        
        .icon-white {
          width: 24px;
          height: 24px;
          position: relative;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"
           width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="close"><path id="Fill" 
           fill-rule="evenodd" clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95
            12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="white"/></g></svg>');
        }
        
        .icon-disabled {
          width: 24px;
          height: 24px;
          position: relative;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd"
           d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 
           18L18 16.95L13.05 12L18 7.05Z" fill="%23999999"/></svg>');
        }
        
        .icon-ghost {
          width: 24px;
          height: 24px;
          position: relative;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"
           width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" 
           clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 
           18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="%23B1D906"/></svg>');
        }
        
        .hidden {
          display: none;
        }
        
        
        
      `
    },
    {
      language: 'typescript Icon',
      label: 'Tags sin Icon Angular TS',
      code: `import { Component, Input } from '@angular/core';

      @Component({
          // invocar al componente <app-removable-tag-icon [initialStyle]="'active, deafult o ghost'"></app-removable-tag-icon>
        selector: 'app-removable-tag-icon',
        standalone: true,
        imports: [],
        templateUrl: './removable-tag-icon.component.html',
        styleUrl: './removable-tag-icon.component.css'
      })
      export class RemovableTagIconComponent {
      
        @Input() initialStyle: string = 'normal';
      
        visible: boolean = true;
        hovered: boolean = false;
        disabled: boolean = false; // true (deshabilitar el removable tag)
      
        containerClasses = {};
        contentClasses = {};
        iconClasses = {};
      
        constructor() {}
      
        ngOnInit() {
          this.setClasses();
        }
      
        setClasses() {
          this.containerClasses = {
            'container': true,
            'container-disabled': this.disabled,
            'container-hover': this.hovered && !this.disabled,
            'container-default': !this.hovered && !this.disabled && this.initialStyle === 'default',
            'container-active': !this.hovered && !this.disabled && this.initialStyle === 'active',
            'container-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
      
          this.contentClasses = {
            'content': true,
            'text-disabled': this.disabled,
            'text-white': (this.hovered || this.initialStyle === 'active') && !this.disabled,
            'text-black': !this.hovered && !this.disabled && this.initialStyle === 'default',
            'text-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
      
          this.iconClasses = {
            'icon-black': !this.hovered && !this.disabled && (this.initialStyle === 'active' || this.initialStyle === 'default'),
            'icon-disabled': this.disabled,
            'icon-white': (this.hovered || this.initialStyle === 'active') && !this.disabled,
            'icon-ghost': !this.hovered && !this.disabled && this.initialStyle === 'ghost'
          };
        }
      
        handleRemove = () => {
          this.visible = false;
          this.setClasses(); 
        }
        
        handleMouseEnter() {
          this.hovered = true;
          this.setClasses();
        }
      
        handleMouseLeave() {
          this.hovered = false;
          this.setClasses();
        }
      
        handleClick(event: MouseEvent) {
          event.stopPropagation();// Detener la propagación del evento para evitar que se active el onClick del contenedor
          if (!this.disabled) {// Verificar si el removable tag está deshabilitado
            this.visible = false;
          }
        }
        
            
      }
        
      `
    },
    {
      language: 'typescript Icon',
      label: 'Tags sin Icon Angular TS SPEC',
      code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

      import { RemovableTagComponent } from './removable-tag.component';
      
      describe('RemovableTagComponent', () => {
        let component: RemovableTagComponent;
        let fixture: ComponentFixture<RemovableTagComponent>;
      
        beforeEach(async () => {
          await TestBed.configureTestingModule({
            imports: [RemovableTagComponent]
          })
          .compileComponents();
          
          fixture = TestBed.createComponent(RemovableTagComponent);
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
      language: 'html Icon',
      label: ' Tags sin Icon Angular Html',
      code: `<!-- removable-tag.component.html -->
      <div [class]="{'container': true, 'hidden': !visible, 'container-disabled': disabled, 'container-hover': hovered && !disabled, 'container-default': !hovered && !disabled && initialStyle === 'default', 'container-active': !hovered && !disabled && initialStyle === 'active', 'container-ghost': !hovered && !disabled && initialStyle === 'ghost'}" (mouseenter)="handleMouseEnter()" (mouseleave)="handleMouseLeave()" (click)="handleClick()">
          <div [class]="{'content': true, 'text-disabled': disabled, 'text-white': (hovered || initialStyle === 'active') && !disabled, 'text-black': !hovered && !disabled && initialStyle === 'default', 'text-ghost': !hovered && !disabled && initialStyle === 'ghost'}">
            <div class="text">Removable Tag</div>
          </div>
        </div>
        
    `
    },
    {
      language: 'css Icon',
      label: 'Tags sin Icon Angular CSS',
      code: `
      /*CONTAINERS*/
      
      .container-default {
          display: inline-flex;
          height: 26px; /*S 26px, M 32px, L 40px */
          width: auto;
          padding: 10px 14px 10px 18px; 
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--UI-Terciary-Default, #B1D906);
        }
        
        .container-active {
          display: inline-flex;
          height: 26px; /*S 26px, M 32px, L 40px */
          width: auto;
          padding: 10px 14px 10px 18px; 
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--UI-Terciary-Active, #9EC106);
        }
        .container-disabled {
          display: inline-flex;
          height: 26px; /*S 26px, M 32px, L 40px */
          width: auto;
          padding: 10px 14px 10px 18px; 
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--UI-Background-Disabled, #E5E5E5);
        }
        .container-hover {
          display: inline-flex;
          height: 26px; /*S 26px, M 32px, L 40px */
          width: auto;
          padding: 10px 14px 10px 18px; 
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--UI-Terciary-Hover, #4F6003);  
        }
        .container-ghost {
          display: inline-flex;
          height: 26px; /*S 26px, M 32px, L 40px */
          width: auto;
          padding: 10px 14px 10px 18px; 
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 10px;
          border: 1px solid var(--UI-Terciary-Default, #B1D906); 
          background-color: #FFF;
        }
        
        
        .content {
          display: flex;
          align-items: center;
          justify-content: space-between; 
          width: 100%;
        }
        
        
        /*TEXTS*/
        
        .text-black {
          color: var(--UI-Text-Secondary, #282B38);
          font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; 
        
        }
        
        .text-white {
          color: var(--UI-Text-White, #FFF);
          font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; 
         
        }
      
      
        .text-disabled {
          color: var(--UI-Text-Disabled, #999);
          font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; 
        
        }
        .text-ghost {
          color: var(--UI-Terciary-Default, #B1D906);
          font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; 
         
        }
        
        /*ICONS*/
        
        .icon-wrapper {
          width: 24px;
          height: 24px;
          justify-content: center;
          align-items: center;
          display: flex;
          margin-left: 10px;
        }
        
        .icon-black {
          width: 24px;
          height: 24px;
          position: relative;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="close"><path id="Fill" 
          fill-rule="evenodd" clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 
          16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="%23282B38"/></g></svg>');
        }
        
        .icon-white {
          width: 24px;
          height: 24px;
          position: relative;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="close"><path id="Fill" fill-rule="evenodd" 
          clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 
          13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="white"/></g></svg>');
        }
        
        .icon-disabled {
          width: 24px;
          height: 24px;
          position: relative;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" 
          clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 
          18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="%23999999"/></svg>');
        }
        
        .icon-ghost {
          width: 24px;
          height: 24px;
          position: relative;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd"
           clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05
            18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="%23B1D906"/></svg>');
        }
        
        .hidden {
          display: none;
        }
        
        
        
      `
    }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1> Removable Tag</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <RemovableTags></RemovableTags>
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

export default RemovableTagsComponent;

