const CACHE_NAME = 'dk-interiors-v3'
const STATIC_CACHE = 'dk-interiors-static-v3'
const DYNAMIC_CACHE = 'dk-interiors-dynamic-v3'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/factory',
  '/fitout-solutions',
  '/residential-design',
  '/favicon.ico',
  '/manifest.webmanifest'
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
      .catch((error) => {
        console.error('Service worker install failed:', error)
        // Continue with installation even if some assets fail to cache
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

  // For HTML pages, always try network first, then cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // If network request succeeds, update cache
          if (response && response.status === 200) {
            const responseToCache = response.clone()
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseToCache)
              })
          }
          return response
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(request)
            .then((cachedResponse) => {
              return cachedResponse || caches.match('/')
            })
        })
    )
    return
  }

  // For other assets, try cache first, then network
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // For static assets, return cached version immediately
          if (isStaticAsset(request.url)) {
            return cachedResponse
          }
          
          // For dynamic content, return cached but also fetch fresh version
          fetch(request)
            .then((response) => {
              if (response && response.status === 200) {
                const responseToCache = response.clone()
                caches.open(DYNAMIC_CACHE)
                  .then((cache) => {
                    cache.put(request, responseToCache)
                  })
              }
            })
            .catch(() => {
              // Ignore network errors for background updates
            })
          
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
