import { ThemeContext } from '../../App'; 
import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import Accordion from "../../components/reactcomponents/Accordion/Accordion"



export const AccordionComponent = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes =[
    {
      language: 'JavaScript',
      label: 'Vue JS',
      code: `<template>
      <div style="width: 448px;">
        <div :class="active ? 'AccordionHeader' : 'DisabledAccordionHeader'" @click="toggleCategory" style="display: flex; align-items: center;">
          <h5>{{ title }}</h5>
          <svg :class="active ? 'AccordionIcon' : 'DisabledAccordionIcon'"
               :style="{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.5s ease' }"
               width="16"
               height="16"
               viewBox="0 0 320 512"
               xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor"
                  d="M310.6 246.6l-127.1 128c-9.4 9.4-24.6 9.4-33.9 0l-127.1-128c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 
                  24.6-9.4 33.9 0L160 289.9l110.6-110.6c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6C320 222 320 237.2 310.6 246.6z" />
          </svg>
        </div>
        <div v-if="isOpen" class="AccordionBody">
          <p>{{ children }}</p>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      props: {
        title: String,
        children: String,
        active: Boolean
      },
      data() {
        return {
          isOpen: false
        };
      },
      methods: {
        toggleCategory() {
          if (this.active) {
            this.isOpen = !this.isOpen;
          }
        }
      }
    };
    </script>
    
    <style scoped src="./Accordion.css">
    </style>
    
    `
    },
    {
      language: 'css',
      label: 'Vue CSS',
      code: `.AccordionHeader {
        cursor: pointer;
        height: 40px;
        border-bottom: solid 1px #1CCC1D;
      }
      
      .AccordionHeader:hover {
        border-bottom: solid 1px #0B520C;
      }
      
      .AccordionHeader:hover .AccordionIcon{
        color: #0B520C;
      }
      
      .AccordionHeader h5 {
        padding-left: 16px;
        padding-top: 10px;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .AccordionBody p {
        padding: 0 16px;
        padding-top: 10px;
        margin: 0;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .AccordionIcon {
        margin-left: auto;
        color: rgb(28, 204, 29);
        width: 25px;
        height: 25px;
        margin-right: 16px;
      }
      
      /*Disabled*/
      .DisabledAccordionHeader{
        cursor: not-allowed;
        height: 40px;
        border-bottom: solid 1px #999999;
      }
      
      .DisabledAccordionHeader h5 {
        padding-left: 16px;
        padding-top: 10px;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .DisabledAccordionHeader p {
        padding: 0 16px;
        padding-top: 10px;
        margin: 0;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .DisabledAccordionIcon{
        margin-left: auto;
        color: #999999;
        width: 25px;
        height: 25px;
        margin-right: 16px;
      }
      
      `
    }
  ];

  const nextcodes=[
    {
      language: 'JavaScript',
      label: 'Next JS',
      code: `import React, { useState } from 'react';
      import './Accordion.css'
      
      const Accordion = ({ title, children, active }) => {
          const [isOpen, setIsOpen] = useState(false);
      
          const toggleCategory = () => {
              active ? setIsOpen(!isOpen) : setIsOpen(isOpen)
          };
      
          return (
              <div>
                  <div style={{ width: "448px" }}>
                      <div className={active ? \`AccordionHeader\` : \`DisabledAccordionHeader\`}
                       onClick={() => toggleCategory()} style={{ display: "flex", alignItems: "center" }}>
                          <h5>{title}</h5>
                          <svg className={active ? \`AccordionIcon\` : \`DisabledAccordionIcon\`}
                              style={{
                                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transition: 'transform 0.5s ease',
                              }}
                              width="16"
                              height="16"
                              viewBox="0 0 320 512"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  fill="currentColor"
                                  d="M310.6 246.6l-127.1 128c-9.4 9.4-24.6 9.4-33.9 0l-127.1-128c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4
                                   33.9 0L160 289.9l110.6-110.6c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6C320 222 320 237.2 310.6 246.6z"
                              />
                          </svg>
                      </div>
                      {isOpen && (
                          <div className='AccordionBody'>
                              <p>{children}</p>
                          </div>
                      )}
                  </div>
              </div>
          );
      };
      
      export default Accordion;
      
    `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `.AccordionHeader {
        cursor: pointer;
        height: 40px;
        border-bottom: solid 1px #1CCC1D;
      }
      
      .AccordionHeader:hover {
        border-bottom: solid 1px #0B520C;
      }
      
      .AccordionHeader:hover .AccordionIcon{
        color: #0B520C;
      }
      
      .AccordionHeader h5 {
        padding-left: 16px;
        padding-top: 10px;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .AccordionBody p {
        padding: 0 16px;
        padding-top: 10px;
        margin: 0;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .AccordionIcon {
        margin-left: auto;
        color: rgb(28, 204, 29);
        width: 25px;
        height: 25px;
        margin-right: 16px;
      }
      
      /*Disabled*/
      .DisabledAccordionHeader{
        cursor: not-allowed;
        height: 40px;
        border-bottom: solid 1px #999999;
      }
      
      .DisabledAccordionHeader h5 {
        padding-left: 16px;
        padding-top: 10px;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .DisabledAccordionHeader p {
        padding: 0 16px;
        padding-top: 10px;
        margin: 0;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .DisabledAccordionIcon{
        margin-left: auto;
        color: #999999;
        width: 25px;
        height: 25px;
        margin-right: 16px;
      }
      
      `
    }
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `// accordion.component.ts
      import { NgIf } from '@angular/common';
      import { Component, Input } from '@angular/core';
      
      @Component({
        selector: 'app-accordion',
        standalone: true,
        imports: [NgIf],
        templateUrl: './accordion.component.html',
        styleUrls: ['./accordion.component.css']
      })
      export class AccordionComponent {
        @Input() title = "";
        @Input() children = "";
        @Input() active = true;
      
        isOpen: boolean = false;
      
        toggleCategory() {
          if (this.active) {
            this.isOpen = !this.isOpen;
          }
        }
      }
      `
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `<!-- accordion.component.html -->
      <div style="width: 448px;">
          <div [class]="active ? 'AccordionHeader' : 'DisabledAccordionHeader'" (click)="toggleCategory()" style="display: flex; align-items: center;">
            <h5>{{ title }}</h5>
            <svg [class]="active ? 'AccordionIcon' : 'DisabledAccordionIcon'"
                 [style.transform]="isOpen ? 'rotate(180deg)' : 'rotate(0deg)'"
                 style="transition: transform 0.5s ease"
                 width="16"
                 height="16"
                 viewBox="0 0 320 512"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                    d="M310.6 246.6l-127.1 128c-9.4 9.4-24.6 9.4-33.9 0l-127.1-128c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 
                    0L160 289.9l110.6-110.6c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6C320 222 320 237.2 310.6 246.6z" />
            </svg>
          </div>
          <div *ngIf="isOpen" class="AccordionBody">
            <p>{{ children }}</p>
          </div>
        </div>
        
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `.AccordionHeader {
        cursor: pointer;
        height: 40px;
        border-bottom: solid 1px #1CCC1D;
      }
      
      .AccordionHeader:hover {
        border-bottom: solid 1px #0B520C;
      }
      
      .AccordionHeader:hover .AccordionIcon{
        color: #0B520C;
      }
      
      .AccordionHeader h5 {
        padding-left: 16px;
        padding-top: 10px;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .AccordionBody p {
        padding: 0 16px;
        padding-top: 10px;
        margin: 0;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .AccordionIcon {
        margin-left: auto;
        color: rgb(28, 204, 29);
        width: 25px;
        height: 25px;
        margin-right: 16px;
      }
      
      /*Disabled*/
      .DisabledAccordionHeader{
        cursor: not-allowed;
        height: 40px;
        border-bottom: solid 1px #999999;
      }
      
      .DisabledAccordionHeader h5 {
        padding-left: 16px;
        padding-top: 10px;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .DisabledAccordionHeader p {
        padding: 0 16px;
        padding-top: 10px;
        margin: 0;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 19px;
        font-weight: 400;
      }
      
      .DisabledAccordionIcon{
        margin-left: auto;
        color: #999999;
        width: 25px;
        height: 25px;
        margin-right: 16px;
      }
      `
    }
  ];
  const { setTheme, theme } = useContext(ThemeContext); 
  const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
  const dividerColor = theme === "light" ? "#000000" : "#ffffff";
  return (
    <Container>
      <h1>Accordion</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Accordion title="Section 1" active={true}>
        Content for Section 1 goes here.
      </Accordion>
      <Accordion title="Section 2" active={false}>
        Content for Section 2 goes here.
      </Accordion>
      <Accordion title="Section 3" active={true}>
        Content for Section 3 goes here.
      </Accordion>
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

export default AccordionComponent;
