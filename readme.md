# Mithril / Typescript Example Project

This is a very barebones example project using [Mithril](https://mithril.js.org/) and TypeScript.

This project uses [browserify](https://github.com/browserify/browserify) and [tsify](https://github.com/TypeStrong/tsify) to compile the app source files and 3rd party npm modules into a single app bundle. It uses the http-server module to serve the `public` directory on a local server.

## Installation:

    npm install

## Serve this project locally and recompile .ts sources on save:

    npm start

Then go to http://localhost:3000 in your browser. This will serve the files in the `public` directory, defaulting to the `index.html` file.

The file `public/js/app.js` is rebuilt whenever the ts sources are recompiled.

While this npm script is running, edits made to src/*.ts files will be recompiled automatically so you can simply refresh your browser to see the updated app.

## Build a minified bundle

    npm run build

Will output a minified `app.js` file in `public/js`

---

For a more complete project setup with PostCSS compilation and hot reloading, take a look at [this repo](https://github.com/spacejack/mithril-browserify-ts-budo).
