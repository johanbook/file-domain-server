# file-domain-server

_This software has not been tested in regards of security and should not be used
in a production environment_

**file-server-domain** is a simplistic Nodejs file server supporting multiple
domains. It is mainly intended to run an internal network with its own DNS
server.

## Configuration

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

## Docker

The server can be run through Docker

```sh
docker run \
	--detach \
	--publish 8080:8080 \
	--restart unless-stopped \
	--volume ${PWD}/build/:/app/build/ \
	johanbook/file-domain-server:latest
```
