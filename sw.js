self.addEventListener('install', (e) => {
  console.log('[Service Worker] Установлен');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Активирован');
});

self.addEventListener('fetch', (e) => {
  // Пропускаем все запросы напрямую в сеть
});
