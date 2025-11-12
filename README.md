# Flappy Krishna - Mobile App

A fun Flappy Bird-style game featuring Krishna from Hindu mythology, built with Capacitor for Android.

## 📋 Prerequisites

- Node.js and npm installed
- Android Studio (for Android development)
- Java Development Kit (JDK) 11 or higher

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Web App

Before running on Android, you must build the web assets:

```bash
npm run prepare-web
```

This command will:
- Bundle `src/main.js` using esbuild → outputs to `www/main.js`
- Copy `src/index.html` → to `www/index.html`

### 3. Copy Assets to Android

After building, sync the web assets to the Android project:

```bash
npx cap copy android
```

Or use the sync command (which also updates native plugins):

```bash
npx cap sync android
```

### 4. Open in Android Studio

```bash
npm run cap:open:android
```

Or manually:

```bash
npx cap open android
```

Then build and run the app from Android Studio.

## 📝 Important Notes

### Build Order

**Always follow this sequence:**

1. `npm run prepare-web` - Build web assets to `www/`
2. `npx cap copy android` - Copy built assets to Android
3. `npx cap open android` - Open in Android Studio

### Configuration

- **webDir**: Set to `www` in `capacitor.config.ts` - this tells Capacitor where to find your built web assets
- **Build Output**: The `www/` directory contains your built/bundled files (this is gitignored as a build artifact)
- **Source Files**: The `src/` directory contains your source code

### Common Issues

**Error: "Unable to find web assets"**
- Make sure you've run `npm run prepare-web` first
- Check that the `www/` directory exists and contains `index.html`

**Changes not reflected in the app**
- Re-run `npm run prepare-web` to rebuild
- Then run `npx cap copy android` to sync the changes
- Rebuild in Android Studio

## 🛠️ Development Workflow

1. Make changes to `src/index.html` or `src/main.js`
2. Run `npm run prepare-web` to rebuild
3. Run `npx cap copy android` to sync
4. Refresh/rebuild in Android Studio

## 📦 Available Scripts

- `npm run build` - Bundle JavaScript using esbuild
- `npm run copy-html` - Copy HTML to www directory
- `npm run prepare-web` - Build and copy (runs both above commands)
- `npm run cap:copy` - Copy web assets to native platforms
- `npm run cap:open:android` - Open Android project in Android Studio

## 🎮 How to Play

- **Tap** or press **Space** to make Krishna jump
- Avoid the pots
- Collect butter for bonus points
- Try to beat your high score!

Enjoy the divine adventure! 🕉️
