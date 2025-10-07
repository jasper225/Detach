var browserApi = typeof browser !== "undefined" ? browser : chrome;

console.log("Detach content script loaded");

let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

window.addEventListener("scroll", () => {
  if (scrollTimeout) clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    console.log("Scrolling has stopped");
    browserApi.runtime.sendMessage({ type: "PING" }, (response: any) => {
      console.log("Response from background:", response);
    });
  }, 2000);
});
