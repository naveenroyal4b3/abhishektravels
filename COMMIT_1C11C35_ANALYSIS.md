# Commit 1c11c35 Analysis - Image Loading Slowdown

## 🔍 Problematic Changes Identified

### 1. **Font Awesome Async Loading Trick** ⚠️ MAIN CULPRIT
**Before:**
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

**After (in commit 1c11c35):**
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></noscript>
```

**Problem:**
- The `media="print"` trick delays Font Awesome loading
- Icons don't appear until JavaScript executes
- Causes layout shifts and delays
- Can block rendering if JavaScript is slow

### 2. **Added Lazy Loading to ALL Images**
**Before:**
```html
<img src="..." alt="..." class="temple-image">
```

**After (in commit 1c11c35):**
```html
<img src="..." alt="..." class="temple-image" loading="lazy" decoding="async">
```

**Problem:**
- Native lazy loading is good, BUT...
- Combined with `initLazyLoading()` function creates double lazy loading
- IntersectionObserver might conflict with native lazy loading
- Can cause delays in image loading

### 3. **Added initLazyLoading() Function**
**New code added:**
```javascript
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    // IntersectionObserver implementation
}
```

**Problem:**
- Redundant with native `loading="lazy"`
- Can cause conflicts
- Extra JavaScript execution overhead

### 4. **Google Tag Manager Script**
**Added:**
```html
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
```

**Problem:**
- GTM script loads synchronously in head
- Can block rendering
- Even though it's async, it still executes early

## ✅ Solutions

### Fix 1: Revert Font Awesome Loading
Remove the async trick and load normally:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Fix 2: Remove initLazyLoading() Function
Native `loading="lazy"` is sufficient. Remove the redundant function.

### Fix 3: Keep Native Lazy Loading
Keep `loading="lazy"` but remove the custom IntersectionObserver implementation.

### Fix 4: Move GTM to Bottom (Optional)
Move GTM script to end of body to avoid blocking.

