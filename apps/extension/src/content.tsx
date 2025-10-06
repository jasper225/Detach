var browserApi = typeof browser !== "undefined" ? browser : chrome;

console.log("Detach content script loaded 🪶");

let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

window.addEventListener("scroll", () => {
  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    console.log("User stopped scrolling for a moment 👀");
    browserApi.runtime.sendMessage({ type: "PING" }, (response) => {
      console.log("Response from background:", response);
    });
  }, 2000); // fires 2s after scrolling stops
});
