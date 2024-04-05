import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import Search from "../../components/reactcomponents/Search/Search";
import { ThemeContext } from '../../App'; 

export const SearchComponente = () => {
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
      <div :class="!active ? 'disabled-search' : \`search-container \${isFocused ? 'focused' : \`\${inputValue ? 'filled' : ''}\`}\`"
        :style="{ height: size === 'L' ? '56px' : (size === 'M' ? '48px' : '40px') }"
      >
      <div class='search-icon'>
          <svg v-if="inputValue && auxiliar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" @click="handleClearInput">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M17.7896 16.73L13.3166 12.2569C14.5355 10.7661 15.1349 8.86379 14.9906
           6.94347C14.8463 5.02315 13.9694 3.23175 12.5414 1.9398C11.1133 0.647857 9.24335 -0.0457868 7.31822 
           0.00234752C5.39309 0.0504818 3.56011 0.836711 2.19841 2.19841C0.836711 3.56011 0.0504818 5.39309 0.00234752 
           7.31822C-0.0457868 9.24335 0.647857 11.1133 1.9398 12.5414C3.23175 13.9694 5.02315 14.8463 6.94347 14.9906C8.86379 
           15.1349 10.7661 14.5355 12.2569 13.3166L16.73 17.7896C16.8713 17.9261 17.0606 18.0017 17.2571 18C17.4536 17.9983 
           17.6416 17.9195 17.7805 17.7805C17.9195 17.6416 17.9983 17.4536 18 17.2571C18.0017 17.0606 17.9261 16.8713 17.7896 
           16.73ZM7.51783 13.5129C6.33212 13.5129 5.17303 13.1613 4.18714 12.5026C3.20126 11.8438 2.43286 10.9075 1.9791 9.81204C1.52535 
           8.71659 1.40663 7.51118 1.63795 6.34825C1.86927 5.18532 2.44025 4.1171 3.27867 3.27867C4.1171 2.44025 5.18532 1.86927 6.34825
            1.63795C7.51118 1.40663 8.71659 1.52535 9.81204 1.9791C10.9075 2.43286 11.8438 3.20126 12.5026 4.18714C13.1613 5.17303 13.5129 
            6.33212 13.5129 7.51783C13.5111 9.10727 12.8789 10.6311 11.755 11.755C10.6311 12.8789 9.10727 13.5111 7.51783 13.5129Z"/>
        </svg>
      </div>
        
        <input type='text' class='search-text' :placeholder="placeholder" v-model="inputValue" @focus="handleInputFocus" @blur="handleInputBlur" :disabled="!active" />
      </div>
    </template>
    
    <script>
    export default {
      props: ['size', 'placeholder', 'active'],
      data() {
        return {
          inputValue: '',
          isFocused: false,
          auxiliar: false
        }
      },
      methods: {
        handleInputChange(event) {
          this.inputValue = event.target.value;
        },
        handleInputFocus() {
          this.isFocused = true;
        },
        handleInputBlur() {
          this.isFocused = false;
          this.auxiliar = true;
        },
        handleClearInput() {
          this.inputValue = '';
          this.auxiliar = false;
        }
      }
    }
    </script>
    
    <style scoped>
    @import './Search.css';
    </style>
    `
    },
    {
      language: 'css',
      label: 'Vue CSS',
      code: `.search-container {
        display: flex;
        align-items: center;
        border: 1px solid black;
        border-radius: 40px;
        width: 312px;
        transition: border-color 0.3s ease;
        background-color: white;
      }
      
      .search-icon{
        padding-left: 16px;
        color: #1CCC1D;
        height: 24px;
      }
    
      .search-text{
        height: 24px;
        width: 244px;
        margin-right: 16px;
        border: none;
        margin-left: 12px;
        padding: 0;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      /*Hover*/
    
      .search-container:hover {
        border: 1px solid #0B520C;
      }
    
      .search-container:hover .search-icon{
        color: #0B520C;
      }
    
      .search-container:hover .search-text{
        color: #0B520C;
      }
    
      .search-container:hover .search-text::placeholder{
        color: #0B520C;
      }
    
      /*Focus*/
      .search-container.focused {
        border: 2px solid #1CCC1D;
      }
    
      .search-container.focused input:focus{
        outline: none;
      }
    
      /*Filled*/
      .search-container.filled {
        display: flex;
        flex-direction: row-reverse;
      }
    
      .search-container.filled .search-text{
        margin-left: 16px;
        margin-right: 12px;
        padding: 0;
      }
    
      .search-container.filled .search-icon{
        padding-right: 16px;
        color: black;
        cursor: pointer;
      }
    
      /*Disabled*/
      .disabled-search{
        display: flex;
        align-items: center;
        border-radius: 40px;
        width: 312px;
        transition: border-color 0.3s ease;
        border: none;
        background-color: #E5E5E5;
      }
    
      .disabled-search .search-icon{
        color: #999999;
      }
    
      .disabled-search .search-text{
        background-color: #E5E5E5;
      }
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `import React, { useState } from 'react';
      import './Search.css'; // Importa tu archivo CSS para los estilos
      
      const Search = ({ size, placeholder, active }) => {
        const [inputValue, setInputValue] = useState('');
        const [isFocused, setIsFocused] = useState(false);
        const [auxiliar, setAuxiliar] = useState(false);
      
        const handleInputChange = (event) => {
          setInputValue(event.target.value);
        };
      
        const handleInputFocus = () => {
          setIsFocused(true);
        };
      
        const handleInputBlur = () => {
          setIsFocused(false);
          setAuxiliar(true);
        };
      
        const handleClearInput = () => {
          setInputValue('');
          setAuxiliar(false);
        };
      
        return (
          <div className={!active? 'disabled-search' :\`search-container \${isFocused ? 'focused' : \`\${inputValue ? 'filled' : ''}\`}\`}
            style={{
              height: size === 'L' ? '56px' :
                (size === 'M' ? '48px' : '40px')
            }}
          >
            {inputValue && auxiliar ? (
              //Auxiliar, sirve para mostrar la 'X' solo cuando el usuario deje de escribir y salga del input
              <svg
                className='search-icon'
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                onClick={handleClearInput}
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            ) : (
              <svg
                className='search-icon'
                width="24"
                height="24"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg">
      
                <path
                  fill="currentColor" 
                  d="M17.7896 16.73L13.3166 12.2569C14.5355 10.7661 15.1349 8.86379 14.9906 6.94347C14.8463 5.02315 13.9694 3.23175 12.5414 1.9398C11.1133 0.647857 9.24335 -0.0457868 7.31822 0.00234752C5.39309 0.0504818 3.56011 0.836711 2.19841 2.19841C0.836711 3.56011 0.0504818 5.39309 0.00234752 7.31822C-0.0457868 9.24335 0.647857 11.1133 1.9398 12.5414C3.23175 13.9694 5.02315 14.8463 6.94347 14.9906C8.86379 15.1349 10.7661 14.5355 12.2569 13.3166L16.73 17.7896C16.8713 17.9261 17.0606 18.0017 17.2571 18C17.4536 17.9983 17.6416 17.9195 17.7805 17.7805C17.9195 17.6416 17.9983 17.4536 18 17.2571C18.0017 17.0606 17.9261 16.8713 17.7896 16.73ZM7.51783 13.5129C6.33212 13.5129 5.17303 13.1613 4.18714 12.5026C3.20126 11.8438 2.43286 10.9075 1.9791 9.81204C1.52535 8.71659 1.40663 7.51118 1.63795 6.34825C1.86927 5.18532 2.44025 4.1171 3.27867 3.27867C4.1171 2.44025 5.18532 1.86927 6.34825 1.63795C7.51118 1.40663 8.71659 1.52535 9.81204 1.9791C10.9075 2.43286 11.8438 3.20126 12.5026 4.18714C13.1613 5.17303 13.5129 6.33212 13.5129 7.51783C13.5111 9.10727 12.8789 10.6311 11.755 11.755C10.6311 12.8789 9.10727 13.5111 7.51783 13.5129Z"/>
              </svg>
      
      
            )}
      
            <input type='text'
              className='search-text'
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              disabled = {!active}
            />
          </div>
        );
      };
      
      export default Search;
      
      `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `.search-container {
        display: flex;
        align-items: center;
        border: 1px solid black;
        border-radius: 40px;
        width: 312px;
        transition: border-color 0.3s ease;
        background-color: white;
      }
      
      .search-icon{
        padding-left: 16px;
        color: #1CCC1D;
      }
    
      .search-text{
        height: 24px;
        width: 244px;
        margin-right: 16px;
        border: none;
        margin-left: 12px;
        padding: 0;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      /*Hover*/
    
      .search-container:hover {
        border: 1px solid #0B520C;
      }
    
      .search-container:hover .search-icon{
        color: #0B520C;
      }
    
      .search-container:hover .search-text{
        color: #0B520C;
      }
    
      .search-container:hover .search-text::placeholder{
        color: #0B520C;
      }
    
      /*Focus*/
      .search-container.focused {
        border: 2px solid #1CCC1D;
      }
    
      .search-container.focused input:focus{
        outline: none;
      }
    
      /*Filled*/
      .search-container.filled {
        display: flex;
        flex-direction: row-reverse;
      }
    
      .search-container.filled .search-text{
        margin-left: 16px;
        margin-right: 12px;
        padding: 0;
      }
    
      .search-container.filled .search-icon{
        padding-right: 16px;
        color: black;
        cursor: pointer;
      }
    
      /*Disabled*/
      .disabled-search{
        display: flex;
        align-items: center;
        border-radius: 40px;
        width: 312px;
        transition: border-color 0.3s ease;
        border: none;
        background-color: #E5E5E5;
      }
    
      .disabled-search .search-icon{
        color: #999999;
      }
    
      .disabled-search .search-text{
        background-color: #E5E5E5;
      }
      `
    }
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `import { Component,Input } from '@angular/core';

      @Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css']
      })
      
      export class SearchComponent {
        @Input() size = "S";
        @Input() placeholder = "";
        @Input() active = true;
        inputValue: string = '';
        isFocused: boolean = false;
        auxiliar: boolean = false;
      
        handleInputChange(event: any): void {
          this.inputValue = event.target.value;
        }
      
        handleInputFocus(): void {
          this.isFocused = true;
        }
      
        handleInputBlur(): void {
          this.isFocused = false;
          this.auxiliar = true;
        }
      
        handleClearInput(): void {
          this.inputValue = '';
          this.auxiliar = false;
        }
      }
      
      `
    },
    { 
    language: 'typescript',
    label: 'Angular TS Module',
    code: `import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormsModule } from '@angular/forms';
    
    import { SearchComponent } from './search.component';
    
    @NgModule({
      declarations: [
        SearchComponent
      ],
      imports: [
        CommonModule,
        FormsModule
      ],
      exports: [
        SearchComponent
      ]
    })
    export class SearchModule { }
    
    
    `
  },
    {
      language: 'html',
      label: 'Angular Html',
      code: `<div class="search-container" [class.disabled-search]="!active"
      [class.focused]="isFocused" [class.filled]="inputValue && auxiliar"
      [style.height]="size === 'L' ? '56px' : (size === 'M' ? '48px' : '40px')">
   <div class="search-icon" *ngIf="inputValue && auxiliar">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" (click)="handleClearInput()">
       <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
       <path d="M0 0h24v24H0z" fill="none" />
     </svg>
   </div>
   <div class="search-icon" *ngIf="!inputValue || !auxiliar">
     <svg width="24" height="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
       <path fill="currentColor"
             d="M17.7896 16.73L13.3166 12.2569C14.5355 10.7661 15.1349 8.86379 14.9906 6.94347C14.8463 5.02315 13.9694 3.23175 12.5414 1.9398C11.1133 0.647857 9.24335 -0.0457868 7.31822 0.00234752C5.39309 0.0504818 3.56011 0.836711 2.19841 2.19841C0.836711 3.56011 0.0504818 5.39309 0.00234752 7.31822C-0.0457868 9.24335 0.647857 11.1133 1.9398 12.5414C3.23175 13.9694 5.02315 14.8463 6.94347 14.9906C8.86379 15.1349 10.7661 14.5355 12.2569 13.3166L16.73 17.7896C16.8713 17.9261 17.0606 18.0017 17.2571 18C17.4536 17.9983 17.6416 17.9195 17.7805 17.7805C17.9195 17.6416 17.9983 17.4536 18 17.2571C18.0017 17.0606 17.9261 16.8713 17.7896 16.73ZM7.51783 13.5129C6.33212 13.5129 5.17303 13.1613 4.18714 12.5026C3.20126 11.8438 2.43286 10.9075 1.9791 9.81204C1.52535 8.71659 1.40663 7.51118 1.63795 6.34825C1.86927 5.18532 2.44025 4.1171 3.27867 3.27867C4.1171 2.44025 5.18532 1.86927 6.34825 1.63795C7.51118 1.40663 8.71659 1.52535 9.81204 1.9791C10.9075 2.43286 11.8438 3.20126 12.5026 4.18714C13.1613 5.17303 13.5129 6.33212 13.5129 7.51783C13.5111 9.10727 12.8789 10.6311 11.755 11.755C10.6311 12.8789 9.10727 13.5111 7.51783 13.5129Z" />
     </svg>
   </div>
   <input type="text" class="search-text" (focus)="handleInputFocus()" (blur)="handleInputBlur()"
          [placeholder]="placeholder" [(ngModel)]="inputValue" [disabled]="!active"
          (input)="handleInputChange($event)" />
 </div>
 
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `.search-container {
        display: flex;
        align-items: center;
        border: 1px solid black;
        border-radius: 40px;
        width: 312px;
        transition: border-color 0.3s ease;
        background-color: white;
      }
      
      .search-icon{
        padding-left: 16px;
        color: #1CCC1D;
        height: 24px;
      }
    
      .search-text{
        height: 24px;
        width: 244px;
        margin-right: 16px;
        border: none;
        margin-left: 12px;
        padding: 0;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      /*Hover*/
    
      .search-container:hover {
        border: 1px solid #0B520C;
      }
    
      .search-container:hover .search-icon{
        color: #0B520C;
      }
    
      .search-container:hover .search-text{
        color: #0B520C;
      }
    
      .search-container:hover .search-text::placeholder{
        color: #0B520C;
      }
    
      /*Focus*/
      .search-container.focused {
        border: 2px solid #1CCC1D;
      }
    
      .search-container.focused input:focus{
        outline: none;
      }
    
      /*Filled*/
      .search-container.filled {
        display: flex;
        flex-direction: row-reverse;
      }
    
      .search-container.filled .search-text{
        margin-left: 16px;
        margin-right: 12px;
        padding: 0;
      }
    
      .search-container.filled .search-icon{
        padding-right: 16px;
        color: black;
        cursor: pointer;
        height: 24px;
      }
    
      /*Disabled*/
      .disabled-search{
        display: flex;
        align-items: center;
        border-radius: 40px;
        width: 312px;
        transition: border-color 0.3s ease;
        border: none;
        background-color: #E5E5E5;
      }
    
      .disabled-search .search-icon{
        color: #999999;
      }
    
      .disabled-search .search-text{
        background-color: #E5E5E5;
      }
      `
    }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Search</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Search size="M" placeholder="Buscar..." active={true} />
      
      </div>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Search size="M" placeholder="Buscar..." active={false} />
      
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

export default SearchComponente;

