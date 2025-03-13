# Firefox Container Selector

https://addons.mozilla.org/en-US/firefox/addon/container-forcer/

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

### Automated Release (GitHub Actions)

1. Create a new version tag:
```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

2. The GitHub Action will automatically:
   - Build the extension
   - Create a GitHub release
   - Attach the built extension
   - (Optional) Submit to Firefox Add-ons store

### Manual Build

#### Prerequisites
- bash
- zip

#### Building

1. Make the build script executable:
```bash
chmod +x build.sh
```

2. Run the build script:
```bash
./build.sh
```

This will create a ZIP file at `build/firefox-force-container.zip` that you can submit to the Firefox Add-ons store.

## Submitting to Firefox Add-ons

### Manual Submission

1. Build the extension using either:
   - The build script (`./build.sh`)
   - GitHub Actions (by creating a new tag)
2. Go to [Firefox Add-ons Developer Hub](https://addons.mozilla.org/developers/)
3. Click "Submit a New Add-on"
4. Upload the generated ZIP file
5. Follow the submission process

### Automated Submission

To enable automated submission to Firefox Add-ons:

1. Get API credentials from [Firefox Add-ons Developer Hub](https://addons.mozilla.org/developers/addon/api/key/)
2. Add secrets to your GitHub repository:
   - `AMO_JWT_ISSUER`: Your API key
   - `AMO_JWT_SECRET`: Your API secret
3. Enable the "Upload to Firefox Add-ons" step in `.github/workflows/release.yml`

## Development

The extension consists of:
- `manifest.json`: Extension configuration
- `background.js`: Background script that handles container operations and tab management
- `select-container.html`: Container selection page
- `select-container.js`: Container selection logic
- `icons/`: Extension icons
- `build.sh`: Build script for packaging the extension
- `.github/workflows/`: GitHub Actions workflow files

## License

MIT License 