import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

const theme = createTheme({
  direction:"ltr",
  palette: {
    primary: {
      main: "#3f1651",
    },
    secondary: {
      main: '#653780',
    },
    
  },
  status: {
    danger: '#e53e3e',
  },
  overrides: {
    MuiToolbar: {
      gutters: {
        [defaultTheme.breakpoints.up('sm')]: {
          paddingLeft: '15px',
          paddingRight: '15px',
        },
      },
    },
  }
});
const SidebarWidth = 240
const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#26c6da";
const infoColor = "#6ac3fd";

export {theme, primaryColor, SidebarWidth, warningColor, dangerColor, successColor, infoColor};