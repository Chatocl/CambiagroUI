import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import Tag from "../../components/reactcomponents/Tag/Tag";
import { ThemeContext } from '../../App'; 

export const TagComponent = () => {
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
      <div :class="tagClasses" :style="tagStyles">
          <template v-if="icon && shouldRenderCircleIcon">
              <div class="tag-icon-regular">
                  <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" :fill="iconColor" />
                  </svg>
              </div>
          </template>
  
          <template v-if="icon && shouldRenderBoxIconL">
              <div class="tag-icon-box">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M2.5 2.5H17.5C18.1904 2.5 18.75 3.05964 18.75 3.75V6.25C18.75 6.94036 18.1904 7.5 17.5 7.5V17.5C17.5 18.1904 16.9404 
                          18.75 16.25 18.75H3.75C3.05964 18.75 2.5 18.1904 2.5 17.5V7.5C1.80964 7.5 1.25 6.94036 1.25 6.25V3.75C1.25 3.05964 1.80964 
                          2.5 2.5 2.5ZM12.5 13.125H7.5C6.80964 13.125 6.25 12.5654 6.25 11.875V10.625C6.25 9.93464 6.80964 9.375 7.5 9.375H12.5C13.1904 
                          9.375 13.75 9.93464 13.75 10.625V11.875C13.75 12.5654 13.1904 13.125 12.5 13.125ZM7.5 10.625V11.875H12.5V10.625H7.5ZM16.25 
                          17.5H3.75V7.5H16.25V17.5ZM2.5 6.25H17.5V3.75H2.5V6.25Z"
                          fill="currentColor" />
                  </svg>
              </div>
          </template>
  
          <template v-if="icon && shouldRenderBoxIconS">
              <div class="tag-icon-box">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M1.75 1.75H12.25C12.7332 1.75 13.125 2.14175 13.125 2.625V4.375C13.125 4.85825 12.7332 5.25 12.25 5.25V12.25C12.25 
                          12.7332 11.8582 13.125 11.375 13.125H2.625C2.14175 13.125 1.75 12.7332 1.75 12.25V5.25C1.26675 5.25 0.875 4.85825 
                          0.875 4.375V2.625C0.875 2.14175 1.26675 1.75 1.75 1.75ZM8.75 9.1875H5.25C4.76675 9.1875 4.375 8.79575 
                          4.375 8.3125V7.4375C4.375 6.95425 4.76675 6.5625 5.25 6.5625H8.75C9.23325 6.5625 9.625 6.95425 9.625 
                          7.4375V8.3125C9.625 8.79575 9.23325 9.1875 8.75 9.1875ZM5.25 7.4375V8.3125H8.75V7.4375H5.25ZM11.375 
                          12.25H2.625V5.25H11.375V12.25ZM1.75 4.375H12.25V2.625H1.75V4.375Z"
                          fill="currentColor" />
                  </svg>
              </div>
          </template>
  
          <p>{{ text }}</p>
      </div>
  </template>
  
  <script>
  export default {
      name: 'Tag',
      props: {
          size: String,
          icon: Boolean,
          type: String,
          text: String
      },
      computed: {
          tagClasses() {
              return {
                  'tag-container': true,
                  'regular-green': ['creado', 'despachado', 'concluido', 'success'].includes(this.type),
                  'regular-red': ['vencido', 'anulado', 'bloqueado', 'error'].includes(this.type),
                  'regular-light-green': ['pendiente', 'progress'].includes(this.type),
                  'regular-grey': this.type === 'en curso',
                  'disabled': this.type === 'disabled',
                  'info': this.type === 'info'
              };
          },
          tagStyles() {
              return {
                  height: this.size === 'L' ? '32px' : (this.size === 'M' ? '26px' : '18px'),
                  width: ['error', 'disabled', 'success', 'progress', 'info'].includes(this.type) ? '93px' : '108px'
              };
          },
          shouldRenderCircleIcon() {
              return this.icon && !['error', 'disabled', 'success', 'progress', 'info'].includes(this.type);
          },
          shouldRenderBoxIconL() {
              return this.icon && ['error', 'disabled', 'success', 'progress', 'info'].includes(this.type) && (this.size === 'L' || this.size === 'M');
          },
          shouldRenderBoxIconS() {
              return this.icon && ['error', 'disabled', 'success', 'progress', 'info'].includes(this.type) && this.size === 'S';
          },
          iconColor() {
              return 'currentColor';
          }
      }
  };
  </script>
  
  <style scoped src="./Tag.css"></style>`
    },
    {
      language: 'css',
      label: 'Vue CSS',
      code: `.tag-container {
        border-radius: 10px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .tag-icon-regular, .tag-icon-box{
        padding-right: 6px;
        display: flex;
    }
    
    .tag-container p {
        color: black;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 13.333px;
        font-weight: 400;
    }
    
    .tag-container.regular-green {
        background-color: #C8E451;
    }
    
    .tag-container.regular-green .tag-icon-regular{
        color: #4F6003;
    }
    
    .tag-container.regular-green .tag-icon-box{
        color: black;
    }
    
    .tag-container.regular-red {
        background-color: #F4BFBF;
    }
    
    .tag-container.regular-red .tag-icon-regular{
        color: #DB2929;
    }
    
    .tag-container.regular-red .tag-icon-box{
        color: black;
    }
    
    .tag-container.regular-light-green {
        background-color: #E8F4B4;
    }
    
    .tag-container.regular-light-green .tag-icon-regular{
        color: #9EC106;
    }
    
    .tag-container.regular-light-green .tag-icon-box{
        color: black;
    }
    
    .tag-container.regular-grey {
        background-color: #E5E5E5;
    }
    
    .tag-container.regular-grey .tag-icon-regular{
        color: #3E3C68;
    }
    
    .tag-container.disabled {
        background-color: #E5E5E5;
    }
    
    .tag-container.disabled .tag-icon-box{
        color: #999999;
    }
    
    .tag-container.disabled p{
        color: #999999;
    }
    
    .tag-container.info {
        background-color: #787795;
    }
    
    .tag-container.info .tag-icon-box, p{
        color: white;
    }
    
    .tag-container.info p{
        color: white;
    }
    
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `import React from 'react'
      import './Tag.css'
      
      const Tag = ({ size, icon, type, text }) => {
          return (
      
              <div className={\`tag-container 
                  \${type === 'creado' || type === 'despachado' || type === 'concluido' || type === 'success' ? 'regular-green' :
                      \`\${type === 'vencido' || type === 'anulado' || type === 'bloqueado' || type === 'error' ? 'regular-red' :
                          \`\${type === 'pendiente' || type === 'progress' ? 'regular-light-green' :
                              \`\${type === 'en curso' ? 'regular-grey' :
                                  \`\${type === 'disabled' ? 'disabled' :
                                      \`\${type === 'info' ? 'info' : ''}\`
                                  }\`}\`}\`}\`}\`}
                  style={{
                      height: size === 'L' ? '32px' :
                          (size === 'M' ? '26px' : '18px'),
                      width: type === 'error' || type === 'disabled' || type === 'success' || type === 'progress' || type === 'info' ? '93px' : '108px'
                  }}
              >
                  {icon &&
                      (type !== 'error' && type !== 'disabled' && type !== 'success' && type !== 'progress' && type !== 'info')
                      &&
                      (<svg
                          className='tag-icon-regular'
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
      
                          xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="currentColor" />
                      </svg>
                      )}
      
                  {icon &&
                      (type === 'error' || type === 'disabled' || type === 'success' || type === 'progress' || type === 'info')
                      &&
                      (size === 'L' || size === 'M')
                      &&
                      (<svg
                          className='tag-icon-box'
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.5 2.5H17.5C18.1904 2.5 18.75 3.05964 18.75 3.75V6.25C18.75 6.94036 18.1904 7.5 17.5 7.5V17.5C17.5 
                              18.1904 16.9404 18.75 16.25 18.75H3.75C3.05964 18.75 2.5 18.1904 2.5 17.5V7.5C1.80964 7.5 1.25 6.94036 }
                              1.25 6.25V3.75C1.25 3.05964 1.80964 2.5 2.5 2.5ZM12.5 13.125H7.5C6.80964 13.125 6.25 12.5654 6.25 
                              11.875V10.625C6.25 9.93464 6.80964 9.375 7.5 9.375H12.5C13.1904 9.375 13.75 9.93464 13.75 
                              10.625V11.875C13.75 12.5654 13.1904 13.125 12.5 13.125ZM7.5 
                              10.625V11.875H12.5V10.625H7.5ZM16.25 17.5H3.75V7.5H16.25V17.5ZM2.5 6.25H17.5V3.75H2.5V6.25Z"
                              fill="currentColor" />
                      </svg>
      
                      )}
      
                  {icon &&
                      (type === 'error' || type === 'disabled' || type === 'success' || type === 'progress' || type === 'info')
                      &&
                      (size === 'S')
                      &&
                      (<svg
                          className='tag-icon-box' 
                          width="14" 
                          height="14" 
                          viewBox="0 0 14 14" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg">
                          <path 
                              fill-rule="evenodd" 
                              clip-rule="evenodd" 
                              d="M1.75 1.75H12.25C12.7332 1.75 13.125 2.14175 13.125 2.625V4.375C13.125 4.85825 12.7332
                               5.25 12.25 5.25V12.25C12.25 12.7332 11.8582 13.125 11.375 13.125H2.625C2.14175 
                               13.125 1.75 12.7332 1.75 12.25V5.25C1.26675 5.25 0.875 4.85825 0.875
                                4.375V2.625C0.875 2.14175 1.26675 1.75 1.75 1.75ZM8.75 9.1875H5.25C4.76675 
                                9.1875 4.375 8.79575 4.375 8.3125V7.4375C4.375 6.95425 4.76675 6.5625 5.25 
                                6.5625H8.75C9.23325 6.5625 9.625 6.95425 9.625 7.4375V8.3125C9.625 8.79575 
                                9.23325 9.1875 8.75 9.1875ZM5.25 7.4375V8.3125H8.75V7.4375H5.25ZM11.375 
                                12.25H2.625V5.25H11.375V12.25ZM1.75 4.375H12.25V2.625H1.75V4.375Z" 
                              fill="currentColor"/>
                      </svg>
                      )}
      
                  <p> {text} </p>
              </div>
          )
      }
      
      export default Tag;
      `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `.tag-container {
        border-radius: 10px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .tag-icon-regular, .tag-icon-box{
        padding-right: 6px;
    }
    
    .tag-container p {
        color: black;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 13.333px;
        font-weight: 400;
    }
    
    .tag-container.regular-green {
        background-color: #C8E451;
    }
    
    .tag-container.regular-green .tag-icon-regular{
        color: #4F6003;
    }
    
    .tag-container.regular-green .tag-icon-box{
        color: black;
    }
    
    .tag-container.regular-red {
        background-color: #F4BFBF;
    }
    
    .tag-container.regular-red .tag-icon-regular{
        color: #DB2929;
    }
    
    .tag-container.regular-red .tag-icon-box{
        color: black;
    }
    
    .tag-container.regular-light-green {
        background-color: #E8F4B4;
    }
    
    .tag-container.regular-light-green .tag-icon-regular{
        color: #9EC106;
    }
    
    .tag-container.regular-light-green .tag-icon-box{
        color: black;
    }
    
    .tag-container.regular-grey {
        background-color: #E5E5E5;
    }
    
    .tag-container.regular-grey .tag-icon-regular{
        color: #3E3C68;
    }
    
    .tag-container.disabled {
        background-color: #E5E5E5;
    }
    
    .tag-container.disabled .tag-icon-box{
        color: #999999;
    }
    
    .tag-container.disabled p{
        color: #999999;
    }
    
    .tag-container.info {
        background-color: #787795;
    }
    
    .tag-container.info .tag-icon-box, p{
        color: white;
    }
    
    .tag-container.info p{
        color: white;
    }
    
      `
    }
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `import { Component, Input } from '@angular/core';
      import { NgIf } from '@angular/common';
      
      @Component({
        selector: 'app-tag',
        standalone: true,
        imports: [NgIf],
        templateUrl: './tag.component.html',
        styleUrls: ['./tag.component.css']
      })
      export class TagComponent {
        @Input() size: string = '';
        @Input() icon: boolean = false;
        @Input() type: string = '';
        @Input() text: string = '';
      
        constructor() { }
      
        tagClasses(): any {
          return {
            'tag-container': true,
            'regular-green': ['creado', 'despachado', 'concluido', 'success'].includes(this.type),
            'regular-red': ['vencido', 'anulado', 'bloqueado', 'error'].includes(this.type),
            'regular-light-green': ['pendiente', 'progress'].includes(this.type),
            'regular-grey': this.type === 'en curso',
            'disabled': this.type === 'disabled',
            'info': this.type === 'info'
          };
        }
      
        tagStyles(): any {
          return {
            'height': this.size === 'L' ? '32px' : (this.size === 'M' ? '26px' : '18px'),
            'width': ['error', 'disabled', 'success', 'progress', 'info'].includes(this.type) ? '93px' : '108px'
          };
        }
      
        shouldRenderCircleIcon(): boolean {
          return this.icon && !['error', 'disabled', 'success', 'progress', 'info'].includes(this.type);
        }
      
        shouldRenderBoxIconL(): boolean {
          return this.icon && ['error', 'disabled', 'success', 'progress', 'info'].includes(this.type) && (this.size === 'L' || this.size === 'M');
        }
      
        shouldRenderBoxIconS(): boolean {
          return this.icon && ['error', 'disabled', 'success', 'progress', 'info'].includes(this.type) && this.size === 'S';
        }
      }
      
      `
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `<div [class]="tagClasses()" [style]="tagStyles()">
      <ng-container *ngIf="icon && shouldRenderCircleIcon()">
        <svg class="tag-icon-regular" width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
        </svg>
      </ng-container>
    
      <ng-container *ngIf="icon && shouldRenderBoxIconL()">
        <svg class="tag-icon-box" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 2.5H17.5C18.1904 2.5 18.75 3.05964 18.75 3.75V6.25C18.75 6.94036 18.1904 7.5 17.5 7.5V17.5C17.5 18.1904 16.9404 18.75 16.25 18.75H3.75C3.05964 18.75 2.5 18.1904 2.5 17.5V7.5C1.80964 7.5 1.25 6.94036 1.25 6.25V3.75C1.25 3.05964 1.80964 2.5 2.5 2.5ZM12.5 13.125H7.5C6.80964 13.125 6.25 12.5654 6.25 11.875V10.625C6.25 9.93464 6.80964 9.375 7.5 9.375H12.5C13.1904 9.375 13.75 9.93464 13.75 10.625V11.875C13.75 12.5654 13.1904 13.125 12.5 13.125ZM7.5 10.625V11.875H12.5V10.625H7.5ZM16.25 17.5H3.75V7.5H16.25V17.5ZM2.5 6.25H17.5V3.75H2.5V6.25Z" fill="currentColor"></path>
        </svg>
      </ng-container>
    
      <ng-container *ngIf="icon && shouldRenderBoxIconS()">
        <svg class="tag-icon-box" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 1.75H12.25C12.7332 1.75 13.125 2.14175 13.125 2.625V4.375C13.125 4.85825 12.7332 5.25 12.25 5.25V12.25C12.25 12.7332 11.8582 13.125 11.375 13.125H2.625C2.14175 13.125 1.75 12.7332 1.75 12.25V5.25C1.26675 5.25 0.875 4.85825 0.875 4.375V2.625C0.875 2.14175 1.26675 1.75 1.75 1.75ZM8.75 9.1875H5.25C4.76675 9.1875 4.375 8.79575 4.375 8.3125V7.4375C4.375 6.95425 4.76675 6.5625 5.25 6.5625H8.75C9.23325 6.5625 9.625 6.95425 9.625 7.4375V8.3125C9.625 8.79575 9.23325 9.1875 8.75 9.1875ZM5.25 7.4375V8.3125H8.75V7.4375H5.25ZM11.375 12.25H2.625V5.25H11.375V12.25ZM1.75 4.375H12.25V2.625H1.75V4.375Z" fill="currentColor"></path>
        </svg>
      </ng-container>
    
      <p>{{ text }}</p>
    </div>
    
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `.tag-container {
        border-radius: 10px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .tag-icon-regular, .tag-icon-box{
        padding-right: 6px;
    }
    
    .tag-container p {
        color: black;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 13.333px;
        font-weight: 400;
    }
    
    .tag-container.regular-green {
        background-color: #C8E451;
    }
    
    .tag-container.regular-green .tag-icon-regular{
        color: #4F6003;
    }
    
    .tag-container.regular-green .tag-icon-box{
        color: black;
    }
    
    .tag-container.regular-red {
        background-color: #F4BFBF;
    }
    
    .tag-container.regular-red .tag-icon-regular{
        color: #DB2929;
    }
    
    .tag-container.regular-red .tag-icon-box{
        color: black;
    }
    
    .tag-container.regular-light-green {
        background-color: #E8F4B4;
    }
    
    .tag-container.regular-light-green .tag-icon-regular{
        color: #9EC106;
    }
    
    .tag-container.regular-light-green .tag-icon-box{
        color: black;
    }
    
    .tag-container.regular-grey {
        background-color: #E5E5E5;
    }
    
    .tag-container.regular-grey .tag-icon-regular{
        color: #3E3C68;
    }
    
    .tag-container.disabled {
        background-color: #E5E5E5;
    }
    
    .tag-container.disabled .tag-icon-box{
        color: #999999;
    }
    
    .tag-container.disabled p{
        color: #999999;
    }
    
    .tag-container.info {
        background-color: #787795;
    }
    
    .tag-container.info .tag-icon-box, p{
        color: white;
    }
    
    .tag-container.info p{
        color: white;
    }
    
      `
    }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Tag</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Tag size="L" type="info" text="Éxito" icon={true} />
      </div>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Tag size="M" type="despachado" text="Despachado" />
      </div>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Tag size="S" type="error" text="Error" icon={false} />
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

export default TagComponent;

