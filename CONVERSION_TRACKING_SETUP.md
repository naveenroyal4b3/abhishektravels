# Conversion & Call Tracking Setup Guide

## Overview
This guide will help you set up comprehensive conversion tracking for Google Ads, including phone calls, WhatsApp clicks, form submissions, and other key conversion events.

---

## ✅ Current Setup Status

### Already Implemented:
- ✅ Google Analytics (GA4) - Measurement ID: `G-YR8S0ZGFJG`
- ✅ Google Tag Manager placeholder (needs Container ID)
- ✅ Basic event tracking for:
  - Phone call clicks
  - WhatsApp clicks
  - Form submissions
  - Button clicks
  - FAQ interactions
  - Scroll depth
  - Time on page

### Needs Configuration:
- ⚠️ Google Ads Conversion Tracking
- ⚠️ Call Tracking (Google Ads Call Extensions)
- ⚠️ Google Tag Manager Container ID

---

## 🔧 Setup Instructions

### 1. Google Ads Conversion Tracking

#### Step 1: Create Conversion Actions in Google Ads

1. Log into your Google Ads account
2. Go to **Tools & Settings** → **Conversions**
3. Click **+ New conversion action**
4. Select **Website** as the conversion source
5. Choose conversion category:
   - **Phone calls** - For call tracking
   - **Submit lead form** - For form submissions
   - **Page view** - For key page visits

#### Step 2: Get Conversion ID and Label

For each conversion action, you'll get:
- **Conversion ID**: `AW-XXXXXXXXX`
- **Conversion Label**: `AbCdEfGhIj`

#### Step 3: Update script.js

Replace the placeholder in `script.js`:

```javascript
// Find this line (around line 1500):
'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',

// Replace with your actual conversion ID and label:
'send_to': 'AW-123456789/AbCdEfGhIj',
```

**Example for Phone Calls:**
```javascript
gtag('event', 'conversion', {
    'send_to': 'AW-123456789/phone_call_conversion',
    'event_category': 'Contact',
    'event_label': source || 'Phone Call'
});
```

**Example for WhatsApp:**
```javascript
gtag('event', 'conversion', {
    'send_to': 'AW-123456789/whatsapp_conversion',
    'event_category': 'Contact',
    'event_label': source || 'WhatsApp Click'
});
```

---

### 2. Google Ads Call Tracking

#### Option A: Call Extensions (Recommended)

1. In Google Ads, go to **Ads & Extensions** → **Extensions**
2. Click **+ Extension** → **Call extension**
3. Add your phone number: `+919912325325`
4. Enable **Call reporting** to track calls from ads

#### Option B: Call-Only Ads

1. Create a **Call-only campaign**
2. Use call tracking numbers (Google provides these)
3. Calls will be automatically tracked

#### Option C: Website Call Tracking (Advanced)

Use Google's call tracking JavaScript:

```html
<!-- Add to index.html before </body> -->
<script>
  gtag('config', 'AW-CONVERSION_ID', {
    'phone_conversion_number': '+919912325325'
  });
</script>
```

---

### 3. Google Tag Manager Setup

#### Step 1: Get Your Container ID

1. Sign up at https://tagmanager.google.com/
2. Create a new container for your website
3. Get your Container ID (format: `GTM-XXXXXXX`)

#### Step 2: Update index.html

Find this line in `index.html` (around line 200):

```html
<!-- Replace GTM-XXXXXXX with your actual Container ID -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
```

Also update the noscript version (around line 220):

