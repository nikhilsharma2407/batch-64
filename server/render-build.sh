#!/bin/bash
set -e   # Exit immediately if any command fails

# Build client
echo "Building client..."
cd ../client
npm install
npm run build

# Move client build into server
echo "Preparing server build..."
rm -rf ../server/dist
mv dist ../server/

# Build server
cd ../server
echo "Installing server dependencies..."
npm install

# Optional: touch a file to force Render rebuild detection if needed
# touch ./trigger.txt

echo "Build complete."
