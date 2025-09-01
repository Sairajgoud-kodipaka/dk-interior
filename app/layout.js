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
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Clear all caches on page load for development
            if (typeof window !== 'undefined' && 'caches' in window) {
              caches.keys().then(function(cacheNames) {
                return Promise.all(
                  cacheNames.map(function(cacheName) {
                    console.log('Deleting cache:', cacheName);
                    return caches.delete(cacheName);
                  })
                );
              }).then(function() {
                console.log('All caches cleared!');
              });
            }
            
            // Unregister service worker
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for(let registration of registrations) {
                  console.log('Unregistering service worker:', registration);
                  registration.unregister();
                }
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