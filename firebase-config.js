// firebase-config.js
// Your real Firebase project config. This file is listed in .gitignore
// and should NEVER be committed to a public repo.
//
// Get these values from:
// Firebase console → Project settings (⚙️) → General → Your apps → SDK setup and configuration
//
// Note: none of these values are truly "secret" — Firebase's client config is
// designed to be public. The reason to keep this file out of your repo is
// just to keep it out of your commit history / off GitHub's file browser,
// not because leaking it grants access on its own. Real access control comes
// from your Firestore Security Rules (see firestore.rules) and, optionally,
// from restricting this API key to your domain in Google Cloud Console
// (APIs & Services → Credentials → your key → Application restrictions).

const firebaseConfig = {
  apiKey: "AIzaSyAFQ7Rh564ZeXe13DZVbNRnED7XMmfs-oU",
  authDomain: "drivehub-e6b13.firebaseapp.com",
  projectId: "drivehub-e6b13",
  storageBucket: "drivehub-e6b13.firebasestorage.app",
  messagingSenderId: "188389418475",
  appId: "1:188389418475:web:533215ed706f91b7f465ae"
};
