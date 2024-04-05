import styled from "styled-components";
import logo from "../assets/disagro-logo.ico";
import { NavLink } from "react-router-dom";
import { v } from "../styles/Variables";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import {
  ViewModuleOutlined,
  DevicesFoldOutlined,
  SourceOutlined,
  NoteAddOutlined,
  WindPowerOutlined,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const toggleSubMenu = (label) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const { setTheme, theme } = useContext(ThemeContext);

  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Container isOpen={sidebarOpen} themeUse={theme}>
      <div className="Logocontent">
        <div className="imgcontent">
          <img
            src={logo}
            alt="logo"
            style={{
              border: "10px solid white",
              backgroundColor: "white",
              borderRadius: "25px",
            }}
          />
        </div>
      </div>
      {linksArray.map(({ label, icon, to, subMenu }) => (
        <div className="LinkContainer" key={label}>
          <div onClick={() => toggleSubMenu(label)}>
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="Linkicon">{icon}</div>
              {sidebarOpen && <span>{label}</span>}
              {/* Agregar icono de flecha para submenú */}
              {subMenu &&
                sidebarOpen &&
                (subMenuOpen[label] ? (
                  <KeyboardArrowDown />
                ) : (
                  <KeyboardArrowRight />
                ))}
            </NavLink>
          </div>
          {subMenu && subMenuOpen[label] && (
            <div className="SubMenuContainer">
              {subMenu.map(({ label: subLabel, to: subTo }) => (
                <NavLink key={subLabel} to={subTo} className="SubMenuLink">
                  {subLabel}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
      <ThemeContent>
        {sidebarOpen && <span className="titletheme">Dark mode</span>}
        <div className="Togglecontent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch" istheme={theme}>
                  <input
                    istheme={theme}
                    type="checkbox"
                    className="theme-swither"
                    onClick={CambiarTheme}
                  ></input>
                  <span istheme={theme} className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </ThemeContent>
    </Container>
  );
}

//#region Data links
const linksArray = [
  {
    label: "Brand elements",
    icon: <WindPowerOutlined />,
    to: "/branElements",
  },
  {
    label: "Components",
    icon: <SourceOutlined />,
    subMenu: [
      { label: "Accordion", to: "/accordion" },
      { label: "Avatar", to: "/avatar" },
      { label: "Breadcrumbs", to: "/breadcrumbs" },
      { label: "Button", to: "/button" },
      { label: "Check Box", to: "/checkbox" },
      { label: "Content Switcher", to: "/contentSwitcher" },
      { label: "Date Picker", to: "/datepicker" },
      { label: "Icon Button", to: "/iconbutton" },
      { label: "Iconos Países", to: "/iconospaises" },
      { label: "Link", to: "/link" },
      { label: "Loading", to: "/loading" },
      { label: "Number Input", to: "/numberInput" },
      { label: "Pagination", to: "/pagination" },
      { label: "Progress Bar", to: "/progressbar" },
      { label: "Radio Button", to: "/radioButton" },
      { label: "Removable Tags", to: "/removabletags" },
      { label: "Search", to: "/search" },
      { label: "Slider 1", to: "/slideruno" },
      { label: "Slider 2", to: "/sliderdos" },
      { label: "Tab", to: "/tabs" },
      { label: "Text Area", to: "/textarea" },
      { label: "Text Input", to: "/textinput" },
      { label: "Toggle", to: "/toggle" },
      { label: "Tool Tip", to: "/tooltip" },
      { label: "Tag", to: "/tag" },
    ],
  },
  {
    label: "Modules",
    icon: <ViewModuleOutlined />,
    to: "/modules",
  },
  {
    label: "Templates",
    icon: <DevicesFoldOutlined />,
    to: "/templates",
  },
  {
    label: "Borradores",
    icon: <NoteAddOutlined />,
    to: "/borradores",
  },
];
//#endregion

//#region STYLED COMPONENTS
const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: sticky;
  padding-top: 20px;
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    .imgcontent {
      display: flex;
      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(0.8)`)};
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
  }
  .LinkContainer {
    margin: 8px 0;
    padding: 0 15%;
    :hover {
      background: ${(props) => props.theme.bg3};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 16px 0;
      color: ${(props) => props.theme.text};
      height: 50px;
      .Linkicon {
        padding: 8px 16px;
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      &.active {
        .Linkicon {
          svg {
            color: ${(props) => props.theme.bg4};
          }
        }
      }
    }
  }
  .SubMenuContainer {
    padding-left: 30px;
    .SubMenuLink {
      display: block;
      padding: 8px 0;
      color: ${(props) => props.theme.text};
      text-decoration: none;
      transition: color 0.3s; /* Agregar transición para el cambio de color */
    }
    .SubMenuLink:hover {
      color: ${(props) =>
        props.theme.bg4}; /* Cambiar el color al hacer hover */
    }
    &.active .SubMenuLink {
      color: ${(props) =>
        props.theme.bg4}; /* Mantener el color verde cuando está seleccionado */
    }
  }
  .Themecontent {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: calc(100% - 40px);
    transition: all 0.3s;
  }
  .Togglecontent {
    margin: ${({ isOpen }) => (isOpen ? `auto 40px` : ` auto 15px`)};
    width: 36px;
    height: 20px;
    border-radius: 10px;
    transition: all 0.3s;
    position: relative;
    .theme-container {
      background-blend-mode: multiply, multiply;
      transition: 0.4s;
      .grid {
        display: grid;
        justify-items: center;
        align-content: center;
        height: 100vh;
        width: 100vw;
        font-family: "Lato", sans-serif;
      }
      .demo {
        font-size: 32px;
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
          .theme-swither {
            opacity: 0;
            width: 0;
            height: 0;
            &:checked + .slider:before {
              left: 4px;
              content: "🌑";
              transform: translateX(26px);
            }
          }
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${({ themeUse }) =>
              themeUse === "light" ? "lightcheckbox" : "checkbox"};
            transition: 0.4s;
            &::before {
              position: absolute;
              content: "☀️";
              height: 0px;
              width: 0px;
              left: -10px;
              top: 16px;
              line-height: 0px;
              transition: 0.4s;
            }
            &.round {
              border-radius: 34px;
              &::before {
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
`;
const ThemeContent = styled.div`
  position: relative;
  margin-top: auto;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: calc(100%);
  transition: all 0.3s;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${v.lgSpacing} 0;
`;
