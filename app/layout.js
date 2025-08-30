import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'DK Interiors — The Fitout Pro',
  description: 'Premium interior design and fitout solutions for retail, commercial, and residential spaces.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#f5f4f2] text-[#0f1115]">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}