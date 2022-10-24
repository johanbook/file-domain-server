# Contributing

This outlines all practices for contributing to this project.

## Technologies

The project uses the Nodejs runtime environment but aims to use minimal
dependencies in order to create small bundle sizes.

The software is shipped in Docker images.

## Security

The software is intended to be run on
[Nodejs 16.18.0 LTS](https://nodejs.org/en/). The software relies on the
[Nodejs HTTP module](https://nodejs.org/api/http.html) and will be vulnerable to
any vulnerabilities in that module.

All released versions have 0 vulnerabilities in NPM audits. This check is
carried out as part of the release process. The repository is also scanned
weekly with [Snyk](snyk.io) for vulnerabilities.

The software has been tested for
[LFI](https://www.johanbook.com/docs/security/vulnerabilities/lfi)
vulnerabilities.

## Testing

### Performance testing

We use [Artillery](https://www.npmjs.com/package/artillery) for performance
testing. To generate a performance report, run

```sh
mkdir .artillery
npm run test::performance
<browser> .artillery/report.json.html
```

## Development practices

### Git methodology

This project uses
[main as development branch](https://unixsheikh.com/tutorials/a-simple-git-workflow-using-main-as-the-development-branch.html)
to allow bleeding edge on main. New features are committed through feature
branches and merged into main through pull requests.

### Release management

This project uses [semver](https://semver.org/), handled by the NPM package
[standard-version](https://www.npmjs.com/package/standard-version). For creating
a new release, run the following commands:

```sh
npm run release
git push --follow-tags origin main
```

Before creating a new release, confirm that there are no known vulnerabilities
in the project dependencies by running

```sh
npm audit
```
