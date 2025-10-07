var browserApi = typeof browser !== "undefined" ? browser : chrome;

console.log("Detach background script loaded");

browserApi.tabs.onActivated.addListener((activeInfo: chrome.tabs.TabActiveInfo) => {
  console.log("Tab switched:", activeInfo);
});

browserApi.runtime.onMessage.addListener(
  (
    message: any,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void
  ) => {
    console.log("Message received:", message);
    if (message.type === "PING") {
      sendResponse({ status: "pong", timestamp: Date.now() });
    }
    return true; // Keep message channel open for async response
  }
);