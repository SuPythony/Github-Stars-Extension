chrome.storage.sync.get("showLangs", ({ showLangs }) => {
    if (!showLangs) {
        chrome.storage.sync.set({ showLangs: false });
    }
});
chrome.storage.sync.get("prefetch", ({ prefetch }) => {
    if (!prefetch) {
        chrome.storage.sync.set({ prefetch: false });
    }
});
