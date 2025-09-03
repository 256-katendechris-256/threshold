# 🚀 Deployment Guide - Threshold App

This guide covers the complete deployment setup for the Threshold Next.js application with Firebase integration.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Hosting Provider](#hosting-provider)
- [Environment Setup](#environment-setup)
- [CI/CD Pipeline](#cicd-pipeline)
- [Deployment Process](#deployment-process)
- [Monitoring & Maintenance](#monitoring--maintenance)
- [Troubleshooting](#troubleshooting)

## 🔧 Prerequisites

Before deploying, ensure you have:

- **Node.js 20+** installed
- **npm** or **yarn** package manager
- **Git** repository (GitHub or GitLab)
- **Firebase project** (separate projects for staging and production)
- **Vercel account** (recommended hosting provider)

## 🏠 Hosting Provider

### Recommended: Vercel

**Why Vercel is perfect for this app:**
- ✅ Native Next.js support (built by the Next.js team)
- ✅ Zero-config deployments with automatic optimization
- ✅ Global CDN with 99.99% uptime
- ✅ Serverless functions for API routes
- ✅ Seamless Firebase integration
- ✅ Free tier with generous limits
- ✅ Custom domains with automatic SSL

**Alternative Options:**
- **Netlify** - Great for static sites, good CI/CD
- **Railway** - Simple deployment, good for full-stack apps
- **DigitalOcean App Platform** - More control, slightly more complex

## 🌍 Environment Setup

### 1. Local Environment

```bash
# Clone the repository
git clone <your-repo-url>
cd threshold

# Install dependencies
npm install

# Run the setup script
./scripts/setup-environments.sh
```

### 2. Environment Variables

Create a `.env.local` file with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Firebase Projects Setup

Create separate Firebase projects:
- **Production:** `threshold-prod`
- **Staging:** `threshold-staging`

## 🔄 CI/CD Pipeline

### GitHub Actions Setup

1. **Enable GitHub Actions** in your repository
2. **Add Repository Secrets** (Settings → Secrets and variables → Actions):

#### Required Secrets:
```
# Vercel Configuration
VERCEL_TOKEN=<your_vercel_token>
VERCEL_ORG_ID=<your_vercel_org_id>
VERCEL_PROJECT_ID=<your_vercel_project_id>

# Production Firebase Config
PROD_FIREBASE_API_KEY=<prod_api_key>
PROD_FIREBASE_AUTH_DOMAIN=<prod_auth_domain>
PROD_FIREBASE_PROJECT_ID=<prod_project_id>
PROD_FIREBASE_STORAGE_BUCKET=<prod_storage_bucket>
PROD_FIREBASE_MESSAGING_SENDER_ID=<prod_sender_id>
PROD_FIREBASE_APP_ID=<prod_app_id>

# Staging Firebase Config
STAGING_FIREBASE_API_KEY=<staging_api_key>
STAGING_FIREBASE_AUTH_DOMAIN=<staging_auth_domain>
STAGING_FIREBASE_PROJECT_ID=<staging_project_id>
STAGING_FIREBASE_STORAGE_BUCKET=<staging_storage_bucket>
STAGING_FIREBASE_MESSAGING_SENDER_ID=<staging_sender_id>
STAGING_FIREBASE_APP_ID=<staging_app_id>
```

### Pipeline Stages

The CI/CD pipeline includes:

1. **Code Quality & Testing**
   - ESLint checks
   - TypeScript compilation
   - Build verification

2. **Security Scanning**
   - npm audit for vulnerabilities
   - Dependency checking

3. **Staging Deployment** (develop branch)
   - Automatic deployment to staging environment
   - Environment-specific configuration

4. **Production Deployment** (main branch)
   - Manual approval for production
   - Production environment configuration

## 🚀 Deployment Process

### Automatic Deployment

**Staging:**
```bash
# Push to develop branch
git checkout develop
git add .
git commit -m "feat: new feature"
git push origin develop
# ✅ Automatically deploys to staging
```

**Production:**
```bash
# Push to main branch
git checkout main
git merge develop
git push origin main
# ✅ Automatically deploys to production
```

### Manual Deployment

**Using the deployment script:**
```bash
# Deploy to staging
./scripts/deploy.sh staging

# Deploy to production
./scripts/deploy.sh production
```

**Using Vercel CLI directly:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to staging
vercel

# Deploy to production
vercel --prod
```

### First-Time Setup

1. **Initialize Vercel project:**
```bash
vercel link
```

2. **Add environment variables:**
```bash
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY production
vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN production
# ... repeat for all environment variables
```

3. **Set up custom domains (optional):**
```bash
vercel domains add yourdomain.com
vercel alias yourdomain.com
```

## 📊 Monitoring & Maintenance

### Vercel Dashboard

Monitor your deployments at:
- **Analytics:** Usage, performance, and visitor metrics
- **Functions:** Serverless function logs and performance
- **Deployments:** History of all deployments
- **Domains:** Custom domain management

### Health Checks

The pipeline includes:
- ✅ Build status monitoring
- ✅ Deployment success/failure notifications
- ✅ Security vulnerability scanning
- ✅ Performance monitoring

### Recommended Monitoring Tools

- **Vercel Analytics** (included) - Performance and usage metrics
- **Firebase Performance Monitoring** - Frontend performance
- **Sentry** (optional) - Error tracking and performance monitoring
- **Uptime Robot** (optional) - Uptime monitoring

## 🔧 Troubleshooting

### Common Issues

#### 1. Build Failures

**Problem:** TypeScript or ESLint errors
```bash
# Fix locally
npm run lint
npx tsc --noEmit
npm run build
```

#### 2. Environment Variables Not Loading

**Problem:** Firebase configuration undefined
- ✅ Check Vercel dashboard → Project → Settings → Environment Variables
- ✅ Ensure variables start with `NEXT_PUBLIC_`
- ✅ Redeploy after adding variables

#### 3. Firebase Connection Issues

**Problem:** Firebase initialization errors
- ✅ Verify Firebase project IDs match
- ✅ Check Firebase rules and authentication
- ✅ Ensure correct API keys for each environment

#### 4. Deployment Permissions

**Problem:** Vercel deployment fails
- ✅ Check Vercel token permissions
- ✅ Verify GitHub Actions secrets
- ✅ Ensure Vercel project is properly linked

### Getting Help

1. **Check Vercel logs:** `vercel logs <deployment-url>`
2. **Review GitHub Actions logs:** Actions tab in your repository
3. **Firebase console:** Check for any Firebase-related issues
4. **Local debugging:** Run `npm run build` locally to reproduce issues

## 📝 Best Practices

### Branch Strategy

- **main:** Production-ready code
- **develop:** Integration branch for features
- **feature/*:** Individual feature branches

### Security

- ✅ Never commit `.env.local` to version control
- ✅ Use separate Firebase projects for each environment
- ✅ Regularly update dependencies (`npm audit`)
- ✅ Enable security headers in `vercel.json`

### Performance

- ✅ Use Next.js Image component for optimized images
- ✅ Implement proper loading states
- ✅ Monitor Core Web Vitals in Vercel Analytics
- ✅ Use dynamic imports for code splitting

## 🎯 Quick Commands

```bash
# Setup environment
./scripts/setup-environments.sh

# Deploy to staging
./scripts/deploy.sh staging

# Deploy to production
./scripts/deploy.sh production

# Check deployment status
vercel ls

# View logs
vercel logs

# Add environment variable
vercel env add VAR_NAME production
```

---

## 🆘 Need Help?

If you encounter any issues:

1. Check this documentation first
2. Review the troubleshooting section
3. Check Vercel and Firebase documentation
4. Create an issue in the repository

**Happy Deploying! 🚀**
