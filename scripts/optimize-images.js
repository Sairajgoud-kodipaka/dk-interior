#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Image optimization script
const optimizeImages = () => {
  const publicDir = path.join(process.cwd(), 'public');
  
  console.log('🖼️  Starting image optimization...');
  
  // Find all image directories
  const imageDirs = fs.readdirSync(publicDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'api')
    .map(dirent => dirent.name);
  
  imageDirs.forEach(dir => {
    const dirPath = path.join(publicDir, dir);
    const files = fs.readdirSync(dirPath)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
    
    if (files.length > 0) {
      console.log(`📁 Processing ${dir} directory (${files.length} images)...`);
      
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const { name, ext } = path.parse(file);
        
        try {
          // Create WebP version
          const webpPath = path.join(dirPath, `${name}.webp`);
          if (!fs.existsSync(webpPath)) {
            execSync(`cwebp -q 85 "${filePath}" -o "${webpPath}"`, { stdio: 'pipe' });
            console.log(`✅ Created WebP: ${name}.webp`);
          }
          
          // Create AVIF version
          const avifPath = path.join(dirPath, `${name}.avif`);
          if (!fs.existsSync(avifPath)) {
            execSync(`avifenc --min 0 --max 63 --speed 4 "${filePath}" "${avifPath}"`, { stdio: 'pipe' });
            console.log(`✅ Created AVIF: ${name}.avif`);
          }
          
        } catch (error) {
          console.warn(`⚠️  Could not optimize ${file}: ${error.message}`);
        }
      });
    }
  });
  
  console.log('🎉 Image optimization complete!');
};

// Check if required tools are installed
const checkDependencies = () => {
  try {
    execSync('cwebp -version', { stdio: 'pipe' });
    execSync('avifenc -version', { stdio: 'pipe' });
    return true;
  } catch (error) {
    console.error('❌ Required tools not found. Please install:');
    console.error('   - WebP: https://developers.google.com/speed/webp/download');
    console.error('   - AVIF: https://github.com/AOMediaCodec/libavif');
    return false;
  }
};

if (require.main === module) {
  if (checkDependencies()) {
    optimizeImages();
  }
}

module.exports = { optimizeImages, checkDependencies };
