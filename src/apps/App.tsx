import './App.css'
import { ThemeProvider } from '@mui/material'
import RouteLoader from '@/apps/routes/RouteLoader'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouteLoader />
    </ThemeProvider>
  )
}

export default App
