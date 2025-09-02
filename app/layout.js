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
  title: 'DK Interiors — The Fitout Pro | Premium Interior Design & Fit-out Solutions',
  description: 'Leading interior design company in Hyderabad. Specialized in retail, commercial & residential fit-out solutions. 20+ years experience. Call +91 98858 09472',
  keywords: 'interior design Hyderabad, fit-out solutions, retail design, commercial interiors, residential design, furniture manufacturing, custom interiors, office design, showroom design, jewelry store design',
  authors: [{ name: 'DK Interiors' }],
  creator: 'DK Interiors',
  publisher: 'DK Interiors',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.dk-interior.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DK Interiors — The Fitout Pro | Premium Interior Design & Fit-out Solutions',
    description: 'Leading interior design company in Hyderabad. Specialized in retail, commercial & residential fit-out solutions. 20+ years experience.',
    url: 'https://www.dk-interior.in',
    siteName: 'DK Interiors',
    images: [
      {
        url: '/optimized/dk Interior - Logo.png',
        width: 1200,
        height: 630,
        alt: 'DK Interiors - Premium Interior Design Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DK Interiors — The Fitout Pro',
    description: 'Leading interior design company in Hyderabad. Specialized in retail, commercial & residential fit-out solutions.',
    images: ['/optimized/dk Interior - Logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
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
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DK Interiors",
              "alternateName": "The Fitout Pro",
              "url": "https://www.dk-interior.in",
              "logo": "https://www.dk-interior.in/optimized/dk Interior - Logo.png",
              "description": "Premium interior design and fit-out solutions for retail, commercial, and residential spaces in Hyderabad",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Survey No.169, Vavilala Village, Jinnaram Mandal",
                "addressLocality": "Sangareddy",
                "addressRegion": "Hyderabad",
                "addressCountry": "IN",
                "postalCode": "502319"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-98858-09472",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "email": "dkinterior17@gmail.com",
              "foundingDate": "2004",
              "numberOfEmployees": "20-50",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 17.3850,
                  "longitude": 78.4867
                },
                "geoRadius": "100000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Interior Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fit-out Solutions",
                      "description": "Complete fit-out solutions for retail, commercial, and corporate spaces"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Design",
                      "description": "Custom interior design for homes and apartments"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Furniture Manufacturing",
                      "description": "Custom furniture manufacturing and installation"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.dk-interior.in"
              ]
            })
          }}
        />
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