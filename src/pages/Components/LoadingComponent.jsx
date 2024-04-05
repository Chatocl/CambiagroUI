import { ThemeContext } from '../../App'; 
import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import LoadingPersonal from "../../components/reactcomponents/Loading/loading"



export const LoadingComponent = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes =[
    {
      language: '',
      label: 'Vue JS',
      code: `<template>
      <div class="loading">
        <div
          :style="{
            width: loadingSize.width + 'px',
            height: loadingSize.height + 'px'
          }"
          :class="{ 'circle-loader': type === 'circle', 'linear-loader': type === 'linear' }">
        </div>
        <span :class="(label ? 'label-loading label-loading-active' : 'label-loading')">
          Label goes here
        </span>
      </div>
    </template>
    
    <script>
    export default {
      props: {
        size: {
          type: String,
          default: 'S'
        },
        label: {
          type: Boolean,
          default: false
        },
        type: {
          type: String,
          default: 'circle'
        }
      },
      computed: {
        loadingSize() {
          return this.getLoadingSize(this.size, this.type);
        }
      },
      methods: {
        getLoadingSize(size, type) {
          switch (size) {
            case 'L':
              return type === 'circle' ? { height: 84, width: 84 } : { height: 8, width: 380 };
            case 'M':
              return type === 'circle' ? { height: 64, width: 64 } : { height: 8, width: 240 };
            case 'S':
              return type === 'circle' ? { height: 48, width: 48 } : { height: 4, width: 160 };
            default:
              return type === 'circle' ? { height: 48, width: 48 } : { height: 4, width: 160 };
          }
        }
      }
    };
    </script>
  
  <style>
  :root {
      --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, 
      "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB",
       "Microsoft Yahei UI", "Microsoft Yahei", "Source Han Sans CN", sans-serif;
  }
  
  .loading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
  }
  
  .label-loading {
      display: none;
      font-family: Mark Pro, var(--default-font-family);
      font-size: 16px;
      font-weight: 400;
  }
  
  .label-loading-active {
      display: block;
  }
  
  
  .circle-loader {
      border: 7px solid #f3f3f3;
      border-radius: 50%;
      border-top: 7px solid #1CCC1D;
      -webkit-animation: spin 1s linear infinite;
      /* Safari */
      animation: spin 1s linear infinite;
  }
  
  /* Safari */
  @-webkit-keyframes spin {
      0% {
          -webkit-transform: rotate(0deg);
      }
  
      100% {
          -webkit-transform: rotate(360deg);
      }
  }
  
  @keyframes spin {
      0% {
          transform: rotate(0deg);
      }
  
      100% {
          transform: rotate(360deg);
      }
  }
  
  
  .linear-loader {
      background:
          linear-gradient(#1CCC1D 0 0) 0/0% no-repeat #ddd;
      animation: l1 2s infinite linear;
  }
  
  @keyframes l1 {
      100% {
          background-size: 100%
      }
  }
  </style>
    `
    },
  ];

  const nextcodes=[
    {
      language: 'JavaScript',
      label: 'Next JS',
      code: `import React from "react";
      import Style from "@/app/components/loading/style.css";
      
      const LoadingComponent = ({ size, type, label }) => {
        const getLoadingSize = (size, type) => {
          switch (size) {
            case "L":
              if (type === "circle") return { height: 84, width: 84 };
              else return { height: 8, width: 380 };
            case "M":
              if (type === "circle") return { height: 64, width: 64 };
              else return { height: 8, width: 240 };
            case "S":
              if (type === "circle") return { height: 48, width: 48 };
              else return { height: 4, width: 160 };
            default:
              if (type === "circle") return { height: 48, width: 48 };
              else return { height: 4, width: 160 };
          }
        };
      
        const loadingSize = getLoadingSize(size, type);
      
        return (
          <div className="loading">
            <div
              style={{
                width: \`\${loadingSize.width}px\`,
                height: \`\${loadingSize.height}px\`
              }}
              className={type === 'circle' ? 'circle-loader' : 'linear-loader'}
            ></div>
            <span className={label ? 'label-loading label-loading-active' : 'label-loading'}>
              Label goes here
            </span>
          </div>
        );
      };
      
      export default LoadingComponent;
      
    `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `:root {
        --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, 
        "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", "Source Han Sans CN", sans-serif;
    }
    
    .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
    
    .label-loading {
        display: none;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 400;
    }
    
    .label-loading-active {
        display: block;
    }
    
    
    .circle-loader {
        border: 7px solid #f3f3f3;
        border-radius: 50%;
        border-top: 7px solid #1CCC1D;
        -webkit-animation: spin 1s linear infinite;
        /* Safari */
        animation: spin 1s linear infinite;
    }
    
    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
    
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
    
        100% {
            transform: rotate(360deg);
        }
    }
    
    
    .linear-loader {
        background:
            linear-gradient(#1CCC1D 0 0) 0/0% no-repeat #ddd;
        animation: l1 2s infinite linear;
    }
    
    @keyframes l1 {
        100% {
            background-size: 100%
        }
    }
      
      `
    }
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `import { Component, Input } from '@angular/core';
      import { CommonModule } from '@angular/common';
      
      @Component({
        selector: 'app-loading',
        standalone: true,
        imports: [CommonModule],
        templateUrl: './loading.component.html',
        styleUrl: './loading.component.css'
      })
      export class LoadingComponent {
        @Input() size : string = "S";
        @Input() label : boolean = false;
        @Input() type : string = "circle";
      
        getLoadingSize(size: string, type:string): { height: number, width: number } {
          switch (size) {
            case "L":
              if(type === "circle") return { height: 84, width: 84 };
              else return { height: 8, width: 380 };
            case "M":
              if(type === "circle") return { height: 64, width: 64 };
              else return { height: 8, width: 240 };
            case "S":
              if(type === "circle") return { height: 48, width: 48 };
              else return { height: 4, width: 160 };
            default:
              if(type === "circle") return { height: 48, width: 48 };
              else return { height: 4, width: 160 };
          }
        }
      
      }
      `
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `<div class="loading">
      <div
          [ngStyle]="{ 
              'width.px': getLoadingSize(size, type).width, 
              'height.px': getLoadingSize(size, type).height
              }"
          [ngClass]="{
              'circle-loader': type === 'circle',
              'linear-loader': type === 'linear'
          }">
      </div>
      <span [ngClass]="(label ? 'label-loading label-loading-active' : 'label-loading')">Label goes here</span>
  </div>
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `:root {
        --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, 
        "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", 
        "Microsoft Yahei UI", "Microsoft Yahei", "Source Han Sans CN", sans-serif;
    }
    
    .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
    
    .label-loading {
        display: none;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 400;
    }
    
    .label-loading-active {
        display: block;
    }
    
    
    .circle-loader {
        border: 7px solid #f3f3f3;
        border-radius: 50%;
        border-top: 7px solid #1CCC1D;
        -webkit-animation: spin 1s linear infinite;
        /* Safari */
        animation: spin 1s linear infinite;
    }
    
    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
    
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
    
        100% {
            transform: rotate(360deg);
        }
    }
    
    
    .linear-loader {
        background:
            linear-gradient(#1CCC1D 0 0) 0/0% no-repeat #ddd;
        animation: l1 2s infinite linear;
    }
    
    @keyframes l1 {
        100% {
            background-size: 100%
        }
    }
      `
    }
  ];
  const { setTheme, theme } = useContext(ThemeContext); 
  const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
  const dividerColor = theme === "light" ? "#000000" : "#ffffff";
  return (
    <Container>
      <h1>Loading</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <LoadingPersonal type="circle" label={true} size="S"></LoadingPersonal>
      </div>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <LoadingPersonal type="linear" label={true} size="S"></LoadingPersonal>
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

export default LoadingComponent;
