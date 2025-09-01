'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Only preload favicon which is actually used
      const faviconLink = document.createElement('link')
      faviconLink.rel = 'preload'
      faviconLink.href = '/favicon.ico'
      faviconLink.as = 'image'
      document.head.appendChild(faviconLink)
    }

    // Optimize images loading
    const optimizeImageLoading = () => {
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy'
        }
        if (!img.decoding) {
          img.decoding = 'async'
        }
      })
    }

    // Prefetch next page on hover
    const prefetchOnHover = () => {
      const links = document.querySelectorAll('a[href^="/"]')
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href')
          if (href && !href.startsWith('#')) {
            const prefetchLink = document.createElement('link')
            prefetchLink.rel = 'prefetch'
            prefetchLink.href = href
            document.head.appendChild(prefetchLink)
          }
        }, { once: true })
      })
    }

    // Service Worker registration for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration)
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError)
          })
      }
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImageLoading()
    prefetchOnHover()
    registerServiceWorker()

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0]
        if (perfData) {
          console.log('Performance Metrics:', {
            'DOM Content Loaded': Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
            'Load Complete': Math.round(perfData.loadEventEnd - perfData.loadEventStart),
            'First Paint': Math.round(perfData.responseEnd - perfData.fetchStart),
            'Total Load Time': Math.round(perfData.loadEventEnd - perfData.fetchStart)
          })
        }
      })
    }
  }, [])

  return null
}
