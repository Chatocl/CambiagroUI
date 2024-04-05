import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import IconosPaises from "../../components/reactcomponents/IconosPaises/icono";
import { ThemeContext } from '../../App'; 

export const IconosPaisesComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const vuecodes = [
    {
      language: 'javascripts',
      label: 'Avatar Vue JS',
      code: `<template>
      <svg :class="iconSizeClass" xmlns="http://www.w3.org/2000/svg" width="90" height="81" viewBox="0 0 90 81" fill="none">
        <g clip-path="url(#clip0_34678_35836)">
          <!-- Parte gris del avatar -->
          <path d="M73.8248 8.08266L69.6999 12.3388C53.7554 -4.11293 27.9028 -4.11293 11.9583 12.3388C-3.98611 28.7905 -3.98611 55.4656 11.9583 71.9174L22.2671 
          61.2807C12.0146 50.702 12.0146 33.5542 22.2671 22.9827C32.5196 12.404 49.1386 12.404 59.3841 22.9827L63.509 18.7266C73.7616 29.3053 73.7616 46.4531
           63.509 57.0245C53.2565 67.6032 36.6375 67.6032 26.392 57.0245L16.0832 67.6612C32.0277 84.1129 57.8803 84.1129 73.8248 67.6612C89.7692 51.2095 89.7692 
           24.5344 73.8248 8.08266Z" fill="#CACACA" transform="translate(3 0)"/>
          <!-- Parte verde del avatar -->
          <path d="M73.8248 8.08266L69.6999 12.3388C53.7554 -4.11293 27.9028 -4.11293 11.9583 12.3388C-3.98611 28.7905 -3.98611 55.4656 11.9583 71.9174L22.2671
           61.2807C12.0146 50.702 12.0146 33.5542 22.2671 22.9827C32.5196 12.404 49.1386 12.404 59.3841 22.9827L63.509 18.7266C73.7616 29.3053 73.7616 46.4531 
           63.509 57.0245C53.2565 67.6032 36.6375 67.6032 26.392 57.0245L16.0832 67.6612C32.0277 84.1129 57.8803 84.1129 73.8248 67.6612C89.7692 51.2095 89.7692 
           24.5344 73.8248 8.08266Z" fill="#20B200" transform="translate(3 0)"/>
          <!-- Parte superior amarilla del avatar -->
          <path opacity="0.75" d="M65.6714 12.3021C50.8654 -2.93873 26.8819 -2.92424 12.0899 12.3384C-2.71617 27.6155 -2.71617 52.3837 12.0899 67.6608L18.2737 
          61.2802C15.1326 58.0392 12.9613 54.1818 11.7456 50.0852C11.8088 50.3027 11.8721 50.5203 11.9423 50.7378C6.14499 37.2443 7.92284 21.786 17.6764 11.7221C30.0863 
          -1.08258 50.9637 -0.560533 65.6152 12.4254L65.6995 12.3384C65.6925 12.3239 65.6784 12.3166 65.6714 12.3021Z" fill="url(#paint0_linear_34610_3321)" 
          transform="translate(7 0)"/>
          <!-- Parte inferior amarilla del avatar -->
          <path opacity="0.75" d="M65.8473 29.2617C68.9041 38.6948 66.7959 49.5128 59.5159 57.0245C49.2634 67.6031 32.6443 67.6031 22.3988 57.0245L18.2739 
          61.2806C8.02141 50.7019 8.02141 33.5541 18.2739 22.9827C28.5264 12.404 45.1455 12.404 55.391 22.9827L65.6997 12.346C65.6857 12.3315 65.6786 12.3242
           65.6646 12.3097C50.8585 -2.93115 26.8751 -2.91663 12.0831 12.346C-2.723 27.6231 -2.723 52.3913 12.0831 67.6684L12.1674 67.5814C26.8189 80.5673 
           47.6893 81.0966 60.1062 68.2847C69.8668 58.2136 71.6376 42.7552 65.8473 29.2617Z" fill="url(#paint0_linear_34610_3319)" transform="translate(6.6 0)"/>
        </g>
        <defs>
          <clipPath id="clip0_34678_35836">
            <rect width="90" height="80" fill="none"/>
          </clipPath>
          <linearGradient id="paint0_linear_34610_3321" x1="-11.2979" y1="5.0121" x2="18.3385" y2="24.1604" gradientUnits="userSpaceOnUse">
            <stop stop-color="#D2D600"/>
            <stop offset="1" stop-color="#D2D600" stop-opacity="50"/>
          </linearGradient>
          <linearGradient id="paint0_linear_34610_3319" x1="75.4415" y1="-17.8522" x2="-2.57952" y2="90.2816" gradientUnits="userSpaceOnUse">
            <stop offset="0.5574" stop-color="#D2D600" stop-opacity="50"/>
            <stop offset="0.7695" stop-color="#D2D600"/>
          </linearGradient>
        </defs>
      </svg>
    </template>
    
    <script>
  export default {
    props: {
      size: {
        type: String, 
        default: 'icon' 
      }
    },
    computed: {
      iconSizeClass() { //cambiar tamaño el icono <Avatar size="xl"/> tamaños (xl, l, m, s xs)
        return this.size || 'icon'; // Usa el tamaño base si no se especifica ninguno
      }
    }
  };
  </script>
    <style scoped src="../icono.css"></style>
    `
    },
    {
      language: 'css',
      label: 'Vue CSS',
      code: `/* components/Icon.module.css */
      .icon {
          width: 5em; /* Tamaño base del icono */
          height: 5em; /* w = 16 px h = 16px*/
        }
        
        .xl {
          width: 5em; /*w = 80px*/
          height: 5em; /*h = 80px*/
        }
        
        .l {
          width: 3em; /*w = 48px*/
          height: 3em; /*h = 48px*/
        }
        
        .m {
          width: 2.5em; /*w = 40px*/
          height: 2.5em; /*h = 40px*/
        }
        
        .s {
          width: 2em; /*w = 32px*/
          height: 2em; /*h = 32px*/
        }
        
        .xs {
          width: 1.5em; /*w = 24px*/
          height: 1.5em; /*h = 24px*/
        }
        
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascripts',
      label: 'Icon Países Next JS',
      code: `import React from 'react';
      import styles from './icono.module.css';
      
      const IconPais = ({ size, pais }) => {
          const iconSizeClass = styles[size] || styles.icon; // Si el tamaño no está definido, usa el tamaño base
          // para utilizar el componente <IconPais size="xl" pais="panama" /> tamaño (xl,l,m,s,xs)
          //pais(colombia,costa rica,ecuador,el salvador,guatemala,honduras,nicaragua,panama) 
          let iconPath;
          let iconDimensions;
          switch (pais.toLowerCase()) {
              case 'colombia':
                  iconPath = (
                      <>
                          <path d="M0 40C0 17.9087 17.9087 0 40 0C62.0913 0 80 17.9087 80 40L40 43.4783L0 40Z" fill="#FFDA44"/>
                          <path d="M5.35254 60C12.2689 71.9556 25.1946 80 40 80C54.8055 80 67.7311 71.9556 74.6475 60L40 
                          57.3913L5.35254 60Z" fill="#D80027"/>
                          <path d="M74.6475 60C78.0509 54.1166 80 47.2861 80 40H0C0 47.2861 1.94906 54.1166 
                          5.3525 60H74.6475Z" fill="#0052B4"/>
                      </>
                  );
                  iconDimensions = { width: "80", height: "80", viewBox: "0 0 80 80" };
                  break;
              case 'costa rica':
                  iconPath = (
                      <>
                          <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086
                           0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>
                          <path d="M30.9998 0C18.8762 0 8.0132 5.39437 0.677734 13.913H61.3216C53.9863 5.39437 43.1234
                           0 30.9998 0Z" fill="#0052B4" transform="translate(9 0)"/>
                          <path d="M61.3218 66.087H0.677734C8.0132 74.6056 18.8762 80 30.9998 80C43.1234 80 53.9863 
                          74.6056 61.3218 66.087Z" fill="#0052B4" transform="translate(9 0)"/>
                          <path d="M77.512 0.0870285H2.48797C0.880156 4.42031 0 9.10719 0 14C0 18.8928 0.880156 23.5797 
                          2.48797 27.913H77.5122C79.12 23.5797 80 18.8928 80 
                          14C80 9.10719 79.12 4.42031 77.512 0.0870285Z" fill="#D80027" transform="translate(0 26)"/>
                      </>
                  );
                  iconDimensions = { width: "80", height: "80", viewBox: "0 0 80 80" };
                  break;
              case 'ecuador':
                  iconPath = (
                      <>
                          <path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12L12 13.0435L0 12Z" fill="#FFDA44"/>
                          <path d="M1.60547 18C3.68039 21.5867 7.55808 24 11.9997 24C16.4414 24 20.319 21.5867 22.394
                           18L11.9997 17.2174L1.60547 18Z" fill="#D80027"/>
                          <path d="M22.3942 18C23.4153 16.235 24 14.1858 24 12H0C0 14.1858 0.584719 
                          16.235 1.60575 18H22.3942Z" fill="#0052B4"/>
                          <path d="M12.0001 16.1739C14.3052 16.1739 16.174 14.3052 16.174 12C16.174
                           9.69483 14.3052 7.82611 12.0001 7.82611C9.69489 
                          7.82611 7.82617 9.69483 7.82617 12C7.82617 14.3052 9.69489 16.1739 12.0001 16.1739Z" fill="#FFDA44"/>
                          <path d="M11.9993 14.6087C10.5609 14.6087 9.39062 13.4384 9.39062 12V10.4348C9.39062
                          8.99634 10.5609 7.82611 11.9993
                           7.82611C13.4377 7.82611 14.608 8.99639 14.608 10.4348V12C14.608 13.4385 13.4378 
                           14.6087 11.9993 14.6087Z" fill="#338AF3"/>
                          <path d="M16.174 5.73913H13.0436C13.0436 5.16285 12.5764 4.69565 12.0001
                           4.69565C11.4238 4.69565 10.9566 5.16285 10.9566 
                          5.73913H7.82617C7.82617 6.31546 8.32816 6.78262 8.90439 
                          6.78262H8.86966C8.86966 7.35895 9.33681 7.8261 9.91314 7.8261C9.91314 
                          8.40243 10.3803 8.86959 10.9566 8.86959H13.0436C13.6199 8.86959
                           14.0871 8.40243 14.0871 7.8261C14.6634 7.8261 15.1306 7.35895 
                          15.1306 6.78262H15.0958C15.6721 6.78262 16.174 6.31541 16.174 5.73913Z" fill="black"/>
                      </> 
                  );
                  iconDimensions = { width: "24", height: "24", viewBox: "0 0 24 24" };
                  break; 
              case 'el salvador':
                  iconPath = (
                      <> 
                          <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914
                           0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>                               
                          <path d="M36.9997 0C21.1412 0 7.43875 9.22891 0.96875
                           22.6087H73.0305C66.5606 9.22891 52.858 0 36.9997 0Z" 
                           fill="#0052B4" transform="translate(3 0)"/>
                          <path d="M36.9997 80C52.858 80 66.5606 70.7711 73.0306
                           57.3913H0.96875C7.43875 70.7711 21.1412 80 36.9997 80Z" 
                           fill="#0052B4" transform="translate(3 0)"/>                              
                          <path d="M0.966797 14.7391L8.99961 0.826096L17.0324 14.7391H0.966797Z" 
                          fill="#FFDA44" transform="translate(31 28)"/>               
                          <path d="M21.4351 7.33297L11.0003 12.5505L0.56543
                           7.33297V0.37656H21.4351V7.33297Z" fill="#6DA544" transform="translate(29 39)"/>
                          <path d="M23.8377 0.422966L20.1485 4.11219C21.7221 
                          5.68578 22.6955 7.85968 22.6955 10.2609C22.6955
                           15.0634 18.8022 18.9566 13.9999 
                          18.9566C9.19754 18.9566 5.30426 15.0633 5.30426 
                          10.2609C5.30426 7.85968 6.2777 5.68578 7.85129 4.11219L4.16207 0.422966C1.6441 2.94047
                           0.0869141 6.41875 0.0869141 10.2609C0.0869141
                            17.945 6.31598 24.1739 13.9999 24.1739C21.6838 24.1739 27.9129 17.9448 27.9129 
                           10.2609C27.9127 6.41875 26.3555 2.94047 23.8377
                            0.422966Z" fill="#FFDA44" transform="translate(26 29)"/>
                      </>
                  );
                  iconDimensions = { width: "80", height: "80", viewBox: "0 0 80 80" };
                  break;
              case 'guatemala':
                  iconPath = (
                      <> 
                          <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 
                          0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>             
                          <path d="M80.0004 37C80.0004 21.1416 70.7714 7.43906 57.3916
                           0.969055V73.0308C70.7714 66.5609 80.0004 52.8583 80.0004 37Z" fill="#338AF3" transform="translate(0 3)"/>
                          <path d="M0 37C0 52.8583 9.22891 66.5609 22.6087 
                          73.0309V0.969055C9.22891 7.43905 0 21.1416 0 37Z" fill="#338AF3" transform="translate(0 3)"/>                              
                          <path d="M21.4527 18.7638L14.6892 12.0003L21.1272 5.56203L20.8355
                           2.16172L18.9923 0.318283L10.9998 8.31079L3.00735 0.318283L1.16422 2.16172L0.8725 
                          5.56203L7.31047 12.0003L0.546875 18.7638L4.23625 22.4528L10.9998 
                          15.6895L17.7634 22.4528L21.4527 18.7638Z" fill="#ACABB1" transform="translate(29 29)"/>
                          <path d="M23.8379 0.162033L20.1486 3.85125C21.7222 5.42484 
                          22.6957 7.59875 22.6957 10C22.6957 14.8025 18.8024 18.6956 14 18.6956C9.1977 18.6956 
                          5.30426 14.8025 5.30426 10C5.30426 7.59875 6.2777 5.42484 
                          7.85129 3.85125L4.16207 0.162033C1.6441 2.67953 0.0869141 6.15781 0.0869141 10C0.0869141 
                          17.6841 6.31598 23.913 13.9999 23.913C21.6838 23.913 27.9129 1
                          7.6839 27.9129 10C27.9129 6.15797 26.3557 2.67969 23.8379 0.162033Z" fill="#6DA544" transform="translate(26 31)"/>
                      </>
                  );
                  iconDimensions = { width: "80", height: "80", viewBox: "0 0 80 80" };
                  break; 
                  case 'honduras':
                      iconPath = (
                      <> 
                          <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 
                          40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>
                          <path d="M36.9997 80C52.858 80 66.5606 70.7711 73.0306 
                          57.3912H0.96875C7.43875 70.7711 21.1412 80 36.9997 80Z" fill="#338AF3" transform="translate(3 0)"/>
                          <path d="M36.9997 0C21.1412 0 7.43875 9.22891 0.96875
                           22.6087H73.0305C66.5606 9.22891 52.858 0 36.9997 0Z" fill="#338AF3" transform="translate(3 0)"/>
                          <path d="M21.6158 26.087L22.9108 30.0728H27.1016L23.7113 
                          32.5359L25.0064 36.5217L21.6158 34.0584L18.2252 36.5217L19.5204 
                          32.5359L16.1299 30.0728H20.3207L21.6158 26.087Z" fill="#338AF3" transform="translate(3 0)"/>
                          <path d="M21.6158 43.4783L22.9108 47.4642H27.1016L23.7113 
                          49.9273L25.0064 53.913L21.6158 51.4497L18.2252 53.913L19.5204 
                          49.9273L16.1299 47.4642H20.3207L21.6158 43.4783Z" fill="#338AF3" transform="translate(3 0)"/>
                          <path d="M52.3834 26.087L53.6785 30.0728H57.8693L54.4789 
                          32.5359L55.774 36.5217L52.3834 34.0584L48.9928 36.5217L50.2879 
                          32.5359L46.8975 30.0728H51.0884L52.3834 26.087Z" fill="#338AF3" transform="translate(3 0)"/>
                          <path d="M52.3834 43.4783L53.6785 47.4642H57.8693L54.4789 
                          49.9273L55.774 53.913L52.3834 51.4497L48.9928 53.913L50.2879 
                          49.9273L46.8975 47.4642H51.0884L52.3834 43.4783Z" fill="#338AF3" transform="translate(3 0)"/>
                          <path d="M36.9996 34.7827L38.2948 38.7686H42.4856L39.0951 
                          41.2317L40.3902 45.2173L36.9996 42.7541L33.609 45.2173L34.9041 
                          41.2317L31.5137 38.7686H35.7045L36.9996 34.7827Z" fill="#338AF3" transform="translate(3 0)"/>
                      </>
                      );
                      iconDimensions = { width: "80", height: "80", viewBox: "0 0 80 80" };
                  break;
                  case 'nicaragua':
                      iconPath = (
                      <> 
                          <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 
                          40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>                
                          <path d="M36.9997 0C21.1412 0 7.43875 9.22891 0.96875 
                          22.6087H73.0305C66.5606 9.22891 52.858 0 36.9997 0Z" fill="#338AF3" transform="translate(3 0)"/>
                          <path d="M36.9997 80C52.858 80 66.5606 70.7711 
                          73.0306 57.3912H0.96875C7.43875 70.7711 21.1412 80 36.9997 80Z"
                           fill="#338AF3" transform="translate(3 0)"/>             
                          <path d="M13.0001 0.826111C6.27664 0.826111 
                          0.826172 6.27658 0.826172 13C0.826172 
                          19.7235 6.27664 25.1739 
                          13.0001 25.1739C19.7235 25.1739 25.174 19.7235 
                          25.174 13C25.174 6.27658 19.7235 0.826111 
                          13.0001 0.826111ZM13.0001
                           19.9566C9.1582 19.9566 6.04351 16.8422 
                           6.04351 13C6.04351 9.15783 9.15804 6.04345 
                          13.0001 6.04345C16.8421 6.04345 19.9566
                           9.15783 19.9566 13C19.9566 
                          16.8422 16.842 19.9566 13.0001 
                          9.9566Z" fill="#FFDA44" transform="translate(27 27)"/>     
                          <path d="M4.9998 0.304382L0.983398 
                          7.26094L4.9998 9.00001L9.01621 7.26094L4.9998 0.304382Z" fill="#338AF3" transform="translate(35 31)"/>     
                          <path d="M15.0243 1.73906L8.99961 
                          0L2.97492 1.73906L0.966797 5.21734H17.0323L15.0243 
                          1.73906Z" fill="#0052B4" transform="translate(31 40)"/>
                          <path d="M0.975586 3.73905H13.025L11.0167 
                          0.260925H2.98387L0.975586 3.73905Z" fill="#6DA544" transform="translate(33 38)"/>
                      </>
                      );
                      iconDimensions = { width: "80", height: "80", viewBox: "0 0 80 80" };
                  break;   
                  case 'panama':
                      iconPath = (
                      <> 
                          <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 
                          62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>
                          <path d="M0 40C0 62.0913 17.9087 80 40 80C40 64.7883 40 40 40 40C40 40 13.913 40 0 40Z" fill="#0052B4"/>
                          <path d="M40 0C62.0913 0 80 17.9087 80 40C64.7883 40 40 40 40 40C40 40 40 13.913 40 0Z" fill="#D80027"/>
                          <path d="M23.8107 13.913L26.4009 21.8845H34.7826L28.0017 26.8111L30.5917 34.7826L23.8107
                           29.8559L17.0298 34.7826L19.6198 26.8111L12.8389 21.8845H21.2206L23.8107 13.913Z" fill="#0052B4"/>
                          <path d="M56.1896 45.2173L58.7798 53.1889H67.1615L60.3804 58.1155L62.9706 66.087L56.1896 
                          61.1603L49.4087 66.087L51.9987 58.1155L45.2178 53.1889H53.5995L56.1896 45.2173Z" fill="#D80027"/>
                      </>
                      );
                      iconDimensions = { width: "80", height: "80", viewBox: "0 0 80 80" };
                  break;   
              default:
                  iconPath = null;
                  iconDimensions = { width: "80", height: "80", viewBox: "0 0 80 80" }; // Dimensiones por defecto
                  break;
          }
      
          return (
              <svg className={\`\${iconSizeClass}\`} xmlns="http://www.w3.org/2000/svg" 
              width={iconDimensions.width} height={iconDimensions.height} viewBox={iconDimensions.viewBox} fill="none">
                  <g clipPath="url(#clip0_34678_35838)">
                      {iconPath}
                  </g>
                  <defs>
                      <clipPath id="clip0_34678_35838">
                          <rect width={iconDimensions.width} height={iconDimensions.height} fill="white"/>
                      </clipPath>
                  </defs>
              </svg>
          );
      };
      
      export default IconPais;
      
      `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `/* components/Icon.module.css */
      .icon {
          width: 5em; /* Tamaño base del icono */
          height: 5em; /* w = 16 px h = 16px*/
        }
        
        .xl {
          width: 5em; /*w = 80px*/
          height: 5em; /*h = 80px*/
        }
        
        .l {
          width: 3em; /*w = 48px*/
          height: 3em; /*h = 48px*/
        }
        
        .m {
          width: 2.5em; /*w = 40px*/
          height: 2.5em; /*h = 40px*/
        }
        
        .s {
          width: 2em; /*w = 32px*/
          height: 2em; /*h = 32px*/
        }
        
        .xs {
          width: 1.5em; /*w = 24px*/
          height: 1.5em; /*h = 24px*/
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
        selector: 'app-icono-pais',
        standalone: true,
        imports: [],
        templateUrl: './icono-pais.component.html',
        styleUrl: './icono-pais.component.css'
      })
      export class IconoPaisComponent {
        // utilizar el componente <app-icono-pais size="xl" pais="Panama"></app-icono-pais>
      
        @Input() size?: string; // Tamaño xl, l, m, s, xs
        @Input() pais?: string; // País Colombia, Costa Rica, Ecuador, El Salavor, Guatemala, Honduras, Nivaragua, Panama
      
        get iconSizeClass(): string {
          return this.size || 'icon'; // Si el tamaño no está definido, usa el tamaño base
        }
        
      }
      
      `
    },
    {
      language: 'typescripts',
      label: 'Angular TS SPEC',
      code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

      import { IconoPaisComponent } from './icono-pais.component';
      
      describe('IconoPaisComponent', () => {
        let component: IconoPaisComponent;
        let fixture: ComponentFixture<IconoPaisComponent>;
      
        beforeEach(async () => {
          await TestBed.configureTestingModule({
            imports: [IconoPaisComponent]
          })
          .compileComponents();
          
          fixture = TestBed.createComponent(IconoPaisComponent);
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
      code: `<!--SVG Colmbia-->
      <svg [class]="iconSizeClass" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" [style.display]="pais === 'Colombia' ? 'block' : 'none'">
        <g clip-path="url(#clip0_34678_35838)">
          <path d="M0 40C0 17.9087 17.9087 0 40 0C62.0913 0 80 17.9087 80 40L40 43.4783L0 40Z" fill="#FFDA44"/>
          <path d="M5.35254 60C12.2689 71.9556 25.1946 80 40 80C54.8055 80 67.7311 71.9556 74.6475 60L40 57.3913L5.35254 60Z" fill="#D80027"/>
          <path d="M74.6475 60C78.0509 54.1166 80 47.2861 80 40H0C0 47.2861 1.94906 54.1166 5.3525 60H74.6475Z" fill="#0052B4"/>
        </g>
        <defs>
          <clipPath id="clip0_34678_35838">
            <rect width="80" height="80" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      
      <!--SVG Costa Rica-->
      <svg [class]="iconSizeClass" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" [style.display]="pais === 'Costa Rica' ? 'block' : 'none'">
        <g clip-path="url(#clip0_34678_35836)">
            <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>
            <path d="M30.9998 0C18.8762 0 8.0132 5.39437 0.677734 13.913H61.3216C53.9863 5.39437 43.1234 0 30.9998 0Z" fill="#0052B4" transform="translate(9 0)"/>
            <path d="M61.3218 66.087H0.677734C8.0132 74.6056 18.8762 80 30.9998 80C43.1234 80 53.9863 74.6056 61.3218 66.087Z" fill="#0052B4" transform="translate(9 0)"/>
            <path d="M77.512 0.0870285H2.48797C0.880156 4.42031 0 9.10719 0 14C0 18.8928 0.880156 23.5797 2.48797 27.913H77.5122C79.12 23.5797 80 18.8928 80 14C80 9.10719 79.12 4.42031 77.512 0.0870285Z" fill="#D80027" transform="translate(0 26)"/>
        </g>
        <defs>
          <clipPath id="clip0_34678_35836">
            <rect width="80" height="80" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      
      <!--SVG Ecuador-->
      <svg [class]="iconSizeClass" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"[style.display]="pais === 'Ecuador' ? 'block' : 'none'">
        <g clip-path="'url(#clip0_34705_27496)'">
            <path d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12L12 13.0435L0 12Z" fill="#FFDA44"/>
            <path d="M1.60547 18C3.68039 21.5867 7.55808 24 11.9997 24C16.4414 24 20.319 21.5867 22.394 18L11.9997 17.2174L1.60547 18Z" fill="#D80027"/>
            <path d="M22.3942 18C23.4153 16.235 24 14.1858 24 12H0C0 14.1858 0.584719 16.235 1.60575 18H22.3942Z" fill="#0052B4"/>
            <path d="M12.0001 16.1739C14.3052 16.1739 16.174 14.3052 16.174 12C16.174 9.69483 14.3052 7.82611 12.0001 7.82611C9.69489 7.82611 7.82617 9.69483 7.82617 12C7.82617 14.3052 9.69489 16.1739 12.0001 16.1739Z" fill="#FFDA44"/>
            <path d="M11.9993 14.6087C10.5609 14.6087 9.39062 13.4384 9.39062 12V10.4348C9.39062 8.99634 10.5609 7.82611 11.9993 7.82611C13.4377 7.82611 14.608 8.99639 14.608 10.4348V12C14.608 13.4385 13.4378 14.6087 11.9993 14.6087Z" fill="#338AF3"/>
            <path d="M16.174 5.73913H13.0436C13.0436 5.16285 12.5764 4.69565 12.0001 4.69565C11.4238 4.69565 10.9566 5.16285 10.9566 5.73913H7.82617C7.82617 6.31546 8.32816 6.78262 8.90439 6.78262H8.86966C8.86966 7.35895 9.33681 7.8261 9.91314 7.8261C9.91314 8.40243 10.3803 8.86959 10.9566 8.86959H13.0436C13.6199 8.86959 14.0871 8.40243 14.0871 7.8261C14.6634 7.8261 15.1306 7.35895 15.1306 6.78262H15.0958C15.6721 6.78262 16.174 6.31541 16.174 5.73913Z" fill="black"/>
          </g>
        <defs>
          <clipPath id="clip0_34705_27496">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      
      
      <!--SVG El Salvador-->
      <svg [class]="iconSizeClass" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"[style.display]="pais === 'El Salvador' ? 'block' : 'none'">
        <g clip-path="'url(#clip0_34678_35836)'">
          <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>
          <path d="M36.9997 0C21.1412 0 7.43875 9.22891 0.96875 22.6087H73.0305C66.5606 9.22891 52.858 0 36.9997 0Z" fill="#0052B4" transform="translate(3 0)"/>
          <path d="M36.9997 80C52.858 80 66.5606 70.7711 73.0306 57.3913H0.96875C7.43875 70.7711 21.1412 80 36.9997 80Z" fill="#0052B4" transform="translate(3 0)"/>
          <path d="M0.966797 14.7391L8.99961 0.826096L17.0324 14.7391H0.966797Z" fill="#FFDA44" transform="translate(31 28)"/>
          <path d="M21.4351 7.33297L11.0003 12.5505L0.56543 7.33297V0.37656H21.4351V7.33297Z" fill="#6DA544" transform="translate(29 39)"/>
          <path d="M23.8377 0.422966L20.1485 4.11219C21.7221 5.68578 22.6955 7.85968 22.6955 10.2609C22.6955 15.0634 18.8022 18.9566 13.9999 18.9566C9.19754 18.9566 5.30426 15.0633 5.30426 10.2609C5.30426 7.85968 6.2777 5.68578 7.85129 4.11219L4.16207 0.422966C1.6441 2.94047 0.0869141 6.41875 0.0869141 10.2609C0.0869141 17.945 6.31598 24.1739 13.9999 24.1739C21.6838 24.1739 27.9129 17.9448 27.9129 10.2609C27.9127 6.41875 26.3555 2.94047 23.8377 0.422966Z" fill="#FFDA44" transform="translate(26 29)"/>
        </g>
        <defs>
          <clipPath id="clip0_34678_35836">
            <rect width="80" height="80" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      
      
      <!--SVG Guatemala-->
      <svg [class]="iconSizeClass" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"[style.display]="pais === 'Guatemala' ? 'block' : 'none'">
        <g clip-path="'url(#clip0_34678_35836)'">
          <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>
          <path d="M80.0004 37C80.0004 21.1416 70.7714 7.43906 57.3916 0.969055V73.0308C70.7714 66.5609 80.0004 52.8583 80.0004 37Z" fill="#338AF3" transform="translate(0 3)"/>
          <path d="M0 37C0 52.8583 9.22891 66.5609 22.6087 73.0309V0.969055C9.22891 7.43905 0 21.1416 0 37Z" fill="#338AF3" transform="translate(0 3)"/>
          <path d="M21.4527 18.7638L14.6892 12.0003L21.1272 5.56203L20.8355 2.16172L18.9923 0.318283L10.9998 8.31079L3.00735 0.318283L1.16422 2.16172L0.8725 5.56203L7.31047 12.0003L0.546875 18.7638L4.23625 22.4528L10.9998 15.6895L17.7634 22.4528L21.4527 18.7638Z" fill="#ACABB1" transform="translate(29 29)"/>
          <path d="M23.8379 0.162033L20.1486 3.85125C21.7222 5.42484 22.6957 7.59875 22.6957 10C22.6957 14.8025 18.8024 18.6956 14 18.6956C9.1977 18.6956 5.30426 14.8025 5.30426 10C5.30426 7.59875 6.2777 5.42484 7.85129 3.85125L4.16207 0.162033C1.6441 2.67953 0.0869141 6.15781 0.0869141 10C0.0869141 17.6841 6.31598 23.913 13.9999 23.913C21.6838 23.913 27.9129 17.6839 27.9129 10C27.9129 6.15797 26.3557 2.67969 23.8379 0.162033Z" fill="#6DA544" transform="translate(26 31)"/>
        </g>
        <defs>
          <clipPath id="clip0_34678_35836">
            <rect width="80" height="80" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      
      
      <!--SVG Honduras-->
      <svg [class]="iconSizeClass" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"[style.display]="pais === 'Honduras' ? 'block' : 'none'">
        <g clip-path="'url(#clip0_34678_35836)'">
        <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>
        <path d="M36.9997 80C52.858 80 66.5606 70.7711 73.0306 57.3912H0.96875C7.43875 70.7711 21.1412 80 36.9997 80Z" fill="#338AF3" transform="translate(3 0)"/>
        <path d="M36.9997 0C21.1412 0 7.43875 9.22891 0.96875 22.6087H73.0305C66.5606 9.22891 52.858 0 36.9997 0Z" fill="#338AF3" transform="translate(3 0)"/>
        <path d="M21.6158 26.087L22.9108 30.0728H27.1016L23.7113 32.5359L25.0064 36.5217L21.6158 34.0584L18.2252 36.5217L19.5204 32.5359L16.1299 30.0728H20.3207L21.6158 26.087Z" fill="#338AF3" transform="translate(3 0)"/>
        <path d="M21.6158 43.4783L22.9108 47.4642H27.1016L23.7113 49.9273L25.0064 53.913L21.6158 51.4497L18.2252 53.913L19.5204 49.9273L16.1299 47.4642H20.3207L21.6158 43.4783Z" fill="#338AF3" transform="translate(3 0)"/>
        <path d="M52.3834 26.087L53.6785 30.0728H57.8693L54.4789 32.5359L55.774 36.5217L52.3834 34.0584L48.9928 36.5217L50.2879 32.5359L46.8975 30.0728H51.0884L52.3834 26.087Z" fill="#338AF3" transform="translate(3 0)"/>
        <path d="M52.3834 43.4783L53.6785 47.4642H57.8693L54.4789 49.9273L55.774 53.913L52.3834 51.4497L48.9928 53.913L50.2879 49.9273L46.8975 47.4642H51.0884L52.3834 43.4783Z" fill="#338AF3" transform="translate(3 0)"/>
        <path d="M36.9996 34.7827L38.2948 38.7686H42.4856L39.0951 41.2317L40.3902 45.2173L36.9996 42.7541L33.609 45.2173L34.9041 41.2317L31.5137 38.7686H35.7045L36.9996 34.7827Z" fill="#338AF3" transform="translate(3 0)"/>
        </g>
        <defs>
          <clipPath id="clip0_34678_35836">
            <rect width="80" height="80" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      
      
      <!--SVG Nicaragua-->
      <svg [class]="iconSizeClass" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"[style.display]="pais === 'Nicaragua' ? 'block' : 'none'">
        <g clip-path="'url(#clip0_34678_35836)'">
        <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>
        <path d="M36.9997 0C21.1412 0 7.43875 9.22891 0.96875 22.6087H73.0305C66.5606 9.22891 52.858 0 36.9997 0Z" fill="#338AF3" transform="translate(3 0)"/>
        <path d="M36.9997 80C52.858 80 66.5606 70.7711 73.0306 57.3912H0.96875C7.43875 70.7711 21.1412 80 36.9997 80Z" fill="#338AF3" transform="translate(3 0)"/>
        <path d="M13.0001 0.826111C6.27664 0.826111 0.826172 6.27658 0.826172 13C0.826172 19.7235 6.27664 25.1739 13.0001 25.1739C19.7235 25.1739 25.174 19.7235 25.174 13C25.174 6.27658 19.7235 0.826111 13.0001 0.826111ZM13.0001 19.9566C9.1582 19.9566 6.04351 16.8422 6.04351 13C6.04351 9.15783 9.15804 6.04345 13.0001 6.04345C16.8421 6.04345 19.9566 9.15783 19.9566 13C19.9566 16.8422 16.842 19.9566 13.0001 19.9566Z" fill="#FFDA44" transform="translate(27 27)"/>
        <path d="M4.9998 0.304382L0.983398 7.26094L4.9998 9.00001L9.01621 7.26094L4.9998 0.304382Z" fill="#338AF3" transform="translate(35 31)"/>
        <path d="M15.0243 1.73906L8.99961 0L2.97492 1.73906L0.966797 5.21734H17.0323L15.0243 1.73906Z" fill="#0052B4" transform="translate(31 40)"/>
        <path d="M0.975586 3.73905H13.025L11.0167 0.260925H2.98387L0.975586 3.73905Z" fill="#6DA544" transform="translate(33 38)"/>
        </g>
        <defs>
          <clipPath id="clip0_34678_35836">
            <rect width="80" height="80" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      
      
      <!--SVG Panama-->
      <svg [class]="iconSizeClass" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"[style.display]="pais === 'Panama' ? 'block' : 'none'">
        <g clip-path="'url(#clip0_34678_35836)'">
            <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F0F0F0"/>
            <path d="M0 40C0 62.0913 17.9087 80 40 80C40 64.7883 40 40 40 40C40 40 13.913 40 0 40Z" fill="#0052B4"/>
            <path d="M40 0C62.0913 0 80 17.9087 80 40C64.7883 40 40 40 40 40C40 40 40 13.913 40 0Z" fill="#D80027"/>
            <path d="M23.8107 13.913L26.4009 21.8845H34.7826L28.0017 26.8111L30.5917 34.7826L23.8107 29.8559L17.0298 34.7826L19.6198 26.8111L12.8389 21.8845H21.2206L23.8107 13.913Z" fill="#0052B4"/>
            <path d="M56.1896 45.2173L58.7798 53.1889H67.1615L60.3804 58.1155L62.9706 66.087L56.1896 61.1603L49.4087 66.087L51.9987 58.1155L45.2178 53.1889H53.5995L56.1896 45.2173Z" fill="#D80027"/>
          </g>
        <defs>
          <clipPath id="clip0_34678_35836">
            <rect width="80" height="80" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `/* components/Icon.module.css */
      .icon {
          width: 5em; /* Tamaño base del icono */
          height: 5em; /* w = 16 px h = 16px*/
        }
        
        .xl {
          width: 5em; /*w = 80px*/
          height: 5em; /*h = 80px*/
        }
        
        .l {
          width: 3em; /*w = 48px*/
          height: 3em; /*h = 48px*/
        }
        
        .m {
          width: 2.5em; /*w = 40px*/
          height: 2.5em; /*h = 40px*/
        }
        
        .s {
          width: 2em; /*w = 32px*/
          height: 2em; /*h = 32px*/
        }
        
        .xs {
          width: 1.5em; /*w = 24px*/
          height: 1.5em; /*h = 24px*/
        }
        
      `
    }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Iconos Países</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <IconosPaises size="l" pais="guatemala" />
      </div>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <IconosPaises size="m" pais="colombia" />
      </div>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <IconosPaises size="s" pais="colombia" />
      </div>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <IconosPaises size="xs" pais="panama" />
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

export default IconosPaisesComponent;

