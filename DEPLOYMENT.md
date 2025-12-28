# Chicago AMP Deployment Guide

## Frontend (Vercel)

1. Set environment variables in Vercel:
   - `NEXT_PUBLIC_API_BASE_URL` (ex: `https://your-backend.up.railway.app`)
   - `NEXTAUTH_URL` (ex: `https://your-frontend.vercel.app`)
   - `NEXTAUTH_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - `NEXT_PUBLIC_HERO_VIMEO_ID` (optional background video)
2. Deploy the Next.js app from the repo root.

## Backend (Railway)

1. Create a new Railway project using the `backend` directory.
2. Add a PostgreSQL plugin and set env vars:
   - `DATABASE_URL` (Railway provides this)
   - `DATABASE_USERNAME`
   - `DATABASE_PASSWORD`
   - `IMAGE_STORAGE_PATH` (ex: `/data/images`)
   - `VIMEO_ACCESS_TOKEN`
   - `CHICAGO_AMP_ALLOWED_ORIGINS` (ex: `https://your-frontend.vercel.app`)
3. Deploy with Nixpacks (uses `backend/railway.toml`).
4. Migrations run automatically on boot (Flyway).

## Backend (Heroku)

1. Create a Heroku app in `backend`.
2. Add Heroku Postgres and configure env vars (same as Railway).
3. Deploy:
   - `mvn -f backend/pom.xml package`
   - `git subtree push --prefix backend heroku main`
4. The `Procfile` uses the packaged jar from `target/`.

## Local Development

Frontend:
```
pnpm install
pnpm dev
```

Backend:
```
cd backend
mvn spring-boot:run
```

Image Dedupe API:
- `POST /api/images/dedupe` with `multipart/form-data` `file` field.
- `POST /api/images/grab-vimeo-thumbs/{videoId}` to import Vimeo thumbnails.

## Zip Export

To export a zip archive:
```
./bin/export-zip.sh
```
