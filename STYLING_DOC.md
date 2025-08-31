# DK Interiors - Styling Documentation

## Table of Contents
1. [Brand Identity](#brand-identity)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Component Library](#component-library)
5. [Layout & Spacing](#layout--spacing)
6. [Animations & Effects](#animations--effects)
7. [Responsive Design](#responsive-design)
8. [Logo Usage](#logo-usage)
9. [Custom CSS Classes](#custom-css-classes)
10. [Design Principles](#design-principles)

## Brand Identity

### Logo Specifications
- **Primary Logo**: `dk Interior - Logo.png` - Used in navbar, sidebar, and light backgrounds
- **White Logo**: `dk Interior - Logo w.png` - Used in footer and dark backgrounds
- **Logo Size**: 20px height (h-5 in Tailwind) for consistent branding
- **Logo Format**: PNG with transparent background
- **Brand Colors**: Primary #B85042 (Brick Red), Secondary #0f1115 (Dark Charcoal)

### Brand Personality
- **Elegant & Sophisticated**: Clean lines, premium materials, luxury aesthetic
- **Modern & Contemporary**: Cutting-edge design with timeless appeal
- **Professional & Trustworthy**: Reliable, high-quality interior solutions
- **Innovative & Creative**: Forward-thinking design approaches

## Color Palette

### Primary Colors
```css
--primary: 184 80 66        /* #B85042 - Brick Red */
--primary-foreground: 255 255 255  /* White */
```

### Background Colors
```css
--background: 245 244 242   /* #f5f4f2 - Warm Off-White */
--foreground: 15 17 21      /* #0f1115 - Dark Charcoal */
--card: 255 255 255         /* Pure White */
--card-foreground: 15 17 21 /* Dark Charcoal */
```

### Secondary Colors
```css
--secondary: 245 244 242    /* #f5f4f2 - Warm Off-White */
--secondary-foreground: 15 17 21  /* Dark Charcoal */
--muted: 245 244 242        /* Warm Off-White */
--muted-foreground: 107 114 128   /* #6b7280 - Gray */
```

### Accent & Utility Colors
```css
--accent: 245 244 242       /* Warm Off-White */
--accent-foreground: 15 17 21  /* Dark Charcoal */
--destructive: 239 68 68    /* #ef4444 - Red */
--destructive-foreground: 255 255 255  /* White */
--border: 107 114 128       /* #6b7280 - Gray */
--input: 245 244 242        /* Warm Off-White */
--ring: 184 80 66           /* #B85042 - Brick Red */
```

### Semantic Color Usage
- **Primary Actions**: #B85042 (Brick Red)
- **Text & Headings**: #0f1115 (Dark Charcoal)
- **Background**: #f5f4f2 (Warm Off-White)
- **Accents & Highlights**: #B85042 (Brick Red)
- **Borders & Dividers**: #6b7280 (Gray)
- **Success States**: Green variants
- **Error States**: #ef4444 (Red)

## Typography

### Font Family
- **Primary Font**: Inter (Google Fonts)
- **Font Weights**: 100-900 (variable font)
- **Font Features**: 'liga' 1, 'kern' 1 for optimal readability

### Type Scale
```css
/* Fluid Typography Classes */
.text-fluid-xs    /* 0.75rem - 0.875rem */
.text-fluid-sm    /* 0.875rem - 1rem */
.text-fluid-base  /* 1rem - 1.125rem */
.text-fluid-lg    /* 1.125rem - 1.25rem */
.text-fluid-xl    /* 1.25rem - 1.5rem */
.text-fluid-2xl   /* 1.5rem - 2rem */
.text-fluid-3xl   /* 1.875rem - 2.5rem */
.text-fluid-4xl   /* 2.25rem - 3rem */
.text-fluid-5xl   /* 3rem - 4rem */
.text-fluid-6xl   /* 3.75rem - 5rem */
.text-fluid-7xl   /* 4.5rem - 6rem */
.text-fluid-8xl   /* 5rem - 7rem */
.text-fluid-9xl   /* 6rem - 8rem */
```

### Typography Classes
```css
/* Brand Typography */
.tagline          /* Inter font with ligatures and kerning */
.brand-name       /* Inter font with letter-spacing 0.15em */
.hero-title       /* Inter font with negative letter-spacing */
.kinetic-headline /* Interactive headline with hover effects */
```

### Text Rendering
- **Optimization**: `text-rendering: optimizeLegibility`
- **Font Features**: `font-feature-settings: 'liga' 1, 'kern' 1`
- **Line Heights**: Optimized for readability (1.1 - 1.4)
- **Letter Spacing**: Strategic spacing for brand consistency

## Component Library

### Navigation Components
```jsx
// NavBar
<nav className="sticky top-0 z-50 bg-[#f5f4f2]/95 backdrop-blur-sm border-b border-[#6b7280]/20">
  {/* Logo: 20px height */}
  <img src="/dk Interior - Logo.png" className="h-5 w-auto object-contain" />
  
  {/* Navigation Links */}
  <button className="text-sm font-medium hover:text-[#B85042] focus:ring-2 focus:ring-[#B85042]">
    {section.name}
  </button>
</nav>

// Mobile Sidebar
<div className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl">
  {/* Logo: 20px height */}
  <img src="/dk Interior - Logo.png" className="h-5 w-auto object-contain" />
</div>
```

### Hero Section
```jsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Video Background */}
  <video className="w-full h-full object-cover transition-all duration-1000" />
  
  {/* Content */}
  <div className="eye-level-container">
    <h1 className="hero-title kinetic-headline text-fluid-6xl md:text-fluid-7xl lg:text-fluid-8xl">
      {title}
    </h1>
  </div>
</section>
```

### Form Components
```jsx
// Input Fields
<Input 
  className="focus:ring-2 focus:ring-[#B85042] focus:border-[#B85042]"
  placeholder="Enter your information"
/>

// Buttons
<Button className="bg-[#B85042] hover:bg-[#B85042]/90 focus:ring-2 focus:ring-[#B85042]">
  Submit
</Button>
```

### Footer
```jsx
<footer className="bg-[#0f1115] text-white py-12">
  {/* Logo: 20px height */}
  <img src="/dk Interior - Logo w.png" className="h-5 w-auto mb-6 object-contain" />
  
  {/* Footer Links */}
  <button className="text-gray-300 hover:text-white transition-colors duration-200">
    {linkText}
  </button>
</footer>
```

## Layout & Spacing

### Container System
```css
.container {
  @apply mx-auto px-4 sm:px-6 lg:px-8;
  max-width: 1400px;
}
```

### Spacing Scale
```css
/* Tailwind Spacing */
.p-2    /* 8px */
.p-4    /* 16px */
.p-6    /* 24px */
.p-8    /* 32px */
.py-12  /* 48px vertical */
.px-4   /* 16px horizontal */
.px-6   /* 24px horizontal */
.px-8   /* 32px horizontal */
```

### Grid System
```css
/* Responsive Grid */
.grid md:grid-cols-4 gap-8
.grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
```

### Section Spacing
```css
/* Section Padding */
.py-12          /* 48px vertical */
.py-16          /* 64px vertical */
.py-20          /* 80px vertical */
.py-24          /* 96px vertical */

/* Section Margins */
.mt-10          /* 40px top margin */
.mb-6           /* 24px bottom margin */
```

## Animations & Effects

### Kinetic Effects
```css
/* Kinetic Headlines */
.kinetic-headline {
  transition: all 0.6s cubic-bezier(0.25, 0.25, 0.25, 0.75);
}

.kinetic-headline:hover {
  transform: translateY(-4px) scale(1.02);
  text-shadow: 0 6px 25px rgba(0,0,0,0.9);
}

/* Kinetic Elements */
.kinetic-element:hover {
  transform: scale(1.1) rotate(45deg);
  filter: brightness(1.2);
}

/* Kinetic Buttons */
.kinetic-button:hover {
  transform: translateY(-3px) scale(1.05) rotateX(10deg);
  box-shadow: 0 20px 40px rgba(184, 80, 66, 0.4);
}
```

### Reveal Animations
```css
/* Text Reveal */
.text-reveal {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  transition: all 0.8s cubic-bezier(0.25, 0.25, 0.25, 0.75);
}

.text-reveal.revealed {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Stagger Text */
.stagger-text > * {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.25, 0.25, 0.25, 0.75);
}
```

### Glass Effects
```css
/* Enhanced Glass Effect */
.glass-effect-enhanced {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Standard Glass Effect */
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Floating Elements
```css
.floating-element {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}
```

## Responsive Design

### Breakpoint System
```css
/* Tailwind Breakpoints */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1400px  /* 2X large devices */
```

### Mobile-First Approach
```css
/* Base styles for mobile */
.className { /* Mobile styles */ }

/* Responsive modifiers */
@media (min-width: 768px) {
  .md:className { /* Tablet styles */ }
}

@media (min-width: 1024px) {
  .lg:className { /* Desktop styles */ }
}
```

### Responsive Typography
```css
/* Fluid typography that scales with viewport */
.text-fluid-4xl {
  font-size: calc(2.25rem + (3 - 2.25) * var(--fluid-bp));
}
```

### Responsive Layouts
```css
/* Responsive Grid */
.grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4

/* Responsive Spacing */
.p-4 sm:p-6 lg:p-8 xl:p-12

/* Responsive Text */
.text-lg sm:text-xl lg:text-2xl xl:text-3xl
```

## Logo Usage

### Logo Specifications
- **File Names**:
  - `dk Interior - Logo.png` - Primary logo for light backgrounds
  - `dk Interior - Logo w.png` - White logo for dark backgrounds
- **Dimensions**: 20px height (h-5 in Tailwind)
- **Format**: PNG with transparent background
- **Aspect Ratio**: Maintained with `w-auto`

### Logo Placement
```jsx
// Navbar & Sidebar (Light Backgrounds)
<img 
  src="/dk Interior - Logo.png" 
  alt="DK Interiors Logo"
  className="h-5 w-auto object-contain"
/>

// Footer (Dark Background)
<img 
  src="/dk Interior - Logo w.png" 
  alt="DK Interiors Logo"
  className="h-5 w-auto object-contain"
/>
```

### Logo Guidelines
- **Minimum Size**: 20px height for consistency
- **Maximum Size**: Scale appropriately for different contexts
- **Spacing**: Maintain adequate whitespace around logos
- **Background**: Ensure sufficient contrast for visibility
- **Fallback**: Include fallback logo (logo.svg) for error handling

## Custom CSS Classes

### Animation Utilities
```css
/* Reveal Animations */
.animate-reveal
.animate-reveal-left
.animate-reveal-right
.animate-scale-in

/* Kinetic Effects */
.kinetic-headline
.kinetic-element
.kinetic-button
.kinetic-text

/* Interactive Elements */
.interactive-element
.focus-enhanced
```

### Layout Utilities
```css
/* Eye-level Positioning */
.eye-level-container
.eye-level-content

/* Glass Effects */
.glass-effect
.glass-effect-enhanced

/* Text Effects */
.drop-shadow-text
.btn-premium
```

### Responsive Utilities
```css
/* Fluid Typography */
.text-fluid-xs through .text-fluid-9xl

/* Responsive Spacing */
.stagger-text
.text-reveal
```

## Design Principles

### 1. Elegance & Sophistication
- Clean, minimal design with premium materials
- Sophisticated color palette with warm undertones
- Professional typography with optimal readability

### 2. Modern & Contemporary
- Current design trends and technologies
- Innovative animations and interactions
- Responsive and accessible design

### 3. Brand Consistency
- Unified color scheme across all components
- Consistent spacing and typography
- Cohesive visual language

### 4. User Experience
- Intuitive navigation and interactions
- Smooth animations and transitions
- Accessible design for all users

### 5. Performance
- Optimized animations and effects
- Efficient CSS and JavaScript
- Fast loading and smooth interactions

## Implementation Guidelines

### CSS Organization
1. **Base Styles**: Global resets and typography
2. **Component Styles**: Individual component styling
3. **Utility Classes**: Reusable helper classes
4. **Animations**: Keyframes and transition utilities
5. **Responsive**: Media queries and breakpoint styles

### Naming Conventions
- **Components**: PascalCase (e.g., `.NavBar`, `.Hero`)
- **Utilities**: kebab-case (e.g., `.glass-effect`, `.kinetic-headline`)
- **States**: camelCase with modifiers (e.g., `.isActive`, `.hasError`)

### Accessibility
- **Color Contrast**: Minimum 4.5:1 ratio for text
- **Focus States**: Visible focus indicators
- **Motion**: Respect `prefers-reduced-motion`
- **Semantic HTML**: Proper heading hierarchy and landmarks

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **CSS Features**: CSS Grid, Flexbox, CSS Variables, Backdrop Filter
- **JavaScript**: ES6+ with fallbacks for older browsers

---

*This documentation should be updated as the design system evolves. For questions or updates, refer to the development team.*
