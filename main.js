function main() {
  if (!(document.location.host === "github.com")) {
    let links = document.body.getElementsByTagName("a");
    let stars = [];
    let linksDone = [];
    let langsDone = [];

    for (let link of links) {
      if (link.href.startsWith("https://github.com") || link.href.startsWith("github.com")) {
        link.addEventListener("mouseover", () => {
          if (linksDone.includes(link.href)) {
            link.title = stars[linksDone.indexOf(link.href)];
            chrome.storage.sync.get("showLangs", ({ showLangs }) => {
              if (showLangs) {
                if (langsDone.length === linksDone.length) {
                  link.title =
                    stars[linksDone.indexOf(link.href)] + langsDone[linksDone.indexOf(link.href)];
                } else {
                  let href = link.href;
                  if (href.endsWith("/")) {
                    href = href.slice(0, href.length - 1);
                  }
                  let splitted = href.split("/");
                  let url = `https://api.github.com/repos/${splitted[splitted.length - 2]}/${
                    splitted[splitted.length - 1]
                  }`;
                  fetch(url + "/languages", {
                    headers: {
                      Authorization: "token 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",
                    },
                  })
                    .then((val) => val.json())
                    .then((data) => {
                      total = 0;
                      for (let lang in data) {
                        total += data[lang];
                      }
                      let langs = "";
                      for (let lang in data) {
                        langs += lang + ": " + ((data[lang] / total) * 100).toFixed(2) + "%\n";
                      }
                      link.title = stars[linksDone.indexOf(link.href)] + "\n\n" + langs;
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
              let url = `https://api.github.com/repos/${splitted[splitted.length - 2]}/${
                splitted[splitted.length - 1]
              }`;
              fetch(url, {
                headers: {
                  Authorization: "token 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",
                },
              })
                .then((val) => val.json())
                .then((data) => {
                  let starWord = "stars";
                  if (data.stargazers_count == 1) {
                    link.title = "1 star";
                    starWord = "star";
                  } else {
                    link.title = data.stargazers_count.toString() + " stars";
                  }
                  stars.push(data.stargazers_count.toString() + " " + starWord);
                  linksDone.push(href);
                  chrome.storage.sync.get("showLangs", (showLangs) => {
                    if (showLangs) {
                      fetch(url + "/languages", {
                        headers: {
                          Authorization: "token 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",
                        },
                      })
                        .then((val) => val.json())
                        .then((data) => {
                          total = 0;
                          for (let lang in data) {
                            total += data[lang];
                          }
                          let langs = "";
                          for (let lang in data) {
                            langs += lang + ": " + ((data[lang] / total) * 100).toFixed(2) + "%\n";
                          }
                          link.title += "\n\n" + langs;
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
}

let observer = new MutationObserver(() => main());
observer.observe(document, {
  childList: true,
  subtree: true,
});
