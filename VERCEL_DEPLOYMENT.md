# 🚀 Deploy to Vercel

## Important Note
This Vercel deployment is a **DEMO VERSION** with simulated sensor data. The real-time Arduino connection (`server.js`) cannot run on Vercel because:
- Vercel doesn't support WebSocket servers
- Serial port communication requires local hardware access
- Vercel is designed for static sites and serverless functions

## What's Deployed
The demo version (`public/demo.html`) simulates the bi-stable monitor behavior with:
- Automatic mode switching (Day → Night → Alert)
- Simulated temperature and light sensor readings
- Full visual themes and animations
- Bi-stable hysteresis logic demonstration

## Deployment Steps

### 1. Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

### 2. Deploy via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `Bi-Stable-Environment-Monitor` repository
5. Vercel will auto-detect settings from `vercel.json`
6. Click "Deploy"

### 3. Deploy via CLI
```bash
cd Bi-Stable-Environment-Monitor
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **bi-stable-monitor** (or your choice)
- Directory? **./** (root)
- Override settings? **N**

## After Deployment

Your demo dashboard will be live at: `https://bi-stable-monitor.vercel.app` (or your custom domain)

### Testing the Demo
The demo will automatically:
1. Start in DAY MODE (high light levels)
2. Gradually transition to NIGHT MODE
3. Occasionally trigger INTRUDER ALERT in night mode
4. Show HOT DAY MODE when temperature exceeds 30°C
5. Cycle through all states continuously

## Running Real Hardware Locally

To connect actual Arduino sensors:
```bash
node server.js
```
Then open `http://localhost:3000` and access `index.html` (not demo.html)

## Files Overview
- `public/demo.html` - Demo version (deployed to Vercel)
- `public/index.html` - Real hardware version (local only)
- `server.js` - WebSocket server for Arduino (local only)
- `vercel.json` - Vercel configuration

## Custom Domain (Optional)
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
