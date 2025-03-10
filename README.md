# Soci

TBD: Social app using a prerendered sveltekit output running in Apache cordova.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

Browser only:

```bash
bun dev

# or start the server and open the app in a new browser tab
bun dev -- --open
```

Full Cordova build/run:

```bash
# build svelte app, copy to cordova, build cordova and run cordova.
bun run full
```

## Building

To create a production version of your app:

TODO: Figure out prod builds
