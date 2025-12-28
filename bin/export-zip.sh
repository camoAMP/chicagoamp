#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT="${1:-${ROOT_DIR}/chicago-amp-export.zip}"

cd "$ROOT_DIR"

zip -r "$OUTPUT" . \
  -x "node_modules/*" \
  -x ".git/*" \
  -x "backend/target/*" \
  -x "downloaded_media/*" \
  -x "downloaded_media_improved/*" \
  -x "*.zip"

printf "Created %s\n" "$OUTPUT"
