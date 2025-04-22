import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from '@layouts/AppLayout/AppLayout';
import { TaskProvider } from '@context';
import './assets/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <AppLayout />
    </TaskProvider>
  </React.StrictMode>
);
