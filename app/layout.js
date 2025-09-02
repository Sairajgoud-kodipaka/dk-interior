import './globals.css'
import { Inter } from 'next/font/google'
import { ToastProvider } from '@/components/CustomToast'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: 'DK Interiors — The Fitout Pro',
  description: 'Premium interior design and fit-out solutions for retail, commercial, and residential spaces.',
  keywords: 'interior design, fit-out solutions, retail design, commercial interiors, residential design, Hyderabad',
  authors: [{ name: 'DK Interiors' }],
  openGraph: {
    title: 'DK Interiors — The Fitout Pro',
    description: 'Premium interior design and fit-out solutions for retail, commercial, and residential spaces.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Cache busting and service worker management
            if (typeof window !== 'undefined' && 'caches' in window) {
              // Clear old caches on production
              caches.keys().then(function(cacheNames) {
                return Promise.all(
                  cacheNames.map(function(cacheName) {
                    // Only delete old cache versions
                    if (cacheName.includes('dk-interiors') && !cacheName.includes('v3')) {
                      console.log('Deleting old cache:', cacheName);
                      return caches.delete(cacheName);
                    }
                  })
                );
              }).then(function() {
                console.log('Old caches cleared!');
              });
            }
            
            // Update service worker registration
            if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js?v=' + Date.now())
                .then(function(registration) {
                  console.log('Service Worker registered:', registration);
                  // Force update if new version available
                  registration.update();
                })
                .catch(function(error) {
                  console.log('Service Worker registration failed:', error);
                });
            }
          `
        }} />
      </head>
      <body className="font-sans antialiased bg-[#f5f4f2] text-[#0f1115]">
        <ErrorBoundary>
          <PerformanceOptimizer />
          <PerformanceMonitor />
          <ToastProvider>
            {children}
          </ToastProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}