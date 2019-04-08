importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');
// workbox.setConfig({modulePathPrefix: './build/workbox-v4.2.0'});
/*
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
*/

workbox.precaching.precacheAndRoute([
    './geoToolsParcel.af78f261.js',
    './geoToolsParcel.5cd39c0a.css',
    './manifest.json',
    './icoGeoTools192.png',
    './icoGeoTools512.png',
    './geotools.html'
]);

// ??? ev. besser als jetzt mit Locale Storage ???
/*
workbox.routing.registerRoute(
  new RegExp('.*geoservices\.zh\.ch\/geoshopapi\/v1\/products.*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'fpc-cache',
  })
);
*/

workbox.routing.registerRoute(
  new RegExp('.*fonts\.googleapis\.com.*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'font-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp('.*fonts\.gstatic\.com.*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'font-cache',
  })
);

/*
workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  new workbox.strategies.NetworkFirst()
);
*/

/*
workbox.routing.registerRoute(
  // Cache CSS files.
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);
*/

/*
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('progessive-elm').then(function(cache) {
     return cache.addAll([
      './',
      './geotools.html',
      './geoToolsParcel.b562158f.js',
      './geoToolsParcel.5cd39c0a.css',
      './manifest.json',
      './icoGeoTools192.png',
      './icoGeoTools512.png',
      'https://fonts.googleapis.com/css?family=Montserrat:300',
      'https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_cJD3gnD_g.woff2'
      // 'https://geoservices.zh.ch/geoshopapi/v1/products'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
    console.log('Service Worker Intercept: ' + event.request.url);

    event.respondWith(

        caches.match(event.request).then(function(response) {

            console.log('Service Worker Serve: ' + event.request.url);

            return response || fetch(event.request);

        })

    );
});
*/
