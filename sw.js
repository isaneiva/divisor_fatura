const CACHE = "divisor-v4";
const ARQ = ["./", "./index.html", "./manifest.webmanifest",
             "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(ARQ.map(u => c.add(u).catch(() => {}))))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const vivo = e.request.mode === "navigate"
            || /\.(html|webmanifest)$/.test(url.pathname)
            || url.pathname.endsWith("/");

  if (vivo) {
    // ignora o cache HTTP do navegador: o GitHub Pages entrega com 10 min de validade
    e.respondWith(
      fetch(url.href, { cache: "no-store" })
        .then(res => {
          const copia = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copia)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(e.request).then(h => h || caches.match("./index.html")))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copia = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copia)).catch(() => {});
      return res;
    }))
  );
});
