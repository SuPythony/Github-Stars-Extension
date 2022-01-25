function main() {
    try {
        if (!(document.location.host === "github.com")) {
            let links = document.body.getElementsByTagName("a");
            let stars = [];
            let linksDone = [];
            let langsDone = [];

            for (let link of links) {
                if (
                    link.href.startsWith("https://github.com") ||
                    link.href.startsWith("github.com")
                ) {
                    link.addEventListener("mouseover", () => {
                        if (linksDone.includes(link.href)) {
                            link.title = stars[linksDone.indexOf(link.href)];
                            chrome.storage.sync.get("showLangs", ({ showLangs }) => {
                                if (showLangs) {
                                    if (langsDone.length === linksDone.length) {
                                        link.title =
                                            stars[linksDone.indexOf(link.href)] +
                                            langsDone[linksDone.indexOf(link.href)];
                                    } else {
                                        let href = link.href;
                                        if (href.endsWith("/")) {
                                            href = href.slice(0, href.length - 1);
                                        }
                                        let splitted = href.split("/");
                                        let url = `https://api.github.com/repos/${
                                            splitted[splitted.length - 2]
                                        }/${splitted[splitted.length - 1]}`;
                                        let options = {};
                                        chrome.storage.sync.get("token", ({ token }) => {
                                            if (token) {
                                                options = {
                                                    headers: {
                                                        Authorization: `token ${token}`,
                                                    },
                                                };
                                            }
                                        });
                                        fetch(url + "/languages", options)
                                            .then((val) => val.json())
                                            .then((data) => {
                                                if (data.message === "Bad credentials") {
                                                    link.title = "Invalide access token";
                                                    return;
                                                }
                                                if (
                                                    data.message &&
                                                    data.message.startsWith(
                                                        "API rate limit exceeded",
                                                    )
                                                ) {
                                                    link.title = "Rate limit exceeded";
                                                    return;
                                                }
                                                total = 0;
                                                for (let lang in data) {
                                                    total += data[lang];
                                                }
                                                let langs = "";
                                                for (let lang in data) {
                                                    langs +=
                                                        lang +
                                                        ": " +
                                                        ((data[lang] / total) * 100).toFixed(2) +
                                                        "%\n";
                                                }
                                                link.title =
                                                    stars[linksDone.indexOf(link.href)] +
                                                    "\n\n" +
                                                    langs;
                                                langsDone.push("\n\n" + langs);
                                            });
                                    }
                                }
                            });
                        } else {
                            let href = link.href;
                            if (href.endsWith("/")) {
                                href = href.slice(0, href.length - 1);
                            }
                            if (href === "https://github.com" || href === "github.com") {
                                link.title = "Can't fetch stars - not a github repository";
                                return;
                            }
                            link.title = "Fetching stars... Hover the link again to see the stars";
                            let splitted = href.split("/");
                            if (splitted[splitted.length - 2] !== "github.com") {
                                let url = `https://api.github.com/repos/${
                                    splitted[splitted.length - 2]
                                }/${splitted[splitted.length - 1]}`;
                                let options = {};
                                chrome.storage.sync.get("token", ({ token }) => {
                                    if (token) {
                                        options = {
                                            headers: {
                                                Authorization: `token ${token}`,
                                            },
                                        };
                                    }
                                });
                                fetch(url, options)
                                    .then((val) => val.json())
                                    .then((data) => {
                                        if (data.message === "Bad credentials") {
                                            link.title = "Invalide access token";
                                            return;
                                        }
                                        if (
                                            data.message &&
                                            data.message.startsWith("API rate limit exceeded")
                                        ) {
                                            link.title = "Rate limit exceeded";
                                            return;
                                        }
                                        let starWord = "stars";
                                        if (data.stargazers_count == 1) {
                                            link.title = "1 star";
                                            starWord = "star";
                                        } else {
                                            try {
                                                link.title =
                                                    data.stargazers_count.toString() + " stars";
                                            } catch {
                                                link.title =
                                                    "Rate limit exceeded, have a setup a personal access token?";
                                                return;
                                            }
                                        }
                                        stars.push(
                                            data.stargazers_count.toString() + " " + starWord,
                                        );
                                        linksDone.push(href);
                                        chrome.storage.sync.get("showLangs", (showLangs) => {
                                            if (showLangs) {
                                                let prev = link.title;
                                                link.title += "\n\nFetching languages";
                                                fetch(url + "/languages", options)
                                                    .then((val) => val.json())
                                                    .then((data) => {
                                                        if (data.message === "Bad credentials") {
                                                            link.title = "Invalide access token";
                                                            return;
                                                        }
                                                        if (
                                                            data.message &&
                                                            data.message.startsWith(
                                                                "API rate limit exceeded",
                                                            )
                                                        ) {
                                                            link.title = "Rate limit exceeded";
                                                            return;
                                                        }
                                                        total = 0;
                                                        for (let lang in data) {
                                                            total += data[lang];
                                                        }
                                                        let langs = "";
                                                        for (let lang in data) {
                                                            langs +=
                                                                lang +
                                                                ": " +
                                                                (
                                                                    (data[lang] / total) *
                                                                    100
                                                                ).toFixed(2) +
                                                                "%\n";
                                                        }
                                                        link.title = prev + "\n\n" + langs;
                                                        langsDone.push("\n\n" + langs);
                                                    });
                                            }
                                        });
                                    });
                            } else {
                                link.title = "Can't fetch stars - not a github repository";
                            }
                        }
                    });
                }
            }
        }
    } catch {}
}

let observer = new MutationObserver(() => main());
observer.observe(document, {
    childList: true,
    subtree: true,
});
