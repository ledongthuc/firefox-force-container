# Firefox Container Selector

A Firefox extension that forces container selection for new tabs. When you open a page in a non-containerized tab, it will prompt you to select a container to continue browsing in.

## Features

- Detects when you're browsing without a container
- Shows a user-friendly container selection interface
- Automatically reopens the current page in the selected container
- Displays container icons and colors for easy identification
- Doesn't interfere with already containerized tabs

## Development Setup

1. Clone this repository:
```bash
git clone https://github.com/ledongthuc/firefox-force-container.git
cd firefox-force-container
```

2. Install the extension temporarily in Firefox:
   - Open Firefox
   - Navigate to `about:debugging`
   - Click "This Firefox" in the left sidebar
   - Click "Load Temporary Add-on"
   - Select any file in the extension directory

## Building for Production

### Prerequisites
- bash
- zip

### Building

1. Make the build script executable:
```bash
chmod +x build.sh
```

2. Run the build script:
```bash
./build.sh
```

This will create a ZIP file at `build/firefox-force-container.zip` that you can submit to the Firefox Add-ons store.

### Manual Build

If you prefer to build manually, you can create a ZIP file containing:
- manifest.json
- background.js
- select-container.html
- select-container.js
- icons/

## Submitting to Firefox Add-ons

1. Build the extension using the build script
2. Go to [Firefox Add-ons Developer Hub](https://addons.mozilla.org/developers/)
3. Click "Submit a New Add-on"
4. Upload the generated ZIP file
5. Follow the submission process

## Development

The extension consists of:
- `manifest.json`: Extension configuration
- `background.js`: Background script that handles container operations and tab management
- `select-container.html`: Container selection page
- `select-container.js`: Container selection logic
- `icons/`: Extension icons
- `build.sh`: Build script for packaging the extension

## License

MIT License 