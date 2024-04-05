import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import Breadcrumb from "../../components/reactcomponents/Breadcrumbs/Breadcrumb";
import { ThemeContext } from '../../App'; 

export const BreadcrumbsComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    
  };
  const breadcrumbItems = [
    { label: "Home", disabled: false },
    { label: "Products", disabled: false },
    { label: "Category", disabled: true },
    { label: "Current Page",  }
  ];
  
  const currentPage = "Current Page";  

  const vuecodes = [
    {
      language: 'javascript',
      label: 'Vue JS',
      code: `<template>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li v-for="(item, index) in items" :key="index" :class="{ 'breadcrumb-item': true, 'disabled': item.disabled }">
            <span v-if="item.disabled">{{ item.label }}</span>
            <a v-else :class="{ 'breadcrumb-link': true, 'current': item.label === current }">{{ item.label }}</a>
          </li>
        </ol>
      </nav>
    </template>
    
    <script>
    export default {
      props: {
        items: Array,
        current: String
      }
    }
    </script>
    
    <style scoped>
    :root {
      --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
      "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
      "Source Han Sans CN", sans-serif;
    }
    
    .breadcrumb {
      padding: 0;
      margin: 0;
      list-style: none;
      border-radius: 4px;
      display: flex;
      text-decoration: none;
    }
    
    .breadcrumb-item:last-child {
      color: #333333;
    }
    
    .breadcrumb-item.disabled {
      color: #999999;
    }
    
    .breadcrumb-link {
      color: #16A317;
      font-family: Mark Pro, var(--default-font-family);
      font-size: 14px;
      text-decoration: none;
    }
    
    .breadcrumb-link:hover {
      color: #0B520C; 
    }
    
    .breadcrumb-item:visited {
      color: #16A317;
    }
    
    .breadcrumb-item:hover,
    .breadcrumb-item:hover + .breadcrumb-item:before {
      color: #0B520C; 
      cursor: pointer;
    }
    
    .breadcrumb-item + .breadcrumb-item:before {
      content: '/';
      padding: 0 5px;
      color: #16A317;
    }
    
    .current {
      color: #1CCC1D;
    }
    </style>
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `import React from "react";
      import "./Breadcrumb.css";
      
      export default function Breadcrumb({ items, current }) {
        return (
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {items.map((item, index) => (
                <li key={index} className={\`breadcrumb-item \${item.disabled == true ? 'disabled' : ''}\`}>
                  {item.disabled === true ? (
                    <span>{item.label}</span>
                  ) : (
                    <a className={\`breadcrumb-link \${item.label === current ? 'current' : ''}\`}> {item.label}</a>
                  )}
                  
                </li>
              ))}
            </ol>
          </nav>
        );
      }
      
      `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `:root{
        --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
        "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
        "Source Han Sans CN", sans-serif;
    }
    .breadcrumb {
        padding: 0;
        margin: 0;
        list-style: none;
        border-radius: 4px;
        display: flex;
        text-decoration: none;
      }
      
      .breadcrumb-item:last-child {
        color: #333333;
      }
      
      .breadcrumb-item.disabled {
        color: #999999;
      }
      .breadcrumb-link{
        color: #16A317;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 14px;
        text-decoration: none;
      }
      .breadcrumb-link:hover{
        color: #0B520C; 
      }
      .breadcrumb-item:visited{
        color: #16A317;
      }
    
    .breadcrumb-item:hover,
    .breadcrumb-item:hover + .breadcrumb-item:before {
      color: #0B520C; 
      cursor: pointer;
    }
      .breadcrumb-item + .breadcrumb-item:before {
        content: '/';
        padding: 0 5px;
        color: #16A317;
      }
    
    .current{
      color: #1CCC1D;
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
        selector: 'app-breadcrumbs',
        templateUrl: './breadcrumbs.component.html',
        styleUrls: ['./breadcrumbs.component.css']
      })
      export class BreadcrumbsComponent {
        @Input() items: { label: string, url: string, disabled: boolean }[] = [];
        @Input() current: string = '';
      }
      `
    },
    {
        language: 'typescripts',
        label: 'Angular TS SPEC',
        code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

        import { BreadcrumbsComponent } from './breadcrumbs.component';
        
        describe('BreadcrumbsComponent', () => {
          let component: BreadcrumbsComponent;
          let fixture: ComponentFixture<BreadcrumbsComponent>;
        
          beforeEach(async () => {
            await TestBed.configureTestingModule({
              declarations: [BreadcrumbsComponent]
            })
            .compileComponents();
            
            fixture = TestBed.createComponent(BreadcrumbsComponent);
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
      code: `<!-- breadcrumb.component.html -->
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li *ngFor="let item of items; let i = index" [class.disabled]="item.disabled">
              <span *ngIf="item.disabled">{{ item.label }}</span>
              <a *ngIf="!item.disabled" [routerLink]="item.url" [class.current]="item.label === current">{{ item.label }}</a>
            </li>
          </ol>
        </nav>
        
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `/* breadcrumb.component.css */
      .breadcrumb {
          padding: 0;
          margin: 0;
          list-style: none;
          border-radius: 4px;
          display: flex;
          text-decoration: none;
        }
        
        .breadcrumb-item:last-child {
          color: #333333;
        }
        
        .breadcrumb-item.disabled {
          color: #999999;
        }
        
        .breadcrumb-link {
          color: #16A317;
          font-family: Mark Pro, var(--default-font-family);
          font-size: 14px;
          text-decoration: none;
        }
        
        .breadcrumb-link:hover {
          color: #0B520C;
        }
        
        .breadcrumb-item:visited {
          color: #16A317;
        }
        
        .breadcrumb-item:hover,
        .breadcrumb-item:hover + .breadcrumb-item:before {
          color: #0B520C;
          cursor: pointer;
        }
        
        .breadcrumb-item + .breadcrumb-item:before {
          content: '/';
          padding: 0 5px;
          color: #16A317;
        }
        
        .current {
          color: #1CCC1D;
        }
        
      `
    }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Breadcrumbs</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Breadcrumb items={breadcrumbItems} current={currentPage} />
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
background-color: #ffff;
`;

const Container = styled.div`
   height: 100vh;
   margin: 50px;
`;


export default BreadcrumbsComponent;

