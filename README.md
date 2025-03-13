# Firefox Container Selector

A Firefox extension that forces container selection for new tabs. When you open a page in a non-containerized tab, it will prompt you to select a container to continue browsing in.

## Installation

1. Open Firefox and navigate to `about:debugging`
2. Click on "This Firefox" in the left sidebar
3. Click on "Load Temporary Add-on"
4. Navigate to this extension's directory and select the `manifest.json` file

## Features

- Detects when you're browsing without a container
- Shows a user-friendly container selection interface
- Automatically reopens the current page in the selected container
- Displays container icons and colors for easy identification
- Doesn't interfere with already containerized tabs

## Usage

1. Install the extension
2. Browse to any website in a non-containerized tab
3. The extension will show a container selection overlay
4. Click on your desired container
5. The page will automatically reload in the selected container

## Development

The extension consists of:
- `manifest.json`: Extension configuration
- `background.js`: Background script that handles container operations and tab management
- `content.js`: Content script that creates and manages the container selection UI
- `content.css`: Styles for the container selection interface 