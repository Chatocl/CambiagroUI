import { ThemeContext } from '../../App'; 
import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import SwitcherButtonGroup from "../../components/reactcomponents/ContentSwitcheer/PrototypeContentSwitcher"



export const ContentSwitcherComponent = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes =[
    {
      language: 'JavaScript',
      label: 'Vue JS',
      code: `<template>
      <div style="display: flex">
        <div
          :class="containerClass('left')"
          @mouseenter="handleMouseEnter('left')"
          @mouseleave="handleMouseLeave('left')"
          @click="handleClick('left')"
        >
          <div :class="textClass('left')">ContentSwitcher 1</div>
        </div>
        <div
          :class="containerClass('middle')"
          @mouseenter="handleMouseEnter('middle')"
          @mouseleave="handleMouseLeave('middle')"
          @click="handleClick('middle')"
        >
          <div :class="textClass('middle')">ContentSwitcher 2</div>
        </div>
        <div
          class="container-disabled-middle"
          @click="handleClick('middleDisabled')"
        >
          <div class="text-disabled">ContentSwitcher 3</div>
        </div>
        <div
          :class="containerClass('right')"
          @mouseenter="handleMouseEnter('right')"
          @mouseleave="handleMouseLeave('right')"
          @click="handleClick('right')"
        >
          <div :class="textClass('right')">ContentSwitcher 4</div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          selectedSwitcher: '',
          isHovered: {
            left: false,
            middle: false,
            right: false,
          },
        };
      },
      methods: {
        containerClass(type) {
          switch (type) {
            case 'left':
              return this.selectedSwitcher === 'left'
                ? 'container-selected-left'
                : this.isHovered.left
                ? 'container-hover-left'
                : 'container-default-left';
            case 'middle':
              return this.selectedSwitcher === 'middle'
                ? 'container-selected-middle'
                : this.isHovered.middle
                ? 'container-hover-middle'
                : 'container-default-middle';
            case 'right':
              return this.selectedSwitcher === 'right'
                ? 'container-selected-right'
                : this.isHovered.right
                ? 'container-hover-right'
                : 'container-default-right';
            default:
              return '';
          }
        },
        textClass(type) {
          return (
            (this.selectedSwitcher === type || this.isHovered[type]) &&
            'text-white'
          );
        },
        handleMouseEnter(type) {
          this.isHovered[type] = true;
        },
        handleMouseLeave(type) {
          this.isHovered[type] = false;
        },
        handleClick(type) {
          this.selectedSwitcher = this.selectedSwitcher === type ? '' : type;
        },
      },
    };
    </script>
    
    <style scoped src="../ContentSwitcher.css">
    </style>
    
  
    `
    },
    {
      language: 'css',
      label: 'Vue CSS',
      code: `

      /* COMPONENT LEFT */
      
      .container-default-left {
          display: flex;
          width: 142px;
          height: 40px; /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #282B38);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-active-left {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-selected-left {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #282B38);
        }
        
        .container-hover-left {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #0C0C15);
          background: var(--UI-Text-White, #0C0C15);
        }
        
        .container-disabled-left{
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #999999);
          background: var(--UI-Text-White, #E5E5E5);
        }
      
      /* COMPONENT MIDDLE*/
      
      .container-default-middle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #282B38);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-active-middle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-selected-middle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #282B38);
        }
        
        .container-hover-middle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #0C0C15);
          background: var(--UI-Text-White, #0C0C15);
        }
        
        .container-disabled-middle{
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #999999);
          background: var(--UI-Text-White, #E5E5E5);
        }
      
      /* COMPONENT RIGHT*/
      
      .container-default-right {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #282B38);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-active-right {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-selected-right {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #282B38);
        }
        
        .container-hover-right {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #0C0C15);
          background: var(--UI-Text-White, #0C0C15);
        }
        
        .container-disabled-right {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #999999);
          background: var(--UI-Text-White, #E5E5E5);
        }
        
      
        /* STYLES TEXT */
      
        .text-black {
          text-align: center;
          color: black;
          font-size: 14px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-weight: 100;
          line-height: 24px;
          word-wrap: break-word;
        }
        
        .text-white {
          text-align: center;
          color: #FFFFFF;
          font-size: 14px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-weight: 100;
          line-height: 24px;
          word-wrap: break-word;
        }
        
        .text-disabled {
          text-align: center;
          color: #999999;
          font-size: 14px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-weight: 100;
          line-height: 24px;
          word-wrap: break-word;
        }      
      `
    }
  ];

  const nextcodes=[
    {
      language: 'JavaScript',
      label: 'Next JS',
      code: `import React, { useState } from 'react';
      import styles from './ContentSwitcher.module.css';
      
      const ContentSwitcher = ({ type, onClick, isSelected, text }) => {
        const [isHovered, setIsHovered] = useState(false);
      
        const handleMouseEnter = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
      
        const handleClick = () => {
          onClick(type);
        };
      
        let containerClass;
        let textClass;
      
        switch (type) {
          case 'left':
            containerClass = isSelected
              ? styles.containerSelectedLeft
              : isHovered
              ? styles.containerHoverLeft
              : styles.containerDefaultLeft;
            textClass = isSelected || isHovered ? styles.textWhite : styles.textBlack;
            break;
          case 'middle':
            containerClass = isSelected
              ? styles.containerSelectedMiddle
              : isHovered
              ? styles.containerHoverMiddle
              : styles.containerDefaultMiddle;
            textClass = isSelected || isHovered ? styles.textWhite : styles.textBlack;
            break;
          case 'middleDisabled':
            containerClass = styles.containerDisabledMiddle;
            textClass = styles.textDisabled;
            break;
          case 'right':
            containerClass = isSelected
              ? styles.containerSelectedRight
              : isHovered
              ? styles.containerHoverRight
              : styles.containerDefaultRight;
            textClass = isSelected || isHovered ? styles.textWhite : styles.textBlack;
            break;
          default:
            containerClass = '';
            textClass = '';
        }
      
        return (
          <div
            className={containerClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <div className={textClass}>{text}</div>
          </div>
        );
      };
      
      const Prototype = () => {
        const [selectedSwitcher, setSelectedSwitcher] = useState('');
      
        const handleSwitcherClick = (type) => {
          setSelectedSwitcher(type === selectedSwitcher ? '' : type);
        };
      
        return (
          <div style={{ display: 'flex' }}>
            <ContentSwitcher
              type="left"
              onClick={handleSwitcherClick}
              isSelected={selectedSwitcher === 'left'}
              text="ContentSwitcher 1"
            />
            <ContentSwitcher
              type="middle"
              onClick={handleSwitcherClick}
              isSelected={selectedSwitcher === 'middle'}
              text="ContentSwitcher 2"
            />
            <ContentSwitcher
              type="middleDisabled"
              onClick={handleSwitcherClick}
              text="ContentSwitcher 3"
            />
            <ContentSwitcher
              type="right"
              onClick={handleSwitcherClick}
              isSelected={selectedSwitcher === 'right'}
              text="ContentSwitcher 4"
            />
          </div>
        );
      };
      
      export default Prototype;
      
    `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `

      /* COMPONENT LEFT */
      
      .containerDefaultLeft {
          display: flex;
          width: 142px;
          height: 40px; /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #282B38);
          background: var(--UI-Text-White, #FFF);
        }
        
        .containerActiveLeft {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #FFF);
        }
        
        .containerSelectedLeft {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #282B38);
        }
        
        .containerHoverLeft {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #0C0C15);
          background: var(--UI-Text-White, #0C0C15);
        }
        
        .containerDisabledLeft{
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #999999);
          background: var(--UI-Text-White, #E5E5E5);
        }
      
      /* COMPONENT MIDDLE*/
      
      .containerDefaultMiddle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #282B38);
          background: var(--UI-Text-White, #FFF);
        }
        
        .containerActiveMiddle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #FFF);
        }
        
        .containerSelectedMiddle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #282B38);
        }
        
        .containerHoverMiddle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #0C0C15);
          background: var(--UI-Text-White, #0C0C15);
        }
        
        .containerDisabledMiddle{
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #999999);
          background: var(--UI-Text-White, #E5E5E5);
        }
      
      /* COMPONENT RIGHT*/
      
      .containerDefaultRight {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #282B38);
          background: var(--UI-Text-White, #FFF);
        }
        
        .containerActiveRight {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #FFF);
        }
        
        .containerSelectedRight {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #282B38);
        }
        
        .containerHoverRight {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #0C0C15);
          background: var(--UI-Text-White, #0C0C15);
        }
        
        .containerDisabledRight {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #999999);
          background: var(--UI-Text-White, #E5E5E5);
        }
        
      
        /* STYLES TEXT */
      
        .textBlack {
          text-align: center;
          color: black;
          font-size: 14px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-weight: 100;
          line-height: 24px;
          word-wrap: break-word;
        }
        
        .textWhite {
          text-align: center;
          color: #FFFFFF;
          font-size: 14px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-weight: 100;
          line-height: 24px;
          word-wrap: break-word;
        }
        
        .textDisabled {
          text-align: center;
          color: #999999;
          font-size: 14px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-weight: 100;
          line-height: 24px;
          word-wrap: break-word;
        }
        
        
      
      `
    }
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `import { Component,EventEmitter, Input, Output } from '@angular/core';

      @Component({
        selector: 'app-contswitch',
        standalone: true,
        imports: [],
        templateUrl: './contswitch.component.html',
        styleUrl: './contswitch.component.css'
      })
      
      export class ContswitchComponent {
        @Input() type: string = '';
        @Input() isSelected: boolean = false;
        @Input() text: string = '';
      
        @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
      
        isHovered: boolean = false;
      
        handleMouseEnter(): void {
          this.isHovered = true;
        }
      
        handleMouseLeave(): void {
          this.isHovered = false;
        }
      
        handleClick(): void {
          this.clicked.emit(this.type);
        }
      
        isDisabled(): void {
           this.type === 'middleDisabled';
        }
        
      
        getContainerClass(): string {
          switch (this.type) {
            case 'left':
              return this.isSelected
                ? 'container-selected-left'
                : this.isHovered
                ? 'container-hover-left'
                : 'container-default-left';
            case 'middle':
              return this.isSelected
                ? 'container-selected-middle'
                : this.isHovered
                ? 'container-hover-middle'
                : 'container-default-middle';
            case 'right':
              return this.isSelected
                ? 'container-selected-right'
                : this.isHovered
                ? 'container-hover-right'
                : 'container-default-right';
            default:
              return 'container-disabled-middle';
          }
        }
      
        getTextClass(): string {
          switch (this.type) {
            case 'left':
            case 'middle':
            case 'right':
              return (this.isSelected || this.isHovered) ? 'text-white' : 'text-black';
            default:
              return 'text-disabled';
          }
        }
        
      
      }
      `
    },
    {
      language: 'html',
      label: 'Angular Html',
      code: `<div [class]="getContainerClass()" 
      (mouseenter)="handleMouseEnter()" 
      (mouseleave)="handleMouseLeave()" 
      (click)="handleClick()">
   <div [class]="getTextClass()">{{ text }}</div>
 </div>
 
 
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `

      /* COMPONENT LEFT */
      
      .container-default-left {
          display: flex;
          width: 142px;
          height: 40px; /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #282B38);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-active-left {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-selected-left {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #282B38);
        }
        
        .container-hover-left {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #0C0C15);
          background: var(--UI-Text-White, #0C0C15);
        }
        
        .container-disabled-left{
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 24px 0px 0px 24px;
          border: 1px solid var(--UI-Text-Secondary, #999999);
          background: var(--UI-Text-White, #E5E5E5);
        }
      
      /* COMPONENT MIDDLE*/
      
      .container-default-middle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #282B38);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-active-middle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-selected-middle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #282B38);
        }
        
        .container-hover-middle {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #0C0C15);
          background: var(--UI-Text-White, #0C0C15);
        }
        
        .container-disabled-middle{
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 0px 0px 0px;
          border: 1px solid var(--UI-Text-Secondary, #999999);
          background: var(--UI-Text-White, #E5E5E5);
        }
      
      /* COMPONENT RIGHT*/
      
      .container-default-right {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #282B38);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-active-right {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #FFF);
        }
        
        .container-selected-right {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #323053);
          background: var(--UI-Text-White, #282B38);
        }
        
        .container-hover-right {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #0C0C15);
          background: var(--UI-Text-White, #0C0C15);
        }
        
        .container-disabled-right {
          display: flex;
          width: 142px;
          height: 40px;   /* SMALL 40px, MEDIUM 48px, LARGE 56px */
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 0px 24px 24px 0px;
          border: 1px solid var(--UI-Text-Secondary, #999999);
          background: var(--UI-Text-White, #E5E5E5);
        }
        
      
        /* STYLES TEXT */
      
        .text-black {
          text-align: center;
          color: black;
          font-size: 14px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-weight: 100;
          line-height: 24px;
          word-wrap: break-word;
        }
        
        .text-white {
          text-align: center;
          color: #FFFFFF;
          font-size: 14px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-weight: 100;
          line-height: 24px;
          word-wrap: break-word;
        }
        
        .text-disabled {
          text-align: center;
          color: #999999;
          font-size: 14px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-weight: 100;
          line-height: 24px;
          word-wrap: break-word;
        }
        
        .container {
          display: inline-flex;
        }
        
        .contswitch {
          margin-right: 20px; /* Espacio entre los componentes */
        }
        
        
        
      `
    }
  ];
  const { setTheme, theme } = useContext(ThemeContext); 
  const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
  const dividerColor = theme === "light" ? "#000000" : "#ffffff";
  return (
    <Container>
      <h1>Content Switcher</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SwitcherButtonGroup
        buttons={[
          { type: 'left', text: 'Option 1' },
          { type: 'middle', text: 'Option 2' },
          { type: 'middleDisabled', text: 'Option 3' },
          { type: 'right', text: 'Option 4' }
        ]}
      />
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

export default ContentSwitcherComponent;
