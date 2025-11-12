# 📱 Complete Build Guide - Flappy Krishna Android APK

This guide provides **complete step-by-step instructions** to build the Android APK for Flappy Krishna game.

---

## 🎯 Prerequisites Checklist

Before you start, make sure you have:

- [ ] Windows, macOS, or Linux computer
- [ ] Stable internet connection (for downloading dependencies)
- [ ] At least 8 GB RAM and 10 GB free disk space
- [ ] Git installed
- [ ] Node.js (v16 or higher) and npm installed

---

## 📋 STEP 1: Install Java 21 (JDK 21)

Capacitor 7.x **requires Java 21**. Follow the instructions for your operating system:

### Windows:

1. **Download Java 21:**
   - Go to: https://adoptium.net/temurin/releases/
   - Select:
     - Version: `21 - LTS`
     - Operating System: `Windows`
     - Architecture: `x64` (for 64-bit) or `x86` (for 32-bit)
     - Package Type: `JDK`
   - Click the `.msi` download link

2. **Install:**
   - Run the downloaded `.msi` file
   - Click "Next" through the installer
   - **Important:** Check "Set JAVA_HOME variable" option
   - **Important:** Check "Add to PATH" option
   - Complete the installation

3. **Verify Installation:**
   ```cmd
   java -version
   ```
   Should show: `openjdk version "21.0.x"`

### macOS:

1. **Download Java 21:**
   - Go to: https://adoptium.net/temurin/releases/
   - Select:
     - Version: `21 - LTS`
     - Operating System: `macOS`
     - Architecture: `x64` (Intel) or `aarch64` (Apple Silicon M1/M2)
     - Package Type: `JDK`
   - Click the `.pkg` download link

2. **Install:**
   - Open the downloaded `.pkg` file
   - Follow the installation wizard
   - Enter your password when prompted

3. **Set JAVA_HOME (add to `~/.zshrc` or `~/.bash_profile`):**
   ```bash
   export JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home
   export PATH=$JAVA_HOME/bin:$PATH
   ```

4. **Apply changes:**
   ```bash
   source ~/.zshrc  # or source ~/.bash_profile
   ```

5. **Verify Installation:**
   ```bash
   java -version
   ```
   Should show: `openjdk version "21.0.x"`

### Linux (Ubuntu/Debian):

1. **Install Java 21:**
   ```bash
   sudo apt update
   sudo apt install -y openjdk-21-jdk
   ```

2. **Set as default:**
   ```bash
   sudo update-alternatives --config java
   # Select Java 21 from the list
   ```

3. **Set JAVA_HOME (add to `~/.bashrc`):**
   ```bash
   export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
   export PATH=$JAVA_HOME/bin:$PATH
   ```

4. **Apply changes:**
   ```bash
   source ~/.bashrc
   ```

5. **Verify Installation:**
   ```bash
   java -version
   ```
   Should show: `openjdk version "21.0.x"`

---

## 📋 STEP 2: Install Android Studio

Android Studio is needed to build Android apps.

### All Operating Systems:

1. **Download Android Studio:**
   - Go to: https://developer.android.com/studio
   - Click "Download Android Studio"
   - Accept the terms and download

2. **Install Android Studio:**
   - **Windows:** Run the `.exe` file and follow the wizard
   - **macOS:** Open the `.dmg` file and drag Android Studio to Applications
   - **Linux:** Extract the `.tar.gz` and run `studio.sh`

3. **Initial Setup:**
   - Launch Android Studio
   - Click "Next" on the welcome screen
   - Choose "Standard" installation
   - Accept licenses
   - Wait for SDK components to download (this may take 10-30 minutes)

4. **Configure SDK:**
   - After setup, go to: **Tools → SDK Manager**
   - In **SDK Platforms** tab:
     - Check `Android 13.0 (Tiramisu)` - API Level 33
     - Click "Apply" to download
   - In **SDK Tools** tab:
     - Check `Android SDK Build-Tools` (latest version)
     - Check `Android SDK Platform-Tools`
     - Check `Android SDK Command-line Tools`
     - Click "Apply" to download

---

## 📋 STEP 3: Set Environment Variables

### Windows:

1. **Open Environment Variables:**
   - Press `Win + X` → Select "System"
   - Click "Advanced system settings"
   - Click "Environment Variables"

2. **Add ANDROID_HOME:**
   - Click "New" under System variables
   - Variable name: `ANDROID_HOME`
   - Variable value: `C:\Users\YourUsername\AppData\Local\Android\Sdk`
   - Click OK

3. **Add to PATH:**
   - Find "Path" in System variables → Click "Edit"
   - Click "New" and add: `%ANDROID_HOME%\platform-tools`
   - Click "New" and add: `%ANDROID_HOME%\tools`
   - Click OK on all windows

