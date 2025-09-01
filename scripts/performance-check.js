const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 DK Interiors Performance Check')
console.log('=====================================')

// Check bundle size
console.log('\n📦 Bundle Analysis:')
try {
  execSync('npm run build:analyze', { stdio: 'inherit' })
} catch (error) {
  console.log('Bundle analysis failed. Make sure @next/bundle-analyzer is installed.')
}

// Check for large images
console.log('\n🖼️  Image Optimization Check:')
const publicDir = path.join(process.cwd(), 'public')
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']

function checkImages(dir) {
  const files = fs.readdirSync(dir)
  let totalSize = 0
  let largeImages = []

  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      const subResult = checkImages(filePath)
      totalSize += subResult.totalSize
      largeImages.push(...subResult.largeImages)
    } else {
      const ext = path.extname(file).toLowerCase()
      if (imageExtensions.includes(ext)) {
        const sizeInMB = stat.size / (1024 * 1024)
        totalSize += sizeInMB
        
        if (sizeInMB > 1) {
          largeImages.push({
            path: filePath.replace(process.cwd(), ''),
            size: sizeInMB.toFixed(2) + 'MB'
          })
        }
      }
    }
  })

  return { totalSize, largeImages }
}

const imageCheck = checkImages(publicDir)
console.log(`Total image size: ${imageCheck.totalSize.toFixed(2)}MB`)

if (imageCheck.largeImages.length > 0) {
  console.log('\n⚠️  Large images found (>1MB):')
  imageCheck.largeImages.forEach(img => {
    console.log(`  ${img.path}: ${img.size}`)
  })
  console.log('\n💡 Consider optimizing these images using:')
  console.log('   - WebP/AVIF format')
  console.log('   - Image compression tools')
  console.log('   - Next.js Image component')
} else {
  console.log('✅ All images are optimized!')
}

// Check dependencies
console.log('\n📚 Dependency Check:')
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const dependencies = Object.keys(packageJson.dependencies || {})
const devDependencies = Object.keys(packageJson.devDependencies || {})

console.log(`Total dependencies: ${dependencies.length}`)
console.log(`Total dev dependencies: ${devDependencies.length}`)

// Check for heavy dependencies
const heavyDeps = ['framer-motion', 'three', 'react-spring', 'lottie-react']
const foundHeavy = dependencies.filter(dep => heavyDeps.includes(dep))

if (foundHeavy.length > 0) {
  console.log('\n⚠️  Heavy dependencies found:')
  foundHeavy.forEach(dep => {
    console.log(`  - ${dep}`)
  })
  console.log('\n💡 Consider lazy loading these components')
}

// Performance recommendations
console.log('\n🎯 Performance Recommendations:')
console.log('1. ✅ Use Next.js Image component for all images')
console.log('2. ✅ Implement lazy loading for heavy components')
console.log('3. ✅ Use dynamic imports for code splitting')
console.log('4. ✅ Enable compression and minification')
console.log('5. ✅ Implement service worker for caching')
console.log('6. ✅ Optimize bundle splitting')
console.log('7. ✅ Use WebP/AVIF image formats')
console.log('8. ✅ Preload critical resources')

console.log('\n🏁 Performance check complete!')
