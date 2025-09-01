const CACHE_NAME = 'dk-interiors-v2'
const STATIC_CACHE = 'dk-interiors-static-v2'
const DYNAMIC_CACHE = 'dk-interiors-dynamic-v2'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/factory',
  '/fitout-solutions',
  '/residential-design',
  '/dk Interior - Logo.png',
  '/dk Interior - Logo w.png',
  '/manifest.json'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        return self.skipWaiting()
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }

        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone the response
            const responseToCache = response.clone()

            // Determine cache type based on request
            const cacheType = isStaticAsset(request.url) ? STATIC_CACHE : DYNAMIC_CACHE

            caches.open(cacheType)
              .then((cache) => {
                cache.put(request, responseToCache)
              })

            return response
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/')
            }
          })
      })
  )
})

// Helper function to determine if asset is static
function isStaticAsset(url) {
  return url.includes('/_next/static/') || 
         url.includes('/static/') || 
         url.endsWith('.png') || 
         url.endsWith('.jpg') || 
         url.endsWith('.jpeg') || 
         url.endsWith('.svg') || 
         url.endsWith('.css') || 
         url.endsWith('.js')
}
