import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './apps/App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from '@/apps/redux/store.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>

);
