import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import CustomLink from "../../components/reactcomponents/Link/CustomLink";
import { ThemeContext } from '../../App'; 

export const LinkComponent = () => {
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
      <div :class="computedClasses" @mouseover="handleHover(true)" @mouseleave="handleHover(false)">
        <span v-if="showLeftIcon" class="icon" @mouseenter="handleHoverIcon(true)" @mouseleave="handleHoverIcon(false)">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </span>
        <a :href="url" class="link-text" :style="linkStyle" @mouseenter="handleHoverText(true)" 
        @mouseleave="handleHoverText(false)" @mousedown="handleClick" @mouseup="handleMouseUp">
          <slot></slot>
        </a>
        <span v-if="showRightIcon" class="icon" @mouseenter="handleHoverIcon(true)" @mouseleave="handleHoverIcon(false)">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </span>
      </div>
    </template>
    
    <script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
    
    library.add(faChevronLeft, faChevronRight)
    
    export default {
      name: 'CustomLink',
      components: {
        FontAwesomeIcon
      },
      props: {
        direction: {
          type: String,
          default: 'left',
          validator: (value) => ['left', 'right'].includes(value)
        },
        url: {
          type: String,
          required: true
        },
        hasIcon: {
          type: Boolean,
          default: true
        },
      },
      data() {
        return {
          isHovering: false,
          isClicked: false
        };
      },
      computed: {
        computedClasses() {
          return {
            'custom-link': true,
            'hover': this.isHovering,
            'clicked': this.isClicked,
            'has-icon-left': this.showLeftIcon,
            'has-icon-right': this.showRightIcon,
          };
        },
        showLeftIcon() {
          return this.hasIcon && this.direction === 'left';
        },
        showRightIcon() {
          return this.hasIcon && this.direction === 'right';
        },
        linkStyle() {
          if (this.direction === 'left' && !this.hasIcon) {
            return null
          }
          return  { textDecoration: 'none' };
        }
      },
      methods: {
        handleHover(isHovering) {
          this.isHovering = isHovering;
        },
        handleHoverIcon(isHovering) {
          this.isHovering = isHovering;
        },
        handleHoverText(isHovering) {
          this.isHovering = isHovering;
        },
        handleClick() {
          this.isClicked = true;
        },
      }
    };
    </script>
    
    <style scoped>
    .custom-link {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      color: #1CCC1D;
    }
    
    .link-text {
      margin: 0 5px;
      color: var(--text-color, #1CCC1D);
    }
    
    .custom-link.clicked .link-text, .custom-link.clicked .icon{
      color: #16A317; /* Color diferente después de hacer clic */
    }
    
    .icon {
      margin: 0 5px;
    }
    
    .custom-link:hover .link-text,
    .custom-link:hover .icon {
      color: #0B520C;
    }
    </style>
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `'use client'
      import React, { useState } from 'react';
      import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
      import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
      
      const CustomLink = ({ direction = 'left', url, hasIcon = true, children }) => {
        const [isHovering, setIsHovering] = useState(false);
        const [isClicked, setIsClicked] = useState(false);
      
        const showLeftIcon = hasIcon && direction === 'left';
        const showRightIcon = hasIcon && direction === 'right';
      
        const handleHover = (hovering) => {
          setIsHovering(hovering);
        };
      
        const handleClick = () => {
          setIsClicked(true);
        };
      
        const linkStyle = {
          textDecoration: direction === 'left' && !hasIcon ? null : 'none',
          color: isClicked ? '#16A317' : isHovering ? '#0B520C' : '#1CCC1D',
        };
      
        const iconStyle = {
          margin: '0 5px',
          color: isClicked ? '#16A317' : isHovering ? '#0B520C' : '#1CCC1D',
        };
      
        return (
          <div className={\`custom-link \${isHovering ? 'hover' : ''}
          \${isClicked ? 'clicked' : ''}\`} onMouseOver={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
            {showLeftIcon && (
              <span className="icon" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
                <FontAwesomeIcon icon={faChevronLeft} style={iconStyle} />
              </span>
            )}
            <a
              href={url}
              className="link-text"
              style={linkStyle}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
              onMouseDown={handleClick}
              onMouseUp={() => setIsClicked(false)}
            >
              {children}
            </a>
            {showRightIcon && (
              <span className="icon" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
                <FontAwesomeIcon icon={faChevronRight} style={iconStyle} />
              </span>
            )}
            <style jsx>{\`
              .custom-link {
                display: inline-flex;
                align-items: center;
                cursor: pointer;
                color: #1CCC1D;
              }
      
              .link-text {
                margin: 0 5px;
                color: var(--text-color, #1CCC1D);
              }
      
              .custom-link.clicked .link-text,
              .custom-link.clicked .icon {
                color: #16A317; /* Color diferente después de hacer clic */
              }
      
              .icon {
                margin: 0 5px;
              }
      
              .custom-link:hover .link-text,
              .custom-link:hover .icon {
                color: #0B520C;
              }
            \`}</style>
          </div>
        );
      };
      
      export default CustomLink;
      
      `
    },
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `import { CommonModule } from '@angular/common';
      import { Component, Input, NgModule } from '@angular/core';
      import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
      
      @Component({
        selector: 'app-custom-link',
        templateUrl: './custom-link.component.html',
        styleUrls: ['./custom-link.component.css']
      })
      export class CustomLinkComponent {
        @Input() direction: string = 'left';
        @Input() url: string = '';
        @Input() hasIcon: boolean = true; 
        faChevronLeft = faChevronLeft;
        faChevronRight = faChevronRight;
        isHovering: boolean = false;
        isClicked: boolean = false;
      
        get computedClasses() {
          return {
            'custom-link': true,
            'hover': this.isHovering,
            'clicked': this.isClicked,
            'has-icon-left': this.showLeftIcon,
            'has-icon-right': this.showRightIcon,
          };
        }
      
        get showLeftIcon(): boolean {
          return this.hasIcon && this.direction === 'left';
        }
      
        get showRightIcon(): boolean {
          return this.hasIcon && this.direction === 'right';
        }
      
        get linkStyle(): any {
          if (this.direction === 'left' && !this.hasIcon) {
            return null;
          }
          return { textDecoration: 'none' };
        }
      
        handleHover(isHovering: boolean): void {
          this.isHovering = isHovering;
        }
      
        handleHoverIcon(isHovering: boolean): void {
          this.isHovering = isHovering;
        }
      
        handleHoverText(isHovering: boolean): void {
          this.isHovering = isHovering;
        }
      
        handleClick(): void {
          this.isClicked = true;
        }
      
        handleMouseUp(): void {
          this.isClicked = false;
        }
      }
      
      
      
      `
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `<div [ngClass]="computedClasses" (mouseover)="handleHover(true)" (mouseleave)="handleHover(false)">
      <span *ngIf="showLeftIcon" class="icon" (mouseenter)="handleHoverIcon(true)" (mouseleave)="handleHoverIcon(false)">
        <fa-icon [icon]="faChevronLeft"></fa-icon>
      </span>
      <a [href]="url" class="link-text" [ngStyle]="linkStyle" (mouseenter)="handleHoverText(true)" (mouseleave)="handleHoverText(false)" (mousedown)="handleClick()" (mouseup)="handleMouseUp()">
        <ng-content></ng-content>
      </a>
      <span *ngIf="showRightIcon" class="icon" (mouseenter)="handleHoverIcon(true)" (mouseleave)="handleHoverIcon(false)">
        <fa-icon [icon]="faChevronRight"></fa-icon>
      </span>
    </div>
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `.custom-link {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        color: #1ccc1d;
      }
      
      .link-text {
        margin: 0 5px;
        color: var(--text-color, #1ccc1d);
      }
      
      .custom-link.clicked .link-text,
      .custom-link.clicked .icon {
        color: #16a317;
      }
      
      .icon {
        margin: 0 5px;
      }
      
      .custom-link:hover .link-text,
      .custom-link:hover .icon {
        color: #0b520c;
      }
      
      `
    }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Link</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CustomLink url="https://www.example.com" direction="left" hasIcon={false}>
        Izquierda sin Icon
      </CustomLink>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CustomLink url="https://www.example.com" direction="left" hasIcon={true}>
        Izquierda con Icon
      </CustomLink>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CustomLink url="https://www.example.com" direction="right">
        Derecha con Icon
      </CustomLink>
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

export default LinkComponent;

