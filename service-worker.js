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