4. **Verify (open NEW command prompt):**
   ```cmd
   echo %ANDROID_HOME%
   adb --version
   ```

### macOS/Linux:

1. **Add to `~/.zshrc` (macOS) or `~/.bashrc` (Linux):**
   ```bash
   # Android SDK
   export ANDROID_HOME=$HOME/Library/Android/sdk  # macOS
   # OR for Linux: export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$ANDROID_HOME/platform-tools:$PATH
   export PATH=$ANDROID_HOME/tools:$PATH
   export PATH=$ANDROID_HOME/cmdline-tools/latest/bin:$PATH
   ```

2. **Apply changes:**
   ```bash
   source ~/.zshrc  # or source ~/.bashrc
   ```

3. **Verify:**
   ```bash
   echo $ANDROID_HOME
   adb --version
   ```

---

## 📋 STEP 4: Clone and Setup Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sharmamayankkkk/MobileApp.git
   cd MobileApp
   ```

2. **Checkout the fix branch:**
   ```bash
   git checkout copilot/vscode1762930490058
   ```

3. **Install Node.js dependencies:**
   ```bash
   npm install
   ```
   This will download all required npm packages (~2-5 minutes).

---

## 📋 STEP 5: Configure Android Studio for Java 21

This is **critical** - Android Studio must use Java 21 to build the project.

1. **Open Android Studio**

2. **Go to Settings/Preferences:**
   - **Windows/Linux:** File → Settings
   - **macOS:** Android Studio → Preferences

3. **Configure Gradle JDK:**
   - Navigate to: **Build, Execution, Deployment → Build Tools → Gradle**
   - Find the **"Gradle JDK"** dropdown
   - Select **"21"** or **"openjdk-21"**
   - If Java 21 is not listed:
     - Click the dropdown
     - Select "Add JDK..."
     - Browse to your Java 21 installation:
       - Windows: `C:\Program Files\Eclipse Adoptium\jdk-21.x.x-hotspot\`
       - macOS: `/Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home`
       - Linux: `/usr/lib/jvm/java-21-openjdk-amd64`
   - Click "Apply" → "OK"

---

## 📋 STEP 6: Build Web Assets

The app needs to bundle JavaScript files before building for Android.

```bash
npm run prepare-web
```

**What this does:**
- Bundles `src/main.js` → `www/main.js` (minified)
- Copies `src/index.html` → `www/index.html`

**Expected output:**
```
✓ Done in 2ms
```

**Verify:**
```bash
ls www/
# Should show: index.html  main.js  main.js.map
```

---

## 📋 STEP 7: Sync to Android

Copy the built web assets to the Android project:

```bash
npx cap sync android
```

**What this does:**
- Copies `www/` files → `android/app/src/main/assets/public/`
- Updates Capacitor configuration
- Updates Android plugins

**Expected output:**
```
✔ Copying web assets from www to android/app/src/main/assets/public
✔ copy android
✔ update android
```

---

## 📋 STEP 8: Build APK (Choose ONE method)

### Method A: Using Android Studio (Recommended for beginners)

1. **Open the Android project:**
   ```bash
   npx cap open android
   ```
   OR manually: Open Android Studio → "Open" → Select the `android` folder

2. **Wait for Gradle sync:**
   - Android Studio will automatically sync Gradle (bottom right status bar)
   - This downloads Android dependencies (may take 5-15 minutes first time)
   - If you see errors, click "Try Again" or "Sync Project with Gradle Files"

3. **Build the APK:**
   - **Menu:** Build → Build Bundle(s) / APK(s) → Build APK(s)
   - OR click the green hammer icon 🔨 in the toolbar
   - Wait for build to complete (~2-5 minutes)

4. **Locate the APK:**
   - When build completes, a notification appears: "APK(s) generated successfully"
   - Click "locate" in the notification
   - OR manually go to: `android/app/build/outputs/apk/debug/`
   - File name: `app-debug.apk`

### Method B: Using Command Line (Faster for experienced users)

1. **Navigate to android folder:**
   ```bash
   cd android
   ```

2. **Clean previous builds (recommended):**
   ```bash
   ./gradlew clean
   ```
   - **Windows:** Use `gradlew.bat clean` instead

3. **Build debug APK:**
   ```bash
   ./gradlew assembleDebug
   ```
   - **Windows:** Use `gradlew.bat assembleDebug` instead
   - This will download dependencies and build (~5-15 minutes first time)
   - Subsequent builds are faster (~1-2 minutes)

4. **Expected output:**
   ```
   BUILD SUCCESSFUL in 2m 34s
   ```

5. **Locate the APK:**
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

---

## 📋 STEP 9: Install APK on Device

### Method A: Using Android Studio

1. **Connect your Android device:**
   - Enable "Developer Options" on your phone:
     - Go to Settings → About Phone
     - Tap "Build Number" 7 times
   - Enable "USB Debugging" in Developer Options
   - Connect via USB cable
   - Allow USB debugging on your phone when prompted

2. **Run the app:**
   - In Android Studio, select your device from the device dropdown (top toolbar)
   - Click the green play button ▶️
   - The app will install and launch automatically

### Method B: Using ADB (Command Line)

```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Method C: Manual Installation

