import { ThemeContext } from '../../App'; 
import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import TextareaPersonal from '../../components/reactcomponents/Textarea/Textarea';



export const TextAreaComponent = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes =[
    {
      language: 'Vue',
      label: 'Vue JS',
      code: `<template>
      <div class="main-container-text">
        <span :class="['label-text', disabled ? 'disabled-text' : '']">{{ label }}</span>
        <span :class="['char-counter-text', disabled ? 'disabled-text' : '']">{{ text.length }}/{{ maxLength }}</span>
        <textarea
          class="textarea"
          :class="{'disabled-textarea': disabled, 'error-textarea': error}"
          placeholder="Placeholder text"
          :value="text"
          @input="handleChange"
          :maxlength="maxLength"
        ></textarea>
        <span class="error">{{ error }}</span>
      </div>
    </template>
    
    <script>
    export default {
      props: {
        label: String,
        error: String,
        disabled: Boolean,
      },
      data() {
        return {
          text: '',
          maxLength: 100,
        };
      },
      methods: {
        handleChange(event) {
          this.text = event.target.value;
        },
      },
    };
    </script>
    
    <style scoped>
  :root {
      --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
          "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
          "Source Han Sans CN", sans-serif;
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
  
  .main-container-text {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto 1fr;
      align-items: center;
      justify-content: center;
      width: 278px;
  }
  
  .label-text {
      font-family: var(--default-font-family);
      font-size: 14px;
      line-height: 1.5;
      color: #000000;
      margin-bottom: 10px;
  }
  
  .char-counter-text {
      font-family: var(--default-font-family);
      font-size: 14px;
      text-align: right;
      line-height: 1.5;
      color: #000000;
      margin-bottom: 10px;
  }
  
  .textarea {
      grid-column: span 2;
      resize: none;
      padding: 10px;
      height: 78px;
      width: 270px;
      font-family: var(--default-font-family);
      font-size: 14px;
      line-height: 1.5;
      color: #000000;
      border: 1px solid #000000;
      border-radius: 8px;
  }
  
  .textarea:focus {
      /* Estilos cuando el textarea está enfocado */
      border-color: #16A317;
      /* Cambia el color del borde */
  }
  
  .error {
      grid-column: span 2;
      font-family: var(--default-font-family);
      font-size: 12px;
      line-height: 1.5;
      color: #DB2929;
      margin-bottom: 10px;
  }
  
  .error-textarea {
      border: 1px solid #DB2929;
      border-radius: 8px;
  }
  
  .error-textarea:focus {
      border: 1px solid #DB2929;
      border-radius: 8px;
  }
  
  .disabled-textarea {
      background-color: #E5E5E5;
      color: #E5E5E5;
      border: none;
      cursor: not-allowed;
      pointer-events: none;
  }
  
  .disabled-textarea::placeholder,
  .disabled-text {
      color: #999999;
  }
  
  .textarea.error-textarea {
      background-image: url('./warning.svg');
      background-repeat: no-repeat;
      background-position: calc(100% - 10px) calc(100% - 50px);
      padding-right: 30px;
  }
    </style>
    
    `
    },
  ];

  const nextcodes=[
    {
      language: 'JavaScript',
      label: 'Next JS',
      code: `"use client";
      import React from "react";
      import { useState } from "react";
      import "./Textarea.css";
      
      export default function Textarea({ label, error, disabled }) {
        const [text, setText] = useState("");
        const maxLength = 100;
      
        const handleChange = (event) => {
          const newText = event.target.value;
          setText(newText);
        };
      
        return (
          <>
            <div className="main-container-text">
              <span
                className={\`label-text
              \${disabled ? "disabled-text" : ""}
              \`}
              >
                {label}
              </span>
              <span className={\`char-counter-text
              \${disabled ? "disabled-text" : ""}
              \`}>
                {text.length}/{maxLength}
              </span>
              <textarea
                className={\`textarea 
                 \${disabled ? "disabled-textarea" : ""} 
                 \${error ? "error-textarea" : ""}
                 \`}
                placeholder="Placeholder text"
                value={text}
                onChange={handleChange}
                maxLength={maxLength}
              />
      
      
              <span className="error">{error}</span>
            </div>
          </>
        );
      }
      
      
    `
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
    
    .main-container-text {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto 1fr;
        align-items: center;
        justify-content: center;
        width: 278px;
    }
    
    .label-text {
        font-family: var(--default-font-family);
        font-size: 14px;
        line-height: 1.5;
        color: #000000;
        margin-bottom: 10px;
    }
    
    .char-counter-text {
        font-family: var(--default-font-family);
        font-size: 14px;
        text-align: right;
        line-height: 1.5;
        color: #000000;
        margin-bottom: 10px;
    }
    
    .textarea {
        grid-column: span 2;
        resize: none;
        padding: 10px;
        height: 78px;
        width: 270px;
        font-family: var(--default-font-family);
        font-size: 14px;
        line-height: 1.5;
        color: #000000;
        border: 1px solid #000000;
        border-radius: 8px;
    }
    
    .textarea:focus {
        /* Estilos cuando el textarea está enfocado */
        border-color: #16A317;
        /* Cambia el color del borde */
    }
    
    .error {
        grid-column: span 2;
        font-family: var(--default-font-family);
        font-size: 12px;
        line-height: 1.5;
        color: #DB2929;
        margin-bottom: 10px;
    }
    
    .error-textarea {
        border: 1px solid #DB2929;
        border-radius: 8px;
    }
    
    .error-textarea:focus {
        border: 1px solid #DB2929;
        border-radius: 8px;
    }
    
    .disabled-textarea {
        background-color: #E5E5E5;
        color: #E5E5E5;
        border: none;
        cursor: not-allowed;
        pointer-events: none;
    }
    
    .disabled-textarea::placeholder,
    .disabled-text {
        color: #999999;
    }
    
    .textarea.error-textarea {
        background-image: url('./warning.svg');
        background-repeat: no-repeat;
        background-position: calc(100% - 15px) calc(100% - 72px);
        padding-right: 30px;
    }
      
      `
    }
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `import { Component, Input } from '@angular/core';

      @Component({
        selector: 'app-textarea',
        templateUrl: './textarea.component.html',
        styleUrl: './textarea.component.css'
      })
      export class TextareaComponent {
        @Input() label: string;
        @Input() error: string;
        @Input() disabled: boolean;
      
        text: string = '';
        maxLength: number = 100;
      
        constructor() {
          this.label = '';
          this.error = '';
          this.disabled = false;
        }
        handleChange(event: any) {
          this.text = event.target.value;
        }
      }
      `
    },
    {
        language: 'typescript',
        label: 'Angular Spec TS',
        code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

        import { TextareaComponent } from './textarea.component';
        
        describe('TextareaComponent', () => {
          let component: TextareaComponent;
          let fixture: ComponentFixture<TextareaComponent>;
        
          beforeEach(async () => {
            await TestBed.configureTestingModule({
              declarations: [TextareaComponent]
            })
            .compileComponents();
            
            fixture = TestBed.createComponent(TextareaComponent);
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
      code: `<div class="main-container-text">
      <span [class]="'label-text' + (disabled ? ' disabled-text' : '')">{{ label }}</span>
      <span [class]="'char-counter-text' + (disabled ? ' disabled-text' : '')">{{ text.length }}/{{ maxLength }}</span>
      <textarea
        class="textarea"
        [class.disabled-textarea]="disabled"
        [class.error-textarea]="error"
        placeholder="Placeholder text"
        [(ngModel)]="text"
        (input)="handleChange($event)"
        [maxlength]="maxLength"
      ></textarea>
      <span class="error">{{ error }}</span>
    </div>
    
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `:host {
        --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", "Source Han Sans CN", sans-serif;
      }
      
      .main-container-text {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto 1fr;
        align-items: center;
        justify-content: center;
        width: 278px;
      }
      
      .label-text {
        font-family: var(--default-font-family);
        font-size: 14px;
        line-height: 1.5;
        color: #000000;
        margin-bottom: 10px;
      }
      
      .char-counter-text {
        font-family: var(--default-font-family);
        font-size: 14px;
        text-align: right;
        line-height: 1.5;
        color: #000000;
        margin-bottom: 10px;
      }
      
      .textarea {
        grid-column: span 2;
        resize: none;
        padding: 10px;
        height: 78px;
        width: 270px;
        font-family: var(--default-font-family);
        font-size: 14px;
        line-height: 1.5;
        color: #000000;
        border: 1px solid #000000;
        border-radius: 8px;
      }
      
      .textarea:focus {
        border-color: #16A317;
      }
      
      .error {
        grid-column: span 2;
        font-family: var(--default-font-family);
        font-size: 12px;
        line-height: 1.5;
        color: #DB2929;
        margin-bottom: 10px;
      }
      
      .disabled-textarea {
        background-color: #E5E5E5;
        color: #E5E5E5;
        border: none;
        cursor: not-allowed;
        pointer-events: none;
      }
      
      .disabled-textarea::placeholder,
      .disabled-text {
        color: #999999;
      }
      
      .error-textarea {
        border: 1px solid #DB2929;
        border-radius: 8px;
      }
      
      .error-textarea:focus {
        border: 1px solid #DB2929;
        border-radius: 8px;
      }
      
      .textarea.error-textarea {
        background-image: url('warning.svg');
        background-repeat: no-repeat;
        background-position: calc(100% - 10px) calc(100% - 75px);
        padding-right: 30px;
      }
      
      `
    }
  ];
  const { setTheme, theme } = useContext(ThemeContext); 
  const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
  const dividerColor = theme === "light" ? "#000000" : "#ffffff";
  return (
    <Container>
      <h1>Text Area</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TextareaPersonal label="Description" error="This field is required" />
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

export default TextAreaComponent;
