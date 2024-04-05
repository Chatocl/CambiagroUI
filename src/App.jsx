import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { MyRoutes } from "./routers/routes";
import Footer from "./components/footer/Footer"; // Importa el componente Footer
import { Light, Dark } from "./styles/Themes";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  document.body.style.zoom = "80%";

  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "sidebarState active" : ""}>
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <MyRoutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s;
  min-height: 100vh; /* Ocupa toda la altura de la ventana */
  &.active {
    grid-template-columns: 280px auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    &.active {
      grid-template-columns: 1fr;
    }
  }
`;

export default App;
