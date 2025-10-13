var browserApi = typeof browser !== "undefined" ? browser : chrome;

console.log("Detach content script loaded 🪶");

let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

window.addEventListener("scroll", () => {
  if (scrollTimeout) clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    console.log("Scrolling has stopped");
    try {
      browserApi.runtime.sendMessage({ type: "PING" }, (response: any) => {
        if (chrome.runtime.lastError) {
          console.log(
            "Extension context invalidated - please refresh the page"
          );
          return;
        }
        console.log("Response from background:", response);
      });
    } catch (error) {
      console.log("Extension context invalidated - please refresh the page");
    }
  }, 2000);
});
