self.addEventListener('install', (e) => {
  console.log('[Service Worker] Установлен');
});

self.addEventListener('fetch', (e) => {
  // Оставляем пустым, чтобы пропускать все сетевые запросы напрямую
});
