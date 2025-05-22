import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppLayout } from '@layouts/appLayout/AppLayout';
import { TaskProvider, ThemeProvider } from '@context';
import './assets/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    </TaskProvider>
  </React.StrictMode>
);
