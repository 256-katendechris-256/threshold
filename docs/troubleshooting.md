# 🔧 Troubleshooting Guide

## Common Installation Issues

### Permission Error with npm Global Install

**Problem:** `EACCES: permission denied` when installing packages globally

```bash
npm error code EACCES
npm error syscall mkdir
npm error path /usr/lib/node_modules/vercel
```

**Solutions:**

#### Option 1: Use Local Installation (Recommended)
```bash
# Install Vercel CLI locally
npm install vercel --save-dev

# Use with npx
npx vercel --version
npx vercel login
npx vercel
```

#### Option 2: Fix npm Permissions
```bash
# Set npm to use a different directory for global packages
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# Add to your ~/.bashrc or ~/.zshrc
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Now install globally
npm install -g vercel
```

#### Option 3: Use Node Version Manager (Best Long-term Solution)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or source
source ~/.bashrc

# Install and use latest Node.js
nvm install node
nvm use node

# Now global installs work without sudo
npm install -g vercel
```

#### Option 4: Use sudo (Not Recommended)
```bash
# Only if other methods don't work
sudo npm install -g vercel
```

## Alternative Deployment Methods

### 1. Direct Vercel Web Interface

If CLI installation fails, you can deploy directly through Vercel's web interface:

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables in the dashboard
6. Deploy!

### 2. GitHub Actions Only

Use only the GitHub Actions pipeline without local Vercel CLI:

1. Push code to GitHub
2. Set up repository secrets
3. Let GitHub Actions handle deployment
4. Monitor deployments in Actions tab

### 3. Railway (Alternative Platform)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway init
railway up
```

### 4. Netlify (Alternative Platform)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify login
netlify init
netlify deploy --prod
```

## Script Fixes Applied

I've updated the deployment scripts to handle permission issues:

- ✅ **Local Installation**: Scripts now install Vercel CLI locally if global install fails
- ✅ **npx Usage**: All commands now use `npx vercel` instead of `vercel`
- ✅ **Fallback Detection**: Scripts check for both global and local installations

## Testing Your Setup

After fixing the permission issue, test your setup:

```bash
# Test Vercel CLI
npx vercel --version

# Test login
npx vercel login

# Test deployment (dry run)
npx vercel --confirm=false

# Run our setup script again
./scripts/setup-environments.sh
```

## Environment Variables Alternative Setup

If the script still has issues, manually set up environment variables:

### 1. Create .env.local manually
```bash
# Copy the example
cp .env.example .env.local

# Edit with your Firebase credentials
nano .env.local
```

### 2. Add to Vercel manually
```bash
# Login first
npx vercel login

# Add each variable
npx vercel env add NEXT_PUBLIC_FIREBASE_API_KEY production
npx vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN production
# ... repeat for all variables
```

### 3. Link project manually
```bash
npx vercel link
```

## Quick Deployment Without Scripts

If scripts don't work, deploy manually:

```bash
# Install dependencies
npm install

# Build locally (optional, to test)
npm run build

# Deploy to staging
npx vercel

# Deploy to production
npx vercel --prod
```

## Getting Help

If issues persist:

1. **Check Node.js version**: `node --version` (should be 18+)
2. **Check npm version**: `npm --version`
3. **Clear npm cache**: `npm cache clean --force`
4. **Check permissions**: `ls -la /usr/lib/node_modules`
5. **Use Vercel dashboard**: Deploy through web interface as fallback

## Contact

If you're still having issues, create an issue in the repository with:
- Your operating system
- Node.js and npm versions
- Complete error message
- Steps you've already tried
