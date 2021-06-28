"use strict";

const chalk = require(`chalk`);
const {DEFAULT_COUNT, EXIT_CODE} = require(`../constants`);
const {writeIntoFile, generateOffers} = require(`./utils`);

const run = async (count = DEFAULT_COUNT) => {
  try {
    const countOffer = Number.parseInt(count, 10);
    const content = generateOffers(countOffer);
    await writeIntoFile(content);

    console.info(chalk.green(`[${JSON.stringify(content[0], null, 2)}]`));
    process.exit(EXIT_CODE.success);
  } catch (error) {
    process.exit(EXIT_CODE.failure);
  }
};

module.exports = {
  name: `--generate`,
  run,
};
