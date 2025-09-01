const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

console.log('🖼️  DK Interiors Image Optimization')
console.log('=====================================')

const publicDir = path.join(process.cwd(), 'public')
const imageExtensions = ['.jpg', '.jpeg', '.png']
const maxWidth = 1920
const maxHeight = 1080
const quality = 85

// Create optimized directory
const optimizedDir = path.join(publicDir, 'optimized')
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true })
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath)
    const originalSize = (stats.size / (1024 * 1024)).toFixed(2)
    
    await sharp(inputPath)
      .resize(maxWidth, maxHeight, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .jpeg({ quality })
      .toFile(outputPath)
    
    const newStats = fs.statSync(outputPath)
    const newSize = (newStats.size / (1024 * 1024)).toFixed(2)
    const savings = ((stats.size - newStats.size) / stats.size * 100).toFixed(1)
    
    console.log(`✅ ${path.basename(inputPath)}: ${originalSize}MB → ${newSize}MB (${savings}% saved)`)
    
    return {
      original: originalSize,
      optimized: newSize,
      savings: parseFloat(savings)
    }
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message)
    return null
  }
}

async function processDirectory(dir, relativePath = '') {
  const files = fs.readdirSync(dir)
  let totalOriginalSize = 0
  let totalOptimizedSize = 0
  let processedCount = 0

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      const subResult = await processDirectory(filePath, path.join(relativePath, file))
      totalOriginalSize += subResult.originalSize
      totalOptimizedSize += subResult.optimizedSize
      processedCount += subResult.count
    } else {
      const ext = path.extname(file).toLowerCase()
      if (imageExtensions.includes(ext)) {
        const relativeFilePath = path.join(relativePath, file)
        const outputPath = path.join(optimizedDir, relativeFilePath)
        
        // Create output directory if it doesn't exist
        const outputDir = path.dirname(outputPath)
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true })
        }
        
        const result = await optimizeImage(filePath, outputPath)
        if (result) {
          totalOriginalSize += parseFloat(result.original)
          totalOptimizedSize += parseFloat(result.optimized)
          processedCount++
        }
      }
    }
  }

  return {
    originalSize: totalOriginalSize,
    optimizedSize: totalOptimizedSize,
    count: processedCount
  }
}

async function main() {
  try {
    console.log('\n📊 Processing images...')
    const result = await processDirectory(publicDir)
    
    console.log('\n📈 Optimization Summary:')
    console.log(`Images processed: ${result.count}`)
    console.log(`Original total size: ${result.originalSize.toFixed(2)}MB`)
    console.log(`Optimized total size: ${result.optimizedSize.toFixed(2)}MB`)
    console.log(`Total savings: ${((result.originalSize - result.optimizedSize) / result.originalSize * 100).toFixed(1)}%`)
    console.log(`Space saved: ${(result.originalSize - result.optimizedSize).toFixed(2)}MB`)
    
    console.log('\n💡 Next steps:')
    console.log('1. Review optimized images in /public/optimized/')
    console.log('2. Replace original images with optimized versions')
    console.log('3. Consider using WebP format for even better compression')
    
  } catch (error) {
    console.error('❌ Optimization failed:', error.message)
  }
}

// Check if sharp is installed
try {
  require.resolve('sharp')
  main()
} catch (error) {
  console.log('❌ Sharp is not installed. Installing...')
  console.log('Run: npm install sharp --save-dev')
  console.log('Then run this script again.')
}