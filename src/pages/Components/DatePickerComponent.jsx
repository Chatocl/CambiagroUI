import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import  { DatePicker, DateInput } from "../../components/reactcomponents/Datepicker/Datepicker";
import { ThemeContext } from '../../App'; 

export const DatePickerComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const [selectedRange, setSelectedRange] = useState({ start: null, end: null });

  const handleRangeSelect = (range) => {
    setSelectedRange(range);
  };
  const vuecodes = [
    {
      language: '1javascript',
      label: 'Dateinput Vue JS',
      code: `<template>
      <div class="date-input-container" ref="wrapperRef">
        <label v-if="label && !error" class="input-label">{{ label }}</label>
        <div
          :class="['input-container', error ? 'input-error' : '', sizeClass(size)]"
        >
          <input
            class="date-input"
            type="text"
            @focus="setDatePickerVisibility(true)"
            :value="formatRange(range)"
            readonly
            placeholder="dd/mm/yyyy"
          />
          <span v-if="icon" id="icon">
            <img src="@/components/Library/Datepicker/calendar.svg" alt="Calendar Icon" />
          </span>
          <span v-if="error" class="error-icon">
            <img src="@/components/Library/Datepicker/calendar.svg" alt="Warning Icon" />
          </span>
        </div>
        <span v-if="error" class="error-message">{{ error }}</span>
        <div v-if="isDatePickerVisible" class="calendar-container">
          <DatePicker @onRangeSelect="setRange" />
        </div>
      </div>
    </template>
    
    <script>
    import DatePicker from "./DatePíckerComponent.vue"; // Asegúrate de importar correctamente el componente DatePicker
    
    export default {
      components: {
        DatePicker,
      },
      props: {
        label: String,
        error: String,
        size: String,
        icon: Boolean,
      },
      data() {
        return {
          isDatePickerVisible: false,
          range: { start: null, end: null },
          currentMonth: new Date().getMonth(),
          currentYear: new Date().getFullYear(),
        };
      },
      methods: {
        sizeClass(size) {
          switch (size) {
            case "small":
              return "input-small";
            case "medium":
              return "input-medium";
            case "large":
              return "input-large";
            default:
              return "";
          }
        },
        setDatePickerVisibility(visible) {
          this.isDatePickerVisible = visible;
        },
        formatRange({ start, end }) {
          if (!start) return "";
          const startFormatted = this.formatDate(start);
          const endFormatted = end ? this.formatDate(end) : "";
          return end ? \`\${startFormatted} - \${endFormatted}\` : startFormatted;
        },
        formatDate(day) {
          return day ? new Date(this.currentYear, this.currentMonth, day).toLocaleDateString("es") : "";
        },
        handleClickOutside(event) {
          if (this.$refs.wrapperRef && !this.$refs.wrapperRef.contains(event.target)) {
            this.setDatePickerVisibility(false);
          }
        },
      },
      mounted() {
        document.addEventListener("mousedown", this.handleClickOutside);
      },
      beforeDestroy() {
        document.removeEventListener("mousedown", this.handleClickOutside);
      },
    };
    </script>
    
    <style scoped>
    /* Estilo para el contenedor principal */
    .main-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        width: 135px;
        margin: 0 auto;
    }
    
    /* Estilo para el contenedor del datepicker */
    .datepicker-container {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
    }
    
    /* Estilo para el campo de entrada de datepicker */
    .datepicker {
        padding: 10px 16px;
        border: 1px solid #000000;
        border-radius: 40px;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 12px;
        font-weight: 200;
        line-height: 24px;
        color: #999999;
    }
    
    .date-picker {
        font-family: Arial, sans-serif;
        box-sizing: border-box;
    }
    
    .date-input-container {
        display: flex;
        align-items:stretch;
        justify-content: space-around;
        flex-direction: column;
        position: relative;
        width: 250px;
        margin: auto;
    }
    
    .input-label {
        margin-bottom: 8px;
        font-size: 16px;
    }
    
    .selected {
        color: rgb(0, 0, 0);
    }
    
    .in-range {
        background-color: #00ff00;
        color: rgb(0, 0, 0);
    }
    
    .calendar-day:first-child.selected,
    .calendar-day:last-child.selected {
        border-radius: 10px 0 0 10px;
    }
    
    .calendar-day.selected-day {
        background-color: #D2F5D2;
        color: rgb(0, 0, 0);
    }
    
    .calendar-day.range-start {
        border-top-left-radius: 10px !important;
        border-bottom-left-radius: 10px !important;
        background-color: #1CCC1D;
        color: #fff;
    }
    
    .calendar-day.range-end {
        border-top-right-radius: 10px !important;
        border-bottom-right-radius: 10px !important;
        background-color: #1CCC1D;
        color: #fff;
    }
    
    
    
    .input-container {
        position: relative;
        border: 1px solid #16A317;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-inline: 15px;
        color: #999999;
        border-radius: 40px;
        background: none;
        overflow: hidden;
    }
    .input-container:hover {
        border: 1px solid #0B520C;
    }
    
    #icon{
        position: absolute;
        display: block;
        margin-top: 5px;
        user-select: none;
        cursor: pointer;
    }
    .error-icon{
        position: absolute;
        display: block;
        bottom: 12.0px;
        user-select: none;
        cursor: pointer;
    }
    
    
    .input-container.input-large {
        height: 56px;
    }
    
    .input-container.input-medium {
        height: 48px;
    }
    
    .input-container.input-small {
        height: 44px;
    }
    
    .input-container.error {
        border-color: #DB2929;
    }
    
    
    .input-container.input-error {
        border-color: #DB2929;
    }
    
    .input-container input {
        border: none;
        
        width: 100%;
        box-sizing: border-box;
    }
    
    .error-message {
        font-family: Mark Pro, var(--default-font-family);
        color: #DB2929;
        font-size: 12px;
        position: absolute;
        bottom: -20px;
        padding: 2px;
    }
    
    .calendar {
        display: none;
        position: relative;
        width: 300px; /* Ancho fijo para el calendario */
        left: 50%; /* Posicionamiento en el centro horizontal */
        transform: translateX(-50%); /* Centra horizontalmente */
        top: calc(100% + 10px);
        background: white;
        border: 1px solid #ffffff;
        padding: 15px;
        z-index: 100;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 0 0 10px 10px;
    }
    
    .calendar-header {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        text-align: center;
        margin-bottom: 5px;
    }
    
    .day-of-week {
        font-weight: bold;
        color: #000000;
    }
    
    .calendar-header .day-of-week {
        font-weight: bold;
    }
    
    .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 0;
    }
    
    .calendar-day.selected,
    .calendar-day.in-range {
        background-color: #D2F5D2;
        color: rgb(0, 0, 0);
    }
    
    .calendar-day.range-start {
        border-top-left-radius: 10px !important;
        border-bottom-left-radius: 10px !important;
        background-color: #1CCC1D;
        color: #fff;
    }
    
    .calendar-day.range-end {
        border-top-right-radius: 10px !important;
        border-bottom-right-radius: 10px !important;
        background-color: #1CCC1D;
        color: #fff;
    }
    
    .calendar-day {
        padding: 5px;
        margin: 0;
        margin-bottom: 5px;
        border: 1px solid transparent;
        background-color: #ffffff;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
        font-weight: medium;
        font-size: 12px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    
    .calendar-day:hover,
    .calendar-day.active {
        background-color: #D2F5D2;
        border-radius: 100%;
        color: rgb(0, 0, 0);
    }
    
    .calendar-day.current-day {
        background-color: #D2F5D2;
        color: rgb(0, 0, 0);
    }
    
    .calendar {
        display: none;
    }
    
    .input-container:focus-within .calendar,
    .input-container:hover .calendar,
    .calendar {
        display: grid;
    }
    
    @keyframes popIn {
        from {
            transform: scale(0.5);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(20px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideInLeft {
        from {
            transform: translateX(-20px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    
    
    .calendar-day.active-right {
        animation: slideInRight 0.3s ease forwards;
    }
    
    .calendar-day.active-left {
        animation: slideInLeft 0.3s ease forwards;
    }
    
    .calendar-day.active {
        animation: popIn 0.3s ease forwards;
    }
    
    .calendar-day.ghost {
        color: #D2F5D2;
        background-color: transparent;
    }
    
    .calendar-day.disabled {
        background-color: #ffffff;
        color: #999999;
        cursor: not-allowed;
        opacity: 0.6;
    }
    
    .date-input {
        border: none;
        width: 30%;
        box-sizing: border-box;
        font-size: 16px;
    }
    
    .date-input:focus {
        outline: none;
    }
    
    .calendar-navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
        font-size: 1rem;
        font-weight: bold;
        user-select: none;
    }
    
    .calendar-navigation button {
        background-color: transparent;
        border: 0px solid #1CCC1D;
        color: #1CCC1D;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
    }
    
    .year{
        border-radius: 4px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        background-color: #E5E5E5;
        border: none;
        color: #000000;
    }
    .year option:checked {
        background-color: #f0f0f0;
      }
      
      /* Opciones no seleccionadas */
      .year option {
        color: #333;
      }
      
      /* Estilos adicionales para enfocar el selector */
      .year:focus {
        outline: none;
        border-color: #999;
      }
    .calendar-navigation .month-year .month {
        color: black;
        font-weight: bold;
    }
    
    .calendar-navigation .month-year .year {
        color: #1CCC1D;
        font-weight: bold;
    }
    
    @media (max-width: 768px) {
        .date-input-container {
            width: 100%;
        }
    }
    
    /* Estilo para el texto secundario */
    .text-2 {
        color: #999999;
        font-family: Mark Pro, var(--default-font-family);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        white-space: nowrap;
    }
    
    /* Oculta el icono predeterminado del navegador */
    .datepicker::-webkit-calendar-picker-indicator {
        display: none;
    }
    
    .error {
        color: #DB2929;
        font-size: 14px;
        font-family: Mark Pro, var(--default-font-family);
        font-weight: 400;
        line-height: 24px;
    }
    /* Media Query para pantallas más pequeñas */
    @media (max-width: 768px) {
        .main-container {
            max-width: none; /* Elimina el límite máximo de ancho */
        }
    
        .datepicker {
            font-size: 14px; /* Tamaño de fuente más grande para pantallas más pequeñas */
        }
    }
    
    /* Media Query para pantallas aún más pequeñas */
    @media (max-width: 480px) {
        .datepicker {
            padding: 8px 12px; /* Reduce el relleno del campo de entrada */
            font-size: 12px; /* Tamaño de fuente más pequeño */
        }
    }
    </style>
    `
    },
    {
      language: '2javascript',
      label: ' Datepicker Vue Js',
      code: `<template>
      <div class="calendar">
        <div class="calendar-navigation">
          <button @click="changeMonth(-1)">&lt;</button>
          <div class="month-year">
            <span class="month">{{ formatMonth(currentMonth, currentYear).month }}</span>
            <select class="year" v-model="currentYear" @change="handleChangeYear">
              <option v-for="yearOption in years" :key="yearOption" :value="yearOption">{{ yearOption }}</option>
            </select>
          </div>
          <button @click="changeMonth(1)">&gt;</button>
        </div>
        <div class="calendar-header">
          <div v-for="dayOfWeek in daysOfWeek" :key="dayOfWeek" class="day-of-week">{{ dayOfWeek }}</div>
        </div>
        <div class="calendar-grid">
          <div v-for="day in paddingDays" :key="'padding-day-' + day" class="calendar-day not-current-month">{{ day }}</div>
          <button
            v-for="dayOfMonth in daysOfMonth"
            :key="dayOfMonth"
            :class="[
              'calendar-day',
              range.start && range.end ? (dayOfMonth >= range.start && dayOfMonth <= range.end ? 'in-range' : '') : '',
              dayOfMonth === range.start ? 'range-start' : '',
              dayOfMonth === range.end ? 'range-end' : ''
            ]"
            @click="handleDayClick(dayOfMonth)"
          >
            {{ dayOfMonth }}
          </button>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      props: {
        onRangeSelect: Function,
      },
      data() {
        return {
          currentMonth: new Date().getMonth(),
          currentYear: new Date().getFullYear(),
          range: { start: null, end: null },
        };
      },
      computed: {
        daysOfWeek() {
          return ["D", "L", "M", "X", "J", "V", "S"];
        },
        daysOfMonth() {
          return Array.from({ length: new Date(this.currentYear, this.currentMonth + 1, 0).getDate() }, (_, i) => i + 1);
        },
        paddingDays() {
          const firstDayIndex = new Date(this.currentYear, this.currentMonth, 1).getDay();
          const lastDaysOfPrevMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();
          return Array.from({ length: firstDayIndex }, (_, i) => lastDaysOfPrevMonth - i).reverse();
        },
        years() {
          return Array.from({ length: 15 }, (_, i) => new Date().getFullYear() - i);
        },
      },
      methods: {
        handleChangeYear(event) {
          this.currentYear = parseInt(event.target.value);
        },
        changeMonth(delta) {
          let newMonth = this.currentMonth + delta;
          if (newMonth < 0) {
            this.currentYear--;
            newMonth = 11;
          } else if (newMonth > 11) {
            this.currentYear++;
            newMonth = 0;
          }
          this.currentMonth = newMonth;
        },
        handleDayClick(day) {
          const newRange = { ...this.range };
    
          if (!newRange.start || newRange.end) {
            newRange.start = day;
            newRange.end = null;
          } else {
            newRange.end = day;
          }
    
          this.range = newRange;
          this.onRangeSelect(newRange);
        },
        formatMonth(month, year) {
          const date = new Date(year, month);
          const monthName = date.toLocaleString("es", { month: "long" });
          return { month: monthName, year };
        },
      },
    };
    </script>
    
    <style scoped>
  /* Estilo para el contenedor principal */
  .main-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      width: 135px;
      margin: 0 auto;
  }
  
  /* Estilo para el contenedor del datepicker */
  .datepicker-container {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
  }
  
  /* Estilo para el campo de entrada de datepicker */
  .datepicker {
      padding: 10px 16px;
      border: 1px solid #000000;
      border-radius: 40px;
      font-family: Mark Pro, var(--default-font-family);
      font-size: 12px;
      font-weight: 200;
      line-height: 24px;
      color: #999999;
  }
  
  .date-picker {
      font-family: Arial, sans-serif;
      box-sizing: border-box;
  }
  
  .date-input-container {
      display: flex;
      align-items:stretch;
      justify-content: space-around;
      flex-direction: column;
      position: relative;
      width: 250px;
      margin: auto;
  }
  
  .input-label {
      margin-bottom: 8px;
      font-size: 16px;
  }
  
  .selected {
      color: rgb(0, 0, 0);
  }
  
  .in-range {
      background-color: #00ff00;
      color: rgb(0, 0, 0);
  }
  
  .calendar-day:first-child.selected,
  .calendar-day:last-child.selected {
      border-radius: 10px 0 0 10px;
  }
  
  .calendar-day.selected-day {
      background-color: #D2F5D2;
      color: rgb(0, 0, 0);
  }
  
  .calendar-day.range-start {
      border-top-left-radius: 10px !important;
      border-bottom-left-radius: 10px !important;
      background-color: #1CCC1D;
      color: #fff;
  }
  
  .calendar-day.range-end {
      border-top-right-radius: 10px !important;
      border-bottom-right-radius: 10px !important;
      background-color: #1CCC1D;
      color: #fff;
  }
  
  
  
  .input-container {
      position: relative;
      border: 1px solid #16A317;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-inline: 15px;
      color: #999999;
      border-radius: 40px;
      background: none;
      overflow: hidden;
  }
  .input-container:hover {
      border: 1px solid #0B520C;
  }
  
  #icon{
      position: absolute;
      display: block;
      margin-top: 5px;
      user-select: none;
      cursor: pointer;
  }
  .error-icon{
      position: absolute;
      display: block;
      bottom: 12.0px;
      user-select: none;
      cursor: pointer;
  }
  
  
  .input-container.input-large {
      height: 56px;
  }
  
  .input-container.input-medium {
      height: 48px;
  }
  
  .input-container.input-small {
      height: 44px;
  }
  
  .input-container.error {
      border-color: #DB2929;
  }
  
  
  .input-container.input-error {
      border-color: #DB2929;
  }
  
  .input-container input {
      border: none;
      
      width: 100%;
      box-sizing: border-box;
  }
  
  .error-message {
      font-family: Mark Pro, var(--default-font-family);
      color: #DB2929;
      font-size: 12px;
      position: absolute;
      bottom: -20px;
      padding: 2px;
  }
  
  .calendar {
      display: none;
      position: relative;
      width: 300px; /* Ancho fijo para el calendario */
      left: 50%; /* Posicionamiento en el centro horizontal */
      transform: translateX(-50%); /* Centra horizontalmente */
      top: calc(100% + 10px);
      background: white;
      border: 1px solid #ffffff;
      padding: 15px;
      z-index: 100;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 0 0 10px 10px;
  }
  
  .calendar-header {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      margin-bottom: 5px;
  }
  
  .day-of-week {
      font-weight: bold;
      color: #000000;
  }
  
  .calendar-header .day-of-week {
      font-weight: bold;
  }
  
  .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 0;
  }
  
  .calendar-day.selected,
  .calendar-day.in-range {
      background-color: #D2F5D2;
      color: rgb(0, 0, 0);
  }
  
  .calendar-day.range-start {
      border-top-left-radius: 10px !important;
      border-bottom-left-radius: 10px !important;
      background-color: #1CCC1D;
      color: #fff;
  }
  
  .calendar-day.range-end {
      border-top-right-radius: 10px !important;
      border-bottom-right-radius: 10px !important;
      background-color: #1CCC1D;
      color: #fff;
  }
  
  .calendar-day {
      padding: 5px;
      margin: 0;
      margin-bottom: 5px;
      border: 1px solid transparent;
      background-color: #ffffff;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
      font-weight: medium;
      font-size: 12px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
  }
  
  .calendar-day:hover,
  .calendar-day.active {
      background-color: #D2F5D2;
      border-radius: 100%;
      color: rgb(0, 0, 0);
  }
  
  .calendar-day.current-day {
      background-color: #D2F5D2;
      color: rgb(0, 0, 0);
  }
  
  .calendar {
      display: none;
  }
  
  .input-container:focus-within .calendar,
  .input-container:hover .calendar,
  .calendar {
      display: grid;
  }
  
  @keyframes popIn {
      from {
          transform: scale(0.5);
          opacity: 0;
      }
      to {
          transform: scale(1);
          opacity: 1;
      }
  }
  
  @keyframes slideInRight {
      from {
          transform: translateX(20px);
          opacity: 0;
      }
      to {
          transform: translateX(0);
          opacity: 1;
      }
  }
  
  @keyframes slideInLeft {
      from {
          transform: translateX(-20px);
          opacity: 0;
      }
      to {
          transform: translateX(0);
          opacity: 1;
      }
  }
  
  
  
  .calendar-day.active-right {
      animation: slideInRight 0.3s ease forwards;
  }
  
  .calendar-day.active-left {
      animation: slideInLeft 0.3s ease forwards;
  }
  
  .calendar-day.active {
      animation: popIn 0.3s ease forwards;
  }
  
  .calendar-day.ghost {
      color: #D2F5D2;
      background-color: transparent;
  }
  
  .calendar-day.disabled {
      background-color: #ffffff;
      color: #999999;
      cursor: not-allowed;
      opacity: 0.6;
  }
  
  .date-input {
      border: none;
      width: 30%;
      box-sizing: border-box;
      font-size: 16px;
  }
  
  .date-input:focus {
      outline: none;
  }
  
  .calendar-navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      font-size: 1rem;
      font-weight: bold;
      user-select: none;
  }
  
  .calendar-navigation button {
      background-color: transparent;
      border: 0px solid #1CCC1D;
      color: #1CCC1D;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
  }
  
  .year{
      border-radius: 4px;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      background-color: #E5E5E5;
      border: none;
      color: #000000;
  }
  .year option:checked {
      background-color: #f0f0f0;
    }
    
    /* Opciones no seleccionadas */
    .year option {
      color: #333;
    }
    
    /* Estilos adicionales para enfocar el selector */
    .year:focus {
      outline: none;
      border-color: #999;
    }
  .calendar-navigation .month-year .month {
      color: black;
      font-weight: bold;
  }
  
  .calendar-navigation .month-year .year {
      color: #1CCC1D;
      font-weight: bold;
  }
  
  @media (max-width: 768px) {
      .date-input-container {
          width: 100%;
      }
  }
  
  /* Estilo para el texto secundario */
  .text-2 {
      color: #999999;
      font-family: Mark Pro, var(--default-font-family);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      white-space: nowrap;
  }
  
  /* Oculta el icono predeterminado del navegador */
  .datepicker::-webkit-calendar-picker-indicator {
      display: none;
  }
  
  .error {
      color: #DB2929;
      font-size: 14px;
      font-family: Mark Pro, var(--default-font-family);
      font-weight: 400;
      line-height: 24px;
  }
  /* Media Query para pantallas más pequeñas */
  @media (max-width: 768px) {
      .main-container {
          max-width: none; /* Elimina el límite máximo de ancho */
      }
  
      .datepicker {
          font-size: 14px; /* Tamaño de fuente más grande para pantallas más pequeñas */
      }
  }
  
  /* Media Query para pantallas aún más pequeñas */
  @media (max-width: 480px) {
      .datepicker {
          padding: 8px 12px; /* Reduce el relleno del campo de entrada */
          font-size: 12px; /* Tamaño de fuente más pequeño */
      }
  }
    </style>
    
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `import React, { useState, useEffect, useRef } from "react";
      import "./Datepicker.css";
      import CalendarIcon from "./calendar.svg";
      import WarningIcon from "./warning.svg";
      const getDaysInMonth = (month, year) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
          days.push(date.getDate());
          date.setDate(date.getDate() + 1);
        }
        return days;
      };
      
      const getLastDaysOfPreviousMonth = (month, year, count) => {
        const days = [];
        const date = new Date(year, month, 0);
        for (let i = 0; i < count; i++) {
          days.unshift(date.getDate());
          date.setDate(date.getDate() - 1);
        }
        return days;
      };
      
      const DatePicker = ({ onRangeSelect }) => {
        const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
        const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
        const [range, setRange] = useState({ start: null, end: null });
        const daysOfWeek = ["D", "L", "M", "X", "J", "V", "S"];
        const daysOfMonth = getDaysInMonth(currentMonth, currentYear);
        const handleDayClick = (day) => {
          const newRange = { ...range };
      
          if (!newRange.start || newRange.end) {
            newRange.start = day;
            newRange.end = null;
          } else {
            newRange.end = day;
          }
      
          setRange(newRange);
          onRangeSelect(newRange);
        };
        const handleChangeYear = (event) => {
          const selectedYear = event.target.value;
          setCurrentYear(selectedYear);
        };
        const changeMonth = (delta) => {
          setCurrentMonth((prevMonth) => {
            let newMonth = prevMonth + delta;
            if (newMonth < 0) {
              setCurrentYear((prevYear) => prevYear - 1);
              newMonth = 11;
            } else if (newMonth > 11) {
              setCurrentYear((prevYear) => prevYear + 1);
              newMonth = 0;
            }
            return newMonth;
          });
        };
      
        const checkInRange = (day) => {
          const start = range.start ?? Number.MAX_VALUE;
          const end = range.end ?? Number.MAX_VALUE;
          return day >= start && day <= end;
        };
      
        const formatMonth = (month, year) => {
          const date = new Date(year, month);
          const monthName = date.toLocaleString("es", { month: "long" });
        
          // Genera un array de años (puedes ajustar el rango a tus necesidades)
          const years = Array.from({ length: 15 }, (_, i) => 2024 - i);
        
      
      
          return (
            <div className="month-year">
              <span className="month">{monthName}</span>{" "}
              <select className="year" onChange={handleChangeYear}>
                {years.map((yearOption) => (
                  <option key={yearOption} value={yearOption} selected={yearOption === year}>
                    {yearOption}
                  </option>
                ))}
              </select>
            </div>
          );
        };
      
        const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
        const paddingDays = getLastDaysOfPreviousMonth(
          currentMonth,
          currentYear,
          firstDayIndex
        );
      
        return (
          <div className="calendar">
            <div className="calendar-navigation">
              <button onClick={() => changeMonth(-1)}>&lt;</button>
              {formatMonth(currentMonth, currentYear)}
              <button onClick={() => changeMonth(1)}>&gt;</button>
            </div>
            <div className="calendar-header">
              {daysOfWeek.map((day) => (
                <div key={day} className="day-of-week">
                  {day}
                </div>
              ))}
            </div>
            <div className="calendar-grid">
              {paddingDays.map((day, index) => (
                <div
                  key={\`padding-day-\${index}\`}
                  className="calendar-day not-current-month"
                >
                  {day}
                </div>
              ))}
              {daysOfMonth.map((day) => (
                <button
                  key={day}
                  className={\`calendar-day \${
                    range.start && range.end
                      ? day >= range.start && day <= range.end
                        ? "in-range"
                        : ""
                      : ""
                  } \${day === range.start ? "range-start" : ""} \${
                    day === range.end ? "range-end" : ""
                  }\`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        );
      };
      
      const DateInput = ({ label, error, size, icon }) => {
        const sizeClass = (size) => {
          switch (size) {
            case "small":
              return "input-small";
            case "medium":
              return "input-medium";
            case "large":
              return "input-large";
            default:
              return "";
          }
        };
        const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
        const [range, setRange] = useState({ start: null, end: null });
        const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
        const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
        const wrapperRef = useRef(null);
        useEffect(() => {
          const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
              setDatePickerVisibility(false);
            }
          };
          document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
        }, []);
      
      
        const formatDate = (day) =>
          day
            ? new Date(currentYear, currentMonth, day).toLocaleDateString("es")
            : "";
      
        const formatRange = ({ start, end }) => {
          if (!start) return "";
          const startFormatted = formatDate(start);
          const endFormatted = end ? formatDate(end) : "";
          return end ? \`\${startFormatted} - \${endFormatted}\` : startFormatted;
        };
      
        return (
          <div className="date-input-container" ref={wrapperRef}>
            {label && !error && <label className="input-label">{label}</label>}
            <div
              className={\`input-container \${error ? "input-error" : ""} \${sizeClass(
                size
              )}\`}
            >
              <input
                className="date-input"
                type="text"
                onFocus={() => setDatePickerVisibility(true)}
                value={formatRange(range)}
                readOnly
                placeholder="dd/mm/yyyy"
              />
      
              {icon && (
                <span id="icon">
                  <CalendarIcon />
                </span>
              )}
              {error && (
                <span className="error-icon">
                  <WarningIcon />
                </span>
              )}
            </div>
            {error && <span className="error-message">{error}</span>}
            {isDatePickerVisible && (
              <div className="calendar-container">
                <DatePicker onRangeSelect={setRange} />
              </div>
            )}
          </div>
        );
      };
      
      export { DatePicker, DateInput };
      
      `
    },
    {
      language: 'css',
      label: 'Next ',
      code: `/* Estilo para el contenedor principal */
      .main-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          width: 135px;
          margin: 0 auto;
      }
      
      /* Estilo para el contenedor del datepicker */
      .datepicker-container {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
      }
      
      /* Estilo para el campo de entrada de datepicker */
      .datepicker {
          padding: 10px 16px;
          border: 1px solid #000000;
          border-radius: 40px;
          font-family: Mark Pro, var(--default-font-family);
          font-size: 12px;
          font-weight: 200;
          line-height: 24px;
          color: #999999;
      }
      
      .date-picker {
          font-family: Arial, sans-serif;
          box-sizing: border-box;
      }
      
      .date-input-container {
          display: flex;
          align-items:stretch;
          justify-content: space-around;
          flex-direction: column;
          position: relative;
          width: 250px;
          margin: auto;
      }
      
      .input-label {
          margin-bottom: 8px;
          font-size: 16px;
      }
      
      .selected {
          color: rgb(0, 0, 0);
      }
      
      .in-range {
          background-color: #00ff00;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day:first-child.selected,
      .calendar-day:last-child.selected {
          border-radius: 10px 0 0 10px;
      }
      
      .calendar-day.selected-day {
          background-color: #D2F5D2;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day.range-start {
          border-top-left-radius: 10px !important;
          border-bottom-left-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      .calendar-day.range-end {
          border-top-right-radius: 10px !important;
          border-bottom-right-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      
      
      .input-container {
          position: relative;
          border: 1px solid #16A317;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-inline: 15px;
          color: #999999;
          border-radius: 40px;
          background: none;
          overflow: hidden;
      }
      .input-container:hover {
          border: 1px solid #0B520C;
      }
      
      #icon{
          position: absolute;
          display: block;
          margin-top: 5px;
          user-select: none;
          cursor: pointer;
      }
      .error-icon{
          position: absolute;
          display: block;
          bottom: 12.0px;
          user-select: none;
          cursor: pointer;
      }
      
      
      .input-container.input-large {
          height: 56px;
      }
      
      .input-container.input-medium {
          height: 48px;
      }
      
      .input-container.input-small {
          height: 44px;
      }
      
      .input-container.error {
          border-color: #DB2929;
      }
      
      
      .input-container.input-error {
          border-color: #DB2929;
      }
      
      .input-container input {
          border: none;
          
          width: 100%;
          box-sizing: border-box;
      }
      
      .error-message {
          font-family: Mark Pro, var(--default-font-family);
          color: #DB2929;
          font-size: 12px;
          position: absolute;
          bottom: -20px;
          padding: 2px;
      }
      
      .calendar {
          display: none;
          position: relative;
          width: 300px; /* Ancho fijo para el calendario */
          left: 50%; /* Posicionamiento en el centro horizontal */
          transform: translateX(-50%); /* Centra horizontalmente */
          top: calc(100% + 10px);
          background: white;
          border: 1px solid #ffffff;
          padding: 15px;
          z-index: 100;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 0 0 10px 10px;
      }
      
      .calendar-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          margin-bottom: 5px;
      }
      
      .day-of-week {
          font-weight: bold;
          color: #000000;
      }
      
      .calendar-header .day-of-week {
          font-weight: bold;
      }
      
      .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0;
      }
      
      .calendar-day.selected,
      .calendar-day.in-range {
          background-color: #D2F5D2;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day.range-start {
          border-top-left-radius: 10px !important;
          border-bottom-left-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      .calendar-day.range-end {
          border-top-right-radius: 10px !important;
          border-bottom-right-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      .calendar-day {
          padding: 5px;
          margin: 0;
          margin-bottom: 5px;
          border: 1px solid transparent;
          background-color: #ffffff;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
          font-weight: medium;
          font-size: 12px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
      }
      
      .calendar-day:hover,
      .calendar-day.active {
          background-color: #D2F5D2;
          border-radius: 100%;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day.current-day {
          background-color: #D2F5D2;
          color: rgb(0, 0, 0);
      }
      
      .calendar {
          display: none;
      }
      
      .input-container:focus-within .calendar,
      .input-container:hover .calendar,
      .calendar {
          display: grid;
      }
      
      @keyframes popIn {
          from {
              transform: scale(0.5);
              opacity: 0;
          }
          to {
              transform: scale(1);
              opacity: 1;
          }
      }
      
      @keyframes slideInRight {
          from {
              transform: translateX(20px);
              opacity: 0;
          }
          to {
              transform: translateX(0);
              opacity: 1;
          }
      }
      
      @keyframes slideInLeft {
          from {
              transform: translateX(-20px);
              opacity: 0;
          }
          to {
              transform: translateX(0);
              opacity: 1;
          }
      }
      
      
      
      .calendar-day.active-right {
          animation: slideInRight 0.3s ease forwards;
      }
      
      .calendar-day.active-left {
          animation: slideInLeft 0.3s ease forwards;
      }
      
      .calendar-day.active {
          animation: popIn 0.3s ease forwards;
      }
      
      .calendar-day.ghost {
          color: #D2F5D2;
          background-color: transparent;
      }
      
      .calendar-day.disabled {
          background-color: #ffffff;
          color: #999999;
          cursor: not-allowed;
          opacity: 0.6;
      }
      
      .date-input {
          border: none;
          width: 30%;
          box-sizing: border-box;
          font-size: 16px;
      }
      
      .date-input:focus {
          outline: none;
      }
      
      .calendar-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 10px;
          font-size: 1rem;
          font-weight: bold;
          user-select: none;
      }
      
      .calendar-navigation button {
          background-color: transparent;
          border: 0px solid #1CCC1D;
          color: #1CCC1D;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
      }
      
      .year{
          border-radius: 4px;
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          background-color: #E5E5E5;
          border: none;
          color: #000000;
      }
      .year option:checked {
          background-color: #f0f0f0;
        }
        
        /* Opciones no seleccionadas */
        .year option {
          color: #333;
        }
        
        /* Estilos adicionales para enfocar el selector */
        .year:focus {
          outline: none;
          border-color: #999;
        }
      .calendar-navigation .month-year .month {
          color: black;
          font-weight: bold;
      }
      
      .calendar-navigation .month-year .year {
          color: #1CCC1D;
          font-weight: bold;
      }
      
      @media (max-width: 768px) {
          .date-input-container {
              width: 100%;
          }
      }
      
      /* Estilo para el texto secundario */
      .text-2 {
          color: #999999;
          font-family: Mark Pro, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          white-space: nowrap;
      }
      
      /* Oculta el icono predeterminado del navegador */
      .datepicker::-webkit-calendar-picker-indicator {
          display: none;
      }
      
      .error {
          color: #DB2929;
          font-size: 14px;
          font-family: Mark Pro, var(--default-font-family);
          font-weight: 400;
          line-height: 24px;
      }
      /* Media Query para pantallas más pequeñas */
      @media (max-width: 768px) {
          .main-container {
              max-width: none; /* Elimina el límite máximo de ancho */
          }
      
          .datepicker {
              font-size: 14px; /* Tamaño de fuente más grande para pantallas más pequeñas */
          }
      }
      
      /* Media Query para pantallas aún más pequeñas */
      @media (max-width: 480px) {
          .datepicker {
              padding: 8px 12px; /* Reduce el relleno del campo de entrada */
              font-size: 12px; /* Tamaño de fuente más pequeño */
          }
      }
      `
    }
  ];

  const angularCodes = [
    {
      language: '1typescript',
      label: 'Date Input Angular TS',
      code: `import { Component, Input, Output, EventEmitter } from '@angular/core';

      @Component({
        selector: 'app-date-input',
        templateUrl: './dateinput.component.html',
        styleUrls: ['./dateinput.component.css']
      })
      export class DateInputComponent { 
        @Input() label: string | null = null;
        @Input() error: string | null = null;
        @Input() size: string | null = null;
        @Input() icon: boolean = false;
        @Output() rangeSelect = new EventEmitter<{ start: number | null, end: number | null }>();
      
        isDatePickerVisible: boolean = false;
        range: { start: number | null, end: number | null } = { start: null, end: null };
      
        currentYear: number = new Date().getFullYear();
        currentMonth: number = new Date().getMonth();
        last15Years: number[] = [];
      
        constructor() {
          // Generar los últimos 15 años
          const currentYear = new Date().getFullYear();
          for (let i = 0; i < 15; i++) {
            this.last15Years.push(currentYear - i);
          }
        }
      
        formatDate(day: number | null): string {
          return day ? new Date(this.currentYear, this.currentMonth, day).toLocaleDateString("es") : "";
        }
      
        formatRange(range: { start: number | null, end: number | null }): string {
          if (!range.start) return "";
          const startFormatted = this.formatDate(range.start);
          const endFormatted = range.end ? this.formatDate(range.end) : "";
          return endFormatted ? \`\${startFormatted} - \${endFormatted}\` : startFormatted;
        }
      
        handleChangeYear(event: any): void {
          this.currentYear = event.target.value;
        }
        onRangeSelect(range: { start: number | null, end: number | null }): void {
          this.range = range; // Actualizar la propiedad range con las fechas seleccionadas
        }
        
      }
      
      `
    },
    {
      language: '1typescripts',
      label: 'Date Input Angular TS SPEC',
      code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

      import { DateInputComponent } from './dateinput.component';
      
      describe('DateinputComponent', () => {
        let component: DateInputComponent;
        let fixture: ComponentFixture<DateInputComponent>;
      
        beforeEach(async () => {
          await TestBed.configureTestingModule({
            declarations: [DateInputComponent]
          })
          .compileComponents();
          
          fixture = TestBed.createComponent(DateInputComponent);
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
      language: '1html',
      label: 'Date Input Angular Html',
      code: `<div class="date-input-container">
      <label *ngIf="label && !error" class="input-label">{{label}}</label>
      <div class="input-container" [ngClass]="{ 'input-error': error, 'input-small': size === 'small', 'input-medium': size === 'medium', 'input-large': size === 'large' }">
        <input class="date-input" type="text" 
               [value]="formatRange(range)"
               (focus)="isDatePickerVisible = true"
               placeholder="dd/mm/yyyy"
               readonly>
        <span id="icon" *ngIf="icon">
          <img src="./assets/calendar.svg" alt="calendar">
        </span>
        <span class="error-icon" *ngIf="error">
          <img src="./assets/warning.svg" alt="warning">
        </span>
      </div>
      <span class="error-message" *ngIf="error">{{error}}</span>
      <div class="calendar-container" *ngIf="isDatePickerVisible">
        <app-date-picker (rangeSelect)="onRangeSelect($event)"></app-date-picker>
    
        <!-- Agregar select para cambiar el año -->
      </div>
    </div>
    
    `
    },
    {
      language: '1css',
      label: 'Date Input Angular CSS',
      code: `/* Estilo para el contenedor principal */
      .main-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          width: 135px;
          margin: 0 auto;
      }
      
      /* Estilo para el contenedor del datepicker */
      .datepicker-container {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
      }
      
      /* Estilo para el campo de entrada de datepicker */
      .datepicker {
          padding: 10px 16px;
          border: 1px solid #000000;
          border-radius: 40px;
          font-family: Mark Pro, var(--default-font-family);
          font-size: 12px;
          font-weight: 200;
          line-height: 24px;
          color: #999999;
      }
      
      .date-picker {
          font-family: Arial, sans-serif;
          box-sizing: border-box;
      }
      
      .date-input-container {
          display: flex;
          align-items:stretch;
          justify-content: space-around;
          flex-direction: column;
          position: relative;
          width: 250px;
          margin: auto;
      }
      
      .input-label {
          margin-bottom: 8px;
          font-size: 16px;
      }
      
      .selected {
          color: rgb(0, 0, 0);
      }
      
      .in-range {
          background-color: #00ff00;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day:first-child.selected,
      .calendar-day:last-child.selected {
          border-radius: 10px 0 0 10px;
      }
      
      .calendar-day.selected-day {
          background-color: #D2F5D2;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day.range-start {
          border-top-left-radius: 10px !important;
          border-bottom-left-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      .calendar-day.range-end {
          border-top-right-radius: 10px !important;
          border-bottom-right-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      
      
      .input-container {
          position: relative;
          border: 1px solid #16A317;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-inline: 15px;
          color: #999999;
          border-radius: 40px;
          background: none;
          overflow: hidden;
      }
      .input-container:hover {
          border: 1px solid #0B520C;
      }
      
      #icon{
          position: absolute;
          display: block;
          margin-top: 5px;
          user-select: none;
          cursor: pointer;
      }
      .error-icon{
          position: absolute;
          display: block;
          bottom: 12.0px;
          user-select: none;
          cursor: pointer;
      }
      
      
      .input-container.input-large {
          height: 56px;
      }
      
      .input-container.input-medium {
          height: 48px;
      }
      
      .input-container.input-small {
          height: 44px;
      }
      
      .input-container.error {
          border-color: #DB2929;
      }
      
      
      .input-container.input-error {
          border-color: #DB2929;
      }
      
      .input-container input {
          border: none;
          
          width: 100%;
          box-sizing: border-box;
      }
      
      .error-message {
          font-family: Mark Pro, var(--default-font-family);
          color: #DB2929;
          font-size: 12px;
          position: absolute;
          bottom: -20px;
          padding: 2px;
      }
      
      .calendar {
          display: none;
          position: relative;
          width: 300px; /* Ancho fijo para el calendario */
          left: 50%; /* Posicionamiento en el centro horizontal */
          transform: translateX(-50%); /* Centra horizontalmente */
          top: calc(100% + 10px);
          background: white;
          border: 1px solid #ffffff;
          padding: 15px;
          z-index: 100;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 0 0 10px 10px;
      }
      
      .calendar-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          margin-bottom: 5px;
      }
      
      .day-of-week {
          font-weight: bold;
          color: #000000;
      }
      
      .calendar-header .day-of-week {
          font-weight: bold;
      }
      
      .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0;
      }
      
      .calendar-day.selected,
      .calendar-day.in-range {
          background-color: #D2F5D2;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day.range-start {
          border-top-left-radius: 10px !important;
          border-bottom-left-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      .calendar-day.range-end {
          border-top-right-radius: 10px !important;
          border-bottom-right-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      .calendar-day {
          padding: 5px;
          margin: 0;
          margin-bottom: 5px;
          border: 1px solid transparent;
          background-color: #ffffff;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
          font-weight: medium;
          font-size: 12px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
      }
      
      .calendar-day:hover,
      .calendar-day.active {
          background-color: #D2F5D2;
          border-radius: 100%;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day.current-day {
          background-color: #D2F5D2;
          color: rgb(0, 0, 0);
      }
      
      .calendar {
          display: none;
      }
      
      .input-container:focus-within .calendar,
      .input-container:hover .calendar,
      .calendar {
          display: grid;
      }
      
      @keyframes popIn {
          from {
              transform: scale(0.5);
              opacity: 0;
          }
          to {
              transform: scale(1);
              opacity: 1;
          }
      }
      
      @keyframes slideInRight {
          from {
              transform: translateX(20px);
              opacity: 0;
          }
          to {
              transform: translateX(0);
              opacity: 1;
          }
      }
      
      @keyframes slideInLeft {
          from {
              transform: translateX(-20px);
              opacity: 0;
          }
          to {
              transform: translateX(0);
              opacity: 1;
          }
      }
      
      
      
      .calendar-day.active-right {
          animation: slideInRight 0.3s ease forwards;
      }
      
      .calendar-day.active-left {
          animation: slideInLeft 0.3s ease forwards;
      }
      
      .calendar-day.active {
          animation: popIn 0.3s ease forwards;
      }
      
      .calendar-day.ghost {
          color: #D2F5D2;
          background-color: transparent;
      }
      
      .calendar-day.disabled {
          background-color: #ffffff;
          color: #999999;
          cursor: not-allowed;
          opacity: 0.6;
      }
      
      .date-input {
          border: none;
          width: 30%;
          box-sizing: border-box;
          font-size: 16px;
      }
      
      .date-input:focus {
          outline: none;
      }
      
      .calendar-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 10px;
          font-size: 1rem;
          font-weight: bold;
          user-select: none;
      }
      
      .calendar-navigation button {
          background-color: transparent;
          border: 0px solid #1CCC1D;
          color: #1CCC1D;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
      }
      
      .year{
          border-radius: 4px;
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          background-color: #E5E5E5;
          border: none;
          color: #000000;
      }
      .year option:checked {
          background-color: #f0f0f0;
        }
        
        /* Opciones no seleccionadas */
        .year option {
          color: #333;
        }
        
        /* Estilos adicionales para enfocar el selector */
        .year:focus {
          outline: none;
          border-color: #999;
        }
      .calendar-navigation .month-year .month {
          color: black;
          font-weight: bold;
      }
      
      .calendar-navigation .month-year .year {
          color: #1CCC1D;
          font-weight: bold;
      }
      
      @media (max-width: 768px) {
          .date-input-container {
              width: 100%;
          }
      }
      
      /* Estilo para el texto secundario */
      .text-2 {
          color: #999999;
          font-family: Mark Pro, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          white-space: nowrap;
      }
      
      /* Oculta el icono predeterminado del navegador */
      .datepicker::-webkit-calendar-picker-indicator {
          display: none;
      }
      
      .error {
          color: #DB2929;
          font-size: 14px;
          font-family: Mark Pro, var(--default-font-family);
          font-weight: 400;
          line-height: 24px;
      }
      /* Media Query para pantallas más pequeñas */
      @media (max-width: 768px) {
          .main-container {
              max-width: none; /* Elimina el límite máximo de ancho */
          }
      
          .datepicker {
              font-size: 14px; /* Tamaño de fuente más grande para pantallas más pequeñas */
          }
      }
      
      /* Media Query para pantallas aún más pequeñas */
      @media (max-width: 480px) {
          .datepicker {
              padding: 8px 12px; /* Reduce el relleno del campo de entrada */
              font-size: 12px; /* Tamaño de fuente más pequeño */
          }
      }
      `
    },
    {
      language: '2typescript',
      label: 'Date Picker Angular TS',
      code: `import { Component, Output, EventEmitter } from '@angular/core';

      @Component({
        selector: 'app-date-picker',
        templateUrl: './datepicker.component.html',
        styleUrls: ['./datepicker.component.css']
      }) 
      export class DatePickerComponent { 
      
        @Output() rangeSelect = new EventEmitter<{ start: number | null, end: number | null }>();
      
        currentMonth: number = new Date().getMonth();
        currentYear: number = new Date().getFullYear();
        range: { start: number | null, end: number | null } = { start: null, end: null };
      
        daysOfWeek: string[] = ["D", "L", "M", "X", "J", "V", "S"];
        daysOfMonth: number[] = this.getDaysInMonth(this.currentMonth, this.currentYear);
        last15Years: number[] = [];
      
        constructor() {
          // Generar los últimos 15 años
          const currentYear = new Date().getFullYear();
          for (let i = 0; i < 15; i++) {
            this.last15Years.push(currentYear - i);
          }
        }
      
        getDaysInMonth(month: number, year: number): number[] {
          const date = new Date(year, month, 1);
          const days: number[] = [];
          while (date.getMonth() === month) {
            days.push(date.getDate());
            date.setDate(date.getDate() + 1);
          }
          return days;
        }
      
        getLastDaysOfPreviousMonth(month: number, year: number, count: number): number[] {
          const days: number[] = [];
          const date = new Date(year, month, 0);
          for (let i = 0; i < count; i++) {
            days.unshift(date.getDate());
            date.setDate(date.getDate() - 1);
          }
          return days;
        }
        handleDayClick(day: number | null): void {
          if (day !== null) {
            if (this.range.start === null || this.range.end !== null) {
              // Si no hay fecha de inicio o si ya se ha seleccionado un rango, establecer la fecha de inicio
              this.range.start = day;
              this.range.end = null;
            } else if (this.range.start !== null && day < this.range.start) {
              // Si se hace clic en una fecha antes de la fecha de inicio, actualizar la fecha de inicio
              this.range.start = day;
            } else {
              // Establecer la fecha de fin
              this.range.end = day;
            }
          }
        
          // Emitir el evento rangeSelect con el nuevo rango de fechas
          this.rangeSelect.emit(this.range);
        }
        
        
        
      
        handleChangeYear(event: any): void {
          const selectedYear = event.target.value;
          this.currentYear = selectedYear;
        }
      
        changeMonth(delta: number): void {
          this.currentMonth += delta;
          if (this.currentMonth < 0) {
            this.currentYear -= 1;
            this.currentMonth = 11;
          } else if (this.currentMonth > 11) {
            this.currentYear += 1;
            this.currentMonth = 0;
          }
          this.daysOfMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
        }
      
        checkInRange(day: number): boolean {
          const start = this.range.start ?? Number.MAX_VALUE;
          const end = this.range.end ?? Number.MAX_VALUE;
          return day >= start && day <= end;
        }
      
        formatMonth(month: number, year: number): string {
          const date = new Date(year, month);
          const monthName = date.toLocaleString("es", { month: "long" });
        
          // Construir el HTML para el select
          const selectHtml = \`
            \${monthName} <span class="year-container"></span>\`;
        
          // Retornar el HTML como elementos interpretados por Angular
          return selectHtml;
        }
      
        firstDayIndex: number = new Date(this.currentYear, this.currentMonth, 1).getDay();
        paddingDays: number[] = this.getLastDaysOfPreviousMonth(this.currentMonth, this.currentYear, this.firstDayIndex);
      }
      
      `
    },
    {
      language: '2typescripts',
      label: 'Date Picker Angular TS SPEC',
      code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

      import { DatePickerComponent } from './datepicker.component';
      
      describe('DatepickerComponent', () => {
        let component: DatePickerComponent;
        let fixture: ComponentFixture<DatePickerComponent>;
      
        beforeEach(async () => {
          await TestBed.configureTestingModule({
            declarations: [DatePickerComponent]
          })
          .compileComponents();
          
          fixture = TestBed.createComponent(DatePickerComponent);
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
      language: '2html',
      label: 'Date Picker Angular Html',
      code: `<div class="calendar">
      <div class="calendar-navigation">
        <button (click)="changeMonth(-1)">&lt;</button>
        <span class="month-year" [innerHTML]="formatMonth(currentMonth, currentYear)"></span>
        <!-- Aquí agregamos el select para cambiar el año -->
        <select class="year-select moth year" (change)="handleChangeYear($event)">
          <option *ngFor="let year of last15Years" [value]="year" [selected]="year === currentYear">{{year}}</option>
        </select>
        <button (click)="changeMonth(1)">&gt;</button>
      </div>
      
        <div class="calendar-header">
          <div *ngFor="let day of daysOfWeek" class="day-of-week">{{day}}</div>
        </div>
        <div class="calendar-grid">
          <div *ngFor="let day of paddingDays" class="calendar-day not-current-month">{{day}}</div>
          <button *ngFor="let day of daysOfMonth" 
                  class="calendar-day" 
                  [ngClass]="{
                    'in-range': range.start && range.end && day >= range.start && day <= range.end,
                    'range-start': day === range.start,
                    'range-end': day === range.end
                  }"
                  (click)="handleDayClick(day)">
            {{day}}
          </button>
        </div>
    </div>
    
    `
    },
    {
      language: '2css',
      label: 'Date Picker Angular CSS',
      code: `/* Estilo para el contenedor principal */
      .main-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          width: 135px;
          margin: 0 auto;
      }
      
      /* Estilo para el contenedor del datepicker */
      .datepicker-container {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
      }
      
      /* Estilo para el campo de entrada de datepicker */
      .datepicker {
          padding: 10px 16px;
          border: 1px solid #000000;
          border-radius: 40px;
          font-family: Mark Pro, var(--default-font-family);
          font-size: 12px;
          font-weight: 200;
          line-height: 24px;
          color: #999999;
      }
      
      .date-picker {
          font-family: Arial, sans-serif;
          box-sizing: border-box;
      }
      
      .date-input-container {
          display: flex;
          align-items:stretch;
          justify-content: space-around;
          flex-direction: column;
          position: relative;
          width: 250px;
          margin: auto;
      }
      
      .input-label {
          margin-bottom: 8px;
          font-size: 16px;
      }
      
      .selected {
          color: rgb(0, 0, 0);
      }
      
      .in-range {
          background-color: #00ff00;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day:first-child.selected,
      .calendar-day:last-child.selected {
          border-radius: 10px 0 0 10px;
      }
      
      .calendar-day.selected-day {
          background-color: #D2F5D2;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day.range-start {
          border-top-left-radius: 10px !important;
          border-bottom-left-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      .calendar-day.range-end {
          border-top-right-radius: 10px !important;
          border-bottom-right-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      
      
      .input-container {
          position: relative;
          border: 1px solid #16A317;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-inline: 15px;
          color: #999999;
          border-radius: 40px;
          background: none;
          overflow: hidden;
      }
      .input-container:hover {
          border: 1px solid #0B520C;
      }
      
      #icon{
          position: absolute;
          display: block;
          margin-top: 5px;
          user-select: none;
          cursor: pointer;
      }
      .error-icon{
          position: absolute;
          display: block;
          bottom: 12.0px;
          user-select: none;
          cursor: pointer;
      }
      
      
      .input-container.input-large {
          height: 56px;
      }
      
      .input-container.input-medium {
          height: 48px;
      }
      
      .input-container.input-small {
          height: 44px;
      }
      
      .input-container.error {
          border-color: #DB2929;
      }
      
      
      .input-container.input-error {
          border-color: #DB2929;
      }
      
      .input-container input {
          border: none;
          
          width: 100%;
          box-sizing: border-box;
      }
      
      .error-message {
          font-family: Mark Pro, var(--default-font-family);
          color: #DB2929;
          font-size: 12px;
          position: absolute;
          bottom: -20px;
          padding: 2px;
      }
      
      .calendar {
          display: none;
          position: relative;
          width: 300px; /* Ancho fijo para el calendario */
          left: 50%; /* Posicionamiento en el centro horizontal */
          transform: translateX(-50%); /* Centra horizontalmente */
          top: calc(100% + 10px);
          background: white;
          border: 1px solid #ffffff;
          padding: 15px;
          z-index: 100;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 0 0 10px 10px;
      }
      
      .calendar-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          margin-bottom: 5px;
      }
      
      .day-of-week {
          font-weight: bold;
          color: #000000;
      }
      
      .calendar-header .day-of-week {
          font-weight: bold;
      }
      
      .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0;
      }
      
      .calendar-day.selected,
      .calendar-day.in-range {
          background-color: #D2F5D2;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day.range-start {
          border-top-left-radius: 10px !important;
          border-bottom-left-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      .calendar-day.range-end {
          border-top-right-radius: 10px !important;
          border-bottom-right-radius: 10px !important;
          background-color: #1CCC1D;
          color: #fff;
      }
      
      .calendar-day {
          padding: 5px;
          margin: 0;
          margin-bottom: 5px;
          border: 1px solid transparent;
          background-color: #ffffff;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
          font-weight: medium;
          font-size: 12px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
      }
      
      .calendar-day:hover,
      .calendar-day.active {
          background-color: #D2F5D2;
          border-radius: 100%;
          color: rgb(0, 0, 0);
      }
      
      .calendar-day.current-day {
          background-color: #D2F5D2;
          color: rgb(0, 0, 0);
      }
      
      .calendar {
          display: none;
      }
      
      .input-container:focus-within .calendar,
      .input-container:hover .calendar,
      .calendar {
          display: grid;
      }
      
      @keyframes popIn {
          from {
              transform: scale(0.5);
              opacity: 0;
          }
          to {
              transform: scale(1);
              opacity: 1;
          }
      }
      
      @keyframes slideInRight {
          from {
              transform: translateX(20px);
              opacity: 0;
          }
          to {
              transform: translateX(0);
              opacity: 1;
          }
      }
      
      @keyframes slideInLeft {
          from {
              transform: translateX(-20px);
              opacity: 0;
          }
          to {
              transform: translateX(0);
              opacity: 1;
          }
      }
      
      
      
      .calendar-day.active-right {
          animation: slideInRight 0.3s ease forwards;
      }
      
      .calendar-day.active-left {
          animation: slideInLeft 0.3s ease forwards;
      }
      
      .calendar-day.active {
          animation: popIn 0.3s ease forwards;
      }
      
      .calendar-day.ghost {
          color: #D2F5D2;
          background-color: transparent;
      }
      
      .calendar-day.disabled {
          background-color: #ffffff;
          color: #999999;
          cursor: not-allowed;
          opacity: 0.6;
      }
      
      .date-input {
          border: none;
          width: 30%;
          box-sizing: border-box;
          font-size: 16px;
      }
      
      .date-input:focus {
          outline: none;
      }
      
      .calendar-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 10px;
          font-size: 1rem;
          font-weight: bold;
          user-select: none;
      }
      
      .calendar-navigation button {
          background-color: transparent;
          border: 0px solid #1CCC1D;
          color: #1CCC1D;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
      }
      
      .year{
          border-radius: 4px;
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          background-color: #E5E5E5;
          border: none;
          color: #000000;
      }
      .year option:checked {
          background-color: #f0f0f0;
        }
        
        /* Opciones no seleccionadas */
        .year option {
          color: #333;
        }
        
        /* Estilos adicionales para enfocar el selector */
        .year:focus {
          outline: none;
          border-color: #999;
        }
      .calendar-navigation .month-year .month {
          color: black;
          font-weight: bold;
      }
      
      .calendar-navigation .month-year .year {
          color: #1CCC1D;
          font-weight: bold;
      }
      
      @media (max-width: 768px) {
          .date-input-container {
              width: 100%;
          }
      }
      
      /* Estilo para el texto secundario */
      .text-2 {
          color: #999999;
          font-family: Mark Pro, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          white-space: nowrap;
      }
      
      /* Oculta el icono predeterminado del navegador */
      .datepicker::-webkit-calendar-picker-indicator {
          display: none;
      }
      
      .error {
          color: #DB2929;
          font-size: 14px;
          font-family: Mark Pro, var(--default-font-family);
          font-weight: 400;
          line-height: 24px;
      }
      /* Media Query para pantallas más pequeñas */
      @media (max-width: 768px) {
          .main-container {
              max-width: none; /* Elimina el límite máximo de ancho */
          }
      
          .datepicker {
              font-size: 14px; /* Tamaño de fuente más grande para pantallas más pequeñas */
          }
      }
      
      /* Media Query para pantallas aún más pequeñas */
      @media (max-width: 480px) {
          .datepicker {
              padding: 8px 12px; /* Reduce el relleno del campo de entrada */
              font-size: 12px; /* Tamaño de fuente más pequeño */
          }
      }
      `
    },
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Date Picker</h1>
      <PreviewBox>
      <DateInput label="Selecciona el dia" size="medium" icon="true"/>
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

export default DatePickerComponent;

