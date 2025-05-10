import winston from "winston";

import { EnvironmentType } from "@/libs/environments/types";

const { combine, timestamp, printf, colorize } = winston.format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const productionLogger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), logFormat),
  // transports: [
  //   new winston.transports.File({ filename: "logs/error.log", level: "error" }),
  //   new winston.transports.File({ filename: "logs/combined.log" }),
  // ],
  transports: [new winston.transports.Console()],
});

const developmentLogger = winston.createLogger({
  level: "debug",
  format: combine(colorize(), timestamp(), logFormat),
  transports: [new winston.transports.Console()],
});

const logger =
  process.env.NEXT_PUBLIC_ENVIRONMENT === EnvironmentType.PRODUCTION
    ? productionLogger
    : developmentLogger;

export type AppLogger = winston.Logger;

export default logger;
