# Jira-GitHub Integration Extension

This browser extension allows you to integrate Jira and GitHub by providing a convenient way to navigate between Jira issues and their corresponding GitHub branches without directly linking Jira to GitHub.

## Features

- Adds a "Git Branch" button to Jira issue pages, making it easy to create a Git branch with the issue number as a template.
- Provides a "View on GitHub" button to quickly search GitHub for a pull request associated with a Jira issue.
- Supports both Jira Cloud and Jira Server/DC.

## Installation

1. Clone this repository to your local machine.

2. Install the extension in your browser:
   - **Google Chrome**:
     1. Open Chrome and go to `chrome://extensions/`.
     2. Enable "Developer mode" in the top right corner.
     3. Click on "Load unpacked" and select the folder containing the extension files.

   - **Mozilla Firefox**:
     1. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
     2. Click on "Load Temporary Add-on" and select the `manifest.json` file from the extension folder.

   - **Edge**:
     1. Open Edge and go to `edge://extensions/`.
     2. Click on "Developer mode" to toggle developer mode to on.
     3. Click the Load unpacked button and select the folder for this repo.


3. The extension should now be installed and ready to use.

## Usage

1. Open a Jira issue in your browser.

2. You will see a "Git Branch" button added to the issue page. Click this button to copy the Git branch name to your clipboard.

3. To search for corresponding pull requests on GitHub, click the "View on GitHub" button.

4. If you want to hide the menu, simply click anywhere else on the page.

## Customization

You can customize this to your liking by modifying the content.js file.

## Troubleshooting

- If you encounter any issues with the extension, please check the browser's developer console for error messages. Feel free to open an issue in this repository for assistance.
