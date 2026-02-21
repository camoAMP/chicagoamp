#!/bin/bash

# Cloudflare Pages deployment script
echo "Starting Cloudflare Pages deployment..."

# Exit immediately if a command exits with a non-zero status
set -e

# Ensure we're in the right directory
cd "${1:-.}"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  pnpm install
fi

# Build the Next.js application
echo "Building Next.js application..."
pnpm run build

# Verify that the export directory exists after build
if [ ! -d ".next" ]; then
  echo "Error: '.next' directory not found after build"
  exit 1
fi

# Check if the export directory exists
if [ ! -d ".next/export" ]; then
  echo "Info: '.next/export' directory not found, checking if static export is configured"
  
  # Check if we have the standard .next output
  if [ -d ".next/server" ] && [ -d ".next/static" ]; then
    echo "Standard Next.js build detected, using wrangler pages functions deploy"
    npx wrangler pages deploy .next --project-name=chicagoamp
  else
    echo "Error: Expected '.next/export' directory not found and no standard build detected"
    ls -la .next || echo ".next directory is empty or does not exist"
    exit 1
  fi
else
  echo "Static export detected, deploying from .next/export"
  # Deploy using wrangler pages deploy command
  echo "Deploying with wrangler pages deploy..."
  npx wrangler pages deploy .next/export --project-name=chicagoamp
fi

echo "Deployment finished successfully!"