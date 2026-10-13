# Luvhere website

Marketing site for the Luvhere app (`../kive`): home, safety & community guidelines, support,
privacy policy, terms and the account-deletion page the stores require.

Nuxt 4 + Tailwind, statically generated. Colours, radii and type mirror the app's theme
(`kive/src/theme`); the phone screens are HTML mockups, not screenshots, so they never show
real member data.

## Run

Needs Node 22 (`nvm use`); Nuxt 4.4 does not build on Node 20.

```sh
npm install
npm run dev        # http://localhost:3000
npm run generate   # static site in .output/public
```

## Configure

Copy `.env.example` to `.env`. Store links stay "Coming soon" until
`NUXT_PUBLIC_APP_STORE_URL` / `NUXT_PUBLIC_PLAY_STORE_URL` are set. Copy (nav, legal links,
FAQ) lives in `app/config/site.ts`.

Before launch: have the Privacy Policy and Terms reviewed by a lawyer, and fill in the
company name and grievance officer details.
