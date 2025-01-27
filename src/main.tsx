import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/globalStyle/index.css.ts';
import App from '@/views/App.tsx';
import themeData from '@/styles/theme/themeData/themeData.css.ts';

document.body.className = themeData;
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
