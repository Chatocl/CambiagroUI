import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import CustomIconButton from "../../components/reactcomponents/IconButton/IconButton";
import { ThemeContext } from '../../App'; 
import MenuIcon from '@mui/icons-material/Menu';

export const IconButtonComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleClick = () => {
    console.log('Botón de hamburguesa clickeado');
  };


  const vuecodes = [
    {
      language: 'javascript',
      label: 'Vue JS',
      code: `<template>
      <button 
        @click="onClick" 
        :style="{ height: sizePercentage, width: sizePercentage }"
        :class="[
          'icon-button',
          variant === 'standard' ? 'standard' : '',
          variant === 'filled-round' ? 'filled-round' : '',
          variant === 'filled-square' ? 'filled-square' : '',
          { 'hover': isHovered, 'disabled': isDisabled }
        ]"
        @mouseover="isHovered = true" 
        @mouseleave="isHovered = false"
        :disabled="isDisabled"
      >
        <font-awesome-icon :icon="icon" :class="iconClass" />
      </button>
    </template>
    
    <script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { fas } from '@fortawesome/free-solid-svg-icons'
    import { library } from '@fortawesome/fontawesome-svg-core'
    library.add(fas)
    
    export default {
      components: {
        FontAwesomeIcon
      },
      props: {
        icon: {
          type: String,
          required: true
        },
        onClick: {
          type: Function,
          required: true
        },
        disabled: {
          type: Boolean,
          default: false
        },
        size: {
          type: String,
          default: 'm',
          validator: function(value) {
            return ['xs', 's', 'm', 'l', 'xl'].includes(value);
          }
        },
        variant: {
          type: String,
          default: 'standard',
          validator: function(value) {
            return ['standard', 'filled-round', 'filled-square'].includes(value);
          }
        }
      },
      data() {
        return {
          isHovered: false,
          isDisabled: this.disabled
        }
      },
      computed: {
        sizePercentage() {
          switch (this.size.toLowerCase()) {
            case 'xs':
              return '24px';
            case 's':
              return '32px';
            case 'm':
              return '40px';
            case 'l':
              return '48px';
            case 'xl':
              return '56px';
            default:
              return '32px';
          }
        },
        iconClass() {
          switch (this.variant) {
            case 'standard':
              return 'standard-icon';
            case 'filled-round':
              return 'filled-round-icon';
            case 'filled-square':
              return 'filled-square-icon';
            default:
              return '';
          }
        }
      }
    }
    </script>
    
    <style scoped>
    .icon-button {
      border: none;
      background: transparent;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .standard:hover {
      background-color: #D2F5D2;
      border-radius: 98%;
      padding: 10px;
    }
    
    .icon-button.disabled .standard-icon {
      color: #999999;
    }
    
    .icon-button:hover .standard-icon {
      color: #0B520C;
    }
    
    .standard .standard-icon {
      color: #1CCC1D; 
    }
    
    /*Round*/
    .filled-round {
      background-color: #1CCC1D;
      border-radius: 98%;
    }
    
    .filled-round .filled-round-icon {
      color: #FFFFFF; 
    }
    
    .filled-round:hover {
      background-color: #0B520C;
    }
    
    .icon-button:hover .filled-round-icon {
      color: #E5E5E5;
    }
    
    .filled-round.disabled {
      background-color: #E5E5E5;
    }
    
    .icon-button.disabled .filled-round-icon {
      color: lightgray; 
    }
    
    /*Square*/
    .filled-square {
      background-color: #1CCC1D;
      border-radius: 10%;
    }
    
    .filled-square:hover {
      background-color: #0B520C;
    }
    
    .filled-square.disabled {
      background-color: #f0f0f0;
    }
    
    .filled-square .filled-square-icon {
      color: #E5E5E5 
    }
    
    .icon-button:hover .filled-square-icon {
      color: #E5E5E5;
    }
    
    .icon-button.disabled .filled-square-icon {
      color: lightgray; 
    }
    </style>
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `'use client';
      import React, { useState } from 'react';
      import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
      import { library } from '@fortawesome/fontawesome-svg-core';
      import { fas } from '@fortawesome/free-solid-svg-icons';
      
      library.add(fas);
      
      const IconButton = ({ icon, onClick, disabled = false, size = 'm', variant = 'standard' }) => {
        const [isHovered, setIsHovered] = useState(false);
        const [isDisabled, setIsDisabled] = useState(disabled);
      
        const handleMouseOver = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
      
        const handleClick = () => {
          if (!isDisabled) {
            console.log('Button clicked'); // Aquí puedes realizar las acciones que desees al hacer clic
          }
        };
      
        const getSizePercentage = () => {
          switch (size.toLowerCase()) {
            case 'xs':
              return '24px';
            case 's':
              return '32px';
            case 'm':
              return '40px';
            case 'l':
              return '48px';
            case 'xl':
              return '56px';
            default:
              return '32px';
          }
        };
      
        const getIconClass = () => {
          switch (variant) {
            case 'standard':
              return 'standard-icon';
            case 'filled-round':
              return 'filled-round-icon';
            case 'filled-square':
              return 'filled-square-icon';
            default:
              return '';
          }
        };
      
        return (
          <button
            className={\`icon-button \${variant} \${isHovered ? 'hover' : ''} \${isDisabled ? 'disabled' : ''}\`}
            style={{ height: getSizePercentage(), width: getSizePercentage() }}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            disabled={isDisabled}
          >
            <FontAwesomeIcon icon={['fas', icon]} className={getIconClass()} />
            <style jsx>{\`
              .icon-button {
                border: none;
                background: transparent;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
              }
      
              .standard:hover {
                background-color: #D2F5D2;
                border-radius: 98%;
                padding: 10px;
              }
      
              .icon-button.disabled .standard-icon {
                color: #999999;
              }
      
              .icon-button:hover .standard-icon {
                color: #0B520C;
              }
      
              .standard .standard-icon {
                color: #1CCC1D; 
              }
      
              /* Round */
              .filled-round {
                background-color: #1CCC1D;
                border-radius: 98%;
              }
      
              .filled-round .filled-round-icon {
                color: #FFFFFF; 
              }
      
              .filled-round:hover {
                background-color: #0B520C;
              }
      
              .icon-button:hover .filled-round-icon {
                color: #E5E5E5;
              }
      
              .filled-round.disabled {
                background-color: #E5E5E5;
              }
      
              .icon-button.disabled .filled-round-icon {
                color: lightgray; 
              }
      
              /* Square */
              .filled-square {
                background-color: #1CCC1D;
                border-radius: 10%;
              }
      
              .filled-square:hover {
                background-color: #0B520C;
              }
      
              .filled-square.disabled {
                background-color: #f0f0f0;
              }
      
              .filled-square .filled-square-icon {
                color: #E5E5E5;
              }
      
              .icon-button:hover .filled-square-icon {
                color: #E5E5E5;
              }
      
              .icon-button.disabled .filled-square-icon {
                color: lightgray; 
              }
            \`}</style>
          </button>
        );
      };
      
      export default IconButton;
      
      `
    },
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `import { Component, Input, Output, EventEmitter } from '@angular/core';
      import { IconProp } from '@fortawesome/fontawesome-svg-core';
      
      @Component({
        selector: 'app-icon-button',
        templateUrl: './icon-button.component.html',
        styleUrls: ['./icon-button.component.css']
      })
      export class IconButtonComponent {
        @Input() icon!: IconProp; // Asume el uso de FontAwesome icons
        @Input() disabled: boolean = false;
        @Input() size: 'xs' | 's' | 'm' | 'l' | 'xl' = 'm';
        @Input() variant: 'standard' | 'filled-round' | 'filled-square' = 'standard';
        @Output() onClick = new EventEmitter<Event>();
      
        isHovered: boolean = false;
      
        get sizePercentage(): string {
          switch (this.size.toLowerCase()) {
            case 'xs':
              return '24px';
            case 's':
              return '32px';
            case 'm':
              return '40px';
            case 'l':
              return '48px';
            case 'xl':
              return '56px';
            default:
              return '32px';
          }
        }
      
        get iconClass(): string {
          switch (this.variant) {
            case 'standard':
              return 'standard-icon';
            case 'filled-round':
              return 'filled-round-icon';
            case 'filled-square':
              return 'filled-square-icon';
            default:
              return '';
          }
        }
      
        onMouseOver(): void {
          this.isHovered = true;
        }
      
        onMouseLeave(): void {
          this.isHovered = false;
        }
      
        handleClick(event: Event): void {
          this.onClick.emit(event);
        }
      }
      
      `
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `<button 
      [ngClass]="[
        'icon-button',
        variant === 'standard' ? 'standard' : '',
        variant === 'filled-round' ? 'filled-round' : '',
        variant === 'filled-square' ? 'filled-square' : '',
        isHovered ? 'hover' : '',
        disabled ? 'disabled' : ''
      ]"
      [ngStyle]="{ 
        'height': sizePercentage,
        'width': sizePercentage
      }"
      (mouseover)="onMouseOver()" 
      (mouseleave)="onMouseLeave()"
      [disabled]="disabled"
    >
      <fa-icon [icon]="icon" [ngClass]="iconClass" [ngStyle]="{ 'font-size': sizePercentage }"></fa-icon>
    </button>
    
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `.icon-button {
        border: none;
        background: transparent;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .standard:hover {
        background-color: #D2F5D2;
        border-radius: 98%;
        padding: 10px;
      }
    
      .icon-button.disabled .standard-icon {
        color: #999999;
      }
      
      .icon-button:hover .standard-icon {
        color: #0B520C;
        
      }
      
      .standard .standard-icon {
        color: #1CCC1D; 
      }
        /*Round*/
      .filled-round {
        background-color: #1CCC1D;
        border-radius: 98%;
      }
      .filled-round .filled-round-icon {
        color: #FFFFFF; 
      }
      
      .filled-round:hover {
        background-color: #0B520C;
      }
      .icon-button:hover .filled-round-icon {
        color: #E5E5E5;
      }
      
      .filled-round.disabled {
        background-color: #E5E5E5;
      }
        
      .icon-button.disabled .filled-round-icon {
        color: lightgray; 
      }
      
      /*Square*/
      .filled-square {
        background-color: #1CCC1D;
        border-radius: 10%;
      }
      
      .filled-square:hover {
        background-color: #0B520C;
      }
      
      .filled-square.disabled {
        background-color: #f0f0f0;
      }
      
      .filled-square .filled-square-icon {
        color: #E5E5E5 
      }
      
      .icon-button:hover .filled-square-icon {
        color: #E5E5E5;
      }
      
      .icon-button.disabled .filled-square-icon {
        color: lightgray; 
      }
      `
    }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Icon Button</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CustomIconButton
        icon={<MenuIcon />} 
        onClick={handleClick} 
        disabled={false} 
        size="s"
      />
      <CustomIconButton
        icon={<MenuIcon />} 
        onClick={handleClick} 
        disabled={true} 
        size="s" 
      />
      </div>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CustomIconButton
        icon={<MenuIcon />} 
        onClick={handleClick} 
        disabled={false} 
        size="m" 
        variant="filled-round" 
      />
      <CustomIconButton
        icon={<MenuIcon />} 
        onClick={handleClick} 
        disabled={true} 
        size="m" 
        variant="filled-round" 
      />
      </div>
      <br></br>

      <div style={{ display: 'flex', justifyContent: 'center'}}>
      <CustomIconButton
        icon={<MenuIcon />} 
        onClick={handleClick} 
        disabled={false} 
        size="l" 
        variant="filled-square" 
      />
      
      <CustomIconButton
        icon={<MenuIcon />} 
        onClick={handleClick} 
        disabled={false} 
        size="l" 
        variant="filled-square" 
      />
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

export default IconButtonComponent;

