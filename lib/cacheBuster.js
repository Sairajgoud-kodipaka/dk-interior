// Cache busting utility for DK Interiors
export const CACHE_VERSION = 'v3.1'

// Generate cache-busted URLs
export function getCacheBustedUrl(url, version = CACHE_VERSION) {
  if (!url) return url
  
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}v=${version}&t=${Date.now()}`
}

// Clear all caches
export async function clearAllCaches() {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return
  }

  try {
    const cacheNames = await caches.keys()
    await Promise.all(
      cacheNames.map(cacheName => {
        if (cacheName.includes('dk-interiors')) {
          console.log('Clearing cache:', cacheName)
          return caches.delete(cacheName)
        }
      })
    )
    console.log('All DK Interiors caches cleared')
  } catch (error) {
    console.error('Error clearing caches:', error)
  }
}

// Force reload with cache busting
export function forceReload() {
  if (typeof window === 'undefined') return
  
  // Clear caches first
  clearAllCaches().then(() => {
    // Force reload with cache busting
    window.location.reload(true)
  })
}

// Check if content is stale
export function isContentStale(lastUpdate, maxAge = 24 * 60 * 60 * 1000) { // 24 hours
  if (!lastUpdate) return true
  return Date.now() - lastUpdate > maxAge
}
