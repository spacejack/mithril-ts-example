# Mithril / Typescript Example Project

This is an example project using [Mithril](https://mithril.js.org/) and TypeScript.

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
