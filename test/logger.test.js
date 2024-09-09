const logger = require("../logger.js");
const winston = require("winston");

jest.mock("winston", () => {
  const originalWinston = jest.requireActual("winston");
  return {
    ...originalWinston,
    createLogger: jest.fn().mockReturnValue({
      log: jest.fn(),
    }),
  };
});

describe("Logger Tests", () => {
  it("should log a debug message", () => {
    const message = "This is a debug message";
    logger.debug(message);
    expect(winston.createLogger().log).toHaveBeenCalledWith("debug", `🛠️  ${message}`, {});
  });

  it("should log an info message", () => {
    const message = "This is an info message";
    logger.info(message);
    expect(winston.createLogger().log).toHaveBeenCalledWith("info", `✔️  ${message}`, {});
  });

  it("should log an error message", () => {
    const message = "This is an error message";
    logger.error(message);
    expect(winston.createLogger().log).toHaveBeenCalledWith("error", `❌ ${message}`, {});
  });

  it("should log a load message", () => {
    const message = "This is a load message";
    logger.load(message);
    expect(winston.createLogger().log).toHaveBeenCalledWith("load", `⏳ ${message}`, {});
  });
});