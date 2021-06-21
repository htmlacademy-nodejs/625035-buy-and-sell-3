"use strict";

const {Cli} = require(`./cli`);
const {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  EXIT_CODE,
  MAX_ITEMS,
} = require(`./constants`);

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [userCommand, userCount] = userArguments;

if (userArguments.length === 0 || !Cli[userCommand]) {
  Cli[DEFAULT_COMMAND].run();
  process.exit(EXIT_CODE.failure);
}

if (userCommand === `--generate` && userCount > MAX_ITEMS) {
  console.error(`Не больше 1000 объявлений`);
  process.exit(EXIT_CODE.failure);
}

Cli[userCommand].run(userCount);
