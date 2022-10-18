const fs = require("fs");
const http = require("http");
const mime = require("mime");
const path = require("path");

const DEFAULT_INDEX_FILE = process.env.DEFAULT_INDEX_FILE || "index.html";
const PORT = process.env.PORT || 8080;
const ROOT_FILE_PATH = process.env.ROOT_FILE_PATH || "build";

function getFile(filePath) {
  try {
    const file = fs.readFileSync(filePath);
    return file;
  } catch {
    console.error(`Could not find file "${filePath}"`);
    return;
  }
}

function getFileMime(filePath) {
  return mime.getType(filePath);
}

function getDomainFromRequest(req) {
  const headers = req.headers;
  const host = headers.host;
  const domain = host.split(":")[0];
  return domain;
}

function getFilePathFromRequest(req) {
  return req.url.split("?")[0];
}

function createFilePath(domain, filePath) {
  if (filePath === "/") {
    filePath = DEFAULT_INDEX_FILE;
  }
  return path.join(ROOT_FILE_PATH, domain, filePath);
}

function handleRequest(req, res) {
  const domain = getDomainFromRequest(req);
  const filePath = getFilePathFromRequest(req);
  console.debug("Requesting", domain, filePath);

  const actualFilePath = createFilePath(domain, filePath);
  const file = getFile(actualFilePath);
  if (!file) {
    res.writeHead(404);
    res.end();
    return;
  }

  const mimeType = getFileMime(actualFilePath);

  res.setHeader("Content-Type", mimeType);
  res.writeHead(200);
  res.end(file);
}

const server = http.createServer(handleRequest);
server.listen(PORT);

console.info(`Listening on port ${PORT}`)
