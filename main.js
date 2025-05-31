// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then((reg) => {
    console.log("Service Worker registered", reg);
  });
}

// Handle Install Prompt
let deferredPrompt;
const installBtn = document.getElementById("install-btn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "inline-block";
});

installBtn.addEventListener("click", () => {
  installBtn.style.display = "none";
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted install prompt");
    } else {
      console.log("User dismissed install prompt");
    }
    deferredPrompt = null;
  });
});
