#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Building Firefox Container Selector Extension...${NC}"

# Create build directory if it doesn't exist
mkdir -p build

# Remove old build if exists
rm -f build/firefox-force-container.zip

# Create ZIP file with all necessary files
zip -r build/firefox-force-container.zip \
    manifest.json \
    background.js \
    select-container.html \
    select-container.js \
    icons/* \
    -x "*.DS_Store" \
    -x "*.git*" \
    -x "build/*"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}Build successful!${NC}"
    echo "Extension package created at: build/firefox-force-container.zip"
    echo "You can now submit this file to Firefox Add-ons:"
    echo "https://addons.mozilla.org/developers/addon/submit/distribution"
else
    echo -e "${RED}Build failed!${NC}"
    exit 1
fi 