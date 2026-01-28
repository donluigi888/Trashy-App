# Vercel Deployment Checklist ✅

## Before Deploying

- [ ] Code is pushed to GitHub/GitLab/Bitbucket
- [ ] All files are committed (including vercel.json)
- [ ] You have a valid Gemini API key

## In Vercel Dashboard

### Project Configuration
- [ ] Framework Preset: **Vite**
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Install Command: `npm install`

### Environment Variables (CRITICAL!)
- [ ] Add `GEMINI_API_KEY` environment variable
- [ ] Set for Production environment
- [ ] Set for Preview environment (optional)
- [ ] Set for Development environment (optional)

## After First Deployment

- [ ] Check if the site loads (not blank screen)
- [ ] Open browser console (F12) - check for errors
- [ ] Test zone selection functionality
- [ ] Test calendar integration

## If Blank Screen Appears

### Step 1: Check Build Logs
1. Go to Vercel Dashboard
2. Click on your deployment
3. Check "Build Logs" tab
4. Look for errors (red text)

### Step 2: Verify Environment Variables
1. Settings → Environment Variables
2. Confirm `GEMINI_API_KEY` exists
3. Verify it's enabled for Production

### Step 3: Redeploy
1. Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"
4. Wait for completion

### Step 4: Check Browser Console
1. Open deployed site
2. Press F12
3. Go to Console tab
4. Look for JavaScript errors

### Step 5: Contact for Help
If still not working:
- Copy any error messages from console
- Copy build log errors
- Check that vercel.json exists in your repo

## Common Issues & Solutions

### "Failed to fetch" error
**Problem:** API key not set or invalid
**Solution:** Add/verify GEMINI_API_KEY in Vercel environment variables

### Blank screen with no console errors
**Problem:** Build output not configured correctly
**Solution:** Verify Output Directory is set to `dist`

### Build fails with TypeScript errors
**Problem:** Missing type definitions
**Solution:** Run `npm install` locally and commit package-lock.json

### "Cannot read property of undefined"
**Problem:** Missing dependency or import error
**Solution:** Check that all imports in code match actual file names

## Success Indicators

✅ Build completes without errors
✅ Deployment status shows "Ready"
✅ Site loads and shows the welcome screen
✅ Can select Zone A or Zone B
✅ No errors in browser console
✅ Calendar integration works when tested
