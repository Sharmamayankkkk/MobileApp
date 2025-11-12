# 🌩️ Building in Cloud IDE (GitHub Codespaces / Gitpod / VS Code Dev Containers)

If you're using a cloud IDE like GitHub Codespaces, Gitpod, or VS Code Dev Containers, you cannot download and install Java from adoptium.net directly. Use these methods instead.

---

## ⚡ TL;DR - Quick Commands for Cloud IDE

```bash
# Install Java 21 using SDKMAN (most cloud IDEs)
sdk install java 21.0.7-tem
sdk default java 21.0.7-tem
export JAVA_HOME=$HOME/.sdkman/candidates/java/current
echo 'export JAVA_HOME=$HOME/.sdkman/candidates/java/current' >> ~/.bashrc

# OR using apt (Ubuntu/Debian)
sudo apt update && sudo apt install -y openjdk-21-jdk
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
echo 'export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64' >> ~/.bashrc

# Verify
java -version  # Should show 21.0.x

# Build the app
npm install
npm run prepare-web
npx cap sync android
cd android
./gradlew clean
./gradlew assembleDebug

# APK location: android/app/build/outputs/apk/debug/app-debug.apk
```

---

## ✅ Method 1: Using SDKMAN (Recommended for Cloud IDEs)

SDKMAN is often pre-installed in cloud IDEs and makes it easy to install Java 21.

### Step 1: Check if SDKMAN is installed

```bash
sdk version
```

If you see a version number, SDKMAN is installed. If not, install it:

```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

### Step 2: Install Java 21 using SDKMAN

```bash
# List available Java 21 versions
sdk list java | grep "21\."

# Install Java 21 (Temurin/Eclipse Adoptium)
sdk install java 21.0.7-tem

# Or install Microsoft Build of OpenJDK 21
sdk install java 21.0.7-ms

# Set as default
sdk default java 21.0.7-tem
```

### Step 3: Verify Installation

```bash
java -version
# Should show: openjdk version "21.0.x"

echo $JAVA_HOME
# Should show: /home/codespace/.sdkman/candidates/java/current
```

---

## ✅ Method 2: Using apt (Ubuntu/Debian-based IDEs)

If your IDE uses Ubuntu or Debian, use apt to install Java 21:

```bash
# Update package list
sudo apt update

# Install OpenJDK 21
sudo apt install -y openjdk-21-jdk

# Set as default (if multiple Java versions exist)
sudo update-alternatives --config java
# Select Java 21 from the list

# Set JAVA_HOME (add to ~/.bashrc or ~/.zshrc)
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH

# Apply changes
source ~/.bashrc
```

### Verify Installation

```bash
java -version
# Should show: openjdk version "21.0.x"
```

---

## ✅ Method 3: Using Dev Container Configuration

If you're using VS Code Dev Containers, add this to your `.devcontainer/devcontainer.json`:

```json
{
  "name": "Flappy Krishna Dev",
  "image": "mcr.microsoft.com/devcontainers/java:21-bullseye",
  "features": {
    "ghcr.io/devcontainers/features/java:1": {
      "version": "21",
      "installMaven": "false",
      "installGradle": "false"
    },
    "ghcr.io/devcontainers/features/node:1": {
      "version": "lts"
    }
  },
  "customizations": {
    "vscode": {
      "extensions": [
        "vscjava.vscode-java-pack"
      ]
    }
  },
  "postCreateCommand": "java -version && node -v"
}
```

Then rebuild the container: `Ctrl+Shift+P` → "Dev Containers: Rebuild Container"

---

## 🚀 Complete Build Workflow for Cloud IDE

Once Java 21 is installed, follow these steps:

```bash
# 1. Install dependencies
npm install

# 2. Build web assets
npm run prepare-web

# 3. Sync to Android
npx cap sync android

# 4. Verify Java 21 is being used
echo $JAVA_HOME
java -version

# 5. Build APK
cd android
./gradlew clean
./gradlew assembleDebug

# 6. Find your APK
ls -lh app/build/outputs/apk/debug/app-debug.apk
```

---

## 🔧 Set JAVA_HOME Permanently

Add these lines to your shell configuration file (`~/.bashrc`, `~/.zshrc`, or `~/.profile`):

### For SDKMAN:
```bash
export JAVA_HOME=$HOME/.sdkman/candidates/java/current
export PATH=$JAVA_HOME/bin:$PATH
```

### For apt-installed Java:
```bash
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
```

### For Microsoft Build (SDKMAN):
```bash
export JAVA_HOME=$HOME/.sdkman/candidates/java/21.0.7-ms
export PATH=$JAVA_HOME/bin:$PATH
```

Apply changes:
```bash
source ~/.bashrc  # or source ~/.zshrc
```

---

## 🌐 Set ANDROID_HOME for Cloud IDE

If Android SDK is not automatically set:

```bash
# Check if ANDROID_HOME is set
echo $ANDROID_HOME

# If not set, add to ~/.bashrc or ~/.zshrc
export ANDROID_HOME=/opt/android-sdk  # or wherever SDK is installed
export PATH=$ANDROID_HOME/cmdline-tools/latest/bin:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH

# Apply changes
source ~/.bashrc
```

To find Android SDK location:
```bash
which adb
# Typically in: /opt/android-sdk/platform-tools/adb
# So ANDROID_HOME is: /opt/android-sdk
```

---

## ❓ Troubleshooting in Cloud IDE

### Issue: "java: command not found" after installing

**Solution:**
```bash
# Reload shell configuration
source ~/.bashrc  # or source ~/.zshrc

# Or restart terminal
exit  # then open new terminal
```

### Issue: Wrong Java version still showing

**Solution:**
```bash
# Check all Java installations
update-alternatives --list java  # Linux
# or
sdk list java  # SDKMAN

# Set correct version
sdk use java 21.0.7-tem  # SDKMAN
# or
sudo update-alternatives --config java  # Linux
```

### Issue: JAVA_HOME not set

**Solution:**
```bash
# Find Java installation
which java
readlink -f $(which java)

# Set JAVA_HOME based on the path shown
export JAVA_HOME=/path/to/java/home
echo 'export JAVA_HOME=/path/to/java/home' >> ~/.bashrc
source ~/.bashrc
```

### Issue: Build still fails with "jlink error"

**Solution:**
Make sure you pulled the latest changes that include AGP 8.1.4:
```bash
git pull origin copilot/vscode1762930490058
cd android
./gradlew clean
./gradlew assembleDebug
```

---

## 🎯 Quick Commands Summary

```bash
# SDKMAN method (recommended for cloud IDEs)
sdk install java 21.0.7-tem
sdk default java 21.0.7-tem
export JAVA_HOME=$HOME/.sdkman/candidates/java/current
source ~/.bashrc

# apt method (Ubuntu/Debian)
sudo apt update && sudo apt install -y openjdk-21-jdk
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
source ~/.bashrc

# Build the app
npm install
npm run prepare-web
npx cap sync android
cd android
./gradlew assembleDebug
```

APK location: `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 📝 Notes for Specific Cloud IDEs

### GitHub Codespaces
- Usually has SDKMAN pre-installed
- Use `sdk install java 21.0.7-ms` (Microsoft Build)
- Android SDK often at `/opt/android-sdk`

### Gitpod
- Usually has apt available
- Use `sudo apt install openjdk-21-jdk`
- May need to install Android SDK separately

### VS Code Dev Containers
- Best to configure in `devcontainer.json`
- Use Java 21 base image
- Can pre-install all dependencies

---

**See BUILD_GUIDE.md for complete local machine setup instructions.**
