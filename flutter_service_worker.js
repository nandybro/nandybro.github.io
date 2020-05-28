'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "2935b77625225713abb70fa6a36d616e",
"/main.dart.js": "f3d4f1c55d813b9aefc3e75933ae5987",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/logs/HEAD": "a74267e9cc0bf8877fc522a330b9ba4d",
"/.git/logs/refs/remotes/origin/master": "3a80301e2aa2ec9c3871a26cf45c9a79",
"/.git/logs/refs/heads/master": "a74267e9cc0bf8877fc522a330b9ba4d",
"/.git/COMMIT_EDITMSG": "1df5ee28c9955544f2ebe06a6c829b57",
"/.git/config": "4692c87d4c2cf0a89eb407b81b679d6a",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/index": "34bbf06f32c7506eacfd968f20000e14",
"/.git/refs/remotes/origin/master": "e95fc60a9c07247ff9409cd4acbc471f",
"/.git/refs/heads/master": "e95fc60a9c07247ff9409cd4acbc471f",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/fa/a759c4ee50d30e5c654ab0f458da349da9e832": "12e472ad97d5a358dc53774c56b0cf46",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/20/7e436b6e901e09b4c6e30c4ab38ea738fc35ee": "f7ed7d5ab5fab38fc3c8f9951931a353",
"/.git/objects/cc/486ecb14db610a28cf5e7c9abafc25a5ed798a": "8844e01345ae93cfef11b471f336a82f",
"/.git/objects/99/7b44258f8c90f6f0b460c625b80d9e891e236e": "ee8b95bb3513138c13a6d46006c06392",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/60/9b2c4b21827cd4099902e028db20ef4a97e74a": "0ebf3ed866f5addae4514308fc0a5486",
"/.git/objects/83/e3f66d47f3f51c21ceb78b09bada9fbaaf7c65": "8a2c1d2187615321feffc874af9985cd",
"/.git/objects/6f/861a1379d69a2f34760b21e857e6ef27eb5d69": "7e3d2afa6a4baed56223d3d6b15a7cd1",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/ac/3ab7817ba5e12c76625c4c8de7b747c9732050": "c985a4ee4e34090e54360b90afaea642",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/e3/3166e1e04b4f0a64ea9564c8e56b85731ce1bc": "7628ce917765d45e619692d04a116730",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/manifest.json": "4fae37d0c552b20519717aa990407269",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
