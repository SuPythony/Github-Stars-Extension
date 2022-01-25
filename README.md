# Github Stars Extension

See the stars of a Github repository while hovering over its link without needing to navigate to it.

## Why

Many a times when we are on the website of a library or framework, we want to see the number of stars earned by it on its github repository. To do this we usually click on the github link on their website, navigate to the tab, see the stars and navigate back to the website. But this is a long process and I somethimes wish that the stars were right alongside the github link. So this extension was created. While just hovering over a link, you can see the stars earned by the repository and there is no need to navigate to the link.

## Installation

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

If you get a rate limiting error you can provide an [access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) in the popup and that will be used for the requests. It is not collected and only stored locally.

---

## Contributing

This extension is new and may have some errors. If you find any you can raise an issue [here](https://github.com/SuPythony/Github-Stars-Extension/issues). You can also raise new feature requests. You are welcome to make a pull request to solve any issue or add a new feature.
