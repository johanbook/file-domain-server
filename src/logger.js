const ACCESS_LOGS = process.env.ACCESS_LOGS || false;
const LOG_LEVEL = process.env.LOG_LEVEL || "info";

const LOG_LEVELS = {
  DEBUG: 1,
  INFO: 2,
  WARNING: 3,
  ERROR: 4,
};

const LEVEL = LOG_LEVELS[LOG_LEVEL.toUpperCase()];

exports.debug = function (message) {
  if (LEVEL <= LOG_LEVELS.DEBUG) {
    console.debug(`DEBUG: ${message}`);
  }
};

exports.info = function (message) {
  if (LEVEL <= LOG_LEVELS.INFO) {
    console.info(`INFO: ${message}`);
  }
};

exports.warn = function (message) {
  if (LEVEL <= LOG_LEVELS.WARNING) {
    console.warn(`WARNING: ${message}`);
  }
};

exports.error = function (message) {
  if (LEVEL <= LOG_LEVELS.ERROR) {
    console.error(`ERROR: ${message}`);
  }
};

exports.accessLog = function (req, res) {
  if (ACCESS_LOGS) {
    console.info(`${req.headers.host}${req.url} ${res.statusCode}`);
  }
};
