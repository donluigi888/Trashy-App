<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Trashy – Your AI Trashbot 🗑️

A waste collection reminder app for residents of Esch-sur-Alzette, Luxembourg.

View your app in AI Studio: https://ai.studio/apps/drive/169nXuviOJlHEp2JGoOQwMVXfl-c-QILF

## Features
- Zone-based collection schedule (Zone A & B)
- Interactive neighborhood map
- Calendar integration (Google Calendar & Apple Calendar)
- Automatic notifications at 8 AM on collection days
- Support for all waste types: household waste, PMC, paper, glass, organic waste

## Prerequisites
- Node.js (v18 or higher recommended)
- A Gemini API key (get one at https://makersuite.google.com/app/apikey)

## Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set your API key:**
   - Open `.env.local` file
   - Replace `PLACEHOLDER_API_KEY` with your actual Gemini API key:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   The app will be available at http://localhost:3000

## Build for Production

Build the app:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deploy to Vercel

### Quick Deploy (Recommended)

1. **Push your code to GitHub** (if not already done)

2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure the project:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (should be auto-detected)
   - Output Directory: `dist` (should be auto-detected)
   - Install Command: `npm install` (should be auto-detected)

6. **Add Environment Variable:**
   - Go to "Environment Variables" section
   - Add variable name: `GEMINI_API_KEY`
   - Add your actual Gemini API key as the value
   - Select all environments (Production, Preview, Development)

7. **Click "Deploy"**

### Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Add environment variable:**
   ```bash
   vercel env add GEMINI_API_KEY production
   ```
   Then paste your API key when prompted.

5. **Redeploy to apply the environment variable:**
   ```bash
   vercel --prod
   ```

## Troubleshooting Blank Screen

If your deployed app shows a blank screen:

### 1. Check Build Logs
- Go to your Vercel deployment
- Click on the deployment → "Build Logs"
- Look for any errors during the build process

### 2. Verify Environment Variables
- In Vercel Dashboard → Your Project → Settings → Environment Variables
- Confirm `GEMINI_API_KEY` is set and has the correct value
- Make sure it's enabled for "Production" environment

### 3. Check Browser Console
- Open your deployed site
- Press F12 to open Developer Tools
- Check the Console tab for JavaScript errors
- Common errors:
  - `Failed to fetch` → API key issue
  - `Unexpected token` → Build issue
  - `Cannot read property` → Missing dependency

### 4. Force Redeploy
- In Vercel Dashboard → Deployments
- Click the three dots (...) next to your latest deployment
- Click "Redeploy"
- This ensures the latest code and environment variables are used

### 5. Verify Build Output
After deployment, check that these files exist:
- `/dist/index.html`
- `/dist/assets/*.js`
- `/dist/assets/*.css`

## Tech Stack
- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **AI:** Google Gemini AI
- **Hosting:** Vercel

## Project Structure
```
.
├── App.tsx              # Main app component
├── index.tsx            # React entry point
├── index.html           # HTML template
├── constants.tsx        # App constants & waste types
├── types.ts             # TypeScript type definitions
├── services/
│   ├── calendarService.ts   # Calendar integration logic
│   └── dataService.ts       # Waste collection data parsing
├── vite.config.ts       # Vite configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies
```

## Support

For issues or questions:
1. Check the [Troubleshooting](#troubleshooting-blank-screen) section
2. Review Vercel deployment logs
3. Check browser console for errors

## License

This project is built for the residents of Esch-sur-Alzette, Luxembourg.
