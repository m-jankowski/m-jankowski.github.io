#!/usr/bin/env bash
set -euo pipefail

DIR="${1:-public/images}"
MAX_DIM=${MAX_DIM:-1600}
JPEG_QUALITY=${JPEG_QUALITY:-80}
JPEG_MIN_BYTES=${JPEG_MIN_BYTES:-500000}

if ! command -v sips >/dev/null 2>&1; then
  echo "Error: sips is required but not installed." >&2
  exit 1
fi

if [[ ! -d "$DIR" ]]; then
  echo "Error: directory '$DIR' does not exist." >&2
  exit 1
fi

if stat --version >/dev/null 2>&1; then
  size_cmd() { stat -c %s "$1"; }
else
  size_cmd() { stat -f%z "$1"; }
fi

to_kb() {
  awk -v bytes="$1" 'BEGIN { printf "%.1f", bytes/1024 }'
}

lowercase() {
  printf '%s' "$1" | tr '[:upper:]' '[:lower:]'
}

updated=0
skipped=0

declare -a summary

while IFS= read -r -d '' file; do
  ext="${file##*.}"
  ext_lower=$(lowercase "$ext")
  before_bytes=$(size_cmd "$file")

  read -r width height < <(sips -g pixelWidth -g pixelHeight "$file" | \
    awk -F': ' '/pixelWidth/ {w=$2} /pixelHeight/ {h=$2} END {gsub(/ /, "", w); gsub(/ /, "", h); printf "%s %s\n", w, h}')

  width=${width:-0}
  height=${height:-0}
  if [[ -z "$width" || -z "$height" ]]; then
    ((skipped++))
    continue
  fi

  max_dim_val=$(( width > height ? width : height ))
  changed=false

  if (( max_dim_val > MAX_DIM )); then
    sips --resampleHeightWidthMax "$MAX_DIM" "$file" >/dev/null
    changed=true
  fi

  if [[ "$ext_lower" =~ ^jpe?g$ ]] && (( before_bytes >= JPEG_MIN_BYTES )); then
    sips --setProperty formatOptions "$JPEG_QUALITY" "$file" >/dev/null
    changed=true
  fi

  after_bytes=$(size_cmd "$file")

  if $changed && (( after_bytes < before_bytes )); then
    saved=$(( before_bytes - after_bytes ))
    before_kb=$(to_kb "$before_bytes")
    after_kb=$(to_kb "$after_bytes")
    saved_kb=$(to_kb "$saved")
    summary+=("Optimized $file => ${before_kb}KB -> ${after_kb}KB (saved ${saved_kb}KB)")
    ((updated++))
  else
    ((skipped++))
  fi

done < <(find "$DIR" -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

printf 'Images optimized: %d\n' "$updated"
printf 'Images skipped:   %d\n' "$skipped"

if (( updated > 0 )); then
  printf '\nDetailed summary:\n'
  printf '%s\n' "${summary[@]}"
fi
