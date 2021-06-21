"use strict";

const {DEFAULT_COUNT, EXIT_CODE} = require(`../constants`);
const {writeIntoFile, generateOffers} = require(`./utils`);

const run = (count = DEFAULT_COUNT) => {
  const countOffer = Number.parseInt(count, 10);
  const content = generateOffers(countOffer);

  writeIntoFile(content, () => {
    console.info(`[${JSON.stringify(content[0], null, 2)}]`);
    process.exit(EXIT_CODE.success);
  });
};

module.exports = {
  name: `--generate`,
  run,
};
