'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c4ff1362f4d569757eb795ad251ef62f",
"version.json": "7fd22d7ee7ec4227853bd3f31142b2a5",
"index.html": "f35abab72e7d6ffe5e731eb5f2cb4a1e",
"/": "f35abab72e7d6ffe5e731eb5f2cb4a1e",
"main.dart.js": "cb10bb74901c85090a96b449b483bde6",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5801e8600bcffedff27f042205859344",
"icons/Icon-192.png": "2f69afc2ff29c37d2bbd1c94fc247ac9",
"icons/Icon-maskable-192.png": "2f69afc2ff29c37d2bbd1c94fc247ac9",
"icons/Icon-maskable-512.png": "fdae3ac00682e72704a3b1a2a8023e56",
"icons/Icon-512.png": "fdae3ac00682e72704a3b1a2a8023e56",
"manifest.json": "f485997d5fa1d4c9dbfa98e6437ed3d5",
"assets/NOTICES": "bff1b4b0913e4cccf79f37116f656311",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/AssetManifest.bin.json": "e6320ff7de07580fd02d30dbca4c1d45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "02bc402a35fb3a5b8156e52265cb894f",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "b7a225eb557dd600e4834771a6b0d16a",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "ca8c1d0ab6044522a8b072ba30b2e794",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "ea2cd320fbd714b0a7bcd513bf28d1f2",
"assets/fonts/MaterialIcons-Regular.otf": "67213601e1afd2a4d428cdcf3a36eba1",
"assets/assets/Images/me.png": "0e01508030fa780bbcd955b728449181",
"assets/assets/Images/inventory_genius/iPhone%252016%2520-%252028.png": "7340427e19e2d26b105a2dab2beaca9b",
"assets/assets/Images/inventory_genius/iPhone%252016%2520-%252029.png": "5e12ab78617d283ded6d5b88ca9bd81f",
"assets/assets/Images/inventory_genius/feature_graphics.png": "0da344f16d4f42033ace67c2c34f85a4",
"assets/assets/Images/inventory_genius/iPhone%252016%2520-%252024.png": "1e64a7b0be4a8f4ac5df9426dc216127",
"assets/assets/Images/inventory_genius/iPhone%252016%2520-%252027.png": "f9281beddb8a972387b805be83565627",
"assets/assets/Images/inventory_genius/iPhone%252016%2520-%252026.png": "0a4458b31c02e61582c124218dfeded6",
"assets/assets/Images/inventory_genius/iPhone%252016%2520-%252022.png": "143d809c4df6ef71c6f9f91466cdc512",
"assets/assets/Images/inventory_genius/app_logo_2.png": "3a35d48b4f2b414e2003a49609fd9cfb",
"assets/assets/Images/inventory_genius/app_logo_1.png": "f2b9b20fb84206ee7562ea11bd671706",
"assets/assets/Images/parts_creator/parts-creator.png": "601e2863518e98b1702ed203caab4bae",
"assets/assets/Images/parts_creator/3D%2520-%2520arrangement%2520of%2520blocks.png": "a4053d3b80664d47b40e5ca33097cbb8",
"assets/assets/Images/parts_creator/3D%25202.png": "f132522c94635fc0e82f3742be0d10fe",
"assets/assets/Images/parts_creator/Vehicle%2520View%2520Record%2520List(1).png": "824a9c0bf03c89dccbd8ff5a471093b7",
"assets/assets/Images/parts_creator/I%2520found%2520a%2520suvey%2520already%2520filled%2520out%2520for%2520this%2520OE%2520part%2520number!.png": "f6e49380f6bc3c919eef88b3fb3166f3",
"assets/assets/Images/parts_creator/Enter%2520a%2520Serial%2520Number.png": "c6fd1cdcdbd00231e75133eda7463c8d",
"assets/assets/Images/parts_creator/Compilation%2520of%2520surveys.png": "6e96a8cfe55226cc9506f277df8341ee",
"assets/assets/Images/parts_creator/Spare%2520Parts%2520Cataloguing%2520-%2520Update.png": "da52483028400bde8977ca60d86b73e9",
"assets/assets/Images/parts_creator/Vehicle%2520Mapping_2.png": "a6c920dde088ebd001a32c19e74dd185",
"assets/assets/Images/parts_creator/Spare%2520Parts%2520Cataloguing(1).png": "bef0dbd5435e00187e14e10521fda40c",
"assets/assets/Images/parts_creator/SurveyCategory.png": "05f83044c552302ad01b0fd926943833",
"assets/assets/Images/logo-codebeex.png": "8f64944ad706305d07933280a08596b8",
"assets/assets/Images/gaming.png": "2d7ed8db04ba3bc36125129cb947322b",
"assets/assets/Images/sports.png": "17e9efdf4ff84f32e1e0693a9648dd95",
"assets/assets/Images/vaset_kala/vasetkala-logo.png": "fa92b6cd74177f56ffb99f247209b48e",
"assets/assets/Images/vaset_kala/vasetkala-3.png": "26c79d3ffeb9d6ac532200f9d9e46aca",
"assets/assets/Images/vaset_kala/vasetkala-2.png": "325d3bf8c8ac56bd1121888355b73bb3",
"assets/assets/Images/vaset_kala/vasetkala-1.png": "91c71caff066d0d7a6c2f7c2e186e3f9",
"assets/assets/Images/vaset_kala/vasetkala-4.png": "26f8f087de8fd083d6bee3fb871f9406",
"assets/assets/Images/photo_shark/feature_graphic.png": "f4bd4d81290ba9dbd311246ad2b455fe",
"assets/assets/Images/photo_shark/iPhone%252016%2520-%252011.png": "7074abcf07d3d7105a82027a4a22685f",
"assets/assets/Images/photo_shark/iPhone%252016%2520-%252010.png": "289797161432d2e054b3a7661b2d981f",
"assets/assets/Images/photo_shark/iPhone%252016%2520-%252012.png": "1ac4d7cb6cad8a08b9562bcefae4eacc",
"assets/assets/Images/photo_shark/iPhone%252016%2520-%252013.png": "47f9633a0dfe9472964d1cc2586f724e",
"assets/assets/Images/photo_shark/iPhone%252016%2520-%252014.png": "7f13c67969aa3073711dd39a4841345d",
"assets/assets/Images/photo_shark/iPhone%252016%2520-%252015.png": "ee948b9c3cf24ebb948ed3718333f4db",
"assets/assets/Images/photo_shark/app_logo.png": "5c884ba3e4ef4373038e9170a45b9c6a",
"assets/assets/Images/PartsCoder-logo_full.png": "23bb0ff0e1aefda378d82101916cb545",
"assets/assets/Images/PartsCoder-logo_mini.png": "4c658f7c5e9cb57b5fabf2b85ea72848",
"assets/assets/Images/coding.png": "bb958f1a29264b9db6c0f5addaee6727",
"assets/assets/Notes/voice.m4a": "e1bb94c6bc191f9f5684ac9cb94b295f",
"assets/assets/Notes/CV.pdf": "3847b9969d747c86dc81032f7283bb02",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
