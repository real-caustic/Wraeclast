const CACHE="wraeclast-99ef2b0631";
const FILES=["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "library.json", "guides/poe1-storm-burst-of-repulsion-totem-hierophant-covens-of-umbra.html", "filters/poe1-storm-burst-of-repulsion-totem-hierophant-covens-of-umbra.filter", "guides/poe1-poison-summon-raging-spirits-necromancer-covens-of-umbra.html", "filters/poe1-poison-summon-raging-spirits-necromancer-covens-of-umbra.filter", "guides/poe1-tornado-shot-reliquarian-covens-of-umbra.html", "filters/poe1-tornado-shot-reliquarian-covens-of-umbra.filter", "guides/poe1-pyroclast-mine-saboteur-covens-of-umbra.html", "filters/poe1-pyroclast-mine-saboteur-covens-of-umbra.filter", "guides/poe2-stormweaver-arc-levelling.html", "filters/poe2-stormweaver-arc-levelling.filter", "guides/poe2-varashta-djinn-levelling.html", "filters/poe2-varashta-djinn-levelling.filter"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  if(u.origin!==location.origin)return; // other sites (web fonts): guides fall back to system fonts offline
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return res;}).catch(()=>caches.match("index.html"))));
});
