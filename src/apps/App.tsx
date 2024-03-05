import './App.css'
import { ThemeProvider } from '@mui/material'
import RouteLoader from '@/apps/routes/RouteLoader'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction:"ltr",
  palette: {
    primary: {
      main: "#3f1651",
    },
    secondary: {
      main: '#653780',
    },
    
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouteLoader />
    </ThemeProvider>
  )
}

export default App
