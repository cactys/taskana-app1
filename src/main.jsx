import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppLayout } from '@layouts/appLayout/AppLayout';
import { FilterProvider, TaskProvider, ThemeProvider } from '@context';
import './assets/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <FilterProvider>
        <TaskProvider>
          <AppLayout />
        </TaskProvider>
      </FilterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
