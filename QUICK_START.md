# ⚡ Quick Build Reference Card

## Prerequisites
- ✅ Java 21 (JDK) - https://adoptium.net/
- ✅ Android Studio - https://developer.android.com/studio
- ✅ Node.js & npm
- ✅ Git

## Environment Variables
```bash
# Set these in your system
JAVA_HOME=/path/to/jdk-21
ANDROID_HOME=/path/to/Android/Sdk
```

## Build Commands (In Order)
```bash
# 1. Clone and setup
git clone https://github.com/Sharmamayankkkk/MobileApp.git
cd MobileApp
git checkout copilot/vscode1762930490058
npm install

# 2. Build web assets
npm run prepare-web

# 3. Sync to Android  
npx cap sync android

# 4. (IMPORTANT!) Verify Java 21 in capacitor.build.gradle
# File: android/app/capacitor.build.gradle
# Should have: JavaVersion.VERSION_21 (not VERSION_17)

# 5. Build APK
cd android
./gradlew clean
./gradlew assembleDebug

# 6. Find APK
# Location: android/app/build/outputs/apk/debug/app-debug.apk
```

## Verify Setup
```bash
java -version          # Should show: 21.0.x
echo $ANDROID_HOME     # Should show: /path/to/Android/Sdk
adb --version         # Should work (shows adb version)
```

## Android Studio Setup
1. File → Settings → Build Tools → Gradle
2. Set "Gradle JDK" to **21**
3. Click Apply → OK

## Install APK
```bash
# Via ADB
adb install android/app/build/outputs/apk/debug/app-debug.apk

# OR transfer app-debug.apk to phone and install manually
```

## Common Issues

**Error: jlink exited with non-zero exit value 1**
→ Fixed in latest code (AGP 8.1.4). Pull latest changes and clean rebuild

**Error: invalid source release: 21**
→ Set Gradle JDK to 21 in Android Studio settings

**Error: SDK location not found**
→ Set ANDROID_HOME environment variable

**Error: Unable to find web assets**
→ Run: `npm run prepare-web && npx cap sync android`

**App crashes on launch**
→ Check `android/app/capacitor.build.gradle` has VERSION_21

## Build Time
- First build: ~15-30 minutes (downloads dependencies)
- Subsequent: ~2-5 minutes

---
**See BUILD_GUIDE.md for complete detailed instructions**
