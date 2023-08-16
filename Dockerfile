FROM node:16.20.2-alpine

LABEL maintainer="Johan Book"
LABEL title="file-domain-server"
LABEL description="File server with support for multiple domains"

WORKDIR /app
COPY . .
RUN npm ci --production

USER node

CMD ["node", "src"]

EXPOSE 8080
