import React, { useState, useEffect } from "react";
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
              className={`${currentPage === 1 ? "disabled-flecha" : "flecha"}`}
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
              className={`${
                currentPage === totalPages ? "disabled-flecha" : "flecha"
              }`}
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
