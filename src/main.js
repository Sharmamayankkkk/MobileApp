// src/main.js
// Minimal bootstrap for the Capacitor web app.
// Keep this light — your existing index.html contains the game logic.

console.log('Flappy Krishna: main.js loaded');

// Optionally expose a helper object if you want to call native helpers later
window.AppNative = {
  platform() {
    return navigator.userAgent;
  }
};