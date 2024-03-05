import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './apps/App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>

);
