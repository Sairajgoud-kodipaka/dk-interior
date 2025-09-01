'use client'

import { useEffect } from 'react'

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log to console for debugging
        console.log(`${entry.name}: ${entry.value}`)
        
        // Send to analytics (replace with your analytics service)
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', entry.name, {
            value: Math.round(entry.value),
            event_category: 'Web Vitals',
            event_label: entry.id,
            non_interaction: true,
          })
        }
      }
    })

    // Observe Core Web Vitals
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 1000) { // Log slow resources
          console.warn(`Slow resource: ${entry.name} took ${entry.duration}ms`)
        }
      }
    })

    resourceObserver.observe({ entryTypes: ['resource'] })

    // Cleanup
    return () => {
      observer.disconnect()
      resourceObserver.disconnect()
    }
  }, [])

  return null // This component doesn't render anything
}

export default PerformanceMonitor
