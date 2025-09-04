# 🚀 Understanding Vercel Deployments & URLs

## How Deployments Work

### When You Push to GitHub:

#### **Production Deployments (main branch):**
- **New URL:** ✅ Yes, creates new unique URL
- **Main URL:** ✅ Updates automatically
- **Example:** `threshold-abc123.vercel.app` (new) + `threshold-bse01s-projects.vercel.app` (updates)

#### **Preview Deployments (develop branch):**
- **New URL:** ✅ Yes, creates new unique URL  
- **No main URL update:** The main production URL stays the same

### Current URL Structure:

```
Production URLs (main branch):
├── Latest: threshold-g84m3yuwz-bse01s-projects.vercel.app
├── Previous: threshold-94cggm17p-bse01s-projects.vercel.app  
├── Older: threshold-4gezjdo9q-bse01s-projects.vercel.app
└── Main Alias: threshold-bse01s-projects.vercel.app (always latest)

Preview URLs (develop branch):
├── Various preview URLs for testing
└── Don't affect main production URL
```

## Why Changes Don't Show When You Refresh

### **Issue 1: Wrong URL**
You might be refreshing an **old deployment URL** instead of the **latest one**.

**Old URL (won't update):**
❌ `https://threshold-4gezjdo9q-bse01s-projects.vercel.app`

**Latest URL (has new changes):**
✅ `https://threshold-g84m3yuwz-bse01s-projects.vercel.app`

### **Issue 2: Browser Cache**
- **Browser cache:** Stores old version locally
- **CDN cache:** Vercel's global cache
- **Service worker:** Can cache old versions

### **Issue 3: Branch Confusion**
- **develop branch:** Creates preview deployments
- **main branch:** Updates production URLs

## Solutions

### **Option 1: Use Main Alias (Recommended)**
**Always use this URL for latest changes:**
```
https://threshold-bse01s-projects.vercel.app
```
This automatically points to the latest production deployment.

### **Option 2: Hard Refresh**
- **Windows:** Ctrl + F5 or Ctrl + Shift + R
- **Mac:** Cmd + Shift + R
- **Mobile:** Clear browser cache

### **Option 3: Private/Incognito Browser**
Opens fresh without any cached data.

## Current Status

### **Your Latest Changes:**
- **Address in footer:** ✅ Live
- **Mobile navigation:** ✅ Live  
- **Latest URL:** https://threshold-g84m3yuwz-bse01s-projects.vercel.app

### **Main Production URL:**
- **Use this:** https://threshold-bse01s-projects.vercel.app
- **Always latest:** Automatically updates
- **Share this:** Best for sharing with others

## CI/CD Pipeline Status

Currently you're deploying **manually** with `npx vercel --prod`

### **To Enable Automatic Deployments:**
You need to add GitHub secrets (as we discussed earlier):
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID` 
- `VERCEL_PROJECT_ID`

**After setup:**
- **Push to main:** Automatic production deployment
- **Push to develop:** Automatic preview deployment

## Best Practice

### **For Development:**
1. **Work on develop branch**
2. **Test preview deployments**
3. **Merge to main when ready**
4. **Share main alias URL**

### **For Sharing:**
**Always use the main alias:**
```
✅ https://threshold-bse01s-projects.vercel.app
```
This ensures people always see the latest version.

## Quick Commands

### **Check Latest Deployment:**
```bash
npx vercel ls
```

### **Set Main Alias:**
```bash
npx vercel alias threshold-g84m3yuwz-bse01s-projects.vercel.app threshold-bse01s-projects.vercel.app
```

### **Deploy Production:**
```bash
npx vercel --prod
```
