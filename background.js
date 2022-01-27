chrome.storage.sync.get("showLangs", ({ showLangs }) => {
    if (!showLangs) {
        chrome.storage.sync.set({ showLangs: false });
    }
});
