FROM node:16.17.1-alpine

LABEL maintainer="Johan Book"
LABEL title="domain-file-server"
LABEL description="File server with support for multiple domains"

WORKDIR /app
COPY . .
RUN npm ci

USER node

CMD ["node", "src"]

EXPOSE 8080
