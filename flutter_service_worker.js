'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "487f4450887b4edb8b35414cf1ab2893",
"assets/AssetManifest.bin.json": "0215342c0c49b451942b14e264410fe2",
"assets/AssetManifest.json": "3e0c1973d1134367754587f11a28068c",
"assets/assets/Apostols%25201.png": "25166652c9c0f19ca46dc335d8446ec3",
"assets/assets/Apostols%25202.png": "1e62fe3d4f0918de27e3fd29ad009375",
"assets/assets/Apostols%25203.png": "ca94d2ce34292924444e9347957a5d74",
"assets/assets/Apostols%25204.png": "9e1bb3a0847746227ca6153aa1a626ed",
"assets/assets/Bell%25203-D.mp3": "63abba6ea74cc1e5292118fda3f0a4cf",
"assets/assets/Bell%25204-E.mp3": "fa11f47fd5fb9ef9f1bfca35867ceed7",
"assets/assets/Bell%25205-A.mp3": "0f78891531b5fa79ec10bbf6d39d1227",
"assets/assets/Bell%25206-F%2523.mp3": "45c95678e8b70e6090690f4f0f317ae2",
"assets/assets/Bell%25207-B.mp3": "c6329b1a8b45cc6b738a21851b518981",
"assets/assets/Bell%25208-G.mp3": "e9d1851812e6054d45fbbf125595e024",
"assets/assets/Bell%25209-D-.mp3": "462f26f25b1b8fd41805fc30304274ab",
"assets/assets/Bell3.png": "2ee36e5fc523cb56f2b2b2cedf2825e3",
"assets/assets/Bell4.png": "ed181fb87157f3f840f884f2bf233880",
"assets/assets/Bell5.png": "70cc02b66f6b221ca4c1cc272ea7dbfe",
"assets/assets/Bell6.png": "f5369b58d25d5dddd22bc0903de1aed1",
"assets/assets/Bell7.png": "e02c78a831235b1ddbe0e5d9258582c6",
"assets/assets/Bell8.png": "5f1824b2ddec63db843ed51c8ee3de3d",
"assets/assets/Bell9.png": "2fa2c8baf980dc219e9b2836ca5adcb0",
"assets/assets/Flags1.png": "8c7192b2d394d24ffad37f1cbc01bd7b",
"assets/assets/Flags2.png": "5333bf190421210c16fe1dbe5cb770a0",
"assets/assets/Flags3.png": "aa0fd41b2cf61bec89dfdd7ddad79507",
"assets/assets/Flags4.png": "704a0e74b13b2dd2e9b931d9602c4c06",
"assets/assets/History1984.png": "78a5bb5de4f47ec6b99ad2bdd3eda38d",
"assets/assets/HistoryCharlamene.png": "6f8ab2a6ea7f97585f1b01332da5b187",
"assets/assets/HistoryMoh%25C3%25A1cs.png": "d57c128726e4838c15ec2e655334c0e1",
"assets/assets/HistoryMuhhamad.png": "1c0c10cb16872660c5752a79efa1ea08",
"assets/assets/HistorySecondTemple.png": "f7ff152a9170315697a478da5b8f0035",
"assets/assets/Indiana.png": "ccb51e07a26e7001f3c78dd958228b53",
"assets/assets/Leonardo.png": "7a899fc1d37877c5c076cc5cbbc9a023",
"assets/assets/Star-Alnilam.png": "171c5d0424159338c4b685cd5a66357d",
"assets/assets/Star-AlphaCentauri.png": "96dcde7d7254d15330d5ba30fe3cbfd0",
"assets/assets/Star-Andromeda.png": "37b4d0ac60e3f57decb985d543e65c70",
"assets/assets/Star-Mars.png": "e402f142c939498aa916089408a1b264",
"assets/assets/Star-Pluto.png": "a9d4d5fe63b6df898d41009f96ae0849",
"assets/assets/Star-Saturn.png": "67c0c71f4694750f93e86ca0177b2065",
"assets/assets/Star-Sirius.png": "5e24ac708d1f87c581b2d79196959e44",
"assets/assets/StarClue-ThreeWiseMan.png": "b9cae164122bf4432d4963b0cc0e0b4d",
"assets/assets/Supper.png": "0a8dfd12f5af92caa5593b2e7b579183",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "869ce41036ee3507bdd5846eb233bf42",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "2614b24478f0d3dc1703d72196b2676d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ada3e56b604e28bafd99d1eef860305b",
"/": "ada3e56b604e28bafd99d1eef860305b",
"main.dart.js": "c9e1bd7be4eb89102577f6029c5197a6",
"manifest.json": "ca58dfab38a78f1605cddf116996630e",
"version.json": "c608b83f777d5b1bfc5ff775f459ce5f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
