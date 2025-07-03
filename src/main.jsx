import React from 'react';
import { createRoot } from 'react-dom/client'; // fix import
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';

// Make sure App.jsx does NOT contain a <BrowserRouter> or <HashRouter>
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
