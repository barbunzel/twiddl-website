# Twiddl website

The public website for Twiddl, a chromatic tuner for iPhone and Android.

Live at [twiddl.app](https://twiddl.app).

Twiddl is [available free on the App Store](https://apps.apple.com/app/twiddl-chromatic-tuner/id6800441300).
The Android version is currently available through Google Play closed testing.

## Pages

- `/` — product introduction
- `/privacy` — iPhone and Android app privacy policy
- `/support` — support contact and troubleshooting
- `/changelog` — released and in-testing version history

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm test
```

The site is built with vinext and deployed as a Cloudflare Worker. Product
images and the social card live in `public/`. Local Cloudflare state,
dependencies, build output, and environment files are excluded from the
repository; no deployment credentials are committed.

## Copyright

Copyright © 2026 Luis Diego Hernandez. All rights reserved.

The source is published for transparency. No permission is granted to copy,
modify, or redistribute it. The Twiddl name, icon, screenshots, and visual
identity are not licensed for reuse.
