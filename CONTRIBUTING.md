# Contributing

## Technological stack

The project uses the Nodejs runtime environment but aims to use minimal
dependencies in order to create small bundle sizes.

## Git methodology

This project uses `main` as development branch. New features are committed
through feature branches and merged into main through pull requests.

## Release management

This project uses [semver](https://semver.org/), handled by the NPM package
[standard-version](https://www.npmjs.com/package/standard-version). For creating
a new release, run the following commands:

```sh
npm run release
git push --follow-tags origin main
```
