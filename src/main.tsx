import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

if (import.meta.env.PROD) {
  import('web-vitals').then(({ onLCP, onCLS, onINP, onFCP, onTTFB }) => {
    const log = (m: { name: string; value: number; rating: string }) => {
      console.log(`[Web Vitals] ${m.name}: ${m.value} (${m.rating})`);
    };
    onLCP(log);
    onCLS(log);
    onINP(log);
    onFCP(log);
    onTTFB(log);
  });
}
