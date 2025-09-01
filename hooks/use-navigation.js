import { useRouter } from 'next/navigation'

export function useNavigation() {
  const router = useRouter()

  const scrollToSection = (sectionId) => {
    if (typeof window === 'undefined') return
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavigation = (href) => {
    if (href.startsWith('/')) {
      // External page navigation
      router.push(href)
    } else if (href.startsWith('#')) {
      // Internal section navigation
      if (typeof window !== 'undefined' && window.location.pathname === '/') {
        // Already on home page, scroll to section
        scrollToSection(href.substring(1))
      } else {
        // On different page, navigate to home page first, then scroll
        router.push('/')
        // Set a flag to scroll after navigation
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('scrollToSection', href)
        }
      }
    }
  }

  return {
    scrollToSection,
    handleNavigation,
    router
  }
}
