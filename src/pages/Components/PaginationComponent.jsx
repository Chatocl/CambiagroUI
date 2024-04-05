import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import CodeViewer from '../../components/CodeViewer';
import { Divider, Tab, Tabs } from '@mui/material';
import Pagination from "../../components/reactcomponents/Pagination/Pagination";
import { ThemeContext } from '../../App'; 

export const PaginationComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext); 
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Aquí puedes agregar lógica adicional, como cargar datos de la página seleccionada, etc.
  };
  const vuecodes = [
    {
      language: 'javascript',
      label: 'Vue JS',
      code: `<template>
      <div class="pagination">
        <ul>
          <li>
            <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
              <div :class="{ 'disabled-flecha': currentPage === 1, flecha: currentPage !== 1 }">
                &laquo; Anterior
              </div>
            </button>
          </li>
          <li
            v-for="(page, index) in pages"
            :key="index"
            :class="{ active: page === currentPage || page === '...' }"
          >
            <button v-if="page !== '...'" @click="changePage(page)">{{ page }}</button>
            <div v-else class="ellipsis">...</div>
          </li>
          <li>
            <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
              <div
                :class="{
                  'disabled-flecha': currentPage === totalPages,
                  flecha: currentPage !== totalPages
                }"
              >
                Siguiente &raquo;
              </div>
            </button>
          </li>
        </ul>
      </div>
    </template>
    
    <script>
    export default {
      props: {
        currentPage: {
          type: Number,
          required: true
        },
        totalPages: {
          type: Number,
          required: true
        },
        onPageChange: {
          type: Function,
          required: true
        }
      },
      data() {
        return {
          pages: []
        }
      },
      watch: {
        totalPages: {
          immediate: true,
          handler() {
            this.generatePages()
          }
        },
        currentPage() {
          this.generatePages()
        }
      },
      methods: {
        generatePages() {
          const pagesArray = []
          if (this.totalPages <= 4) {
            for (let i = 1; i <= this.totalPages; i++) {
              pagesArray.push(i)
            }
          } else {
            if (this.currentPage <= 2) {
              for (let i = 1; i <= 4; i++) {
                pagesArray.push(i)
              }
              pagesArray.push('...')
            } else if (this.currentPage >= this.totalPages - 1) {
              pagesArray.push('...')
              for (let i = this.totalPages - 3; i <= this.totalPages; i++) {
                pagesArray.push(i)
              }
            } else {
              pagesArray.push('...')
              for (let i = this.currentPage - 1; i <= this.currentPage + 2; i++) {
                pagesArray.push(i)
              }
              pagesArray.push('...')
            }
          }
          this.pages = pagesArray
        },
        changePage(page) {
          if (page >= 1 && page <= this.totalPages) {
            this.onPageChange(page)
          }
        }
      }
    }
    </script>
    
    <style scoped>
    .pagination {
      display: flex;
      justify-content: center;
    }
    
    .pagination ul {
      list-style: none;
      padding: 0;
      display: flex;
      align-items: center;
    }
    
    .pagination ul li {
      margin: 0 5px;
    }
    
    .pagination ul li button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
    
    .pagination ul li button:focus {
      outline: none;
    }
    
    .flecha {
      color: #1ccc1d;
    }
    
    .pagination ul li button:disabled {
      opacity: 100%;
      color: #999999;
      cursor: not-allowed;
    }
    
    .pagination ul li.active button {
      background-color: #e5e5e5;
      color: #1ccc1d;
      border: #1ccc1d solid 1px;
      border-radius: 5px;
      padding: 5px 10px;
    }
    
    .pagination ul li button:hover {
      border-bottom: 2px solid #0b520c;
    }
    </style>
    `
    },
  ];

  const nextcodes = [
    {
      language: 'javascript',
      label: 'Next JS',
      code: `import React, { useState, useEffect } from "react";
      import "./Pagination.css"; // Archivo CSS para estilos
      
      const Pagination = ({ currentPage, totalPages, onPageChange }) => {
        const [pages, setPages] = useState([]);
      
        // Función para generar la lista de páginas
        const generatePages = () => {
          const pagesArray = [];
          if (totalPages <= 4) {
            // Si hay 4 páginas o menos, mostrar todas las páginas
            for (let i = 1; i <= totalPages; i++) {
              pagesArray.push(
                <li key={i} className={i === currentPage ? "active" : ""}>
                  <button onClick={() => onPageChange(i)}>{i}</button>
                </li>
              );
            }
          } else {
            // Si hay más de 4 páginas, mostrar las primeras 4 páginas, seguidas de "..."
            if (currentPage <= 2) {
              for (let i = 1; i <= 4; i++) {
                pagesArray.push(
                  <li key={i} className={i === currentPage ? "active" : ""}>
                    <button onClick={() => onPageChange(i)}>{i}</button>
                  </li>
                );
              }
            } else if (currentPage >= totalPages - 1) {
              for (let i = totalPages - 3; i <= totalPages; i++) {
                pagesArray.push(
                  <li key={i} className={i === currentPage ? "active" : ""}>
                    <button onClick={() => onPageChange(i)}>{i}</button>
                  </li>
                );
              }
            } else {
              for (let i = currentPage - 1; i <= currentPage + 2; i++) {
                pagesArray.push(
                  <li key={i} className={i === currentPage ? "active" : ""}>
                    <button onClick={() => onPageChange(i)}>{i}</button>
                  </li>
                );
              }
              pagesArray.unshift(
                <li key="ellipsisStart" className="ellipsis">
                  ...
                </li>
              );
              pagesArray.push(
                <li key="ellipsisEnd" className="ellipsis">
                  ...
                </li>
              );
            }
          }
          setPages(pagesArray);
        };
      
        // Generar la lista de páginas cuando cambie el número total de páginas
        useEffect(() => {
          generatePages();
        }, [totalPages, currentPage]);
      
        // Manejar eventos de teclado para cambiar de página
        useEffect(() => {
          const handleKeyDown = (event) => {
            if (event.keyCode === 37 && currentPage > 1) {
              onPageChange(currentPage - 1); // Flecha izquierda
            } else if (event.keyCode === 39 && currentPage < totalPages) {
              onPageChange(currentPage + 1); // Flecha derecha
            }
          };
      
          document.addEventListener("keydown", handleKeyDown);
      
          return () => {
            document.removeEventListener("keydown", handleKeyDown);
          };
        }, [currentPage, onPageChange, totalPages]);
      
        return (
          <div className="pagination">
            <ul>
              <li>
                <button
                  disabled={currentPage === 1}
                  onClick={() => onPageChange(currentPage - 1)}
                >
                  <div
                    className={\`\${currentPage === 1 ? "disabled-flecha" : "flecha"}\`}
                  >
                    &laquo; Anterior
                  </div>
                </button>
              </li>
              {pages}
              <li>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => onPageChange(currentPage + 1)}
                >
                  <div
                    className={\`\${
                      currentPage === totalPages ? "disabled-flecha" : "flecha"
                    }\`}
                  >
                    Siguiente &raquo;
                  </div>
                </button>
              </li>
            </ul>
          </div>
        );
      };
      
      export default Pagination;
      
      `
    },
    {
      language: 'css',
      label: 'Next CSS',
      code: `.pagination {
        display: flex;
        justify-content: center;
    }
    
    .pagination ul {
        list-style: none;
        padding: 0;
        display: flex;
        align-items: center;
    }
    
    .pagination ul li {
        margin: 0 5px;
    }
    
    .pagination ul li button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
    
    .pagination ul li button:focus {
        outline: none;
    }
    
    .flecha {
        color: #1CCC1D;
    }
    
    .pagination ul li button:disabled {
        opacity: 100%;
        color: #999999;
        cursor: not-allowed;
    }
    
    .pagination ul li.active button {
        background-color: #E5E5E5;
        color: #1CCC1D;
        border: #1CCC1D solid 1px;
        border-radius: 5px;
        padding: 5px 10px;
    }
    
    .pagination ul li button:hover {
        border-bottom: 2px solid #0B520C; 
    }
      `
    }
  ];

  const angularCodes = [
    {
      language: 'typescript',
      label: 'Angular TS',
      code: `import { Component, Input, Output, EventEmitter } from '@angular/core';

      @Component({
        selector: 'app-pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.css']
      })
      export class PaginationComponent {
        @Input() currentPage: number = 1;
        @Input() totalPages: number = 1;
        @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();
      
      
        pages: (number | string)[] = [];
      
        ngOnChanges() {
          this.generatePages();
        }
      
        generatePages() {
          const pagesArray: (number | string)[] = [];
          if (this.totalPages <= 4) {
            for (let i = 1; i <= this.totalPages; i++) {
              pagesArray.push(i);
            }
          } else {
            if (this.currentPage <= 2) {
              for (let i = 1; i <= 4; i++) {
                pagesArray.push(i);
              }
              pagesArray.push('...');
            } else if (this.currentPage >= this.totalPages - 1) {
              pagesArray.push('...');
              for (let i = this.totalPages - 3; i <= this.totalPages; i++) {
                pagesArray.push(i);
              }
            } else {
              pagesArray.push('...');
              for (let i = this.currentPage - 1; i <= this.currentPage + 2; i++) {
                pagesArray.push(i);
              }
              pagesArray.push('...');
            }
          }
          this.pages = pagesArray;
        }
      
        changePage(page: number) {
          this.onPageChange.emit(page); // Emite el número de página
        }
      }
      
      `
    },
    {
      language: 'typescript spec',
      label: 'Angular TS SPEC',
      code: `import { ComponentFixture, TestBed } from '@angular/core/testing';

      import { PaginationComponent } from './pagination.component';
      
      describe('PaginationComponent', () => {
        let component: PaginationComponent;
        let fixture: ComponentFixture<PaginationComponent>;
      
        beforeEach(async () => {
          await TestBed.configureTestingModule({
            declarations: [PaginationComponent]
          })
          .compileComponents();
          
          fixture = TestBed.createComponent(PaginationComponent);
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
      code: `<div class="pagination">
      <ul>
        <li>
          <button [disabled]="currentPage === 1" (click)="changePage(currentPage - 1)">
            <div [ngClass]="{ 'disabled-flecha': currentPage === 1, 'flecha': currentPage !== 1 }">
              &laquo; Anterior
            </div>
          </button>
        </li>
        <li *ngFor="let page of pages; let i = index" [class.active]="page === currentPage || page === '...'">
          <button *ngIf="page !== '...'" (click)="changePage(+page)">{{ page }}</button>
  
          <div *ngIf="page === '...'" class="ellipsis">...</div>
        </li>
        <li>
          <button [disabled]="currentPage === totalPages" (click)="changePage(currentPage + 1)">
            <div [ngClass]="{ 'disabled-flecha': currentPage === totalPages, 'flecha': currentPage !== totalPages }">
              Siguiente &raquo;
            </div>
          </button>
        </li>
      </ul>
    </div>
    
    `
    },
    {
      language: 'css',
      label: 'Angular CSS',
      code: `.pagination {
        display: flex;
        justify-content: center;
    }
    
    .pagination ul {
        list-style: none;
        padding: 0;
        display: flex;
        align-items: center;
    }
    
    .pagination ul li {
        margin: 0 5px;
    }
    
    .pagination ul li button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
    
    .pagination ul li button:focus {
        outline: none;
    }
    
    .flecha {
        color: #1CCC1D;
    }
    
    .pagination ul li button:disabled {
        opacity: 100%;
        color: #999999;
        cursor: not-allowed;
    }
    
    .pagination ul li.active button {
        background-color: #E5E5E5;
        color: #1CCC1D;
        border: #1CCC1D solid 1px;
        border-radius: 5px;
        padding: 5px 10px;
    }
    
    .pagination ul li button:hover {
        border-bottom: 2px solid #0B520C; 
    }
      `
    }
  ];

const tabsTextColor = theme === "light" ? "#000000" : "#ffffff";
const dividerColor = theme === "light" ? "#000000" : "#ffffff";

return (
  <Container>
    <h1>Pagination</h1>
      <PreviewBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
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

export default PaginationComponent;

