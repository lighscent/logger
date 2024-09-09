const path = require("path");
const winston = require("winston");
require("winston-daily-rotate-file");

const timestampFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD_HH:mm:ss" }),
  winston.format.json()
);

const createDailyRotateFileTransport = (level) => new winston.transports.DailyRotateFile({
  filename: path.join(__dirname, `./logs/%DATE%.log`),
  datePattern: "YYYY-MM-DD",
  level: level,
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
});

const levels = { error: 1, debug: 1, info: 2, load: 2 };
const colors = { error: "red", debug: "yellow", info: "green", load: "blue" };
const emoji = { error: "❌", debug: "🛠️", info: "✔️ ", load: "⏳" };

const addEmojiToMessage = (level, message) => `${emoji[level]} ${message}`;

const createLogger = (level) => {
  const logger = winston.createLogger({
    format: timestampFormat,
    level: level,
    levels: levels,
    transports: [
      createDailyRotateFileTransport(level),
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize({ colors: colors }),
          winston.format.simple()
        ),
      }),
    ],
  });

  return (message, data = {}) => logger.log(level, addEmojiToMessage(level, message), data);
};

module.exports = {
  error: createLogger("error"),
  debug: createLogger("debug"),
  info: createLogger("info"),
  load: createLogger("load"),
};
