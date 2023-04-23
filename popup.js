chrome.storage.sync.get(
    "showLangs",
    ({ showLangs }) => (document.getElementById("lang").checked = showLangs),
);

chrome.storage.sync.get(
    "prefetch",
    ({ prefetch }) => (document.getElementById("prefetch").checked = prefetch),
);

document.getElementById("lang").onchange = () => {
    if (document.getElementById("lang").checked) {
        chrome.storage.sync.set({ showLangs: true });
    } else {
        chrome.storage.sync.set({ showLangs: false });
    }
};

document.getElementById("prefetch").onchange = () => {
    if (document.getElementById("prefetch").checked) {
        chrome.storage.sync.set({ prefetch: true });
    } else {
        chrome.storage.sync.set({ prefetch: false });
    }
};

document.getElementById("tokenForm").addEventListener("submit", (e) => {
    e.preventDefault();
    chrome.storage.sync.set({ token: document.getElementById("token").value });
    document.getElementById("tokenForm").style.display = "none";
    document.getElementById("success").style.display = "block";
});

chrome.storage.sync.get("token", ({ token }) => {
    if (!token) {
        document.getElementById("tokenForm").style.display = "flex";
    } else {
        document.getElementById("change").style.display = "block";
        document.getElementById("change").onclick = () => {
            document.getElementById("change").style.display = "none";
            document.getElementById("tokenForm").style.display = "flex";
        };
    }
});