```html
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

#### Step 3: Set Up Tags in GTM

1. **Google Analytics Configuration Tag**
   - Type: Google Analytics: GA4 Configuration
   - Measurement ID: `G-YR8S0ZGFJG`

2. **Conversion Tracking Tag**
   - Type: Google Ads: Conversion Tracking
   - Conversion ID: Your Google Ads Conversion ID
   - Conversion Label: Your conversion label
   - Trigger: Custom events (phone_call, whatsapp_click, form_submit)

3. **Call Tracking Tag**
   - Type: Google Ads: Call Tracking
   - Phone number: `+919912325325`
   - Trigger: Click on phone links

---

## 📊 Conversion Events Currently Tracked

### 1. Phone Calls
- **Event Name**: `phone_call`
- **Triggers**: All phone number clicks
- **Locations**:
  - Hero section buttons
  - Top floating buttons
  - Sticky buttons
  - Final CTA section
  - Package/vehicle cards

### 2. WhatsApp Clicks
- **Event Name**: `whatsapp_click`
- **Triggers**: All WhatsApp link clicks
- **Locations**: Same as phone calls

### 3. Form Submissions
- **Event Name**: `submit`
- **Category**: `Form`
- **Labels**: `Booking Form`, `Contact Form`

### 4. Button Clicks
- **Event Name**: `click`
- **Category**: `CTA`, `Booking`
- **Labels**: Various button types

### 5. Engagement Metrics
- **Scroll Depth**: Tracks 25%, 50%, 75%, 100%
- **Time on Page**: Tracks 30s, 60s, 120s
- **FAQ Opens**: Tracks FAQ interactions

---

## 🎯 Setting Up Conversion Goals in Google Analytics

### Step 1: Create Custom Events

1. Go to Google Analytics → **Admin** → **Events**
2. Mark these events as conversions:
   - `phone_call`
   - `whatsapp_click`
   - `form_submit`

### Step 2: Create Goals

1. Go to **Admin** → **Goals**
2. Create new goal:
   - **Goal Type**: Custom
   - **Event Category**: Contact
   - **Event Action**: phone_call
   - **Value**: 1

Repeat for WhatsApp and form submissions.

---

## 📱 Call Tracking Best Practices

### 1. Use Call Extensions
- Always enable call extensions in Google Ads
- Shows phone number directly in ads
- Tracks calls from ads automatically

### 2. Use Call-Only Ads for Mobile
- Mobile users can call directly
- Higher conversion rate
- Automatic call tracking

### 3. Track Call Duration
- Set up in Google Ads → **Conversions**
- Track calls longer than X seconds (e.g., 60 seconds)
- Filter out accidental calls

### 4. Use Dynamic Number Insertion (Advanced)
- Shows different numbers to ad vs. organic traffic
- Better attribution
- Requires call tracking service integration

---

## 🔍 Testing Your Setup

### Test Phone Call Tracking:

1. Open your website
2. Click any "Call Now" button
3. Check Google Analytics → **Realtime** → **Events**
4. Look for `phone_call` event

### Test WhatsApp Tracking:

1. Click any WhatsApp button
2. Check Google Analytics → **Realtime** → **Events**
3. Look for `whatsapp_click` event

### Test Form Submission:

1. Fill out and submit a form
2. Check Google Analytics → **Realtime** → **Events**
3. Look for `submit` event with category `Form`

### Test Google Ads Conversion:

1. After setting up conversion tracking
2. Trigger a conversion event
3. Check Google Ads → **Tools & Settings** → **Conversions**
4. Should see conversion within 24 hours

---

## 📈 Key Metrics to Monitor

### In Google Analytics:
- **Events** → `phone_call` count
- **Events** → `whatsapp_click` count
- **Events** → `form_submit` count
- **Conversions** → Total conversion value

### In Google Ads:
- **Conversions** → Phone call conversions
- **Conversions** → Form submission conversions
- **Cost per conversion**
- **Conversion rate**

---

## 🚨 Common Issues & Solutions

### Issue: Conversions not showing in Google Ads

**Solution:**
1. Verify conversion ID and label are correct
2. Wait 24-48 hours for data to appear
3. Check if events are firing in Google Analytics
4. Verify GTM tags are published

### Issue: Phone calls not tracked

**Solution:**
1. Enable call extensions in Google Ads
2. Use call-only ads for mobile campaigns
3. Verify phone number format: `+919912325325`

### Issue: WhatsApp clicks not tracked

**Solution:**
1. Check if `whatsapp_click` events appear in GA4
2. Verify onclick handlers are present on WhatsApp links
3. Test in incognito mode (ad blockers may interfere)

---

## 📝 Next Steps

1. ✅ Set up Google Ads conversion tracking
2. ✅ Configure Google Tag Manager
3. ✅ Enable call extensions in Google Ads
4. ✅ Test all conversion events
5. ✅ Monitor conversion data for 1 week
6. ✅ Optimize campaigns based on conversion data

---

## 📞 Support

If you need help setting up conversion tracking:
- Google Ads Help: https://support.google.com/google-ads
- Google Analytics Help: https://support.google.com/analytics
- Google Tag Manager Help: https://support.google.com/tagmanager

---

**Last Updated**: $(date)
**Status**: Ready for configuration
**Next Review**: After Google Ads account setup

