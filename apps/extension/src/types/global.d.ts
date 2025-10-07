// Declare browser API for Firefox
declare namespace browser {
  export const runtime: typeof chrome.runtime;
  export const tabs: typeof chrome.tabs;
  export const storage: typeof chrome.storage;
}

// Make browser available globally
declare const browser: typeof chrome | undefined;