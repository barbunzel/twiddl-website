# Twiddl website repository guidance

This is the public website for the Twiddl iOS and Android tuner apps.

## Working rules

- Keep the site small, factual, and focused on the tuner. Do not add funnels,
  exaggerated marketing, accounts, analytics, tracking, or unrelated features.
- Privacy and support copy must stay consistent with both apps: audio is
  processed on device and is not recorded, saved, uploaded, or transmitted.
- Preserve the established routes: `/`, `/privacy`, `/support`, and `/changelog`.
- The source is visible for transparency but remains all rights reserved.
- Run `npm test` and `npm run lint` before handing off changes.
- Do not commit, push, or deploy unless explicitly requested. A Git push does
  not deploy `twiddl.app`.
- Never commit credentials, environment files, local Wrangler state, or private
  support information.
