import winston, { transports } from 'winston';
const { combine } = winston.format;

const colorizer = winston.format.colorize();

const logger = winston.createLogger({
  level: 'debug',
  format: combine(
    winston.format.timestamp(),
    winston.format.simple(),
    winston.format.printf((msg) =>
      colorizer.colorize(
        msg.level,
        `${msg.timestamp} - [${msg.level}]: ${msg.message}`
      )
    )
  ),
  transports: [new transports.Console()]
});

if (process.env.NODE_ENV === 'production') {
  logger
    .add(new transports.File({ filename: 'error.log', level: 'error' }))
    .add(new transports.File({ filename: 'combined.log' }));
}

export default logger;
