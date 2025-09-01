export default function manifest() {
  return {
    name: 'DK Interiors - The Fitout Pro',
    short_name: 'DK Interiors',
    description: 'Premium interior design and fit-out solutions for retail, commercial, and residential spaces.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f4f2',
    theme_color: '#B85042',
    icons: [
      {
        src: '/optimized/dk Interior - Logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/optimized/dk Interior - Logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'lifestyle', 'shopping'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}
