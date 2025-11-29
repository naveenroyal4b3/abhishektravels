# Google Tag Manager Setup Guide

## Current Status

Google Tag Manager (GTM) code has been added to your website, but you need to replace the placeholder container ID with your actual GTM container ID.

## Steps to Set Up Google Tag Manager

### 1. Create a Google Tag Manager Account

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click "Create Account"
3. Fill in:
   - **Account Name**: Abhishek Travels
   - **Country**: India
   - **Container Name**: Abhishek Travels Website
   - **Target Platform**: Web
4. Click "Create"

### 2. Get Your Container ID

After creating the container, you'll receive a Container ID in the format: `GTM-XXXXXXX`

### 3. Update Your Website

Replace `GTM-XXXXXXX` in `index.html` with your actual Container ID:

**Find this code in `index.html` (around line 187):**
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

**Replace `GTM-XXXXXXX` with your actual Container ID**

**Also find this code (around line 202):**
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

**Replace `GTM-XXXXXXX` with your actual Container ID**

### 4. Configure Tags in GTM

#### Add Google Analytics 4 Tag

1. In GTM, go to **Tags** → **New**
2. Click **Tag Configuration** → Select **Google Analytics: GA4 Configuration**
3. Enter your **Measurement ID**: `G-YR8S0ZGFJG`
4. Click **Triggering** → Select **All Pages**
5. Name the tag: "GA4 Configuration - All Pages"
6. Click **Save**

#### Add WhatsApp Click Tracking (Optional)

1. Create a new tag: **Google Analytics: GA4 Event**
2. Event name: `whatsapp_click`
3. Trigger: Click on WhatsApp button
4. This will track when users click the WhatsApp button

### 5. Test Your Setup

1. In GTM, click **Preview** (top right)
2. Enter your website URL: `https://abhishektravels.org/`
3. Click **Connect**
4. Visit your website - you should see the GTM Preview mode
5. Test various actions (clicks, page views)
6. Verify tags are firing correctly

### 6. Publish Your Container

1. Once testing is complete, click **Submit** (top right)
2. Add version name: "Initial Setup"
3. Add description: "Initial GTM setup with GA4"
4. Click **Publish**

## Benefits of Using GTM

✅ **Easy Tag Management**: Add/remove tracking codes without editing website code
✅ **Multiple Tags**: Manage Google Analytics, Facebook Pixel, and more from one place
✅ **Event Tracking**: Track button clicks, form submissions, scroll depth
✅ **A/B Testing**: Run experiments without code changes
✅ **Version Control**: Keep track of all changes

## Common Tags to Add

### 1. Form Submission Tracking
- Track when contact form is submitted
- Track when booking form is submitted

### 2. Button Click Tracking
- WhatsApp button clicks
- Call button clicks
- "Book Now" button clicks

### 3. Scroll Depth Tracking
- Track how far users scroll on pages

### 4. Video Tracking (if you add videos)
- Track video plays and completions

## Troubleshooting

### Tags Not Firing?
1. Check GTM Preview mode
2. Verify Container ID is correct
3. Check browser console for errors
4. Ensure tags are published

### Need Help?
- [GTM Documentation](https://support.google.com/tagmanager)
- [GTM Community](https://support.google.com/tagmanager/community)

---

**Note**: Your Google Analytics (gtag.js) is still active and will continue to work alongside GTM. You can eventually migrate all tracking to GTM for better management.

