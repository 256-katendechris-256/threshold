# 🌍 Custom Domain Setup Guide

## Current Status
- **Live Site:** https://threshold-94cggm17p-bse01s-projects.vercel.app
- **Goal:** https://threshold-collective.com (or your preferred domain)

## Method 1: Purchase & Setup Custom Domain

### Step 1: Purchase Domain
**Recommended Registrars:**
- **Namecheap:** https://namecheap.com (~$10-15/year)
- **Cloudflare:** https://cloudflare.com/products/registrar/ (~$8-12/year)
- **Google Domains:** https://domains.google.com (~$12-15/year)

**Suggested Domains:**
- `threshold-collective.com` (Primary choice)
- `thresholdcollective.org`
- `threshold.africa`
- `thresholdlab.com`

### Step 2: Connect to Vercel
1. **Login to Vercel:** https://vercel.com/bse01s-projects/threshold
2. **Go to Domains tab**
3. **Click "Add Domain"**
4. **Enter your domain:** `threshold-collective.com`
5. **Choose domain type:**
   - **www.threshold-collective.com** (with www)
   - **threshold-collective.com** (without www)
   - **Both** (recommended)

### Step 3: Configure DNS
Vercel will provide you with DNS records to add to your domain:

**A Records:**
```
Name: @
Value: 76.76.19.61
```

**CNAME Record:**
```
Name: www
Value: cname.vercel-dns.com
```

### Step 4: Verify Setup
- Wait 24-48 hours for DNS propagation
- Vercel will automatically issue SSL certificate
- Your site will be live at your custom domain

## Method 2: Free Vercel Subdomain

### Available Options:
```bash
# Check availability and set up
npx vercel alias threshold-collective.vercel.app
npx vercel alias thresholdcollective.vercel.app
npx vercel alias threshold-lab.vercel.app
```

### Commands to Set Alias:
```bash
# Login to Vercel
npx vercel login

# Set up alias (choose one)
npx vercel alias set threshold-94cggm17p-bse01s-projects.vercel.app threshold-collective.vercel.app
```

## Method 3: GitHub Pages (Alternative)

If you want a completely free option:

### Setup Steps:
1. **Enable GitHub Pages** in repository settings
2. **Choose custom domain:** `threshold-collective.github.io`
3. **Configure build and deployment**

## Current URLs After Setup

### Before (Current):
- ❌ https://threshold-94cggm17p-bse01s-projects.vercel.app

### After (Your Choice):
- ✅ https://threshold-collective.com
- ✅ https://www.threshold-collective.com
- ✅ https://threshold-collective.vercel.app (free option)

## Cost Comparison

| Option | Cost | Setup Time | Custom Domain |
|--------|------|------------|---------------|
| Custom Domain | $8-15/year | 24-48 hours | ✅ Full control |
| Vercel Subdomain | Free | 5 minutes | ✅ Clean URL |
| GitHub Pages | Free | 30 minutes | ✅ .github.io |

## Recommendation

**For Professional Use:** Purchase `threshold-collective.com`
- Most professional appearance
- Better for business cards, marketing
- Full control over domain
- Can set up email: `info@threshold-collective.com`

**For Quick Setup:** Use `threshold-collective.vercel.app`
- Free and immediate
- Still professional looking
- Can upgrade to custom domain later

## Next Steps

1. **Choose your preferred domain name**
2. **Purchase domain** (if going custom)
3. **Follow Vercel setup instructions**
4. **Update all marketing materials with new URL**

## Support

If you need help with any step:
- Vercel Documentation: https://vercel.com/docs/custom-domains
- Domain registrar support
- DNS configuration assistance
