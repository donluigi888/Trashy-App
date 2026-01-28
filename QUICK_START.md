# ⚡ QUICK START - Fix Your Blank Screen in 5 Minutes

## What You Need
- ✅ These fixed files (already in this folder)
- ✅ Your GitHub repository
- ✅ Your Gemini API key
- ✅ Access to Vercel Dashboard

## Step-by-Step Fix (5 minutes)

### Step 1: Replace Files (2 minutes)
1. **Download all files from this folder**
2. **Go to your local project folder**
3. **Replace these files:**
   - `vercel.json` ← NEW FILE, just add it
   - `index.html` ← Replace
   - `package.json` ← Replace
   - `.env.example` ← NEW FILE, just add it
   - `README.md` ← Replace (optional)

### Step 2: Push to GitHub (1 minute)
```bash
# In your project folder
git add .
git commit -m "Fix: Vercel deployment configuration"
git push
```

### Step 3: Configure Vercel (2 minutes)
1. **Go to** https://vercel.com/dashboard
2. **Click on your project** (trashy-ai or whatever it's called)
3. **Go to Settings** → **Environment Variables**
4. **Add new variable:**
   - Name: `GEMINI_API_KEY`
   - Value: [Your actual Gemini API key]
   - Check: ☑️ Production
5. **Click "Save"**

### Step 4: Redeploy
1. **Go to "Deployments" tab**
2. **Find the latest deployment** (should be happening automatically from your push)
3. **Wait for it to complete** (usually 30-60 seconds)
4. **OR** click "..." on any deployment → "Redeploy" to manually trigger

### Step 5: Test (30 seconds)
1. **Open your site:** https://trashy-ai.vercel.app
2. **You should see:**
   - ✅ Green gradient background
   - ✅ "Trashy" logo
   - ✅ Welcome text
   - ✅ Zone selection interface

## If It Still Doesn't Work

### Check #1: Build Logs
- Vercel Dashboard → Deployments → Your deployment → "Build Logs"
- Look for red error messages

### Check #2: Environment Variable
- Settings → Environment Variables
- Verify `GEMINI_API_KEY` is there and has your actual key (not PLACEHOLDER_API_KEY)

### Check #3: Browser Console
- Open your site
- Press F12
- Go to "Console" tab
- Look for error messages (red text)

### Most Common Issue
**Problem:** "Failed to fetch" or API errors
**Solution:** Your `GEMINI_API_KEY` environment variable is not set or is invalid

**Fix:**
1. Get a valid key from: https://makersuite.google.com/app/apikey
2. Add it to Vercel Environment Variables
3. Redeploy

## That's It! 🎉

Your site should now be working. The blank screen was caused by:
1. Missing `vercel.json` configuration
2. Conflicting import map in HTML
3. Missing TypeScript types

All fixed now! ✅

## Need Help?
Read the full `FIX_SUMMARY.md` for detailed explanations.
