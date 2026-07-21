# www.ejacquot.com

Personal website and blog for Etienne P. Jacquot — statically hosted on AWS S3 behind CloudFront via [www.ejacquot.com](https://www.ejacquot.com)

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (static export) |
| UI | React 19, Tailwind CSS v4 |
| Hosting | AWS S3 + CloudFront |
## Project Structure

```
app/
  app/          # Next.js app router pages
    art/        # Collage art portfolio page
    about/
    contact/
  components/   # Shared components (Header, ChatWidget, etc.)
  data/         # Static data (artPieces.ts, etc.)
  public/       # Static assets
deploy-static.sh  # Build & deploy to S3/CloudFront
```

## Dev

```bash
cd app && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Requires AWS CLI configured with the `atn-developer` profile and appropriate S3/CloudFront permissions.

```bash
./deploy-static.sh
```

This will:
1. Run `next build` to generate a static export into `app/out/`
2. Sync the output to the `s3://www.ejacquot.com` bucket
3. Re-upload JS/CSS with correct `Content-Type` headers
4. Invalidate the CloudFront cache (`/*`)

## Pages

- `/` — Home
- `/about` — About
- `/contact` — Contact
- `/art`

