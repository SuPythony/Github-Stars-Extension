<a href="https://www.producthunt.com/posts/github-stars-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-github&#0045;stars&#0045;2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=351360&theme=light" alt="Github&#0032;Stars - Find&#0032;out&#0032;the&#0032;stars&#0032;and&#0032;languages&#0032;of&#0032;a&#0032;repo&#0032;from&#0032;its&#0032;link | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

# Github Stars Extension

See the stars of a Github repository while hovering over its link without needing to navigate to it.

- <a href="#why">Why?</a>
- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#contributing">Contributing</a>


## Why?

Many a times when we are on the website of a library or framework, we want to see the number of stars earned by it on its github repository. To do this we usually click on the github link on their website, navigate to the tab, see the stars and navigate back to the website. But this is a long process and I somethimes wish that the stars were right alongside the github link. So this extension was created. While just hovering over a link, you can see the stars earned by the repository and there is no need to navigate to the link.

## Installation

You can directly install it from the Chrome Web Store [here](https://chrome.google.com/webstore/detail/github-stars/gppcomlihamjbakpnjafgmolpieofdmm) or install it manually by following the steps below.

### Step 1: Download the source code

#### Method 1:

![Download from Github](https://user-images.githubusercontent.com/67601246/150910674-61ad2887-44ce-4758-ad77-4570fdbe83d4.JPG)
1. Download the source code directly from Github
2. Extract the zip file to a folder

#### Method 2:

1. Clone this repository using this command - 
```
git clone https://github.com/SuPythony/Github-Stars-Extension
```
---
### Step 2: Load the extension in chrome

1. Goto `chrome://extensions` in chrome.

![Enable Developer Mode](https://user-images.githubusercontent.com/67601246/150910697-3f1215da-6806-4e99-a587-22fe0bb38810.png)

2. Enable Developer Mode

![Click on Load Unpacked](https://user-images.githubusercontent.com/67601246/150910727-5c46186a-7677-4d67-b146-56664c72b971.JPG)

3. Click on `Load Unpacked`
4. Browse for the folder with the code and upload it
5. The extension will be installed!

---

## Usage

You can goto any website and hover over any github repository link, and the extension will fetch the stars and show them in the tooltip. You can also click on the extension icon and then in the popup you can select whether to show the languages too. If selected, the extension will show the languages of the repository along with the stars.

If you get a rate limiting error you can provide an [access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) in the popup and that will be used for the requests. You don't need to provide any access scopes to the token. It is not collected and only stored locally.

---

## Contributing

If you find any errors, you can raise an issue [here](https://github.com/SuPythony/Github-Stars-Extension/issues). You can also raise new feature requests. You are welcome to make a pull request to solve any issue or add a new feature.
