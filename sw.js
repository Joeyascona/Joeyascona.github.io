var cacheName = 'CSv2';

var cachedFiles = [
    '/',
    '/index.html',
    '/funcionalidad.js',
    '/manifest.json',
    '/wood.jpg',
    '/estilo.css'
];


self.addEventListener('install', function (event) {
    console.log('Service Worker Install Event');
    // Add the file to the cache
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('Caching Files');
            return cache.addAll(cachedFiles);
        }).then(function () {
            return self.skipWaiting();
        }).catch(function (err) {
            console.log('Cache Failed', err);
        })
    );
});


self.addEventListener('activate', function (event) {
    console.log('Service Worker Activated');
    event.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log('Removing Old Cache', key);
                    return caches.delete(key)
                }
            }));
        })

    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(event){
    console.log('Fetch Event' + event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );

});

