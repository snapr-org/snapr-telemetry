"use strict";var precacheConfig=[["/index.html","9390b8918f6b821c74c35bef20082516"],["/static/css/main.0482c41d.css","6cbec0fbf399391a96fa4113c985e4bd"],["/static/js/main.20a8134c.js","089229c4c43454d0a333f39545323fcc"],["/static/media/bifrost.28569e9d.svg","28569e9d13ff74cd7dd681ac43803c4a"],["/static/media/broadcast.abf1bd91.svg","abf1bd91baa4bcb7f8bcccf7e5ae1a29"],["/static/media/cennznet.cb6ecb9b.svg","cb6ecb9b4a82e34c70a1ecf4c0799d23"],["/static/media/chainx.b7a55e48.svg","b7a55e48d6adf35c0bab6ca7a6727cab"],["/static/media/check.1899110c.svg","1899110c1bc0f5f0037039003e166720"],["/static/media/cloud-download.ebd06da3.svg","ebd06da3c405e88fb385ae62fdcc73fe"],["/static/media/cloud-upload.9f7736fc.svg","9f7736fcd0dd8c1a21fa5dc4614bc140"],["/static/media/crab.58f2c90e.svg","58f2c90e6ddb1c54ac94a66e58738a14"],["/static/media/crust.eb0f1f92.svg","eb0f1f92da481729d27557eaa7686cbc"],["/static/media/cube-alt.ae9b0e16.svg","ae9b0e1641c08edf5b4d86fd71e38634"],["/static/media/cube.560d035f.svg","560d035f732a0241dffc17574c5dd7bb"],["/static/media/darwinia.9bba2a62.svg","9bba2a62544246c21f795ae3d51fa6c6"],["/static/media/dashboard.d7c4b0ab.svg","d7c4b0ab38cdd2153c6fc63e11dd1f20"],["/static/media/dot.1b187dbe.svg","1b187dbefcfa65801e304669fd640692"],["/static/media/dothereum.86615db1.svg","86615db16f66d6d344277ec5b7c23474"],["/static/media/edgeware.b501a234.svg","b501a23468630e73612ed1e61e3f6c5f"],["/static/media/file-binary.825d29db.svg","825d29db7a86a052c6623d5c105f1a69"],["/static/media/finalized.93fd8f1e.svg","93fd8f1e16de6297d63f00aa6bb2aa5c"],["/static/media/fingerprint.e5dc58bd.svg","e5dc58bd01f4fd94b1fa8a2de75c07e7"],["/static/media/flame.a9fb3b94.svg","a9fb3b9463956afea29f120f64bdbe28"],["/static/media/git-branch.ce2e326e.svg","ce2e326e235d29a30ad6cb1696b1c34d"],["/static/media/hatching.439cca7f.svg","439cca7fe1832e0990711d827bf07810"],["/static/media/history.5922c6df.svg","5922c6dfba198f15b3c5ce36703c1aab"],["/static/media/inbox.47520a22.svg","47520a22607170588463e5f1e3b08950"],["/static/media/joystream.a4d252f9.svg","a4d252f94324652f0c315a5b3692331b"],["/static/media/katalchain.b351851d.svg","b351851d86b6fcb635509c8139e028e0"],["/static/media/kebab-horizontal.647a1f43.svg","647a1f4327795081849b9b23dfe76de9"],["/static/media/laddernetwork.a0a97e12.svg","a0a97e129ba1b1cdc612938c177a6ccb"],["/static/media/list-alt-regular.c56c579e.svg","c56c579e85de3fc583163e8813dd9d6a"],["/static/media/location.c5fbf9df.svg","c5fbf9dfc54aee5af92b79ddcacaf4e1"],["/static/media/mark-github.207687a1.svg","207687a1a5ee00eb276adf2eebf83d5e"],["/static/media/nodle.00c456c7.svg","00c456c76c1262a7095e908c10b95be5"],["/static/media/package.157d03a5.svg","157d03a52def28c3c94efbc7588f74ea"],["/static/media/polkadot-js.90728527.svg","9072852747f4dbaf5169cc56ae5a5881"],["/static/media/pulse.470836b5.svg","470836b5f41985156d5cfc68c33a0847"],["/static/media/robonomics.f0628f43.svg","f0628f439ee140fbdb06e1769b0e31a9"],["/static/media/search.8365fd7b.svg","8365fd7b118ba3028ae0c4261e3d4192"],["/static/media/server.7ae69c9e.svg","7ae69c9ec020a28502b604022f1af488"],["/static/media/settings.d4b545c0.svg","d4b545c0f59667f853e93eafa7fda203"],["/static/media/shield.406341c0.svg","406341c03296ef4cf91be8c467c11c75"],["/static/media/substrate.2ce17e14.svg","2ce17e14dbb51870e5e17e4eb7e8f863"],["/static/media/terminal.ee5f9510.svg","ee5f951080b6337c9a0898166a8a36fb"],["/static/media/totem.d40b0bf5.svg","d40b0bf5e3503225cb40beefd5e9e0d1"],["/static/media/triangle-down.f19e946a.svg","f19e946a4344bec7190b5897fe74c08b"],["/static/media/triangle-up.94c5f8d2.svg","94c5f8d209622db5877379dd718f550d"],["/static/media/turingnetwork.d7fb4176.svg","d7fb4176b53651dfc9d62df05f7e1632"],["/static/media/watch.df650d74.svg","df650d74d7eba06adb832e449c12e626"],["/static/media/world-map.54fd7f86.svg","54fd7f86c8e4a1bba0a92845babe9729"],["/static/media/zap.3ee4e776.svg","3ee4e77646d9b35f1505ce1c52ceb6f2"],["/static/media/zero.5e7f1339.svg","5e7f133900726e7aebb392110e7902a2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var s="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});