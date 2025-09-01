'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link')
      fontLink.rel = 'preload'
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      fontLink.as = 'style'
      document.head.appendChild(fontLink)

      // Preload critical images
      const criticalImages = [
        '/dk Interior - Logo.png',
        '/dk Interior - Logo w.png'
      ]
      
      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = src
        link.as = 'image'
        document.head.appendChild(link)
      })
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
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
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