1. **Transfer APK to your phone:**
   - Email it to yourself
   - Use Google Drive / Dropbox
   - Connect via USB and copy to Downloads folder

2. **Install on phone:**
   - Open the APK file on your phone
   - Tap "Install"
   - If prompted, enable "Install from Unknown Sources"
   - Tap "Open" to launch the game

---

## 🎮 STEP 10: Test the App

1. Launch "Flappy Krishna" from your app drawer
2. The game should load with the Flappy Bird style gameplay
3. Tap or press space to make Krishna jump
4. Avoid the pots and collect butter!

---

## ❓ Troubleshooting

### Build Error: "invalid source release: 21"

**Problem:** Gradle is not using Java 21

**Solution:**
1. Verify Java 21 is installed: `java -version`
2. Check Android Studio Gradle JDK setting (Step 5)
3. Clean and rebuild:
   ```bash
   cd android
   ./gradlew clean
   ./gradlew assembleDebug
   ```

### Build Error: "SDK location not found"

**Problem:** ANDROID_HOME not set or incorrect

**Solution:**
1. Check ANDROID_HOME environment variable (Step 3)
2. Restart your terminal/command prompt
3. OR create `android/local.properties`:
   ```properties
   sdk.dir=C:\\Users\\YourUsername\\AppData\\Local\\Android\\Sdk
   ```
   (Use correct path for your system)

### Build Error: "Could not find com.android.tools.build:gradle"

**Problem:** Network issue or Gradle cache problem

**Solution:**
1. Check internet connection
2. Clear Gradle cache:
   ```bash
   cd android
   ./gradlew clean --refresh-dependencies
   ```
3. Delete `~/.gradle/caches` folder and retry

### Error: "Unable to find web assets"

**Problem:** Web assets not built

**Solution:**
```bash
npm run prepare-web
npx cap sync android
```

### App crashes on launch

**Problem:** Web assets not properly copied

**Solution:**
1. Build web assets: `npm run prepare-web`
2. Sync to Android: `npx cap sync android`
3. **Important:** After sync, update `android/app/capacitor.build.gradle`:
   ```gradle
   sourceCompatibility JavaVersion.VERSION_21
   targetCompatibility JavaVersion.VERSION_21
   ```
   (The file may revert to VERSION_17, manually change it back)
4. Rebuild the APK

---

## 📊 Build Time Estimates

- First time setup (Java, Android Studio, SDKs): **1-2 hours**
- First build (downloading dependencies): **15-30 minutes**
- Subsequent builds: **1-5 minutes**
- Clean build: **2-5 minutes**

---

## 📁 File Locations Reference

| Description | Location |
|-------------|----------|
| Source Code | `src/index.html`, `src/main.js` |
| Built Web Assets | `www/` (gitignored) |
| Android Project | `android/` |
| Built APK (Debug) | `android/app/build/outputs/apk/debug/app-debug.apk` |
| Built APK (Release) | `android/app/build/outputs/apk/release/app-release.apk` |
| Java Config | `android/build.gradle` |
| Gradle Version | `android/gradle/wrapper/gradle-wrapper.properties` |

---

## 🚀 Quick Reference Commands

```bash
# Complete build workflow
npm install                    # Install dependencies
npm run prepare-web           # Build web assets
npx cap sync android          # Sync to Android
cd android                    # Go to Android folder
./gradlew assembleDebug       # Build APK

# APK location
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 📞 Need Help?

If you encounter issues:

1. **Check Java version:** `java -version` (should be 21.x.x)
2. **Check ANDROID_HOME:** `echo $ANDROID_HOME` (should point to SDK)
3. **Clean and retry:**
   ```bash
   cd android
   ./gradlew clean
   cd ..
   npm run prepare-web
   npx cap sync android
   cd android
   ./gradlew assembleDebug
   ```

---

## ✅ Success Checklist

- [x] Java 21 installed and verified
- [x] Android Studio installed with SDK 33
- [x] Environment variables set (ANDROID_HOME, PATH)
- [x] Gradle JDK set to Java 21 in Android Studio
- [x] Dependencies installed (`npm install`)
- [x] Web assets built (`npm run prepare-web`)
- [x] Synced to Android (`npx cap sync android`)
- [x] APK built successfully
- [x] APK installed on device
- [x] Game launches and plays correctly

**Congratulations! You've successfully built the Flappy Krishna Android app! 🎉**
