# How to Add Your Own Temple Images

## Current Situation
The website is currently using placeholder images from Wikimedia Commons. To show **exact temple images**, you have several options:

## Option 1: Upload Images to GitHub Repository (Recommended)

1. **Create an `images` folder** in your repository:
   ```
   /images
     /temples
       - tirumala-temple.jpg
       - meenakshi-temple.jpg
       - etc.
   ```

2. **Upload your temple images** to this folder via GitHub web interface or Git commands

3. **Update the image URLs** in `script.js`:
   ```javascript
   image: "https://naveenroyal4b3.github.io/abhishektravels/images/temples/tirumala-temple.jpg"
   ```

## Option 2: Use Image Hosting Services

### Free Options:
- **Imgur**: Upload images and get direct links
- **Cloudinary**: Free tier available
- **ImgBB**: Simple image hosting

### Steps:
1. Upload your temple images to the service
2. Copy the direct image URL
3. Replace the `image` URLs in `script.js`

## Option 3: Use Your Own Server/CDN

If you have your own domain/server:
1. Upload images to your server
2. Update URLs in `script.js` to point to your server

## Option 4: Use Wikimedia Commons (Current Method)

The current code uses Wikimedia Commons URLs. These are reliable but may not show exact temples.

To find better temple images on Wikimedia:
1. Visit: https://commons.wikimedia.org
2. Search for temple names (e.g., "Tirumala temple", "Meenakshi temple")
3. Click on an image → "Use this file" → Copy the URL
4. Replace in `script.js`

## Image Requirements

- **Recommended Size**: 800x600 pixels (width x height)
- **Format**: JPG or PNG
- **File Size**: Under 500KB for faster loading
- **Aspect Ratio**: 4:3 or 16:9 works best

## How to Update Images in script.js

Find the temple you want to update in `script.js` (around line 183):

```javascript
{
    id: 1,
    name: "Tirumala Venkateswara Temple",
    // ... other properties ...
    image: "YOUR_NEW_IMAGE_URL_HERE",  // Replace this line
    // ... rest of properties ...
}
```

## Quick Example

If you upload `tirumala.jpg` to GitHub images folder:

**Before:**
```javascript
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Tirumala_Temple.jpg/800px-Tirumala_Temple.jpg"
```

**After:**
```javascript
image: "https://naveenroyal4b3.github.io/abhishektravels/images/temples/tirumala.jpg"
```

## Need Help?

If you have specific image URLs ready, share them and I can update the code for you!

