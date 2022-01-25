chrome.storage.sync.get(
    "showLangs",
    ({ showLangs }) => (document.getElementById("lang").checked = showLangs)
);
document.getElementById("lang").onchange = () => {
    if (document.getElementById("lang").checked) {
        chrome.storage.sync.set({ showLangs: true });
    } else {
        chrome.storage.sync.set({ showLangs: false });
    }
};
