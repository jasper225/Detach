
var browserApi = typeof browser !== "undefined" ? browser : chrome;

browserApi.runtime.onInstalled.addListener(() => {
  console.log("Detach background service worker installed 🚀");
});

browserApi.tabs.onActivated.addListener((activeInfo) => {
  console.log("Tab activated:", activeInfo);
});

browserApi.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "PING") {
    console.log("Received PING from content script 🐧");
    sendResponse({ type: "PONG" });
  }
});
