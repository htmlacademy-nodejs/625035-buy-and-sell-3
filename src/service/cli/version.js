"use strict";
const chalk = require(`chalk`);
const {version} = require(`../../../package.json`);

const run = () => {
  console.info(chalk.blue(version));
};

module.exports = {
  name: `--version`,
  run,
};
