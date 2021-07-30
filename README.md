# Astro Snowpack Mime Issue

## Reproduction

```sh
npm install
npm start
```

- Visit `http://localhost:3000/_astro/src/components/Hello.module.html.js`.
- Content is not served as `application/javscript` but is instead `text/html`.

## Fix

```sh
npm run patch
npm start
```

- Visit `http://localhost:3000/_astro/src/components/Hello.module.html.js`.
- Content is served as `application/javscript`.
