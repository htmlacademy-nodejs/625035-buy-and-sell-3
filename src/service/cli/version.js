"use strict";

const {version} = require(`../../../package.json`);

const run = () => {
  console.info(version);
};

module.exports = {
  name: `--version`,
  run,
};
