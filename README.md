# worker-loader-issue

## Steps to reproduce

1. `npm install`
2. `npm run serve`
3. Check output in developer console - shows `pong` from web worker
4. Stop development server
5. Change Message in `src/example_worker.js` to something other than `pong`
6. `npm run serve`
7. Output in developer console still shows `pong`, and not the new message

Essentially the js delivered to the client is the one webpack processed in step 2.

## Inspect Webpack Config

`vue inspect`

## Project Setup

Created via Vue Cli 3, with router, vuex, babel, mocha, scss. (`vue create`)