import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppLayout } from '@layouts/appLayout/AppLayout';
import { FilterProvider, TaskProvider, ThemeProvider } from '@context';
import './assets/global.css';

/**
 * Точка входа в React-приложение.
 *
 * Оборачивает приложение в необходимые провайдеры контекстов:
 * - ThemeProvider — управление темой (светлая/тёмная)
 * - FilterProvider — управление фильтрами задач
 * - TaskProvider — управление состоянием задач
 *
 * Рендерит основной макет приложения `AppLayout` в корневой DOM-элемент с id="root".
 *
 * Используется React.StrictMode для выявления потенциальных проблем в приложении.
 */
const renderApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }

  const root = ReactDOM.createRoot(rootElement);

  root.render(
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
};

renderApp();
