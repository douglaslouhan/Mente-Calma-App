const CACHE_NAME = 'mente-calma-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
];

// Evento de Instalação: armazena os assets principais no cache.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de Ativação: limpa caches antigos para manter o app atualizado.
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Evento de Fetch: serve os assets do cache primeiro (Cache-First).
// Se não estiver no cache, busca na rede.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se encontrar no cache, retorna a resposta do cache.
        if (response) {
          return response;
        }
        
        // Se não, busca na rede.
        return fetch(event.request);
      })
  );
});
