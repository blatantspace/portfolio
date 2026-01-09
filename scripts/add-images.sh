#!/bin/bash

# Script to easily add new images to the gallery
# Usage: ./scripts/add-images.sh /path/to/source/folder 2026-01-10

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: ./scripts/add-images.sh /path/to/source/folder date-folder-name"
  echo "Example: ./scripts/add-images.sh ~/Desktop/new-work 2026-01-10"
  exit 1
fi

SOURCE_FOLDER=$1
DATE_FOLDER=$2
TARGET_FOLDER="public/gallery/$DATE_FOLDER"

echo "📁 Creating gallery folder: $TARGET_FOLDER"
mkdir -p "$TARGET_FOLDER"

echo "📸 Copying images from $SOURCE_FOLDER"
cp "$SOURCE_FOLDER"/*.{png,PNG,jpg,JPG,jpeg,JPEG} "$TARGET_FOLDER/" 2>/dev/null

echo "✅ Images copied!"
echo ""
echo "📝 Next steps:"
echo "1. Update lib/images.ts with new image paths"
echo "2. Add images to the allImages array"
echo "3. Run: npm run dev to test"
echo "4. Deploy: git add . && git commit -m 'Add new images' && git push"
