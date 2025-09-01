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
  description: 'Premium interior design and fitout solutions for retail, commercial, and residential spaces.',
  keywords: 'interior design, fitout solutions, retail design, commercial interiors, residential design, Hyderabad',
  authors: [{ name: 'DK Interiors' }],
  openGraph: {
    title: 'DK Interiors — The Fitout Pro',
    description: 'Premium interior design and fitout solutions for retail, commercial, and residential spaces.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
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