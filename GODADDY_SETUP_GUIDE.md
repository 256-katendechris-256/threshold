# 🌍 GoDaddy + Vercel Custom Domain Setup Guide

## Step-by-Step Setup Process

### Phase 1: Purchase Domain on GoDaddy

#### Step 1: Buy Your Domain
1. **Go to GoDaddy:** https://godaddy.com
2. **Search for domain:** `threshold-collective.com`
   - If taken, try alternatives:
     - `thresholdcollective.com`
     - `threshold-collective.org`
     - `thresholdlab.com`
     - `threshold.africa`
3. **Add to cart** (~$12-20/year)
4. **Complete purchase**

#### Step 2: Access Domain Management
1. **Login to GoDaddy account**
2. **Go to "My Products"**
3. **Click "DNS" next to your domain**
4. **This opens the DNS Management panel**

### Phase 2: Configure Vercel

#### Step 3: Add Domain to Vercel
1. **Go to Vercel Dashboard:** https://vercel.com/bse01s-projects/threshold
2. **Click "Domains" tab**
3. **Click "Add Domain"**
4. **Enter your domain:** `threshold-collective.com`
5. **Click "Add"**

#### Step 4: Get DNS Records from Vercel
Vercel will show you the DNS records to add. You'll get something like:

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### Phase 3: Configure GoDaddy DNS

#### Step 5: Add DNS Records in GoDaddy
Back in your GoDaddy DNS management:

**For Root Domain (threshold-collective.com):**
1. **Find existing A record** (usually points to GoDaddy parking page)
2. **Click "Edit" or "Pencil icon"**
3. **Change "Points to" value** to: `76.76.19.61`
4. **Save changes**

**For WWW Subdomain (www.threshold-collective.com):**
1. **Add new CNAME record:**
   - **Type:** CNAME
   - **Name:** www
   - **Points to:** cname.vercel-dns.com
   - **TTL:** 1 Hour (default)
2. **Save changes**

#### Step 6: Remove Conflicting Records
**Important:** Delete any conflicting records:
- Remove GoDaddy parking page A records
- Remove default CNAME records that conflict
- Keep MX records (for email) if you plan to use email

### Phase 4: Verification & SSL

#### Step 7: Verify in Vercel
1. **Go back to Vercel Domains tab**
2. **Click "Refresh" or wait for verification**
3. **Status should show "Valid Configuration"**
4. **SSL certificate will be issued automatically**

#### Step 8: Test Your Domain
- **Wait 10-30 minutes** for DNS propagation
- **Test:** https://threshold-collective.com
- **Test:** https://www.threshold-collective.com
- **Both should show your website**

## Complete DNS Setup Example

### In GoDaddy DNS Management:

```
Type    Name    Value                   TTL
A       @       76.76.19.61            1 Hour
CNAME   www     cname.vercel-dns.com   1 Hour
```

### Delete These Records (if they exist):
```
A       @       184.168.221.104  ← GoDaddy parking page
CNAME   www     @ or parking page ← Default GoDaddy redirect
```

## Troubleshooting

### If Domain Doesn't Work After 30 Minutes:

#### Check 1: DNS Propagation
Test with: https://dnschecker.org
- Enter your domain
- Check if A record shows `76.76.19.61`

#### Check 2: Vercel Configuration
- Ensure domain shows as "Valid" in Vercel dashboard
- Check SSL certificate status

#### Check 3: GoDaddy Settings
- Verify A record points to correct IP
- Ensure no conflicting records exist
- Check that changes were saved

### Common Issues:

**Problem:** Domain shows GoDaddy parking page
**Solution:** Make sure A record points to `76.76.19.61`, not GoDaddy's default

**Problem:** SSL certificate error
**Solution:** Wait 24 hours for automatic SSL issuance

**Problem:** www doesn't work
**Solution:** Add CNAME record for www subdomain

## Timeline Expectations

| Step | Time Required |
|------|---------------|
| Domain Purchase | 5 minutes |
| DNS Configuration | 10 minutes |
| DNS Propagation | 10 minutes - 24 hours |
| SSL Certificate | 10 minutes - 2 hours |
| **Total Setup** | **30 minutes - 24 hours** |

## Cost Breakdown

- **Domain Registration:** $12-20/year
- **Vercel Hosting:** Free (for your usage)
- **SSL Certificate:** Free (automatic)
- **Total Annual Cost:** $12-20

## After Setup Success

### Your New URLs:
- ✅ https://threshold-collective.com
- ✅ https://www.threshold-collective.com
- ✅ Automatic HTTPS redirect
- ✅ Global CDN (fast worldwide)

### Update These:
- Business cards
- Email signatures  
- Social media profiles
- Marketing materials
- GitHub repository description

## Need Help?

### GoDaddy Support:
- **Phone:** 1-855-435-2400
- **Chat:** Available 24/7 on GoDaddy website
- **Help:** "I need to add A and CNAME records for Vercel hosting"

### Vercel Support:
- **Documentation:** https://vercel.com/docs/custom-domains
- **Community:** https://github.com/vercel/vercel/discussions

### Contact Me:
If you get stuck on any step, I can help debug the DNS configuration!
