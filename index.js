import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Substitua o ReactDOM.render por createRoot
const container = document.getElementById('app-root');
const root = createRoot(container); // Crie o root no React 18
root.render(<App />); // Renderize o componente App
