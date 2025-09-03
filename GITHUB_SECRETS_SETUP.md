# 🔐 GitHub Secrets Setup Guide

## Required Secrets for CI/CD Pipeline

Go to your GitHub repository: **https://github.com/256-katendechris-256/threshold**

Navigate to: `Settings` → `Secrets and variables` → `Actions` → `New repository secret`

### **Vercel Configuration Secrets**

Add these exact secrets (copy the values from below):

#### 1. **VERCEL_TOKEN**
```
Get from: https://vercel.com/account/tokens
- Go to Vercel Dashboard → Settings → Tokens
- Create a new token with full access
- Copy and paste the token value
```

#### 2. **VERCEL_ORG_ID**
```
team_2fe9eiIMaRAU7QJhEF65vBCv
```

#### 3. **VERCEL_PROJECT_ID**
```
prj_EAZ714hpIo0XHugeoHUkcxmnvMzB
```

### **Production Firebase Secrets**

#### 4. **PROD_FIREBASE_API_KEY**
```
AIzaSyBt2RVYUGWlKHadfHu6bY8qE_GVBvcXRe8
```

#### 5. **PROD_FIREBASE_AUTH_DOMAIN**
```
projectnite.firebaseapp.com
```

#### 6. **PROD_FIREBASE_PROJECT_ID**
```
projectnite
```

#### 7. **PROD_FIREBASE_STORAGE_BUCKET**
```
projectnite.firebasestorage.app
```

#### 8. **PROD_FIREBASE_MESSAGING_SENDER_ID**
```
564353562930
```

#### 9. **PROD_FIREBASE_APP_ID**
```
1:564353562930:web:03932f1bdf8af66fb23f2b
```

### **Staging Firebase Secrets (Optional - for staging environment)**

For now, you can use the same Firebase project for staging, but later you should create a separate Firebase project for staging:

#### 10. **STAGING_FIREBASE_API_KEY**
```
AIzaSyBt2RVYUGWlKHadfHu6bY8qE_GVBvcXRe8
```

#### 11. **STAGING_FIREBASE_AUTH_DOMAIN**
```
projectnite.firebaseapp.com
```

#### 12. **STAGING_FIREBASE_PROJECT_ID**
```
projectnite
```

#### 13. **STAGING_FIREBASE_STORAGE_BUCKET**
```
projectnite.firebasestorage.app
```

#### 14. **STAGING_FIREBASE_MESSAGING_SENDER_ID**
```
564353562930
```

#### 15. **STAGING_FIREBASE_APP_ID**
```
1:564353562930:web:03932f1bdf8af66fb23f2b
```

## How to Get VERCEL_TOKEN

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your profile picture (top right)
3. Go to **Settings**
4. Click **Tokens** in the left sidebar
5. Click **Create** button
6. Give it a name like "GitHub Actions"
7. Select **Full Account** scope
8. Click **Create**
9. Copy the token immediately (you won't see it again)
10. Paste it as the `VERCEL_TOKEN` secret value

## Verification

After adding all secrets, your GitHub repository should have **15 secrets** total.

You can verify by going to:
`Settings` → `Secrets and variables` → `Actions`

The secrets list should show all 15 secrets (values will be hidden for security).

## Next Steps

Once all secrets are added:
1. Create a `develop` branch for staging deployments
2. Make a test commit to trigger the CI/CD pipeline
3. Monitor the deployment in the Actions tab

## Security Notes

- ✅ Never commit these values to your repository
- ✅ Secrets are encrypted and only accessible to GitHub Actions
- ✅ You can update secret values anytime without affecting the pipeline
- ✅ Consider using separate Firebase projects for staging and production in the future
