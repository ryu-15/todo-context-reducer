import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/globalStyle/index.css.ts';
import App from '@/views/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
