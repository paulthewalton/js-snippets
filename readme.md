# JS Utils

> Simple, easy to understand (hopefully!) Vanilla JS utils. Written in ES6 syntax but API compatible down to IE 10.

---

## Guidelines

These utility & helper functions should:

- be small and relatively simple, hopefully easy to understand and read through
- not have any dependancies, although may be tailored for use with certain frameworks or applications
- be API compatible with a wide array of browsers (see browserlist in `package.json`)

## API & Features

See generated [documentation](docs), annotated [source code](src), or [test specs](tests).

## Scripts & Dev

- linting with ESLint (`npm run lint`, or `npm run dev` to start watcher).
- testing with Jest (`npm run test`). Lint tests with `gulp listTests`.
- documentation with jsdoc (`npm run docs`).

[Gulp tasks documention](docs/gulpfile.babel.js.md)

[NPM scripts](package.json#scripts)
