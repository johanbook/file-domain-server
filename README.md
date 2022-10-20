# file-domain-server

**file-domain-server** is a simplistic Nodejs HTTP file server that serves
different folders depending on the HTTP `Host` header. It is mainly intended to
run on an internal network with its own DNS server.

## Get started

The server can be run either via a Nodejs runtime or through Docker.

### Folder structure

Create an asset folder, named `build` by default. In this folder create one
folder for each domain that should be served. These folders should contain the
files served on the respective domains. For example:

```sh
build
build/localhost
build/localhost/favicon.ico
build/localhost/index.html
build/mybusiness.com
build/mybusiness.com/favicon.ico
build/mybusiness.com/index.html
build/mybusiness.com/script.js
build/mybusiness.com/styles.css
build/mycat.com
build/mycat.com/favicon.ico
build/mycat.com/index.html
build/mycat.com/script.js
```

### Using Docker

The server can be run through Docker by mounting in the served directory as a
volume. To the serve the `build` folder in the current directory, run

```sh
docker run \
	--detach \
	--publish 8080:8080 \
	--restart unless-stopped \
	--volume ${PWD}/build/:/app/build/ \
	johanbook/file-domain-server:latest
```

The Docker images are available for multiple architectures, including armv7.

## Configuration

The following can be configured as environment variables:

- **ACCESS_LOGS** if access logs are showed (default `false`).
- **DEFAULT_INDEX_FILE** name of file served on paths ending with a trailing
  slash (default `index.html`).
- **FALLBACK_FILE** name of file served as a fallback if requested file is not
  found. Set to `index.html` to enable client-side routing or to e.g.
  `error.html` to display an error page (note that response still returns a 200
  status code). It is undefined by default and no fallback file will be served.
- **LOG_LEVEL** used log level. Available values are `debug`, `info`, `warning`
  and `error` (default `info`).
- **PORT** the port the server should listen on (default 8080).
- **ROOT_FILE_PATH** root directory of served file tree (default `build`).

## Documentation

For documentation on technologies, security aspect and similar, see the
[contributions file](./CONTRIBUTING.md).

## Contributing

For contributions and development procedures, see the
[contributions file](./CONTRIBUTING.md).
