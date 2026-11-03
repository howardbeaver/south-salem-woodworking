#!/bin/bash
# Make the small grid copies of every gallery photo.
#
# For each images/<category>/<name>-NN.jpg this writes
# images/<category>/thumbs/<name>-NN.jpg at 720px wide, which the gallery grid
# shows (still sharp on high-res screens at every grid size); the lightbox
# opens the full-size photo. Run it from the project folder whenever gallery
# photos are added or replaced:
#
#     bash tools/make-thumbs.sh
#
# Uses sips, which is built into macOS.

set -euo pipefail
cd "$(dirname "$0")/.."

made=0
for category in kitchens bathrooms interiors exteriors; do
  mkdir -p "images/$category/thumbs"
  for photo in images/"$category"/*-[0-9][0-9].jpg; do
    [ -e "$photo" ] || continue
    thumb="images/$category/thumbs/$(basename "$photo")"
    sips --resampleWidth 720 -s format jpeg -s formatOptions 55 "$photo" --out "$thumb" >/dev/null
    made=$((made + 1))
  done
done

echo "Made $made thumbnails."
