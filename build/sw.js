
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');


//custom adjustment
workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );
  
workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "c053352cc0c33fec634668a9fbb109ea"
  },
  {
    "url": "index.html",
    "revision": "c3f1065ab33044e0262e9246b9682f33"
  },
  {
    "url": "js/app.js",
    "revision": "6b73f45a2506a26e00e425688eaa6514"
  }
]);