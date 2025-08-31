# Machine Images Setup Guide

## 📁 **Image Requirements:**

### **Image Specifications:**
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x600px or 1200x800px
- **Quality**: High quality, clear images
- **Background**: Clean, professional factory environment

### **Required Images:**

1. **Panel Saw Image** → ✅ **MPS3200.jpg** (Real Image)
   - MAXWOOD Panel Saw - MPS 3200
   - High-precision cutting machine

2. **Edge Bander Image** → ✅ **Hi-400-Auto-Edge-Bander.jpg** (Real Image)
   - Hunnyimpex HI-400 - Auto Edge Bander
   - Automated edge finishing

3. **Compressor Image** → ✅ **CAC.png** (Real Image)
   - CAC Compressor - CTB 600
   - High-performance air compressor

4. **Edge Bander 2 Image** → ✅ **hunny-impex-hi-90-r.webp** (Real Image)
   - Hunnyimpex HI-90R - Edge Bander
   - Premium edge banding machine

5. **Wood Planner Image** → ✅ **combiplaners-j-303-new.jpg** (Real Image)
   - JAI Wood Planner
   - Precision wood planning machine

## 🚀 **How to Add Images:**

### **Option 1: Public Folder (Recommended)**
1. Create folder: `public/machines/`
2. Add your machine images with the exact names above
3. Images will be automatically loaded

### **Option 2: Online URLs**
1. Upload images to your hosting service
2. Replace image paths in `Factory.js` with full URLs
3. Example: `"https://yoursite.com/images/panel-saw.jpg"`

### **Option 3: Placeholder Images**
- Current setup shows a factory emoji (🏭) if images are missing
- You can replace with actual machine photos later

## 📱 **Image Display Features:**

- **Responsive**: Automatically adjusts to screen size
- **Error Handling**: Shows placeholder if image fails to load
- **Optimized**: Uses `object-cover` for best display
- **Touch Friendly**: Works perfectly on mobile devices

## 🎯 **Current Setup:**

✅ **5 Machines** with proper descriptions
✅ **Image display** with fallback placeholders
✅ **Navigation** with ◀ ▶ buttons
✅ **Pagination dots** for easy browsing
✅ **Responsive design** for all devices
✅ **Clean layout** without overwhelming information

## 🔧 **Customization:**

You can easily:
- Change image paths
- Add more machines
- Modify descriptions
- Adjust image sizes
- Change navigation style

The Factory component is now **simple, clean, and image-ready**! 🎨✨
