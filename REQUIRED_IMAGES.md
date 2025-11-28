# Required Image Files for SEO

The following image files need to be created and placed in the root directory of your website:

## 1. favicon.ico
- **Size**: 32x32 or 16x16 pixels
- **Format**: ICO
- **Location**: Root directory (`/favicon.ico`)
- **Purpose**: Browser tab icon
- **How to create**: 
  - Use https://favicon.io/favicon-converter/
  - Upload a PNG/JPG image and convert to ICO
  - Or use https://www.favicon-generator.org/

## 2. apple-touch-icon.png
- **Size**: 180x180 pixels
- **Format**: PNG
- **Location**: Root directory (`/apple-touch-icon.png`)
- **Purpose**: iOS home screen icon
- **How to create**:
  - Create a 180x180px PNG image
  - Use your logo or travel symbol
  - Save as `apple-touch-icon.png`

## 3. og-image.jpg
- **Size**: 1200x630 pixels (exact)
- **Format**: JPG
- **Location**: Root directory (`/og-image.jpg`)
- **Purpose**: Social media preview image (Facebook, Twitter, LinkedIn)
- **How to create**:
  - Use Canva: https://www.canva.com/ (Facebook Post template)
  - Or Photoshop/GIMP: Create 1200x630px canvas
  - Include: Logo, tagline, temple/travel imagery
  - Export as JPG (quality 85-90%)

## Quick Creation Steps:

### Using Canva (Easiest):
1. Go to https://www.canva.com/
2. Search for "Facebook Post" template
3. Customize with your branding
4. Download as JPG (1200x630px)
5. Rename to `og-image.jpg`

### For Favicon:
1. Create a simple 180x180px square image with your logo
2. Go to https://favicon.io/favicon-converter/
3. Upload your image
4. Download the generated favicon package
5. Extract `favicon.ico` and `apple-touch-icon.png`

## Design Tips:

- **Colors**: Use saffron (#FF9933) and white to match your website theme
- **Logo**: Include "Abhishek Travels" text or "AT" initials
- **Symbols**: Travel plane, temple silhouette, or South India map
- **Keep it simple**: Icons should be recognizable at small sizes
- **Text**: Minimal text on OG image (logo + tagline only)

## After Creating Files:

1. Place all three files in the root directory
2. Commit and push to GitHub:
   ```bash
   git add favicon.ico apple-touch-icon.png og-image.jpg
   git commit -m "Add favicon and OG image files"
   git push origin main
   ```
3. Verify they're accessible:
   - Favicon: https://naveenroyal4b3.github.io/abhishektravels/favicon.ico
   - Apple icon: https://naveenroyal4b3.github.io/abhishektravels/apple-touch-icon.png
   - OG image: https://naveenroyal4b3.github.io/abhishektravels/og-image.jpg

## Testing:

- **Favicon**: Check browser tab after uploading
- **OG Image**: Test with https://www.opengraph.xyz/ or Facebook Debugger
- **Apple Icon**: Test on iOS device by adding to home screen

