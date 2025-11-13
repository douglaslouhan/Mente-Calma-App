import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// --- CORREÇÃO ---
// O bloco de código abaixo foi "comentado" (desativado).
// Ele estava tentando carregar o arquivo '/service-worker.js',
// que não foi encontrado (erro 404) e estava quebrando o app.
// Ao desativar, o app vai carregar normalmente.

/*
// Registra o Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registrado com sucesso: ', registration.scope);
      })
      .catch(error => {
        console.log('Falha no registro do ServiceWorker: ', error);
      });
  });
}
*/

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
